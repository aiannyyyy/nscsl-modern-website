import { useTheme } from '../context/ThemeContext';

export default function Watermark() {
  const { isDark } = useTheme();

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: 'url("/images/LOGO NEWWWWWWW.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundAttachment: 'fixed',
        opacity: isDark ? 0.02 : 0.04
      }}
    />
  );
}