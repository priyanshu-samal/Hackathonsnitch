import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const unicornRef = useRef(null);

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page

    if (unicornRef.current && !unicornRef.current.hasChildNodes()) {
      const bgDiv = document.createElement('div');
      bgDiv.setAttribute('data-us-project', 'DbqEXYLnk0XjMFaxfqmH');
      bgDiv.style.width = '100vw';
      bgDiv.style.height = '100vh';
      bgDiv.style.position = 'absolute';
      bgDiv.style.top = '0';
      bgDiv.style.left = '0';
      bgDiv.style.zIndex = '-1'; // Ensure it stays behind other content
      unicornRef.current.appendChild(bgDiv);

      // Inject Unicorn Studio script
      if (!window.UnicornStudio) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js';
        script.onload = () => {
          if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
            window.UnicornStudio.init();
            window.UnicornStudio.isInitialized = true;
          }
        };
        document.body.appendChild(script);
      } else if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    }
    // Cleanup
    return () => {
      if (unicornRef.current) unicornRef.current.innerHTML = '';
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 🦄 Unicorn Studio BG */}
      <div ref={unicornRef} className="absolute inset-0 z-0" />

      {/* 📝 SignUp Box */}
      <div className="relative z-10 flex items-center justify-center pt-32 pb-8 px-4">
        <motion.div
          className="flex w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left: Form */}
          <div className="w-full p-4 md:w-1/2">
            <motion.h2
              className="text-xl font-bold text-gray-800"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Create an account
            </motion.h2>
            <p className="mt-2 text-gray-600 text-sm">
              Let’s get you started with a new account.
            </p>

            <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 text-sm text-gray-600">Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border text-sm rounded-md shadow-sm focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border text-sm rounded-md shadow-sm focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border text-sm rounded-md shadow-sm focus:outline-none"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.button>
            </form>

            <p className="mt-4 text-sm text-center">
              Already have an account?{' '}
              <a href="/signin" className="text-orange-500 hover:underline">
                Log in
              </a>
            </p>
          </div>

          {/* Right: Background Video */}
          <div className="hidden md:block w-1/2 relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/yo.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;