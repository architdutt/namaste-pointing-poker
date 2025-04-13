import React, { useState, useEffect } from 'react';
import qrImage from '../assets/my_cred_upi_qr.png'; // Path to your QR code image
import Modal from './Modal';

const FooterSection = () => {
  const [showQRModal, setShowQRModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if user is on a mobile device
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      setIsMobile(
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent)
      );
    };

    checkIfMobile();

    // Optional: Set up event listener to handle changes in device orientation
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <footer className="bg-white dark:bg-gray-800 text-center p-4 text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-700">
    <div>
    © {new Date().getFullYear()} Namaste Pointing Poker — Developed by <span className="font-medium text-gray-600 dark:text-gray-300">
        Archit Dutt Sharma
      </span> for Agile & Scrum teams
      
    </div>
  
    <div className="mt-2 flex flex-col items-center gap-1">
      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
        Show some love 💖
      </p>
  
      <div className="flex justify-center gap-6 items-center">
        {/* UPI Donation */}
        <div className="relative">
          {isMobile ? (
            <a
              href="upi://pay?pa=9886763282@axisb&cu=INR"
              className="text-blue-500 hover:underline"
            >
              Donate via UPI
            </a>
          ) : (
            <button
              className="flex items-center gap-1 text-fuchsia-800 hover:underline"
              onClick={() => setShowQRModal(!showQRModal)}
            >
              Donate via UPI
            </button>
          )}
        </div>
  
        {/* BuyMeACoffee */}
        <a
          href="https://www.buymeacoffee.com/architdutt"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-yellow-600 hover:underline"
        >
          Donate ☕
        </a>
      </div>
    </div>
  
    {/* Modal for UPI QR */}
    <Modal isOpen={showQRModal} onClose={() => setShowQRModal(false)}>
      <h3 className="text-lg font-semibold text-center mb-4">
        Scan to Pay via UPI
      </h3>
      <img
        src={qrImage}
        alt="UPI QR"
        className="mx-auto rounded w-auto h-auto max-w-xs"
      />
      <p className="text-center text-xs text-gray-600 mt-2">
        Thank you for supporting! ❤️🚀
      </p>
    </Modal>
  </footer>
  
  );
};

export default FooterSection;
