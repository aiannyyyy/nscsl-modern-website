import { useState } from 'react';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';
import { quickQuestions } from './chatResponses';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm here to help you with information about Newborn Screening. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
  if (inputMessage.trim() === '') return;

  const userMessage: Message = {
    id: messages.length + 1,
    text: inputMessage,
    sender: 'user',
    timestamp: new Date()
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
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: 'You are a helpful assistant for Newborn Screening Center Southern Luzon (NSCSL). Answer questions about newborn screening in the Philippines. Be warm and concise. If unrelated to newborn screening, politely redirect.' },
          ...updatedMessages.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text
          }))
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    });

    const data = await response.json();
    const aiText = data.choices?.[0]?.message?.content || "Sorry, I couldn't process that. Please try again.";

    setMessages(prev => [...prev, {
      id: updatedMessages.length + 1,
      text: aiText,
      sender: 'bot',
      timestamp: new Date()
    }]);
  } catch (error) {
    setMessages(prev => [...prev, {
      id: updatedMessages.length + 1,
      text: "I'm having trouble connecting. Please contact us at admin@nscsl.com.ph.",
      sender: 'bot',
      timestamp: new Date()
    }]);
  } finally {
    setIsTyping(false);
  }
};

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <>
      <ChatButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <ChatWindow
          messages={messages}
          inputMessage={inputMessage}
          isTyping={isTyping}
          quickQuestions={quickQuestions}
          onInputChange={setInputMessage}
          onSendMessage={handleSendMessage}
          onQuickQuestion={handleQuickQuestion}
        />
      )}
    </>
  );
}