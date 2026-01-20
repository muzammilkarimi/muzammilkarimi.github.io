"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaPaperPlane, FaTimes, FaBrain, FaMagic } from "react-icons/fa";

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
      content: "Hello! I am the digital twin of Muzammil. I can tell you about his research in AI, his GATE score, or his full-stack projects. Ask me anything.",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input;
    const newMessages = [...messages, { role: "user", content: userMsg } as Message];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    // Enhanced AI Knowledge Base Response Logic
    setTimeout(() => {
      let response = "That's a fascinating topic. Muzammil specializes in it.";
      
      const lowerInput = userMsg.toLowerCase();
      
      // Detailed knowledge map
      if (lowerInput.includes("education") || lowerInput.includes("study") || lowerInput.includes("college") || lowerInput.includes("iit")) {
        response = "Muzammil is currently an **M.Tech Scholar** in Mathematics & Computing at **IIT Patna** (2024-2026), holding a CGPA of 8.5. Previously, he completed his B.E. in CSE from Vels University (76%) and Diploma from BTE Delhi.";
      } 
      else if (lowerInput.includes("gate") || lowerInput.includes("score") || lowerInput.includes("exam")) {
        response = "He cracked **GATE CS 2024** with a stellar **95th Percentile**. This demonstrates his strong grasp of core CS fundamentals like Algorithms, OS, and DBMS.";
      }
      else if (lowerInput.includes("skills") || lowerInput.includes("tech") || lowerInput.includes("stack")) {
        response = "**Technical Arsenal:**\n\n" +
                   "• **AI/ML:** PyTorch, LangChain, FAISS, RAG Pipelines, LLMs.\n" +
                   "• **Web:** Next.js, React, Node.js, FastAPI, Supabase.\n" +
                   "• **Languages:** Python, C++, SQL, TypeScript.\n" +
                   "• **Tools:** Git, Linux, Docker, Postman.";
      }
      else if (lowerInput.includes("project") || lowerInput.includes("work") || lowerInput.includes("build")) {
        response = "Here are his flagship projects:\n\n" +
                   "1. **Neuro Search:** A zero-hallucination RAG search engine.\n" +
                   "2. **QuestionPaperz:** Live academic platform (questionpaperz.com).\n" +
                   "3. **VelsEcho:** AI Campus Assistant for universities.\n" +
                   "4. **MedMan:** Inventory management for pharmacies.";
      }
      else if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("hire")) {
        response = "You can reach him at **muzammil.a.karimi@gmail.com** or connect on LinkedIn (linkedin.com/in/muzammilakarimi). He is open to dev and research roles.";
      }
      else if (lowerInput.includes("rag") || lowerInput.includes("llm") || lowerInput.includes("genai")) {
        response = "His master's research focuses on **Retrieval Augmented Generation (RAG)**—optimizing context windows and reducing hallucinations in Large Language Models.";
      }
      else {
        response = "I can tell you about his **Projects**, **GATE Score**, **Education**, or **Tech Stack**. What are you curious about?";
      }

      setMessages((prev) => [...prev, { role: "ai", content: response }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[100]">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-neutral-900 dark:bg-white text-white dark:text-black w-14 h-14 rounded-full shadow-2xl flex items-center justify-center border border-neutral-800 dark:border-neutral-200 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse" />
          {isOpen ? <FaTimes size={20} /> : <FaMagic size={20} />}
          
          {!isOpen && (
            <span className="absolute -top-10 right-0 bg-neutral-900 dark:bg-white text-white dark:text-black text-[10px] font-bold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-neutral-800 shadow-lg">
              Ask AI
            </span>
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-4 md:right-6 w-[90vw] md:w-[380px] h-[600px] bg-white dark:bg-neutral-950 rounded-[2rem] shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col overflow-hidden z-[100]"
          >
            {/* Minimalist Header */}
            <div className="bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md p-5 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between absolute top-0 w-full z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <FaBrain size={14} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-neutral-900 dark:text-white">Neural Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">Online</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                <FaTimes size={12} />
              </button>
            </div>

            {/* Chat Area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto pt-24 pb-4 px-4 space-y-6 bg-white dark:bg-neutral-950 scroll-smooth"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === "ai" ? "justify-start" : "justify-end"}`}
                >
                  <div className={`max-w-[85%] ${msg.role === "ai" ? "" : "ml-auto"}`}>
                    {msg.role === "ai" && (
                        <span className="text-[10px] font-bold text-neutral-400 mb-1 block ml-1">AI TWIN</span>
                    )}
                    <div
                      className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                        msg.role === "ai"
                          ? "bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-100 dark:border-neutral-800 rounded-tl-none"
                          : "bg-black dark:bg-white text-white dark:text-black rounded-tr-none"
                      }`}
                    >
                      <div dangerouslySetInnerHTML={{ __html: msg.content.replace(/\n/g, "<br/>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                  <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about Projects, Skills, GATE..."
                  className="flex-1 bg-neutral-100 dark:bg-neutral-900/80 border border-transparent focus:border-neutral-300 dark:focus:border-neutral-700 rounded-full py-3.5 pl-5 pr-12 text-sm focus:ring-0 transition-all outline-none dark:text-white placeholder:text-neutral-400 font-medium"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-2 w-9 h-9 flex items-center justify-center bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 shadow-lg"
                >
                  <FaPaperPlane size={12} className="ml-0.5" />
                </button>
              </div>
              <div className="text-center mt-3">
                  <p className="text-[9px] text-neutral-400 font-medium uppercase tracking-widest">Powered by RAG &bull; IIT Patna</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
