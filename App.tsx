import React, { useState } from 'react';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300 min- flex flex-col`}>
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
            </svg>
            <h1 className="ml-3 text-2xl font-bold">AdvancedAI</h1>
          </div>
          <button onClick={toggleDarkMode} className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      <main className="flex-1 py-12">
        <section className="bg-gradient-to-b from-blue-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to AdvancedAI</h2>
            <p className="text-xl mb-8">The AI suite for professionals that need function, form, simplicity, and speed.</p>
            <p className="text-lg">Powered by the latest models from 12 vendors and servers, AdvancedAI offers best-in-class Chats, Beams, and Calls with AI personas, visualizations, coding, drawing, side-by-side chatting, and more -- all wrapped in a polished UX.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <svg className="w-10 h-10 text-blue-600 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Chats</h3>
                <p>Engage in seamless side-by-side chatting with AI personas for enhanced communication.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <svg className="w-10 h-10 text-blue-600 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Beams</h3>
                <p>Experience real-time visualizations and coding assistance powered by AI.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <svg className="w-10 h-10 text-blue-600 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Calls</h3>
                <p>Enjoy high-quality calls with AI-driven features for a seamless experience.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <svg className="w-10 h-10 text-blue-600 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
                </svg>
                <h3 className="text-xl font-bold mb-2">AI Agents</h3>
                <p>Handle inbound and outbound calling, texting, emails, and booking appointments with our AI agents.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 dark:bg-gray-800 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Book a Meeting</h2>
            <p className="text-lg mb-8">Schedule a discussion with our team to learn more about AdvancedAI.</p>
            <div className="w-full max-w-2xl mx-auto">
              <iframe
                src="https://calendly.com/booking-appointments-calendly/booking-appointments-discussion"
                width="100%"
                height="600"
                style={{ border: 'none', borderRadius: '8px' }}
                title="Calendly Booking"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="text-lg mb-8">Get in touch with us for any inquiries or to schedule a meeting.</p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <a href="mailto:zachsupwork@gmail.com" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
                Email: zachsupwork@gmail.com
              </a>
              <a href="tel:+14389326669" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
                Phone: 438-932-6669
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 AdvancedAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;