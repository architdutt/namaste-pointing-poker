import React, { useState } from 'react'
import qrImage from '../assets/my_cred_upi_qr.png' // Path to your QR code image
import Modal from './Modal'

const FooterSection = () => {
  const [showQRModal, setShowQRModal] = useState(false)

  return (
    <footer className="bg-white dark:bg-gray-800 text-center p-4 text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-700">
      © {new Date().getFullYear()} Namaste Pointing Poker — Show some love ❤️

      <div className="mt-2 flex justify-center gap-6 items-center">
        {/* UPI Donation */}
        <div className="relative">
          <button
            className="flex items-center gap-1 text-fuchsia-800 hover:underline"
            onClick={() => setShowQRModal(!showQRModal)}
          >
          
            Donate via UPI
          </button>

         
        </div>

        {/* BuyMeACoffee */}
        <a
          href="https://www.buymeacoffee.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-yellow-600 hover:underline"
        >
                  Donate ☕
        </a>
      </div>

      {/* Modal for UPI QR */}
      <Modal isOpen={showQRModal} onClose={() => setShowQRModal(false)}>
        <h3 className="text-lg font-semibold text-center mb-4">Scan to Pay via UPI</h3>
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
  )
}

export default FooterSection
