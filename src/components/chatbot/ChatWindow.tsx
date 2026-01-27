import { useRef, useEffect } from 'react';
import { Bot } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import QuickQuestions from './QuickQuestions';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatWindowProps {
  messages: Message[];
  inputMessage: string;
  isTyping: boolean;
  quickQuestions: string[];
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
  onQuickQuestion: (question: string) => void;
}

export default function ChatWindow({
  messages,
  inputMessage,
  isTyping,
  quickQuestions,
  onInputChange,
  onSendMessage,
  onQuickQuestion
}: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#063FA1] to-[#052d7a] dark:from-yellow-600 dark:to-yellow-500 text-white p-4 rounded-t-2xl flex items-center gap-3">
        <div className="bg-white/20 p-2 rounded-full">
          <Bot className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg">NSC Assistant</h3>
          <p className="text-xs text-white/80">Ask me about newborn screening</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isTyping && (
          <div className="flex gap-3 justify-start">
            <div className="bg-[#063FA1] dark:bg-yellow-600 text-white p-2 rounded-full h-8 w-8 flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      {messages.length <= 2 && (
        <QuickQuestions questions={quickQuestions} onQuestionClick={onQuickQuestion} />
      )}

      {/* Input */}
      <ChatInput
        value={inputMessage}
        onChange={onInputChange}
        onSend={onSendMessage}
        disabled={isTyping}
      />
    </div>
  );
}