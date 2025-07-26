import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { useNewsletter } from '../contexts/NewsletterContext';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const { subscribeToNewsletter } = useNewsletter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address');
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const success = await subscribeToNewsletter(email);
      
      if (success) {
        setMessage('Welcome to IMPACT Newsletter! Check your email for confirmation.');
        setIsSuccess(true);
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="subscribe" className="py-32 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-400 font-medium tracking-[0.3em] text-sm mb-6 uppercase">
            SUBSCRIBE
          </p>
          <h2 className="text-5xl lg:text-7xl font-light leading-[0.9] mb-8">
            Confirm Your
            <span className="block font-bold text-6xl lg:text-8xl text-amber-400">
              Urban Detox
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Join thousands of professionals who rely on our insights to stay ahead. 
            Get the most impactful stories delivered to your inbox.
          </p>
        </div>

        {/* Subscription Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-400 mx-auto mb-4 flex items-center justify-center">
              <Mail className="h-8 w-8 text-black" />
            </div>
            <h4 className="text-lg font-bold mb-2">Weekly Insights</h4>
            <p className="text-gray-400 text-sm">Curated content every Tuesday</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-400 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-black" />
            </div>
            <h4 className="text-lg font-bold mb-2">Exclusive Access</h4>
            <p className="text-gray-400 text-sm">Subscriber-only content and events</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-400 mx-auto mb-4 flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-black" />
            </div>
            <h4 className="text-lg font-bold mb-2">Early Access</h4>
            <p className="text-gray-400 text-sm">First to know about breaking news</p>
          </div>
        </div>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-white text-black font-medium focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-12 py-4 bg-amber-400 hover:bg-amber-500 disabled:bg-amber-400/50 text-black font-bold tracking-[0.1em] transition-all duration-300 transform hover:scale-105 disabled:transform-none"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mx-auto"></div>
              ) : (
                'SUBSCRIBE'
              )}
            </button>
          </div>
        </form>

        {/* Message */}
        {message && (
          <div className={`mt-8 p-6 flex items-center justify-center ${
            isSuccess 
              ? 'bg-green-600/20 border border-green-400/30 text-green-200' 
              : 'bg-red-600/20 border border-red-400/30 text-red-200'
          }`}>
            {isSuccess ? (
              <CheckCircle className="h-5 w-5 mr-2" />
            ) : (
              <AlertCircle className="h-5 w-5 mr-2" />
            )}
            {message}
          </div>
        )}

        <p className="text-center text-gray-500 text-sm mt-8">
          We respect your privacy. Unsubscribe at any time. No spam, ever.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;