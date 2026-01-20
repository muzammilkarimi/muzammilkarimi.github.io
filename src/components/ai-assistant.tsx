"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";

interface Message {
  role: "user" | "ai";
  content: string;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content: "Hi! I'm Muzammil's AI. I know everything about his IIT Patna research, Gate score, and technical arsenal. What would you like to know?",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input;
    const newMessages = [...messages, { role: "user", content: userMsg } as Message];
    setMessages(newMessages);
    setInput("");

    // Enhanced AI Knowledge Base
    setTimeout(() => {
      let response = "That's a great question! Muzammil is an M.Tech student at IIT Patna specializing in Mathematics and Computing. He has a strong background in AI, particularly RAG systems and LLMs.";
      
      const lowerInput = userMsg.toLowerCase();
      if (lowerInput.includes("education") || lowerInput.includes("iit") || lowerInput.includes("university")) {
        response = "Muzammil is currently pursuing his M.Tech in Mathematics and Computing at IIT Patna (2024-2026) with an 85% score. He completed his B.E. in CSE from Vels University, Chennai (2021-2024) with 76%.";
      } else if (lowerInput.includes("skills") || lowerInput.includes("stack") || lowerInput.includes("programming") || lowerInput.includes("tech")) {
        response = "Muzammil's technical arsenal is broad: \n\n" +
                   "• AI & Intelligence: LangChain, PyTorch, FAISS, Hugging Face, Streamlit, Scikit-learn, LLMs, and RAG architectures.\n" +
                   "• Engineering & Web: Next.js, React, Node.js, FastAPI, Supabase, Prisma, and Tailwind CSS.\n" +
                   "• Core & Systems: Python, C++, SQL, Git, Linux, and Advanced Data Structures/Algorithms.";
      } else if (lowerInput.includes("projects") || lowerInput.includes("rag") || lowerInput.includes("ai")) {
        response = "His standout projects are: \n\n" +
                   "1. AI Knowledge Retrieval System (RAG pipeline using FAISS & LangChain)\n" +
                   "2. QuestionPaperz (Live Academic Platform: http://35.93.181.161.nip.io/)\n" +
                   "3. VelsEcho AI (University Chatbot)\n" +
                   "4. Learning Resource Management System (Full-stack LMS).";
      } else if (lowerInput.includes("achievements") || lowerInput.includes("gate") || lowerInput.includes("score")) {
        response = "Muzammil achieved the 95th percentile in GATE CS 2024. He is also a 3-star coder on CodeChef (1621 max rating) and has solved over 500+ problems on LeetCode (mkarimi).";
      } else if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("linkedin")) {
        response = "You can reach him at muzammil_2411mc16@iitp.ac.in or his personal email muzammil.a.karimi@gmail.com. He's also active on LinkedIn at linkedin.com/in/muzammilakarimi.";
      }

      setMessages((prev) => [...prev, { role: "ai", content: response }]);
    }, 1000);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[100]">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-blue-400 group relative"
        >
          {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
          <span className="absolute -top-12 right-0 bg-white dark:bg-neutral-800 text-black dark:text-white text-xs font-bold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-neutral-200 dark:border-neutral-700">
            Ask my AI
          </span>
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
            </span>
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[550px] bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col overflow-hidden z-[100] backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-blue-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <FaRobot size={20} />
                </div>
                <div>
                  <h3 className="font-bold">MAK AI Assistant</h3>
                  <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">IIT Patna Edition</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
                <FaTimes size={18} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50 dark:bg-neutral-950/50"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "ai" ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === "ai" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-sm whitespace-pre-line leading-relaxed ${
                      msg.role === "ai"
                        ? "bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-tl-none shadow-sm border border-neutral-100 dark:border-neutral-700"
                        : "bg-blue-600 text-white rounded-tr-none shadow-md font-medium"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about my technical skills..."
                  className="w-full bg-neutral-100 dark:bg-neutral-800 border-none rounded-2xl py-3 pl-4 pr-12 text-sm focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-2 p-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <FaPaperPlane size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
