import { useState } from 'react';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';
import { quickQuestionsEN, quickQuestionsTL } from './chatResponses';
import { announcementsData } from '../../data/announcementsData';
import { brochuresData } from '../../data/brochuresData';
import { eventsData } from '../../data/eventsData';
import { factSheetsData } from '../../data/factSheetsData';
import { memorandumsData } from '../../data/memorandumsData';
import { postersData } from '../../data/postersData';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

type Language = 'en' | 'tl';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

// Build context string from data files
const buildSiteContext = () => {
  // --- ANNOUNCEMENTS ---
  const announcements = announcementsData
    .map(a => `- ${a.title} (${a.description})`)
    .join('\n');

  // --- BROCHURES ---
  const brochures = brochuresData
    .map(b => {
      if (b.files) {
        const langs = b.files.map(f => f.label).join(' & ');
        return `- ${b.title} (Available in: ${langs})`;
      }
      return `- ${b.title}`;
    })
    .join('\n');

  // --- ACTIVE EVENTS (only active ones) ---
  const activeEvents = eventsData.filter(e => e.active);
  const events =
    activeEvents.length > 0
      ? activeEvents
          .map(e =>
            [
              `- ${e.title}`,
              `  Date: ${e.date}`,
              `  Location: ${e.location}`,
              `  Description: ${e.description}`,
              e.registrationFee ? `  Fee: ${e.registrationFee}` : '',
              `  Contact: ${e.contact.emails.join(', ')}`,
            ]
              .filter(Boolean)
              .join('\n')
          )
          .join('\n')
      : 'No active events at this time.';

  // --- FACT SHEETS (category names only — avoid overwhelming the prompt) ---
  const factSheets = factSheetsData
    .map(cat => {
      const allTitles = [
        ...cat.categories.doctors,
        ...cat.categories.parentsEnglish,
        ...cat.categories.parentsFilipino,
      ]
        .map(i => i.title)
        .filter((v, i, a) => a.indexOf(v) === i) // dedupe
        .join(', ');
      return `- ${cat.name}: ${allTitles}`;
    })
    .join('\n');

  // --- MEMORANDUMS (recent 2024–2026 only) ---
  const recentMemos = memorandumsData
    .filter(m => m.year >= 2024)
    .map(m => `- [${m.memoId}] ${m.title} (${m.year})`)
    .join('\n');

  // --- POSTERS ---
  const posters = postersData.map(p => `- ${p.title}`).join('\n');

  return { announcements, brochures, events, factSheets, recentMemos, posters };
};

