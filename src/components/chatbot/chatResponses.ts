export const getBotResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();

  // Greetings
  if (message.match(/\b(hello|hi|hey|good morning|good afternoon|good evening)\b/)) {
    return "Hello! Welcome to Newborn Screening Center Southern Luzon. I'm here to help answer your questions about newborn screening. What would you like to know?";
  }

  // What is newborn screening
  if (message.match(/what is|what's|tell me about|explain/) && message.includes('newborn screening')) {
    return "Newborn Screening is a public health program that ensures all babies born in the Philippines undergo screening for early identification of disorders (inborn errors of metabolism) that can lead to mental retardation and death if left untreated. Early detection allows for timely intervention and treatment.";
  }

  // When to screen
  if (message.match(/when|what age|how old|timing/) && message.match(/screen|test/)) {
    return "Newborn screening should be done 24-48 hours after birth, but no later than 7 days. Early screening is crucial for detecting metabolic disorders that may not show symptoms immediately after birth.";
  }

  // What disorders
  if (message.match(/what|which/) && message.match(/disorder|disease|condition|detect/)) {
    return "The Newborn Screening Program in the Philippines tests for several disorders including:\n\n• Congenital Hypothyroidism (CH)\n• Congenital Adrenal Hyperplasia (CAH)\n• Galactosemia (GAL)\n• Phenylketonuria (PKU)\n• Glucose-6-Phosphate Dehydrogenase Deficiency (G6PD)\n• Maple Syrup Urine Disease (MSUD)\n\nEarly detection helps prevent serious health problems.";
  }

  // How to get results
  if (message.match(/result|report|how long|when will/)) {
    return "Results are typically available within 7-14 working days. You can:\n\n1. Check online through our portal\n2. Contact our Follow-up team at:\n   📱 0908-392-1298\n   📱 0931-202-7188\n   ✉️ followup1@nscsl.com.ph\n\nIf there are elevated results, our team will contact you directly.";
  }

  // Cost/Price
  if (message.match(/cost|price|fee|how much|payment/)) {
    return "The newborn screening test has a minimal fee. For specific pricing and payment options, please contact our Program Development Office:\n\n📱 0923-908-3301 (SUN)\n📱 0915-543-2390 (GLOBE)\n✉️ pdo1@nscsl.com.ph";
  }

  // Operating hours
  if (message.match(/hour|time|open|schedule|when are you/)) {
    return "Our operating hours are:\n\n📅 Monday - Friday\n🕐 8:00 AM - 5:00 PM\n\nWe are closed on weekends and holidays.";
  }

  // Location/Address
  if (message.match(/where|location|address|find you/)) {
    return "We have two locations:\n\n📍 Main Office:\n3rd Floor DMMC-IHS Building, #143 Narra Street, Mountview Subd., Tanauan City, Batangas\n\n📍 Lopez Extension Office:\n2nd Floor, Arago Building, Brgy. Danlagan, Lopez, Quezon\n\nWould you like directions to either location?";
  }

  // Contact information
  if (message.match(/contact|phone|email|reach|call/)) {
    return "You can reach us through:\n\n📞 Main Office:\n• PLDT: (043) 341-6032\n• GLOBE: 0915-543-2390\n• SUN: 0923-908-3301\n\n📧 Email: admin@nscsl.com.ph\n\n📱 Lopez Office:\n• GLOBE: 0966-863-1343\n• SMART: 0968-596-0803";
  }

  // Unsatisfactory/Repeat sample
  if (message.match(/unsatisfactory|repeat|redo|another sample|new sample/)) {
    return "If your baby's sample was unsatisfactory, you'll need to submit a new sample. Contact our Laboratory team:\n\n📱 0933-0439651 (SMART)\n☎️ (043) 778-4849 (PLDT)\n✉️ unsat@nscsl.com.ph\n\nThey will guide you through the resampling process.";
  }

  // Elevated results
  if (message.match(/elevated|positive|abnormal|high result/)) {
    return "If your baby has elevated results, don't panic. This means further testing is needed. Our Follow-up team will contact you directly. You can also reach them at:\n\n📱 0908-392-1298\n📱 0931-202-7188\n✉️ followup1@nscsl.com.ph\n\nEarly intervention is key to managing these conditions effectively.";
  }

  // G6PD specific
  if (message.match(/g6pd|glucose.*6.*phosphate/i)) {
    return "G6PD Deficiency is one of the conditions we screen for. If your baby tests positive, avoid certain foods and medications that can trigger symptoms. Contact our G6PD specialist:\n\n✉️ followupg6pd@nscsl.com.ph\n\nOur team will provide detailed guidance on managing this condition.";
  }

  // Events
  if (message.match(/event|program|activity|seminar/)) {
    return "We regularly conduct events and educational programs about newborn screening. Check our Events page for upcoming activities, or contact our Program Development Office:\n\n📱 0923-908-3301\n✉️ pdo1@nscsl.com.ph";
  }

  // Thank you
  if (message.match(/thank you|thanks|appreciate/)) {
    return "You're welcome! If you have any more questions about newborn screening, feel free to ask. We're here to help ensure your baby's health and wellbeing! 😊";
  }

  // Goodbye
  if (message.match(/bye|goodbye|see you|thanks bye/)) {
    return "Goodbye! Take care of your little one. If you need assistance in the future, I'm always here to help. Have a great day! 👶💙";
  }

  // Help/Options
  if (message.match(/help|what can you|options|menu/)) {
    return "I can help you with:\n\n• Information about newborn screening\n• What disorders we test for\n• When to screen your baby\n• How to get results\n• Operating hours and locations\n• Contact information\n• Cost and payment options\n• Elevated or unsatisfactory results\n\nWhat would you like to know more about?";
  }

  // Default response
  return "I'm here to help with information about newborn screening! You can ask me about:\n\n• What newborn screening is\n• When to screen your baby\n• What disorders we test for\n• How to get results\n• Our locations and contact info\n• Operating hours\n\nHow can I assist you today?";
};

export const quickQuestions = [
  "What is newborn screening?",
  "When should I screen my baby?",
  "How do I get results?",
  "What are your operating hours?"
];