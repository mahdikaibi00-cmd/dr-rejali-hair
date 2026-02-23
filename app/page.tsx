"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Background3D from "@/components/Background3D";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mandateRef = useRef(null);
  const leftPinRef = useRef(null);

  // GSAP Sticky Scroll for Section 2
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: mandateRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftPinRef.current,
        pinSpacing: false,
      });
    });
    return () => ctx.revert();
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <main className="bg-obsidian text-bone font-sans selection:bg-champagne selection:text-obsidian overflow-hidden">
      
      {/* SECTION 1: THE HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <Background3D />
        <div className="z-10 max-w-5xl flex flex-col items-center">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-champagne tracking-[0.2em] text-sm md:text-xs font-semibold uppercase mb-6">
            Scottsdale's Premier Destination For Hair Restoration.
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="font-serif text-6xl md:text-8xl font-medium leading-tight mb-6">
            Mastery in Every Graft.
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="max-w-2xl text-lg text-gray-300 mb-12 leading-relaxed">
            Precision-engineered follicular extraction by Dr. Farhad Rejali, ABHRS Diplomate. Experience the only true "Solo FUE" procedure in Arizona—where elite artistry meets flawless execution.
          </motion.p>
          
          {/* Magnetic Button Simulator */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-champagne text-obsidian px-10 py-4 rounded-full font-medium tracking-wide transition-all hover:bg-white"
          >
            Apply for a Private Consultation
          </motion.button>
        </div>

        {/* Trust Badges */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.8 }} className="absolute bottom-10 flex gap-8 text-champagne/60 text-sm tracking-widest uppercase font-medium">
          <span>ABHRS Diplomate</span>
          <span>&bull;</span>
          <span>20+ Years Experience</span>
          <span>&bull;</span>
          <span>#1 Rated on RealSelf</span>
        </motion.div>
      </section>

      {/* SECTION 2: THE "SOLO FUE" DIFFERENCE */}
      <section ref={mandateRef} className="relative min-h-[150vh] flex px-10 md:px-24 py-24 bg-charcoal">
        <div ref={leftPinRef} className="w-1/2 h-screen flex flex-col justify-center pr-12">
          <h2 className="font-serif text-5xl text-champagne mb-6">The Solo FUE Mandate.</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            In an industry compromised by delegated technicians, Dr. Rejali operates on a different echelon. He is the only ABHRS Diplomate in Arizona who personally executes the entire medical phase of your FUE procedure.
          </p>
        </div>
        <div className="w-1/2 flex flex-col justify-center gap-32 py-32">
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border-l border-champagne pl-8">
            <h3 className="text-2xl font-serif text-bone mb-2">Hybrid Punch Technology</h3>
            <p className="text-gray-400">Minimal transection, undetectable healing.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border-l border-champagne pl-8">
            <h3 className="text-2xl font-serif text-bone mb-2">Dense Packing Artistry</h3>
            <p className="text-gray-400">30-50 grafts per square centimeter.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border-l border-champagne pl-8">
            <h3 className="text-2xl font-serif text-bone mb-2">The Surgeon's Touch</h3>
            <p className="text-gray-400">No automated machines. Only pure, uncompromised surgical mastery.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THE EXPERTISE (3D CAROUSEL Placeholder) */}
      <section className="py-32 px-10 md:px-24 bg-obsidian relative overflow-hidden">
         <h2 className="font-serif text-5xl text-center mb-20 text-bone">Architects of Restoration.</h2>
         <div className="flex gap-8 overflow-x-auto pb-10 hide-scrollbar cursor-grab active:cursor-grabbing">
            {/* Carousel Cards */}
            {[{title: "Follicular Unit Extraction (FUE)", desc: "The gold standard of undetectable, permanent restoration."}, 
              {title: "Long Hair FUE", desc: "Immediate, natural-looking results without the shave."}, 
              {title: "Regenerative Science", desc: "Stem-cell-inspired Exosomes and advanced PRP to optimize scalp health and force graft survival."}, 
              {title: "Facial Rejuvenation", desc: "Thread lifts and neuromodulators engineered for a natural, distinguished aesthetic."}].map((card, i) => (
              <motion.div key={i} whileHover={{ y: -10, borderColor: "#D4AF37" }} className="min-w-[400px] h-[500px] bg-charcoal/50 backdrop-blur-md border border-gray-800 p-10 flex flex-col justify-end transition-colors rounded-lg">
                <h3 className="font-serif text-2xl text-champagne mb-4">{card.title}</h3>
                <p className="text-gray-300">{card.desc}</p>
              </motion.div>
            ))}
         </div>
      </section>

      {/* SECTION 4: THE DOCTOR'S DOSSIER */}
      <section className="py-32 px-10 md:px-24 bg-charcoal flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 aspect-[3/4] bg-obsidian rounded-sm overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
           {/* Replace with actual image of Dr. Rejali */}
           <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent z-10"></div>
           <img src="/dr-rejali.jpg" alt="Dr. Farhad Rejali" className="object-cover w-full h-full opacity-80" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="font-serif text-5xl text-champagne mb-8">Two Decades of Excellence.</h2>
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            Dr. Farhad Rejali, NMD, MD, ABHRS, is a dual-trained physician specializing in modern restorative procedures. By blending advanced naturopathic disciplines with uncompromising surgical precision, he doesn't just restore hair—he engineers confidence.
          </p>
        </div>
      </section>

      {/* SECTION 5: SOCIAL PROOF */}
      <section className="py-24 bg-obsidian overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee gap-10">
            {/* Custom Marquee CSS required in globals.css */}
            {[
              {quote: "To save you time searching for the right doctor... this is the guy you want. Extremely pleased with my 2500 graft FUE.", author: "DoerDad"},
              {quote: "100% pain-free. Technique and knowledge matter. I am so grateful to find Dr. Rejali in Scottsdale.", author: "Amir M."},
              {quote: "Dr. Rejali is a very caring and result-oriented professional. He is very passionate about the artistic aspect of hair transplants.", author: "AP"}
            ].map((review, i) => (
              <div key={i} className="inline-block w-[500px] p-8 bg-charcoal border border-gray-800 rounded-sm">
                <div className="flex text-champagne mb-4">★★★★★</div>
                <p className="text-gray-300 text-lg italic whitespace-normal mb-6">"{review.quote}"</p>
                <p className="text-bone font-medium tracking-wide uppercase text-sm">— {review.author}</p>
              </div>
            ))}
        </div>
      </section>

      {/* SECTION 6: THE CAPTURE ENGINE */}
      <section className="py-32 bg-charcoal flex flex-col items-center text-center px-4">
        <h2 className="font-serif text-5xl text-champagne mb-4">Empower Your Confidence.</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-xl">Secure your private, one-on-one consultation with Dr. Rejali at our Scottsdale clinic.</p>
        
        <form className="w-full max-w-2xl flex flex-col gap-6">
           <input type="text" placeholder="Name" className="bg-transparent border-b border-gray-600 px-0 py-4 text-bone placeholder:text-gray-500 focus:outline-none focus:border-champagne transition-colors" />
           <input type="email" placeholder="Private Email" className="bg-transparent border-b border-gray-600 px-0 py-4 text-bone placeholder:text-gray-500 focus:outline-none focus:border-champagne transition-colors" />
           <input type="tel" placeholder="Direct Phone" className="bg-transparent border-b border-gray-600 px-0 py-4 text-bone placeholder:text-gray-500 focus:outline-none focus:border-champagne transition-colors" />
           <select className="bg-transparent border-b border-gray-600 px-0 py-4 text-gray-500 focus:outline-none focus:border-champagne transition-colors appearance-none cursor-pointer">
              <option value="" disabled selected>Procedure of Interest</option>
              <option value="fue">Follicular Unit Extraction (FUE)</option>
              <option value="long-hair">Long Hair FUE</option>
              <option value="regen">Regenerative Therapies</option>
              <option value="facial">Facial Rejuvenation</option>
           </select>
           
           <button type="submit" className="mt-8 w-full bg-champagne text-obsidian py-5 text-lg font-medium tracking-wide hover:bg-white transition-all">
             Request Elite Consultation
           </button>
        </form>
      </section>
      
    </main>
  );
}