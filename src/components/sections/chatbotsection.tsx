import React, { useState, useRef, useEffect } from 'react';

type ChatRole = 'user' | 'assistant' | 'system';
interface ChatMessage {
  role: ChatRole;
  content: string;
  timestamp?: Date;
}

type ContentData = unknown;

const FloatingChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [contentData, setContentData] = useState<ContentData | null>(null);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Custom SVG Icons
  const ChatIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
    </svg>
  );

  const SendIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  

  const BotIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 7v4" stroke="currentColor" strokeWidth="2"/>
      <line x1="8" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="16" y1="16" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const UserIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

  const MinimizeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Three.js floating particles background (responsive to container size)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!('THREE' in window) || !window.THREE || !isOpen || !canvasRef.current || !chatContainerRef.current) return;

    const canvas = canvasRef.current;
    const container = chatContainerRef.current;
    const scene = new window.THREE.Scene();
    const getSize = () => ({ w: container.clientWidth || 420, h: container.clientHeight || 560 });
    const { w, h } = getSize();
    const camera = new window.THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    const renderer = new window.THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);

    // Create subtle floating particles
    const particleGeometry = new window.THREE.BufferGeometry();
    const particleCount = 30;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 8;
    }

    particleGeometry.setAttribute('position', new window.THREE.BufferAttribute(posArray, 3));

    const particleMaterial = new window.THREE.PointsMaterial({
      size: 0.03,
      color: 0x1A759F, // site medium blue
      transparent: true,
      opacity: 0.35,
    });

    const particleMesh = new window.THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleMesh);

    camera.position.z = 5;

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      particleMesh.rotation.x += 0.0005;
      particleMesh.rotation.y += 0.0008;
      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      const { w, h } = getSize();
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      renderer.dispose();
      window.removeEventListener('resize', onResize);
    };
  }, [isOpen]);

  // Load content data
  useEffect(() => {
    const loadContentData = async () => {
      try {
        const response = await fetch('/content.json');
        const data = await response.json();
        setContentData(data);
      } catch (error) {
        console.error('Error loading content data:', error);
      }
    };
    loadContentData();
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Animate chat window
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).anime && chatContainerRef.current) {
      if (isOpen) {
        window.anime!({
          targets: chatContainerRef.current,
          scale: [0, 1],
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 400,
          easing: 'easeOutBack'
        });
      }
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setIsTyping(true);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY as string | undefined;
      if (!apiKey) {
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content:
              "OpenRouter API key is not configured. Please set VITE_OPENROUTER_API_KEY in client/.env and reload.",
            timestamp: new Date(),
          },
        ]);
        return;
      }
      // System instructions: dedicated to QuoreTex website only
      let systemContext = [
        "You are the QuoreTex website assistant.",
        "You must answer strictly using ONLY the information provided in the Website context JSON.",
        "If the answer is not present in that context, say you don't have that information and suggest contacting us or visiting the relevant page.",
        "Politely refuse questions unrelated to the QuoreTex website, products, services, policies, addresses, or contact information, and redirect to site-related help.",
        "Never invent or guess missing details such as names, dates, prices, links, or policies.",
        "Answer in a human, conversational tone without lists, bullets, bold text, headings, code blocks, or emojis.",
        "Keep responses concise in 1-3 short sentences and adapt to the user's question.",
      ].join(' ');
      if (contentData) {
        systemContext += ` Website context: ${JSON.stringify(contentData)}`;
      }

      // Simple retry for transient errors
      const attempt = async (n: number): Promise<Response> => {
        const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'HTTP-Referer': window.location.origin,
            'X-Title': 'Website Chat Assistant',
          },
          body: JSON.stringify({
            model: "cognitivecomputations/dolphin3.0-mistral-24b:free",
            messages: [
              { role: 'system', content: systemContext },
              ...messages.slice(-5),
              userMessage
            ],
            temperature: 0.3,
            max_tokens: 700,
            top_p: 0.9,
            presence_penalty: 0.1,
            frequency_penalty: 0.1,
          })
        });
        if ((res.status === 429 || res.status >= 500) && n < 2) {
          await new Promise(r => setTimeout(r, 400 * (n + 1)));
          return attempt(n + 1);
        }
        return res;
      };

      const response = await attempt(0);

      if (!response.ok) {
        let errMsg = `HTTP ${response.status}`;
        try {
          const errBody = await response.json();
          if (errBody?.error) {
            errMsg += `: ${errBody.error?.message || JSON.stringify(errBody.error)}`;
          }
        } catch {}
        throw new Error(errMsg);
      }

      const data = await response.json();
      const raw = data.choices[0]?.message?.content || 'I apologize, but I\'m having trouble responding right now. Please try again.';

      // Normalize output: strip markdown-ish formatting and bullets
      const formatAssistant = (text: string) => {
        let t = text.trim();
        // Remove common markdown tokens
        t = t.replace(/\*\*([^*]+)\*\*/g, '$1'); // bold
        t = t.replace(/`([^`]+)`/g, '$1'); // inline code
        t = t.replace(/^\s*[-•\d+\.]+\s+/gm, ''); // bullets/numbers
        t = t.replace(/^#+\s*/gm, ''); // headings
        // Collapse excessive whitespace and multiple newlines
        t = t.replace(/[ \t]+/g, ' ');
        t = t.replace(/\n{3,}/g, '\n\n');
        return t;
      };

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: formatAssistant(raw),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('OpenRouter error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Sorry, I couldn't complete that request. ${error instanceof Error ? error.message : ''}\n\nTips: Ensure your site origin is allowlisted in OpenRouter, the API key is valid, and try again.`,
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChat = () => {
    if (typeof window !== 'undefined' && (window as any).anime) {
      if (isOpen) {
        window.anime!({
          targets: chatContainerRef.current,
          scale: [1, 0],
          opacity: [1, 0],
          translateY: [0, 20],
          duration: 300,
          easing: 'easeInBack',
          complete: () => setIsOpen(false)
        });
      } else {
        setIsOpen(true);
      }
    } else {
      setIsOpen(!isOpen);
    }
  };

  const TypingIndicator = () => (
    <div className="flex items-center space-x-2 text-gray-500">
      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
        <BotIcon />
      </div>
      <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center space-x-1">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-5 right-5 z-[9999] font-sans">
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="relative">
          <button
            onClick={toggleChat}
            className="group bg-gradient-to-r from-blue-light via-blue-medium to-blue-dark hover:from-blue-medium hover:via-blue-light hover:to-blue-dark text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
            style={{ 
              boxShadow: '0 10px 25px rgba(26, 117, 159, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.08)'
            }}
            aria-label="Open chat"
          >
            <ChatIcon />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-medium text-white text-xs rounded-full flex items-center justify-center animate-pulse shadow-lg">
              1
            </div>
          </button>
          
          {/* Pulse animation rings */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-blue-light to-blue-medium opacity-20 animate-ping -z-10"></div>
          <div className="pointer-events-none absolute inset-2 rounded-full bg-gradient-to-r from-blue-medium to-blue-dark opacity-30 animate-ping animation-delay-200 -z-10"></div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatContainerRef}
          className="bg-white/85 backdrop-blur-md rounded-2xl shadow-2xl w-[32rem] h-[40rem] sm:w-[34rem] lg:w-[36rem] max-w-[90vw] max-h-[85vh] flex flex-col overflow-hidden border border-white/20"
          style={{ 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.06)'
          }}
        >
          {/* Background Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
            // size is controlled by renderer to match container
          />

          {/* Header */}
          <div className="relative z-10 bg-gradient-to-r from-blue-light via-blue-medium to-blue-dark text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/25 rounded-full flex items-center justify-center">
                <BotIcon />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Quoretex Bot</h3>
                <p className="text-xs opacity-80">Online • Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="p-1.5 hover:bg-white/15 rounded-full transition-colors duration-200"
            >
              <MinimizeIcon />
            </button>
          </div>

          {/* Messages Area */}
          <div className="relative z-10 flex-1 overflow-y-auto p-4 space-y-3 bg-white/20">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-light/20 to-blue-medium/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BotIcon />
                </div>
                <p className="text-gray-600 text-sm font-medium mb-1">Welcome! I'm here to help</p>
                <p className="text-gray-500 text-xs">Ask me anything about our website or services</p>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
              >
                <div className={`flex items-end space-x-2 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-light to-blue-medium text-white'
                      : 'bg-blue-medium/15 text-blue-dark'
                  }`}>
                    {message.role === 'user' ? <UserIcon /> : <BotIcon />}
                  </div>
                  <div className={`rounded-2xl px-3 py-2 shadow-sm max-w-full break-words ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-light to-blue-medium text-white rounded-br-md'
                      : 'bg-white/90 text-blue-dark border border-white/30 rounded-bl-md'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="relative z-10 p-4 bg-white/80 backdrop-blur border-t border-white/20">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-white/30 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-light focus:border-transparent text-sm bg-white/90 text-blue-dark placeholder:text-slate-600 caret-blue-700 font-medium transition-all duration-200"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-gradient-to-r from-blue-light to-blue-dark hover:from-blue-medium hover:to-blue-dark disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.5);
          border-radius: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.7);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default FloatingChatWidget;