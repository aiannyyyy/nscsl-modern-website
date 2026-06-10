import { useState } from 'react';
import { ChevronDown, ChevronUp, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

// ─── Phone Link ───────────────────────────────────────────────────────────────

const PhoneLink = ({ number }: { number: string }) => {
  const digits = number.replace(/[\s\-().]/g, '');
  const href = digits.startsWith('0') ? `tel:+63${digits.slice(1)}` : `tel:${digits}`;
  return (
    <a href={href} className="hover:text-[#063FA1] dark:hover:text-yellow-400 hover:underline transition-colors">
      {number}
    </a>
  );
};

// ─── Contact Form ─────────────────────────────────────────────────────────────

interface ContactFormProps {
  department: string;
  emails: string[];
}

function ContactForm({ department, emails }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [captcha, setCaptcha] = useState(() => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    return { a, b, answer: a + b };
  });
  const [captchaInput, setCaptchaInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'captcha_error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const refreshCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ a, b, answer: a + b });
    setCaptchaInput('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(captchaInput) !== captcha.answer) {
      setStatus('captcha_error');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('https://sampleweb.nscsl.com.ph/api/send-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: emails[0],
          cc: emails.slice(1).join(', '),
          replyto: formData.email,
          name: formData.name,
          department: department,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setCaptchaInput('');
        refreshCaptcha();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err?.message || 'Failed to send. Please try again.');
    }
  };

  return (
    <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
      <h4 className="font-bold text-base text-gray-900 dark:text-white mb-3 flex items-center gap-2">
        <Send className="w-4 h-4 text-[#063FA1] dark:text-yellow-400" />
        Send a Message to {department}
      </h4>

      {status === 'success' ? (
        <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400">
          <CheckCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm font-medium">Message sent successfully!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              required
              className="w-full px-4 py-2.5 text-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#063FA1] dark:focus:ring-yellow-400 focus:border-transparent dark:bg-gray-800 dark:text-white outline-none transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email *"
              required
              className="w-full px-4 py-2.5 text-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#063FA1] dark:focus:ring-yellow-400 focus:border-transparent dark:bg-gray-800 dark:text-white outline-none transition"
            />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject *"
            required
            className="w-full px-4 py-2.5 text-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#063FA1] dark:focus:ring-yellow-400 focus:border-transparent dark:bg-gray-800 dark:text-white outline-none transition"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Message *"
            required
            className="w-full px-4 py-2.5 text-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#063FA1] dark:focus:ring-yellow-400 focus:border-transparent dark:bg-gray-800 dark:text-white outline-none resize-none transition"
          />

          {/* Captcha */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg text-sm font-bold text-gray-800 dark:text-white select-none">
              {captcha.a} + {captcha.b} = ?
            </div>
            <input
              type="number"
              value={captchaInput}
              onChange={(e) => { setCaptchaInput(e.target.value); setStatus('idle'); }}
              placeholder="Answer"
              className="w-24 px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#063FA1] dark:focus:ring-yellow-400 focus:border-transparent dark:bg-gray-800 dark:text-white outline-none text-center"
            />
            <button
              type="button"
              onClick={refreshCaptcha}
              className="text-xs text-[#063FA1] dark:text-yellow-400 hover:underline"
            >
              ↺ New question
            </button>
            {status === 'captcha_error' && (
              <span className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> Wrong answer
              </span>
            )}
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {errorMsg}
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 bg-[#063FA1] hover:bg-[#052d7a] dark:bg-yellow-600 dark:hover:bg-yellow-500 disabled:opacity-60 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
            >
              {status === 'sending' ? (
                <><Loader className="w-4 h-4 animate-spin" /> Sending…</>
              ) : (
                <><Send className="w-4 h-4" /> Send Message</>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

// ─── Department Accordion ─────────────────────────────────────────────────────

interface DepartmentProps {
  title: string;
  emails: string[];
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function Department({ title, emails, children, isOpen, onToggle }: DepartmentProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden mb-4">
      <button
        onClick={onToggle}
        className="w-full bg-[#063FA1] dark:bg-gray-800 text-white py-4 px-6 flex justify-between items-center hover:bg-[#052d7a] dark:hover:bg-gray-700 transition-colors"
      >
        <span className="font-bold text-lg">{title}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="bg-white dark:bg-gray-900 p-6">
          {children}
          <ContactForm department={title} emails={emails} />
        </div>
      )}
    </div>
  );
}

// ─── Department Data ──────────────────────────────────────────────────────────

const departments = [
  {
    title: 'PROGRAM CONCERN',
    emails: ['pdo1@nscsl.com.ph', 'pdo2@nscsl.com.ph', 'pdo3@nscsl.com.ph', 'pdolopez@nscsl.com.ph', 'adminlopez@nscsl.com.ph'],
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">NBS PROGRAM CONCERN</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span>📠</span><span className="font-semibold">PLDT:</span><PhoneLink number="(043) 341-6032" />
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span>📱</span><span className="font-semibold">SUN:</span><PhoneLink number="0923-908-3301" />
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span>📱</span><span className="font-semibold">GLOBE:</span><PhoneLink number="0915-543-2390" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['pdo1@nscsl.com.ph', 'pdo2@nscsl.com.ph', 'pdo3@nscsl.com.ph'].map((e) => (
              <div key={e} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span>✉️</span>
                <a href={`https://mail.google.com/mail/?view=cm&to=${e}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#063FA1] dark:hover:text-yellow-400">{e}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">NSC-SL LOPEZ, QUEZON EXTENSION OFFICE</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span>📱</span><span className="font-semibold">GLOBE:</span><PhoneLink number="0966-863-1343" />
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span>📱</span><span className="font-semibold">SMART:</span><PhoneLink number="0968-596-0803" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {['pdolopez@nscsl.com.ph', 'adminlopez@nscsl.com.ph'].map((e) => (
              <div key={e} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span>✉️</span>
                <a href={`https://mail.google.com/mail/?view=cm&to=${e}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#063FA1] dark:hover:text-yellow-400">{e}</a>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
            <span>📍</span><span>2nd floor, Arago building, Brgy. Danlagan Lopez, Quezon</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'ACCOUNTING & COLLECTIONS CONCERN',
    emails: ['accounting1@nscsl.com.ph', 'accounting2@nscsl.com.ph', 'collections@nscsl.com.ph'],
    content: (
      <div>
        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">PAYABLES AND BALANCES</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <span>📱</span><span className="font-semibold">GLOBE:</span><PhoneLink number="0906-217-9280" />
          </div>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <span>📠</span><span className="font-semibold">PLDT Telefax:</span><PhoneLink number="(043) 341-6032" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['accounting1@nscsl.com.ph', 'accounting2@nscsl.com.ph', 'collections@nscsl.com.ph'].map((e) => (
            <div key={e} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span>✉️</span>
              <a href={`https://mail.google.com/mail/?view=cm&to=${e}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#063FA1] dark:hover:text-yellow-400">{e}</a>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'PURCHASING CONCERN',
    emails: ['purchasing@nscsl.com.ph', 'supply@nscsl.com.ph'],
    content: (
      <div>
        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">TESTING CONCERN</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <span>📱</span><span className="font-semibold">SMART:</span><PhoneLink number="0931-0101640" />
          </div>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <span>📠</span><span className="font-semibold">PLDT:</span><PhoneLink number="(043) 341-6032" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['supply@nscsl.com.ph', 'purchasing@nscsl.com.ph'].map((e) => (
            <div key={e} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span>✉️</span>
              <a href={`https://mail.google.com/mail/?view=cm&to=${e}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#063FA1] dark:hover:text-yellow-400">{e}</a>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'LABORATORY CONCERN',
    emails: ['unsat@nscsl.com.ph'],
    content: (
      <div>
        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">STATUS AND RECALL OF UNSATISFACTORY SAMPLES</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <span>📱</span><span className="font-semibold">SMART:</span><PhoneLink number="0933-0439651" />
          </div>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <span>☎️</span><span className="font-semibold">PLDT:</span><PhoneLink number="(043) 778-4849" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <span>✉️</span>
          <a href="https://mail.google.com/mail/?view=cm&to=unsat@nscsl.com.ph" target="_blank" rel="noopener noreferrer" className="hover:text-[#063FA1] dark:hover:text-yellow-400">unsat@nscsl.com.ph</a>
        </div>
      </div>
    ),
  },
  {
    title: 'FOLLOW-UP CONCERN',
    emails: ['followuphead@nscsl.com.ph', 'followup1@nscsl.com.ph', 'followup2@nscsl.com.ph', 'followup3@nscsl.com.ph', 'followup4@nscsl.com.ph', 'followupg6pd@nscsl.com.ph'],
    content: (
      <div>
        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">NEWBORN SCREENING RESULTS (Elevated/Result Update/Patients Concern)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><span>📱</span><span className="font-semibold">SMART:</span><PhoneLink number="0908-392-1298" /></div>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><span>📱</span><span className="font-semibold">SMART:</span><PhoneLink number="0931-202-7188" /></div>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><span>📱</span><span className="font-semibold">SUN:</span><PhoneLink number="0923-908-3296" /></div>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><span>📠</span><span className="font-semibold">PLDT:</span><PhoneLink number="(043) 341-6032" /></div>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><span>☎️</span><span className="font-semibold">GLOBE:</span><PhoneLink number="(043) 430-5071" /></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {['followuphead@nscsl.com.ph', 'followup1@nscsl.com.ph', 'followup2@nscsl.com.ph', 'followup3@nscsl.com.ph', 'followup4@nscsl.com.ph', 'followupg6pd@nscsl.com.ph'].map((e) => (
            <div key={e} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span>✉️</span>
              <a href={`https://mail.google.com/mail/?view=cm&to=${e}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#063FA1] dark:hover:text-yellow-400">{e}</a>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function ContactDirectory() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">NSCSL DIRECTORY</h1>
          <p className="text-xl text-[#063FA1] dark:text-yellow-400 font-semibold">
            FOR MORE CONCERN AND CLARIFICATIONS
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-xl">
          {departments.map((dept, index) => (
            <Department
              key={index}
              title={dept.title}
              emails={dept.emails}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            >
              {dept.content}
            </Department>
          ))}
        </div>

        <div className="text-center mt-6 text-gray-600 dark:text-gray-400">
          <p>Last updated: April 2025 • For official use</p>
        </div>
      </div>
    </section>
  );
}