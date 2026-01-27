import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0, answer: 0 });
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState(false);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion({ num1, num2, answer: num1 + num2 });
    setCaptchaError(false);
    setCaptchaInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateCaptcha();
    setShowCaptcha(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const closeModal = () => {
    setShowCaptcha(false);
    setCaptchaInput('');
    setCaptchaError(false);
  };

  const verifyAndSend = () => {
    if (parseInt(captchaInput) === captchaQuestion.answer) {
      // Send email logic here
      const mailtoLink = `mailto:admin@nscsl.com.ph?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      closeModal();
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setCaptchaError(true);
    }
  };

  return (
    <>
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h6 className="text-[#063FA1] dark:text-yellow-400 font-semibold mb-2">Contact Us</h6>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">You may reach us with any questions.</h3>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 gap-6 mb-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#063FA1] dark:focus:ring-yellow-400 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#063FA1] dark:focus:ring-yellow-400 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Email"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#063FA1] dark:focus:ring-yellow-400 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#063FA1] dark:focus:ring-yellow-400 focus:border-transparent dark:bg-gray-800 dark:text-white resize-none"
                  placeholder="Message"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#063FA1] dark:bg-yellow-600 hover:bg-[#052d7a] dark:hover:bg-yellow-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CAPTCHA Modal */}
      {showCaptcha && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-md w-full p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">🤖 Security Verification</h3>
              <p className="text-gray-600 dark:text-gray-400">Please solve this simple math problem to continue</p>
            </div>

            <div className="mb-6">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center mb-4">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {captchaQuestion.num1} + {captchaQuestion.num2} = ?
                </p>
              </div>
              <input
                type="number"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#063FA1] dark:focus:ring-yellow-400 focus:border-transparent dark:bg-gray-800 dark:text-white text-center text-xl"
                placeholder="Your answer"
                autoComplete="off"
              />
              {captchaError && (
                <p className="text-red-500 text-sm mt-2 text-center">Incorrect answer. Please try again.</p>
              )}
              <button
                onClick={generateCaptcha}
                className="w-full mt-3 text-[#063FA1] dark:text-yellow-400 hover:underline text-sm"
              >
                🔄 Generate new question
              </button>
            </div>

            <div className="flex gap-4">
              <button
                onClick={closeModal}
                className="flex-1 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={verifyAndSend}
                className="flex-1 bg-[#063FA1] dark:bg-yellow-600 hover:bg-[#052d7a] dark:hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Verify & Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}