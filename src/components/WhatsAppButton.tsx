import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const phoneNumber = '919993919953'; // Replace with real number
    const message = 'Hi Go To Marketers, I want help with...';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;