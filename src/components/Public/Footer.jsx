import React, { useState } from 'react';

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsConditions, setShowTermsConditions] = useState(false);

  const togglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
  };

  const toggleTermsConditions = () => {
    setShowTermsConditions(!showTermsConditions);
  };

  return (
    <footer className="bg-pink-900 bg-opacity-70 text-white p-4 absolute bottom-0 w-full">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="mr-2"> &copy; {new Date().getFullYear() }-Celebrate365. All rights reserved.</div>
          <div className="text-xs mx-2">|</div>
          <div className="cursor-pointer" onClick={togglePrivacyPolicy}>Privacy Policy</div>
          <div className="text-xs mx-2">|</div>
          <div className="cursor-pointer" onClick={toggleTermsConditions}>Terms & Conditions</div>
        </div>
      </div>
      {showPrivacyPolicy && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl  text-black font-bold mb-4">Privacy Policy</h2>
            <p className=' text-black'>
              This is the privacy policy content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur eros id ante efficitur vehicula. Proin auctor ex eget nunc suscipit, non gravida est accumsan. Nullam et vestibulum ante.
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full" onClick={togglePrivacyPolicy}>Close</button>
          </div>
        </div>
      )}
      {showTermsConditions && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl text-black font-bold mb-4">Terms & Conditions</h2>
            <p className=' text-black'>
              These are the terms and conditions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur eros id ante efficitur vehicula. Proin auctor ex eget nunc suscipit, non gravida est accumsan. Nullam et vestibulum ante.
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full" onClick={toggleTermsConditions}>Close</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
