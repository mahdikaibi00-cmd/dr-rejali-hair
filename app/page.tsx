"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronDown, MapPin, Phone, CheckCircle, ShieldCheck, Clock, Award, Microscope, Sparkles, Play, Instagram, Linkedin, Facebook, Youtube, Users, PenTool, UserCheck, Target, MessageSquare, X } from "lucide-react";
import { Inter, Playfair_Display } from "next/font/google";

// Typography
const inter = Inter({ subsets: ["latin"], display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], display: "swap" });

// The elite champagne/bronze hex
const CHAMPAGNE = "#9A806B";

// --- INTERACTIVE MARQUEE COMPONENT ---
const ReviewMarquee = ({ playfair }: { playfair: any }) => {
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  
  // Dragging states
  const isDragging = React.useRef(false);
  const startX = React.useRef(0);
  const scrollLeftPos = React.useRef(0);

  // Auto-scroll logic
  React.useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let animationFrameId: number;

    const scroll = () => {
      if (!isHovered && !isDragging.current) {
        scroller.scrollLeft += 1; 
        if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
          scroller.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    if (scrollerRef.current) {
      startX.current = e.pageX - scrollerRef.current.offsetLeft;
      scrollLeftPos.current = scrollerRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; 
    scrollerRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  const reviews = [
    { quote: "100% pain free. I had my first time transplant in Turkey and I can tell you with confidence TECHNIQUE AND KNOWLEDGE MATTER. The care I received from Dr. Rejali and his team was amazing.", author: "Amir M." },
    { quote: "My hair looks amazing only 7 months in. As soon as I met him I felt super comfortable... Everything he told me about what to expect was a hundred percent accurate.", author: "HC" },
    { quote: "Dr. Rejali is a very caring and result-oriented professional. He is very passionate in the artistic aspect of hair transplants... pleased with the results and attention to detail.", author: "AP" },
    { quote: "I consider Dr. Rejali to be highly competent and skilled, and I usually suggest him to any of my friends and family members who are looking for a reputable hair restoration expert.", author: "Javad R." },
    { quote: "Dr. Rajali and his team answered all questions. I had FUE procedure done and it was great! Talked me thru everything going on so excited for end results!", author: "Brandon Janelli" },
    { quote: "Great Hair Transplant Experience. Dr rejali was thorough with his explanations and expectations. Has been communicative both pre and post op. Was always checking my comfort levels.", author: "Patient" },
  ];

  return (
    <section id="reviews" className="py-12 lg:py-16 bg-[#FAFAFA] border-y border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 lg:mb-12 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-light text-neutral-900 mb-4 lg:mb-6 tracking-tight leading-none">
          Undeniable{' '}
          <span className={`${playfair.className} italic text-transparent bg-clip-text bg-gradient-to-r from-[#826a56] via-[#9A806B] to-[#c5ad9a] drop-shadow-[0_4px_15px_rgba(154,128,107,0.4)]`}>
            Proof.
          </span>
        </h2>
        <p className="text-[#9A806B] uppercase tracking-[0.25em] text-[10px] lg:text-[11px] font-bold">100% Authentic Google Reviews</p>
      </div>
      
      <div className="relative w-full max-w-[1600px] mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        <div 
          ref={scrollerRef}
          className="flex overflow-x-auto pb-8 lg:pb-12 pt-4 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

          {[1, 2].map((set) => (
            <div key={set} className="flex gap-4 lg:gap-6 pr-4 lg:pr-6 w-max">
              {reviews.map((review, i) => (
                <a 
                  key={`${set}-${i}`} 
                  href="https://search.google.com/local/reviews?placeid=ChIJOefig5sJK4cRNZ_I2qPy4Vs" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[280px] md:w-[420px] p-6 lg:p-8 bg-white border border-neutral-100 flex flex-col justify-between shrink-0 whitespace-normal rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(154,128,107,0.1)] hover:-translate-y-2 hover:border-[#9A806B]/30 transition-all duration-500 group pointer-events-auto"
                  draggable="false"
                >
                  <div>
                    <div className="flex text-[#9A806B] mb-4 lg:mb-6">
                      {[...Array(5)].map((_, idx) => <Star key={idx} size={13} className="lg:w-[15px] lg:h-[15px]" fill="currentColor" strokeWidth={0} />)}
                    </div>
                    <p className="text-neutral-600 font-light leading-relaxed italic text-[13px] lg:text-[15px] group-hover:text-neutral-900 transition-colors duration-300">"{review.quote}"</p>
                  </div>
                  
                  <div className="mt-6 lg:mt-8 flex items-center justify-between border-t border-neutral-100 pt-4 lg:pt-6">
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#FAFAFA] border border-neutral-200 flex items-center justify-center text-neutral-600 font-bold text-xs lg:text-sm uppercase shrink-0 shadow-sm group-hover:border-[#9A806B]/50 group-hover:text-[#9A806B] transition-colors duration-300">
                        {review.author.charAt(0)}
                      </div>
                      <p className="text-neutral-900 font-bold uppercase tracking-widest text-[9px] lg:text-[11px]">{review.author}</p>
                    </div>
                    
                    <div className="bg-[#FAFAFA] p-1.5 lg:p-2 rounded-full border border-neutral-100 group-hover:bg-white transition-colors duration-300">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 lg:w-4 lg:h-4">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default function RejaliMedical() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // AI CONCIERGE STATES & LOGIC
  const [isTriageOpen, setIsTriageOpen] = useState(false);
  const [hasClickedBot, setHasClickedBot] = useState(false);
  const [botUnlocked, setBotUnlocked] = useState(false);
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState<{text: string | React.ReactNode, sender: 'bot' | 'user'}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showTeaser, setShowTeaser] = useState(true);

  // The Ghost UI Effect: Teaser vanishes after exactly 3 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowTeaser(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Form Submit & The Automated Sequence
  const handleUnlockBot = (e: React.FormEvent) => {
    e.preventDefault();
    setBotUnlocked(true);
    setIsTyping(true);
    
    // Message 1: Instant
    setMessages([{ 
      text: `Hi ${userName || 'there'}, my name is Victoria. I am Dr. Rejali’s Private AI Concierge.`, 
      sender: 'bot' 
    }]);
    
    // Message 2: 1.5 Second Delay
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "I respect your time, so let's skip the waiting room. I am fully equipped to assist you with absolutely anything related to the clinic—from procedure details and recovery timelines, to pricing and Dr. Rejali's background.", 
        sender: 'bot' 
      }]);
    }, 1500);

    // Message 3: 3.0 Second Delay
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "If you want to fast-track your journey, here are three ways we can start right now:", 
        sender: 'bot' 
      }]);
    }, 3000);

    // Message 4: 4.5 Second Delay (The Core Value)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: (
          <ul className="space-y-3">
            <li><strong>📸 Instant Scalp Analysis:</strong> Upload a photo of your current hair, and I will instantly run it through our AI to give you a precise graft estimate.</li>
            <li><strong>🗓️ Priority Booking:</strong> Bypass the front desk and secure a private, one-on-one consultation directly with Dr. Rejali.</li>
            <li><strong>💎 The Solo FUE Blueprint:</strong> I can break down exactly what makes our 100% doctor-performed FUE procedure the absolute gold standard in Arizona.</li>
          </ul>
        ), 
        sender: 'bot' 
      }]);
    }, 4500);

    // Message 5: 6.0 Second Delay (The Call to Action & Stop Typing)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Ask me anything you'd like to know, or let me know if you want to start with the free scalp scan!", 
        sender: 'bot' 
      }]);
      setIsTyping(false);
    }, 6000);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const glassPillStyle = "backdrop-blur-xl bg-white/5 border border-white/10 p-2 pr-6 rounded-full flex items-center gap-4 shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:bg-white/10 transition-colors duration-300";

  // Smooth Scroll Handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={`min-h-screen selection:bg-[#9A806B] selection:text-white bg-[#FAFAFA] ${inter.className} overflow-x-hidden relative`}>
      
      {/* GLOBAL HEADER - PREMIUM GLASSMORPHISM */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0B10]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-500">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-10 h-20 lg:h-28 flex items-center justify-between relative">
          
          {/* MOBILE LEFT: Functional Sandwich Menu */}
          <div className="flex xl:hidden w-1/3 items-center justify-start">
             <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white/90 hover:text-[#9A806B] transition-colors p-2 -ml-2"
             >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
             </button>
          </div>

          {/* DESKTOP LEFT: Extensive Navigation */}
          <nav className="hidden xl:flex items-center gap-8 text-[10px] font-semibold text-white/60 tracking-[0.2em] uppercase w-4/12">
            {['Expertise', 'Transformations', 'The Doctor', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#9A806B] transition-colors duration-300 relative group whitespace-nowrap">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#9A806B] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CENTER: Logo (Dead Center) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
             <img 
              src="/logo.png" 
              alt="Rejali Medical Logo" 
              className="h-10 lg:h-16 w-auto object-contain opacity-95 drop-shadow-[0_0_20px_rgba(154,128,107,0.4)] cursor-pointer"
              onClick={(e) => handleSmoothScroll(e as any, 'top')}
            />
          </div>

          {/* MOBILE RIGHT: Call CTA */}
          <div className="flex xl:hidden w-1/3 items-center justify-end">
             <a href="tel:4809452688" className="bg-[#9A806B] p-2.5 rounded-full text-black hover:bg-white transition-colors shadow-[0_0_15px_rgba(154,128,107,0.4)]">
                <Phone className="w-4 h-4 fill-current" />
             </a>
          </div>

          {/* DESKTOP RIGHT: Call Button & Book Consultation CTA */}
          <div className="hidden xl:flex items-center justify-end gap-6 lg:gap-8 w-4/12">
            <a href="tel:4809452688" className="flex items-center gap-3 group">
              <div className="bg-white/5 p-2 rounded-full border border-white/10 group-hover:border-[#9A806B]/50 transition-colors duration-300">
                <Phone className="w-3.5 h-3.5 text-[#9A806B]" />
              </div>
              <div className="flex flex-col text-right">
                <span className="text-[8px] text-white/40 uppercase tracking-widest font-semibold mb-0.5">Direct Line</span>
                <span className="text-[11px] text-white/90 tracking-widest font-medium group-hover:text-[#9A806B] transition-colors duration-300">480-945-2688</span>
              </div>
            </a>
            <button className="relative group overflow-hidden bg-transparent border border-[#9A806B]/50 text-[#9A806B] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-500 hover:border-[#9A806B] rounded-sm shrink-0">
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">Book Consultation</span>
              <div className="absolute inset-0 h-full w-full bg-[#9A806B] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-[#0A0B10]/95 backdrop-blur-3xl flex flex-col px-6 py-8"
          >
            <div className="flex justify-between items-center mb-16">
              <img src="/logo.png" alt="Rejali Medical Logo" className="h-10 w-auto" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white/70 hover:text-white p-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <nav className="flex flex-col gap-8 text-lg font-light tracking-widest text-white/80 uppercase">
              {['Expertise', 'Transformations', 'The Doctor', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#9A806B] transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <div className="mt-auto pb-8">
              <button className="w-full bg-[#9A806B] text-black py-5 text-xs font-bold uppercase tracking-[0.2em] rounded-sm">
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div id="top"></div>

      {/* SECTION 1: THE HOOK (DARK MODE HERO) */}
      <section className="relative pt-[90px] pb-0 lg:pt-24 lg:pb-0 bg-[#0A0B10] overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#9A806B]/[0.05] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 w-full grid lg:grid-cols-12 gap-0 lg:gap-12 items-end relative z-10">
          
          {/* LEFT COLUMN: Copy & Conversion */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
            className="lg:col-span-7 relative z-20 pt-4 lg:pt-16 pb-0 lg:pb-24 flex flex-col"
          >
            <h3 className="text-[#9A806B] font-semibold text-[10px] lg:text-sm tracking-widest mb-2 lg:mb-6 drop-shadow-[0_0_8px_rgba(154,128,107,0.4)]">
              #TheSoloFUEAdvantage
            </h3>
            
            <h1 className="text-[38px] lg:text-[5.5rem] font-light text-white leading-[1.05] mb-3 lg:mb-8 tracking-tight">
              Mastery in <br/>
              <span className={`${playfair.className} italic text-[#9A806B]`}>Every Graft.</span>
            </h1>
            
            <p className="text-white/70 font-light text-[13px] lg:text-lg leading-[1.6] max-w-[600px] mb-6 lg:mb-12">
              Experience Arizona's only true <strong className="text-white font-medium">'Solo FUE'</strong> procedure. From extraction to implantation, your surgery is performed entirely by Dr. Rejali—never delegated to technicians.
            </p>
            
            {/* BUTTONS */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3 lg:gap-5 mb-2 lg:mb-14 relative z-30 w-full lg:w-auto">
              <button className="w-full bg-[#9A806B] text-black py-3.5 lg:px-10 lg:py-5 text-[10px] lg:text-sm font-bold uppercase tracking-wider lg:tracking-widest hover:bg-[#826a56] transition-all duration-300 shadow-[0_0_20px_rgba(154,128,107,0.25)] rounded-sm whitespace-nowrap">
                Free Consult
              </button>
              <a 
                href="#doctor-profile" 
                onClick={(e) => handleSmoothScroll(e, 'doctor-profile')}
                className="w-full flex items-center justify-center text-center bg-transparent border border-white/20 text-white py-3.5 lg:px-10 lg:py-5 text-[10px] lg:text-sm font-bold uppercase tracking-wider lg:tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-sm whitespace-nowrap cursor-pointer"
              >
                Learn More
              </a>
            </div>

            {/* DESKTOP ONLY TRUST BAR */}
            <div className="hidden lg:flex pt-8 border-t border-white/10 flex-row items-center gap-5 relative z-30">
              <div className={glassPillStyle}>
                <div className="bg-[#9A806B]/20 p-2 rounded-full flex items-center justify-center h-12 w-12 shrink-0">
                    <ShieldCheck className="text-[#9A806B] w-6 h-6" />
                </div>
                <div>
                    <p className={`${playfair.className} text-white font-bold text-[15px] tracking-wider leading-none mb-1`}>ABHRS</p>
                    <p className="text-white/60 text-[11px] font-light uppercase tracking-widest">Diplomate</p>
                </div>
              </div>

              <div className={glassPillStyle}>
                 <div className="bg-[#9A806B] p-2 rounded-full flex items-center justify-center h-12 w-12 shrink-0 shadow-[0_0_10px_rgba(154,128,107,0.3)]">
                    <span className={`${playfair.className} text-black font-bold text-[15px] leading-none pt-0.5`}>#1</span>
                 </div>
                 <div className="flex flex-col">
                    <p className="text-white text-[13px] font-bold tracking-wide leading-none mb-1">
                      RealSelf <span className="font-light text-white/60">Top Doctor</span>
                    </p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#9A806B] animate-pulse"></div>
                      <span className="text-[#9A806B] text-[10px] uppercase tracking-widest font-bold">100% Authentic</span>
                    </div>
                  </div>
              </div>

              <div className={glassPillStyle}>
                 <div className="bg-white p-2 rounded-full flex items-center justify-center h-12 w-12 shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                 </div>
                 <div className="flex flex-col">
                    <div className="flex gap-1 text-[#9A806B] mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" strokeWidth={0} />)}
                    </div>
                    <p className="text-white text-[13px] font-bold tracking-wide leading-none">
                      4.8/5 <span className="font-light text-white/60 ml-0.5">Google Reviews</span>
                    </p>
                  </div>
              </div>
            </div>
          </motion.div>

          {/* MOBILE ONLY: Grounded Doctor & Floating Badges */}
          <div className="flex lg:hidden relative w-full flex-col items-center justify-end mt-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[150%] bg-[radial-gradient(circle,rgba(154,128,107,0.3)_0%,rgba(0,0,0,0)_60%)] blur-2xl -z-10" />
            
            <img 
              src="/hero-dr.png" 
              alt="Dr. Farhad Rejali" 
              className="w-full max-w-[260px] h-auto object-contain relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" 
              style={{ 
                WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 25%)', 
                maskImage: 'linear-gradient(to top, transparent 0%, black 25%)' 
              }}
            />

            <div className="absolute bottom-4 left-0 w-full flex flex-wrap justify-center gap-2 px-2 z-30">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_8px_16px_rgba(0,0,0,0.4)]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9A806B]" />
                <span className="text-[9px] text-white font-bold tracking-widest uppercase">ABHRS</span>
              </div>
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_8px_16px_rgba(0,0,0,0.4)]">
                <span className={`${playfair.className} text-[10px] font-bold text-black bg-[#9A806B] rounded-full px-1.5 leading-none py-0.5`}>#1</span>
                <span className="text-[9px] text-white font-bold tracking-widest uppercase">RealSelf</span>
              </div>
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_8px_16px_rgba(0,0,0,0.4)]">
                <Star className="w-3.5 h-3.5 text-[#9A806B] fill-current" />
                <span className="text-[9px] text-white font-bold tracking-widest uppercase">4.8/5</span>
              </div>
            </div>
          </div>

          {/* DESKTOP ONLY: The Doctor Image */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }} 
            className="hidden lg:flex lg:col-span-5 relative w-full items-end justify-end mt-12 lg:mt-0 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle,rgba(154,128,107,0.22)_0%,rgba(0,0,0,0)_65%)] blur-3xl -z-10" />
            <div className="relative w-full max-w-[550px] flex justify-end">
              <img 
                src="/hero-dr.png" 
                alt="Dr. Farhad Rejali" 
                className="object-contain w-full relative z-10 drop-shadow-[-20px_20px_40px_rgba(0,0,0,0.8)]" 
                style={{ 
                  WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)', 
                  maskImage: 'linear-gradient(to top, transparent 0%, black 15%)' 
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE AUTHORITY MARQUEE */}
      <div className="bg-[#9A806B] py-4 lg:py-6 overflow-hidden flex shadow-inner">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 20, repeat: Infinity }} className="flex whitespace-nowrap gap-16 lg:gap-24 px-6 lg:px-12 items-center text-black uppercase tracking-[0.2em] text-[10px] lg:text-xs font-bold">
          <span>American Board of Hair Restoration Surgery</span>
          <span>•</span>
          <span>RealSelf Top Doctor</span>
          <span>•</span>
          <span>Diplomate ABHRS</span>
          <span>•</span>
          <span>Solo FUE Specialist</span>
          <span>•</span>
          <span>American Board of Hair Restoration Surgery</span>
          <span>•</span>
          <span>RealSelf Top Doctor</span>
          <span>•</span>
          <span>Diplomate ABHRS</span>
          <span>•</span>
          <span>Solo FUE Specialist</span>
        </motion.div>
      </div>

      {/* SECTION 2.1: THE PINNACLE OF SURGICAL EXCELLENCE (ROLEX TIER) */}
      <section className="relative py-16 lg:py-28 bg-white overflow-hidden z-20">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#fcfcfb] via-[#f6efe9] to-[#ebdcd0] opacity-90"
          style={{ clipPath: 'polygon(0 0, 100% 4%, 100% 100%, 0 96%)' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px] pointer-events-none opacity-60" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center mb-16 lg:mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6 lg:mb-8">
              <div className="w-8 lg:w-12 h-[1px] bg-[#9A806B]"></div>
              <span className="text-[#9A806B] uppercase tracking-[0.25em] text-[9px] lg:text-[10px] font-bold">Uncompromising Quality</span>
              <div className="w-8 lg:w-12 h-[1px] bg-[#9A806B]"></div>
            </div>
            
            <h2 className="text-3xl lg:text-[3.5rem] font-light text-neutral-900 leading-[1.15] mb-6 lg:mb-8 tracking-tight">
              The Pinnacle of Surgical Excellence. <br className="hidden lg:block"/>
              <span className={`${playfair.className} italic text-[#9A806B] drop-shadow-sm`}>Here is Why.</span>
            </h2>
            
            <p className="text-neutral-600 font-light text-[14px] lg:text-lg leading-[1.8] max-w-3xl mx-auto">
              For nearly two decades, Dr. Farhad Rejali has redefined the standard of hair restoration in Scottsdale. As an ABHRS Diplomate, he combines uncompromising surgical precision with advanced regenerative science. Unlike high-volume commercial clinics that delegate your surgery to technicians, Dr. Rejali personally executes the entire medical phase of your FUE procedure. We guarantee absolute privacy, elite artistry, and permanent, undetectable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 lg:gap-y-12 gap-x-4 lg:gap-x-10 mb-16 lg:mb-20 relative">
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#9A806B]/30 to-transparent -z-10" />

            {[
              { icon: Clock, num: "20+", sub: "Years of Surgical Mastery", delay: 0 },
              { icon: UserCheck, num: "100%", sub: '"Solo FUE" Execution', delay: 0.15 },
              { icon: ShieldCheck, text: "ABHRS", sub: "Board Certified Diplomate", delay: 0.3 },
              { icon: Award, num: "#1", sub: "Top Doctor on RealSelf", delay: 0.45 },
              { icon: Target, num: "30-50", sub: "Grafts/cm² (Elite Dense Packing)", delay: 0.6 },
            ].map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: metric.delay }}
                className={`flex flex-col items-center text-center ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <div className="relative mb-5 lg:mb-6 group cursor-pointer">
                  <motion.div 
                    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }} 
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: metric.delay }}
                    className="absolute inset-0 bg-[#9A806B] rounded-full blur-[12px]"
                  />
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-white border border-[#9A806B]/20 rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(154,128,107,0.15)] group-hover:-translate-y-2 transition-transform duration-500">
                    <metric.icon className="w-6 h-6 lg:w-8 lg:h-8 text-[#9A806B] drop-shadow-sm" strokeWidth={1.5} />
                  </div>
                </div>

                {metric.num ? (
                  <p className={`${playfair.className} text-2xl lg:text-4xl font-bold text-neutral-900 mb-1 lg:mb-2 drop-shadow-sm`}>{metric.num}</p>
                ) : (
                  <p className={`${playfair.className} text-xl lg:text-3xl font-bold text-neutral-900 mb-1 lg:mb-2 mt-1 drop-shadow-sm`}>{metric.text}</p>
                )}
                <p className="text-[#9A806B] text-[9px] lg:text-[11px] uppercase tracking-widest font-bold leading-relaxed max-w-[120px] lg:max-w-[140px] opacity-90">{metric.sub}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <button className="relative group overflow-hidden bg-[#121A22] text-[#9A806B] px-8 lg:px-14 py-4 lg:py-5 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 rounded-sm shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(154,128,107,0.4)]">
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">REQUEST A PRIVATE CONSULTATION</span>
              <div className="absolute inset-0 h-full w-full bg-[#9A806B] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* RE-ENGINEERED SECTION 3: THE PARADIGM SHIFT (EDITORIAL LUXURY) */}
      <section id="paradigm" className="py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-neutral-100 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 lg:gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <h2 className={`${playfair.className} text-3xl lg:text-5xl text-neutral-900 leading-[1.2] tracking-tight`}>
               The <br className="hidden md:block"/><span className="italic text-[#9A806B]">Solo FUE</span> Mandate.
             </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="border-l border-[#9A806B]/30 pl-6 lg:pl-10 py-2">
            <p className="text-[14px] lg:text-base text-neutral-500 leading-[1.8] font-light">
              In an industry heavily compromised by delegated technicians and automated machines, Dr. Rejali operates on a completely different echelon. He personally executes the entire medical phase of your procedure. No compromises. No passing the scalpel. Just pure, uncompromised surgical mastery from a true medical doctor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: THE ELITE SERVICES - REDUCED PADDING */}
      <section id="services" className="py-12 lg:py-16 bg-[#FAFAFA] border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { title: "FUE & FUT Transplant", desc: "High-density packing (30-50 grafts/cm) for maximum, natural yield." },
              { title: "Long Hair FUE", desc: "Immediate visual results. Absolutely no shaving required." },
              { title: "Regenerative Medicine", desc: "Advanced stem-cell exosomes and proprietary PRP protocols." },
              { title: "Facial Aesthetics", desc: "Non-surgical facelifts, thread lifts, and precision neuromodulators." }
            ].map((service, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }} className="group p-6 lg:p-8 bg-white border border-neutral-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-[#9A806B]/30 transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[240px] lg:min-h-[280px]">
                <div>
                  <div className="w-10 h-10 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-5 lg:mb-6 group-hover:bg-[#9A806B]/10 transition-colors">
                    <ShieldCheck className="text-neutral-400 group-hover:text-[#9A806B] transition-colors w-5 h-5" />
                  </div>
                  <h3 className="text-[16px] lg:text-lg font-medium text-neutral-900 mb-2 lg:mb-3">{service.title}</h3>
                  <p className="text-neutral-500 font-light leading-relaxed text-[13px] lg:text-sm">{service.desc}</p>
                </div>
                <div className="mt-6 flex items-center text-[10px] lg:text-xs font-semibold uppercase tracking-widest text-[#9A806B] opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <span className="ml-2">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: THE DOCTOR (SCREENSHOT AESTHETIC MATCH) */}
      <section id="doctor-profile" className="relative pt-16 lg:pt-24 pb-20 lg:pb-32 bg-[#0A0B10] text-white overflow-hidden">
        <div className="absolute bottom-0 left-[-10%] w-[120%] h-[150px] lg:h-[250px] bg-white rounded-t-[100%] z-0 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9A806B]/[0.05] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative">
              <div className="flex items-center gap-3 mb-4 lg:mb-5">
                <Award className="w-4 h-4 lg:w-5 lg:h-5 text-[#9A806B]" />
                <h4 className="text-[#9A806B] font-bold tracking-[0.2em] text-[9px] lg:text-[11px] uppercase">
                  DR. FARHAD REJALI, NMD, MD (IRN), ABHRS
                </h4>
              </div>

              <h2 className={`${playfair.className} text-3xl lg:text-5xl font-light leading-[1.15] mb-6 lg:mb-8`}>
                Experienced Hair Restoration <br/>
                <span className="italic text-[#9A806B]">& Aesthetic Medicine</span>
              </h2>
              
              <div className="space-y-4 lg:space-y-6 text-white/70 font-light leading-[1.7] lg:leading-[1.8] text-[14px] lg:text-[15px]">
                <p>
                  Dr. Farhad Rejali is a dual-trained physician, hair restoration and aesthetic medicine doctor, and a diplomate of the American Board of Hair Restoration Surgery. With advanced expertise in both medical and naturopathic disciplines, he specializes in modern hair transplant procedures and regenerative therapies designed to achieve natural, lasting results.
                </p>
                <p>
                  Dr. Rejali combines refined follicular restoration techniques with biologic treatments such as topical exosomes and PRP to optimize scalp health and enhance graft survival. His approach blends precision, artistry, and medical innovation to restore hair density and confidence while maintaining a natural look.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="relative rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)] group cursor-pointer">
              <div className="absolute inset-0 border-[2px] lg:border-[3px] border-white/10 rounded-2xl z-20 pointer-events-none" />
              <img src="https://rejalimedical.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-29-at-16.33.11_af5b63d0.jpg?q=80&w=1000&auto=format&fit=crop" alt="Clinic Procedure" className="w-full h-[250px] lg:h-[400px] object-cover grayscale-[30%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center z-10">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-[#9A806B]/90 group-hover:border-[#9A806B] group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white ml-1 lg:ml-1.5 fill-current" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="relative z-20 w-full max-w-[1200px] mx-auto mt-10 lg:mt-24 drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <div className="h-2.5 lg:h-3.5 w-full bg-[#9A806B] rounded-t-lg mx-auto relative z-30" style={{ width: '99%' }}></div>
            <div className="bg-[#1C202B] pt-8 lg:pt-12 pb-16 lg:pb-20 px-4 relative z-20" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 lg:gap-y-12 gap-x-4 text-center divide-x divide-white/[0.08]">
                
                <div className="flex flex-col items-center justify-center px-2 lg:px-4">
                  <Star className="w-6 h-6 lg:w-8 lg:h-8 text-[#9A806B] mb-3 lg:mb-5" strokeWidth={1.5} fill="currentColor" />
                  <p className={`${playfair.className} text-lg lg:text-2xl font-bold text-white mb-1 lg:mb-2 tracking-wide`}>20+ Years of</p>
                  <p className="text-white/80 text-[11px] lg:text-[14px] font-medium">Experience</p>
                </div>

                <div className="flex flex-col items-center justify-center px-2 lg:px-4">
                  <Award className="w-6 h-6 lg:w-8 lg:h-8 text-[#9A806B] mb-3 lg:mb-5" strokeWidth={1.5} fill="currentColor" />
                  <p className={`${playfair.className} text-lg lg:text-2xl font-bold text-white mb-1 lg:mb-2 tracking-wide`}>ABHRS Diplomate</p>
                  <p className="text-white/80 text-[11px] lg:text-[14px] font-medium">Top Hair Surgeon</p>
                </div>

                <div className="flex flex-col items-center justify-center px-2 lg:px-4">
                  <Users className="w-6 h-6 lg:w-8 lg:h-8 text-[#9A806B] mb-3 lg:mb-5" strokeWidth={1.5} fill="#9A806B" fillOpacity={0.2} />
                  <p className={`${playfair.className} text-lg lg:text-2xl font-bold text-white mb-1 lg:mb-2 tracking-wide`}>Solo FUE</p>
                  <p className="text-white/80 text-[11px] lg:text-[14px] font-medium">100% Doctor Performed</p>
                </div>

                <div className="flex flex-col items-center justify-center px-2 lg:px-4">
                  <PenTool className="w-6 h-6 lg:w-8 lg:h-8 text-[#9A806B] mb-3 lg:mb-5" strokeWidth={1.5} />
                  <p className={`${playfair.className} text-lg lg:text-2xl font-bold text-white mb-1 lg:mb-2 tracking-wide`}>Aesthetic Master</p>
                  <p className="text-white/80 text-[11px] lg:text-[14px] font-medium">Non-Surgical Lifts</p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: THE LEAK-PROOF MAGNET (BRIGHT MODE) */}
      <section className="pt-8 pb-16 lg:pt-10 lg:pb-24 bg-white relative overflow-hidden border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center md:text-left">
            <h2 className="text-3xl lg:text-5xl font-light text-neutral-900 mb-4 lg:mb-6 tracking-tight">
              The Insider’s Guide to <br/><span className={`${playfair.className} italic text-[#9A806B]`}>Hair Restoration.</span>
            </h2>
            <p className="text-neutral-500 font-light text-[14px] lg:text-lg mb-6 lg:mb-8 leading-relaxed">
              Don't risk your scalp to a technician. Download our free elite guide to understand the exact, uncompromising questions you must ask before booking an FUE transplant.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <input type="email" placeholder="Enter your best email..." className="bg-[#FAFAFA] border border-neutral-200 text-neutral-900 px-6 py-3.5 lg:py-4 focus:outline-none focus:border-[#9A806B] transition-colors w-full rounded-sm text-sm" />
              <button className="bg-[#9A806B] text-black px-8 py-3.5 lg:py-4 font-bold uppercase tracking-widest text-[11px] lg:text-[13px] hover:bg-[#826a56] hover:text-white transition-colors whitespace-nowrap rounded-sm shadow-[0_10px_20px_rgba(154,128,107,0.2)]">
                Download Guide
              </button>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex justify-center perspective-[2000px] py-6 lg:py-12">
            
            {/* --- ZERO-MISTAKE CSS 3D HARDCOVER BOOK --- */}
            <div className="relative w-[200px] h-[280px] lg:w-[250px] lg:h-[350px] group cursor-pointer z-20">
              <div 
                className="w-full h-full relative transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-25deg) rotateX(8deg)' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'rotateY(-15deg) rotateX(12deg) translateY(-10px) scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'rotateY(-25deg) rotateX(8deg) scale(1)'}
              >
                <div className="absolute bottom-[-30px] left-[10px] w-[90%] h-[30px] bg-black/25 blur-[15px] transition-all duration-700 group-hover:blur-[25px] group-hover:bg-black/15 group-hover:bottom-[-40px]" style={{ transform: 'translateZ(-20px) rotateX(90deg)' }} />
                
                {/* FRONT COVER */}
                <div className="absolute inset-0 bg-[#0A0B10] border border-[#9A806B]/30 flex flex-col justify-center text-center z-20 overflow-hidden rounded-r-[2px]" style={{ transform: 'translateZ(20px)', backfaceVisibility: 'hidden' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A1D24] via-[#0A0B10] to-[#000000] pointer-events-none" />
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/80 via-transparent to-black/20 border-r border-white/5 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10 w-full flex flex-col items-center px-4 lg:px-6 mt-2 lg:mt-4">
                    <img src="/logo.png" alt="Rejali Medical Logo" className="w-auto h-12 lg:h-20 mb-6 lg:mb-8 opacity-95 drop-shadow-[0_0_15px_rgba(154,128,107,0.35)]" />
                    <div className="w-8 lg:w-12 h-[1px] bg-[#9A806B] mb-4 lg:mb-5" />
                    <h4 className="text-[#9A806B] uppercase tracking-[0.25em] text-[8px] lg:text-[10px] font-bold mb-3 lg:mb-4">Exclusive Report</h4>
                    <h3 className={`text-white ${playfair.className} italic text-[24px] lg:text-[34px] leading-[1.1] drop-shadow-lg`}>The Solo FUE <br/>Advantage</h3>
                  </div>
                </div>

                {/* BACK COVER */}
                <div className="absolute inset-0 bg-[#0A0B10] border border-white/10 rounded-l-[2px]" style={{ transform: 'translateZ(-20px) rotateY(180deg)' }} />
                
                {/* SPINE */}
                <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#050608] via-[#121A22] to-[#0A0B10] border-y border-l border-[#9A806B]/30 flex items-center justify-center shadow-inner" style={{ width: '40px', transform: 'translateX(-20px) rotateY(-90deg)' }}>
                  <span className="text-[#9A806B]/70 tracking-[0.3em] text-[7px] lg:text-[9px] uppercase font-bold rotate-[-90deg] whitespace-nowrap">Dr. Farhad Rejali — Hair Restoration</span>
                </div>

                {/* PAGES */}
                <div className="absolute right-0 top-[3px] bottom-[3px] bg-white border-y border-r border-neutral-300" style={{ width: '36px', transform: 'translateX(18px) rotateY(90deg)' }}>
                  <div className="w-full h-full opacity-40" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, #d4d4d4, #d4d4d4 1px, transparent 1px, transparent 3px)' }} />
                </div>
                <div className="absolute left-[3px] right-[3px] top-0 bg-[#f5f5f5] border-t border-neutral-300 shadow-[inset_0_-3px_5px_rgba(0,0,0,0.05)]" style={{ height: '36px', transform: 'translateY(-18px) rotateX(90deg)' }}>
                  <div className="w-full h-full opacity-40" style={{ backgroundImage: 'repeating-linear-gradient(to right, #d4d4d4, #d4d4d4 1px, transparent 1px, transparent 3px)' }} />
                </div>
                <div className="absolute left-[3px] right-[3px] bottom-0 bg-[#f5f5f5] border-b border-neutral-300 shadow-[inset_0_3px_5px_rgba(0,0,0,0.05)]" style={{ height: '36px', transform: 'translateY(18px) rotateX(-90deg)' }}>
                  <div className="w-full h-full opacity-40" style={{ backgroundImage: 'repeating-linear-gradient(to right, #d4d4d4, #d4d4d4 1px, transparent 1px, transparent 3px)' }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: UNDENIABLE PROOF (SCROLLABLE & CLICKABLE MARQUEE) */}
      <ReviewMarquee playfair={playfair} />

      {/* SECTION 8: FRICTIONLESS CLARITY (FAQ - BRIGHT MODE LUXURY) */}
      <section className="py-16 lg:py-20 bg-white border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-light text-neutral-900 mb-4 lg:mb-6">
              Frictionless <span className={`${playfair.className} italic text-[#9A806B]`}>Clarity.</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#9A806B] mx-auto opacity-50"></div>
          </div>
          <div className="space-y-1">
            {[
              { q: "What hair transplant and hair restoration procedures does Dr. Rejali offer in Arizona?", a: "Dr. Rejali offers a full spectrum of advanced hair restoration solutions, including FUE (Follicular Unit Extraction) and FUT (Follicular Unit Transplantation) hair transplant procedures. He also provides regenerative hair therapies designed to support scalp health, strengthen existing hair, and enhance overall hair density. Each treatment plan is fully customized to the patient’s needs and goals." },
              { q: "Who is a good candidate for a hair transplant with Dr. Rejali?", a: "Good candidates include men and women experiencing genetic hair loss, thinning hair, or receding hairlines who have sufficient donor hair. During consultation, Dr. Rejali evaluates hair pattern, scalp health, medical history, and expectations to determine the most appropriate treatment." },
              { q: "Does Dr. Rejali personally perform the hair transplant procedure?", a: "Yes. Dr. Rejali personally performs and supervises all critical steps of the hair transplant, including hairline design, donor extraction, and graft placement, ensuring precision, safety, and consistently natural results." },
              { q: "How long does a hair transplant procedure take?", a: "Most hair transplant procedures take approximately 4-10 hours, depending on the method, number of grafts required and the complexity of the case. Patient comfort and safety are prioritized throughout the procedure." },
              { q: "What results can I expect after my hair transplant?", a: "Initial hair growth typically begins around 3–4 months after the procedure. Visible improvement is seen by 6–9 months, with full, mature results developing over 12–15 months as transplanted follicles complete their growth cycle." },
              { q: "Is the hair transplant procedure painful?", a: "Hair transplant procedures are performed under local anesthesia, and most patients report minimal discomfort. Any post-procedure soreness is usually mild, temporary, and well controlled with standard aftercare." },
              { q: "What makes Dr. Rejali different from other hair transplant doctors in Arizona?", a: "Dr. Rejali offers a doctor-performed hair transplant approach, personally handling the most critical aspects of the procedure rather than delegating them entirely to technicians. This hands-on method provides greater precision, safety, and natural-looking outcomes compared to high-volume or assembly-line clinics." },
              { q: "How do I schedule a consultation with Dr. Rejali in Arizona?", a: "You can schedule an in-person or virtual consultation by phone or through the online request form. During your visit, Dr. Farhad Rejali will evaluate your hair loss and create a personalized treatment plan tailored to your goals." }
            ].map((faq, index) => (
              <div key={index} className="border-b border-neutral-200">
                <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between py-5 lg:py-6 text-left focus:outline-none group">
                  <span className={`font-medium text-[14px] lg:text-[16px] transition-colors duration-300 pr-6 lg:pr-8 ${activeFaq === index ? 'text-[#9A806B]' : 'text-neutral-900 group-hover:text-[#9A806B]'}`}>
                    {faq.q}
                  </span>
                  <motion.div animate={{ rotate: activeFaq === index ? 180 : 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className={`shrink-0 p-2 lg:p-2.5 rounded-full border transition-colors duration-300 ${activeFaq === index ? 'border-[#9A806B]/30 bg-[#9A806B]/5' : 'border-transparent bg-neutral-50 group-hover:bg-[#9A806B]/5'}`}>
                    <ChevronDown className={`w-3.5 h-3.5 lg:w-4 lg:h-4 transition-colors duration-300 ${activeFaq === index ? 'text-[#9A806B]' : 'text-neutral-400 group-hover:text-[#9A806B]'}`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                      <div className="pb-6 lg:pb-8 pr-8 lg:pr-12 text-neutral-500 font-light leading-relaxed text-[13px] lg:text-[15px]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW FOOTER ARCHITECTURE (CUSTOM MAP STYLE) */}
      <footer className="bg-white pt-16 lg:pt-20 pb-10 border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
          
          <div className="flex flex-col lg:flex-row gap-0 bg-[#FAFAFA] border border-neutral-200 rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm">
            
            {/* LEFT COLUMN: Deep Dark Branding & Socials */}
            <div className="lg:w-[35%] bg-[#121A22] p-10 lg:p-16 flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(154,128,107,0.05)_0%,transparent_70%)] pointer-events-none" />
              <img src="/logo.png" alt="Rejali Medical Logo" className="h-16 lg:h-20 w-auto object-contain mb-10 lg:mb-12 drop-shadow-[0_0_15px_rgba(154,128,107,0.2)] relative z-10" />
              
              <div className="flex gap-4 mb-8 lg:mb-10 relative z-10">
                <a href="#" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#9A806B] hover:text-white hover:border-[#9A806B] transition-all duration-300"><Facebook size={16} /></a>
                <a href="#" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#9A806B] hover:text-white hover:border-[#9A806B] transition-all duration-300"><Instagram size={16} /></a>
                <a href="#" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#9A806B] hover:text-white hover:border-[#9A806B] transition-all duration-300"><Youtube size={16} /></a>
                <a href="#" className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#9A806B] hover:text-white hover:border-[#9A806B] transition-all duration-300"><Linkedin size={16} /></a>
              </div>
              
              <p className="text-white/40 text-[9px] lg:text-[11px] font-medium tracking-widest uppercase relative z-10">© Rejali Medical 2026</p>
            </div>

            {/* RIGHT COLUMN: Menus, Trust Badges & Interactive Map */}
            <div className="lg:w-[65%] p-8 lg:p-16 bg-white grid xl:grid-cols-2 gap-10 lg:gap-12">
              
              {/* Menu Links */}
              <div>
                <h4 className="text-neutral-900 font-semibold text-base lg:text-lg mb-6 lg:mb-8">Information</h4>
                <div className="grid grid-cols-2 gap-x-4 lg:gap-x-8 gap-y-4 text-neutral-500 text-[13px] lg:text-sm">
                  <a href="#top" onClick={(e) => handleSmoothScroll(e, 'top')} className="hover:text-[#9A806B] transition-colors cursor-pointer">Home</a>
                  <a href="#" className="hover:text-[#9A806B] transition-colors">Hair Restoration</a>
                  <a href="#" className="hover:text-[#9A806B] transition-colors">About Us</a>
                  <a href="#" className="hover:text-[#9A806B] transition-colors">Payment Plans</a>
                  <a href="#" className="hover:text-[#9A806B] transition-colors">Blog</a>
                  <a href="#" className="hover:text-[#9A806B] transition-colors">Medspa Services</a>
                  <a href="#" className="hover:text-[#9A806B] transition-colors">Gallery</a>
                  <a href="#" className="hover:text-[#9A806B] transition-colors">Contact Us</a>
                </div>
              </div>

              {/* Trust Badges & Custom Map */}
              <div className="flex flex-col justify-between">
                <p className="text-neutral-900 font-medium leading-relaxed text-[13px] lg:text-base mb-6">
                  All procedures are completed at a certified facility by Dr. Rejali and protected by uncompromising medical standards.
                </p>
                
                <div className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-8">
                  <div className="border border-neutral-200 px-3 py-1.5 rounded flex items-center gap-2 bg-neutral-50">
                    <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5 text-neutral-800" />
                    <span className="font-bold text-[11px] lg:text-sm text-neutral-800 tracking-wider">ABHRS</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-0.5 text-[#00b67a]">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} className="lg:w-3.5 lg:h-3.5" fill="currentColor" strokeWidth={0} />)}
                    </div>
                    <span className="text-[9px] lg:text-[10px] text-neutral-500 font-semibold mt-1">Excellent on RealSelf</span>
                  </div>
                </div>

                <div className="flex gap-3 lg:gap-4 items-start">
                  <div className="w-full">
                    <p className="text-neutral-600 text-[13px] lg:text-sm leading-relaxed mb-4">
                      Edwards Professional Park<br/>
                      10752 N 89th Pl, Suite C228<br/>
                      Scottsdale, AZ 85260, USA
                    </p>
                    
                    <div className="w-full h-[120px] lg:h-[160px] rounded-xl overflow-hidden border border-neutral-200 relative group bg-neutral-200 shadow-inner">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex flex-col items-center">
                        <div className="absolute w-6 h-6 lg:w-8 lg:h-8 bg-[#9A806B]/30 rounded-full animate-ping" />
                        <MapPin className="w-6 h-6 lg:w-8 lg:h-8 text-[#9A806B] drop-shadow-[0_5px_10px_rgba(154,128,107,0.5)] relative z-10" fill="#121A22" strokeWidth={1.5} />
                      </div>
                      <iframe 
                        src="https://maps.google.com/maps?q=10752%20N%2089th%20Pl,%20Suite%20C228,%20Scottsdale,%20AZ%2085260&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                        width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full grayscale-[100%] contrast-[110%] opacity-80 group-hover:opacity-100 transition-all duration-700 relative z-10" 
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* --- ELITE AI CONCIERGE (THE TRAP) --- */}
      <div className="fixed bottom-6 right-4 lg:bottom-10 lg:right-10 z-[100] flex flex-col items-end">
        
        <AnimatePresence>
          {isTriageOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0A0B10]/85 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-2xl w-[calc(100vw-2rem)] max-w-[380px] mb-4 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-white/5 border-b border-white/10 p-5 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#9A806B] to-[#ebdcd0] flex items-center justify-center shadow-[0_0_15px_rgba(154,128,107,0.4)]">
                      <Sparkles className="w-4 h-4 text-black" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0A0B10] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm tracking-wide leading-none mb-1">Victoria</h4>
                    <p className="text-[#9A806B] text-[10px] uppercase tracking-widest font-bold">Private AI Concierge</p>
                  </div>
                </div>
                <button onClick={() => setIsTriageOpen(false)} className="text-white/50 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* DYNAMIC BODY: Form vs Chat */}
              {!botUnlocked ? (
                /* STAGE 1: THE DATA CAPTURE */
                <div className="p-6">
                  <p className="text-white/70 text-sm font-light leading-relaxed mb-6">
                    To provide an accurate medical estimate, please enter your details.
                  </p>
                  <form onSubmit={handleUnlockBot} className="space-y-4">
                    <input required type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Full Name" className="w-full bg-white/5 border border-white/10 text-white px-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-[#9A806B] transition-colors placeholder:text-white/30" />
                    <input required type="email" placeholder="Private Email" className="w-full bg-white/5 border border-white/10 text-white px-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-[#9A806B] transition-colors placeholder:text-white/30" />
                    <input required type="tel" placeholder="Direct Phone" className="w-full bg-white/5 border border-white/10 text-white px-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-[#9A806B] transition-colors placeholder:text-white/30" />
                    <button type="submit" className="w-full mt-2 bg-[#9A806B] text-black py-4 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-colors shadow-[0_10px_20px_rgba(154,128,107,0.2)]">
                      Unlock Secure Chat
                    </button>
                  </form>
                </div>
              ) : (
                /* STAGE 2: THE AUTOMATED SEQUENCE */
                <div className="flex flex-col h-[400px]">
                  {/* Messages Area */}
                  <div className="flex-1 p-5 overflow-y-auto space-y-4">
                    {messages.map((msg, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-white/10 border border-white/5 text-white/90 p-4 rounded-2xl rounded-tl-sm max-w-[90%] shadow-lg text-[13.5px] leading-relaxed">
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Typing Indicator */}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-white/5 border border-white/5 text-white/50 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                          <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-[#9A806B] rounded-full" />
                          <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#9A806B] rounded-full" />
                          <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#9A806B] rounded-full" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Fake Chat Input (Locked until they upload or reply) */}
                  <div className="p-4 border-t border-white/10 bg-white/5">
                    <div className="bg-[#0A0B10] border border-white/10 rounded-full px-4 py-2.5 flex items-center justify-between opacity-50 cursor-not-allowed">
                      <span className="text-white/30 text-xs tracking-wide">Type your response...</span>
                      <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* THE TRIGGER BUTTON & GHOST TEASER HOOK */}
        <div className="flex items-center gap-4 relative">
          
          {/* Ghost Teaser Text - Fades out after 3s OR hides permanently when chat is opened */}
          <AnimatePresence>
            {showTeaser && !isTriageOpen && !hasClickedBot && (
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="hidden sm:block bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] rounded-full px-5 py-2.5 border border-neutral-100 relative"
              >
                <p className="text-neutral-800 text-[13px] font-semibold tracking-wide">
                  Scan your scalp. <span className="text-[#9A806B]">Get your FUE estimate.</span>
                </p>
                {/* Pointer Triangle */}
                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[6px] border-l-white border-b-[6px] border-b-transparent drop-shadow-sm"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Toggle Button */}
          <button 
            onClick={() => {
              setIsTriageOpen(!isTriageOpen);
              setHasClickedBot(true); // Permanently hides the red 1 and the teaser text
            }}
            className={`relative w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(154,128,107,0.4)] transition-all duration-500 hover:scale-105 z-50 ${isTriageOpen ? 'bg-white text-black border border-neutral-200' : 'bg-gradient-to-tr from-[#826a56] to-[#c5ad9a] text-white'}`}
          >
            {isTriageOpen ? <X size={26} /> : <MessageSquare size={26} fill="currentColor" className="mt-1 drop-shadow-md" />}
            
            {/* THE RED NOTIFICATION TRAP (Stays forever until clicked, then disappears permanently) */}
            {!hasClickedBot && (
              <div className="absolute -top-1 -right-1 lg:-top-1.5 lg:-right-1.5 w-5 h-5 lg:w-6 lg:h-6 bg-red-500 rounded-full flex items-center justify-center text-[10px] lg:text-xs text-white font-bold border-[2px] lg:border-[3px] border-[#FAFAFA] shadow-sm z-10">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full">1</span>
              </div>
            )}
          </button>
        </div>
        
      </div>
      
    </div>
  );
}