const getSystemPrompt = (lang: Language) => {
  const languageInstruction =
    lang === 'tl'
      ? 'Always respond in Filipino/Tagalog.'
      : 'Always respond in English.';

  const { announcements, brochures, events, factSheets, recentMemos, posters } =
    buildSiteContext();

  return `You are the official AI assistant of the Newborn Screening Center Southern Luzon (NSCSL), Philippines.

${languageInstruction}

YOUR ROLE:
- Answer questions about newborn screening services offered by NSCSL.
- Be warm, accurate, and concise.
- If a question is NOT related to newborn screening or NSCSL, politely redirect.
- When asked about documents, brochures, or fact sheets, mention the title and tell the user to visit the website to download them.

NSCSL CONTACT & INFO:
- Full name: Newborn Screening Center Southern Luzon (NSCSL)
- Website: https://nscsl.com.ph
- Email: admin@nscsl.com.ph
- Address: 3rd Floor DMMC-IHS Building, #143 Narra Street, Mountview Subd. Tanauan City, Batangas, 4232, Philippines
- Program emails: pdo1@nscsl.com.ph, pdo2@nscsl.com.ph, pdo3@nscsl.com.ph, programmngr@nscsl.com.ph
- NSCSL is a DOH-accredited Newborn Screening Center under the NSRC.

WHAT IS NEWBORN SCREENING:
- A public health program detecting serious but treatable conditions in newborns.
- Blood is collected via heel prick, ideally 24–72 hours after birth.
- Sample collected on a Newborn Screening Card (filter paper).
- Results available within 7–14 days.

FEES:
- Basic NBS Panel: Php 550
- Expanded NBS Panel: Php 1,750 (recommended — covers more disorders)
- RA 9288 mandates all newborns be screened.

CONDITIONS SCREENED (Expanded NBS):
Congenital Hypothyroidism (CH), Congenital Adrenal Hyperplasia (CAH), Phenylketonuria (PKU), Galactosemia (GAL), G6PD Deficiency, Maple Syrup Urine Disease (MSUD), Homocystinuria (HCY), Biotinidase Deficiency (BIOT), MCAD Deficiency, Alpha Thalassemia, and more.

WHAT HAPPENS AFTER A POSITIVE RESULT:
- A positive result means further confirmatory testing is needed — not that the baby is definitely sick.
- Parents are contacted for follow-up.
- Early treatment prevents intellectual disability, organ damage, or death.

CURRENT ANNOUNCEMENTS:
${announcements}

UPCOMING / ACTIVE EVENTS:
${events}

AVAILABLE BROCHURES (downloadable on the website):
${brochures}

AVAILABLE POSTERS (downloadable on the website):
${posters}

FACT SHEETS AVAILABLE (by disorder category):
${factSheets}

RECENT MEMORANDUMS (2024–2026):
${recentMemos}

IMPORTANT RULES:
- Do NOT invent fees, contacts, or details not listed above.
- Do NOT provide medical diagnoses or treatment advice.
- For document downloads, direct users to https://nscsl.com.ph
- If unsure, say: "For the most accurate information, please contact NSCSL at admin@nscsl.com.ph."
- Keep answers short and clear. Use bullet points for lists.`;
};

const getGreeting = (lang: Language) =>
  lang === 'tl'
    ? 'Kamusta! Ako ang inyong NSCSL Assistant. Maaari kayong magtanong tungkol sa Newborn Screening, mga kaganapan, brochure, at iba pang serbisyo ng NSCSL. Paano ko kayo matutulungan ngayon?'
    : "Hello! I'm your NSCSL Assistant. I can help you with Newborn Screening info, upcoming events, brochures, fact sheets, and more. How can I assist you today?";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setMessages([
      { id: 1, text: getGreeting(lang), sender: 'bot', timestamp: new Date() },
    ]);
    setInputMessage('');
  };

  const handleToggleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
      setLanguage(null);
      setMessages([]);
      setInputMessage('');
    } else {
      setIsOpen(true);
    }
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '' || !language) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: getSystemPrompt(language) },
            ...updatedMessages.map((msg) => ({
              role: msg.sender === 'user' ? 'user' : 'assistant',
              content: msg.text,
            })),
          ],
          max_tokens: 500,
          temperature: 0.3,
        }),
      });

      const data = await response.json();
      const aiText =
        data.choices?.[0]?.message?.content ||
        (language === 'tl'
          ? 'Paumanhin, hindi ko maproseso ang inyong mensahe. Pakisubukan muli.'
          : "Sorry, I couldn't process that. Please try again.");

      setMessages((prev) => [
        ...prev,
        {
          id: updatedMessages.length + 1,
          text: aiText,
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: updatedMessages.length + 1,
          text:
            language === 'tl'
              ? 'May problema sa koneksyon. Mangyaring makipag-ugnayan sa admin@nscsl.com.ph.'
              : "I'm having trouble connecting. Please contact us at admin@nscsl.com.ph.",
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  const quickQuestions = language === 'tl' ? quickQuestionsTL : quickQuestionsEN;

  return (
    <>
      <ChatButton isOpen={isOpen} onClick={handleToggleOpen} />
      {isOpen && (
        <ChatWindow
          messages={messages}
          inputMessage={inputMessage}
          isTyping={isTyping}
          quickQuestions={quickQuestions}
          language={language}
          onLanguageChange={handleLanguageChange}
          onInputChange={setInputMessage}
          onSendMessage={handleSendMessage}
          onQuickQuestion={handleQuickQuestion}
        />
      )}
    </>
  );
}