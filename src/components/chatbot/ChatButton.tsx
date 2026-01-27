import { MessageCircle, X } from 'lucide-react';

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function ChatButton({ isOpen, onClick }: ChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-[#063FA1] dark:bg-yellow-600 hover:bg-[#052d7a] dark:hover:bg-yellow-500 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 z-50"
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
    </button>
  );
}