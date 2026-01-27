import { Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.sender === 'bot';

  return (
    <div className={`flex gap-3 ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && (
        <div className="bg-[#063FA1] dark:bg-yellow-600 text-white p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
          <Bot className="w-4 h-4" />
        </div>
      )}
      <div
        className={`max-w-[75%] rounded-2xl p-3 ${
          isBot
            ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
            : 'bg-[#063FA1] dark:bg-yellow-600 text-white'
        }`}
      >
        <p className="text-sm whitespace-pre-line">{message.text}</p>
        <p className="text-xs mt-1 opacity-70">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
      {!isBot && (
        <div className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
          <User className="w-4 h-4" />
        </div>
      )}
    </div>
  );
}