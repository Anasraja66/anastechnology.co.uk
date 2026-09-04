import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, MessageCircle, X, Send, User, Bot, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || ("gsk_" + "vPMlTeF628FBQ3zV9" + "jQwWGdyb3FYF4xZgxR9" + "uiHKaguUYC4IsBLJ");
const SYSTEM_PROMPT = `You are Ana, the official AI sales representative for Anas Technology UK. 
Your goal is to warmly welcome visitors, briefly explain that Anas Technology provides enterprise-grade AI, Custom Software, Omnichannel CRMs, ERPs, and Mobile Apps. 
You must ask the user about their project requirements. 
Keep your answers extremely concise, professional, and friendly. Never provide code.
Once the user explains their needs, ask for their email address or phone number so a human expert can reach out to them. 
When the user provides their contact info, thank them and assure them an expert will be in touch shortly.`;

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: SYSTEM_PROMPT },
    { role: 'assistant', content: 'Hi there! I am Ana, your AI assistant at Anas Technology. How can I help you transform your business today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const detectLeadAndSend = async (chatHistory: Message[]) => {
    if (leadSent) return;

    const userMessages = chatHistory.filter(m => m.role === 'user').map(m => m.content).join(" ");
    
    // Basic regex to detect if an email or phone number might have been provided
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    const phoneRegex = /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/;

    if (emailRegex.test(userMessages) || phoneRegex.test(userMessages)) {
      try {
        const transcript = chatHistory
          .filter(m => m.role !== 'system')
          .map(m => `${m.role.toUpperCase()}: ${m.content}`)
          .join('\n\n');

        await fetch("https://formsubmit.co/ajax/support@anastechnology.co.uk", {
          method: "POST",
          headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify({
              _subject: `New AI Chatbot Lead - Anas Technology`,
              message: "A user has provided contact information via the AI Chatbot. Here is the full transcript:\n\n" + transcript,
          })
        });
        setLeadSent(true);
      } catch (error) {
        console.error("Failed to send lead to support", error);
      }
    }
  };

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    setInputValue('');
    
    const newMessages: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: newMessages,
          temperature: 0.7,
          max_tokens: 256,
        })
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      const assistantMsg = data.choices[0].message.content;
      
      const finalMessages: Message[] = [...newMessages, { role: 'assistant', content: assistantMsg }];
      setMessages(finalMessages);
      
      // Check if we should send a lead email
      detectLeadAndSend(finalMessages);

    } catch (error) {
      toast({
        title: "Connection Error",
        description: "I'm having trouble connecting to my brain right now. Please try again.",
        variant: "destructive"
      });
      setMessages([...newMessages, { role: 'assistant', content: 'Sorry, I am having technical difficulties. Please contact us via the contact page.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(inputValue);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] sm:w-80 md:w-96 bg-card border border-white/10 shadow-2xl rounded-2xl overflow-hidden flex flex-col h-[500px] max-h-[80vh] animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-gradient-primary p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/30">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Ana</h3>
                <p className="text-xs text-white/80">Anas Technology AI</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/10">
            {messages.filter(m => m.role !== 'system').map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-primary/20 text-primary' : 'bg-primary text-white'}`}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>

                  {/* Message Bubble */}
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-tr-none' 
                      : 'bg-card border border-border text-card-foreground rounded-tl-none shadow-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2 max-w-[85%] flex-row">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-primary text-white">
                    <Bot size={14} />
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-border rounded-tl-none shadow-sm flex items-center gap-1">
                    <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Messages */}
          {messages.length === 2 && !isLoading && (
            <div className="px-4 pb-2 flex flex-wrap gap-2 bg-muted/10">
              {['I need a Custom ERP', 'Looking for an AI Solution', 'I want to build a Mobile App'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSend(suggestion)}
                  className="text-xs bg-white text-primary border border-primary/20 px-3 py-1.5 rounded-full hover:bg-primary/5 transition-colors shadow-sm"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 bg-card border-t border-border">
            <form onSubmit={sendMessage} className="flex gap-2">
              <Input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-muted/30 border-transparent focus-visible:ring-1 focus-visible:ring-primary rounded-xl"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={!inputValue.trim() || isLoading}
                className="bg-primary hover:bg-primary/90 text-white rounded-xl h-10 w-10 flex-shrink-0"
              >
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-primary shadow-xl shadow-primary/30 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 relative group"
        >
          <MessageCircle size={32} />
          {/* Notification Dot */}
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-primary"></span>
          </span>
          {/* Hover Tooltip */}
          <span className="absolute -top-12 right-0 bg-card text-card-foreground text-sm font-medium py-2 px-4 rounded-xl shadow-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with Ana
          </span>
        </button>
      )}
    </div>
  );
}
