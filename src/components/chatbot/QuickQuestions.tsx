interface QuickQuestionsProps {
  questions: string[];
  onQuestionClick: (question: string) => void;
}

export default function QuickQuestions({ questions, onQuestionClick }: QuickQuestionsProps) {
  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 font-semibold">Quick Questions:</p>
      <div className="flex flex-wrap gap-2">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionClick(question)}
            className="text-xs bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-full border border-gray-300 dark:border-gray-600 transition-colors"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}