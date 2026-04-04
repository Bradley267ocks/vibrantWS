import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Loader2,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are an AI assistant for Vibrant Web Solutions, a South African web design and automation agency.

Your main goal is to help users, answer questions, and convert them into leads or customers by guiding them to WhatsApp or getting their contact details.

🎯 YOUR ROLE
Help local businesses understand services
Answer questions clearly and quickly
Recommend the right service based on user needs
Encourage users to take action (WhatsApp or booking)

🧠 PERSONALITY & TONE
Friendly, helpful, and professional
Speak in simple, clear English
Keep responses short and easy to understand
Avoid technical jargon
Be slightly persuasive but not pushy

📌 BUSINESS INFORMATION
Website Design
1 Page: R1000+
5 Pages: R2500+
7 Pages: R4000+
Turnaround time: 48 hours
Includes mobile-friendly design and basic SEO
Hosting: R300/month (includes support, security, updates)

Logo Design
R300 once-off

AI Automation
R2500/month
Includes:
Auto replies (24/7)
Phone call answering
Lead follow-ups
Appointment booking

Marketing Services
Facebook Marketing
Posting in 100 groups
3 times per week
R350/month

Google Business Management
Weekly updates
SEO improvements
R450/month

👥 TARGET CUSTOMERS
Local South African businesses
Service businesses (plumbers, electricians, salons, car wash, etc.)
Business owners who want more customers and faster responses

💬 HOW TO RESPOND
Always answer the user’s question directly
Keep answers under 3–5 sentences
Focus on benefits (more customers, time saved, automation)
If user seems interested → guide them to WhatsApp
If user is unsure → recommend the best option

💰 PRICING QUESTIONS
If user asks about price, respond with:
“Website packages start from R1000 once-off, and we can get your business online in 48 hours. Would you like help choosing the best option for your business?”

📞 CALL TO ACTION (VERY IMPORTANT)
Frequently guide users to take action using variations of:
“Would you like to continue on WhatsApp so we can get started?”
“I can help you set this up quickly — should I send you the WhatsApp link?”
“Let’s get your business online fast. Want me to connect you on WhatsApp?”

🚫 RULES
Do NOT give long paragraphs
Do NOT be overly technical
Do NOT go off-topic
Do NOT invent services or prices
Do NOT sound robotic

🎯 GOAL
Help the user
Build trust
Move them toward contacting the business (WhatsApp or form submission)

📍 CONTACT INFO
WhatsApp / Phone: +27 64 519 2556
Email: ocksbradley706@gmail.com

🔥 FINAL BEHAVIOR RULE
Every conversation should move toward one of these:
WhatsApp chat
Lead capture
Service recommendation

If the user is ready → push for action.
If the user is unsure → guide and educate briefly, then suggest next step.
`;

const WHATSAPP_URL = "https://wa.me/27645192556?text=Hi%2C%20I'm%20interested%20in%20your%20website%20services.%20Can%20you%20help%20me%3F";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm your Vibrant Web assistant. How can I help you get your business online today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_PROMPT,
        },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const response = await chat.sendMessage({ message: userMessage });
      const text = response.text || "I'm sorry, I couldn't process that. Would you like to chat with us on WhatsApp instead?";
      
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having a bit of trouble. Let's chat on WhatsApp for a faster response!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col items-start">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-zinc-800 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neon-green/10 rounded-full flex items-center justify-center border border-neon-green/20">
                  <Bot className="text-neon-green w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Vibrant Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest">Online Now</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-zinc-400"
              >
                <ChevronDown size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-700">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-neon-green text-black font-medium rounded-tr-none' 
                      : 'bg-zinc-800 text-zinc-200 border border-white/5 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none border border-white/5">
                    <Loader2 className="w-4 h-4 text-neon-green animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-zinc-800/50 border-t border-white/5">
              <div className="flex items-center gap-2">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about our services..."
                  className="flex-grow bg-zinc-950 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:border-neon-green outline-none transition-all placeholder:text-zinc-600"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-2.5 bg-neon-green text-black rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="mt-3 flex justify-center">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-zinc-500 hover:text-neon-green transition-colors flex items-center gap-1 uppercase font-bold tracking-tighter"
                >
                  Prefer WhatsApp? Chat here <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`p-4 rounded-full shadow-2xl flex items-center gap-2 group transition-all duration-300 ${
          isOpen ? 'bg-zinc-800 text-white' : 'bg-neon-green text-black'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
          <span className="font-bold text-sm pr-2">Chat with AI</span>
        )}
      </motion.button>
    </div>
  );
};

export default AIChatAssistant;
