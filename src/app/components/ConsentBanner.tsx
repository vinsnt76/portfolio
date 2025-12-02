import { useState, useEffect } from 'react';

export default function ConsentBanner({ onConsent }: { onConsent: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem('userConsent');
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem('userConsent', 'true');
    setVisible(false);
    onConsent();
  };

  const handleDecline = () => {
    window.localStorage.setItem('userConsent', 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white p-4 flex justify-between">
      <span>We use local storage to remember your theme preference. Do you consent?</span>
      <div>
        <button onClick={handleAccept} className="bg-green-600 px-3 py-1 mr-2">Accept</button>
        <button onClick={handleDecline} className="bg-red-600 px-3 py-1">Decline</button>
      </div>
    </div>
  );
}