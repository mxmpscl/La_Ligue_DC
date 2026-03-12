import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Button } from './ui/Button';
import { Chip } from './ui/Chip';
import { ChevronDown, X } from 'lucide-react';

interface EventDetailProps {
  event: any;
  index: number;
  key?: React.Key;
}

export function EventDetail({ event, index }: EventDetailProps) {
  const isEven = index % 2 === 0;
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} id={`event-${event.id}`} className={`py-24 ${isEven ? 'bg-bg' : 'bg-white'} noise-bg`}>
      <div className="container mx-auto px-6 max-w-6xl">
        
        <motion.div 
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
            <Chip>{event.city}</Chip>
            <Chip>{event.date}</Chip>
            <Chip>{event.theme}</Chip>
          </div>
          <h2 className="text-5xl md:text-7xl mb-6">{event.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Visuals & Description */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="rounded-xl overflow-hidden h-[400px]"
            >
              <motion.img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover scale-110" 
                style={{ y: imgY }}
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </motion.div>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="prose prose-lg text-ink/80"
            >
              <p>{event.description}</p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h3 className="font-display text-2xl mb-6">Ce que tu vas vivre</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.bullets.map((bullet: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 bg-ink/5 p-4 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="font-medium text-ink/90">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column: Program, Infos, FAQ */}
          <motion.div 
            className="lg:col-span-5 space-y-10"
            style={{ y: contentY }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.3 }
              }
            }}
          >
            {/* Program */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="bg-ink text-bg p-8 rounded-xl"
            >
              <h3 className="font-display text-2xl mb-6 text-bg/50">Programme</h3>
              <div className="space-y-6">
                {event.program.map((item: any, idx: number) => (
                  <div key={idx} className="flex gap-4 border-b border-bg/10 pb-4 last:border-0 last:pb-0">
                    <div className="font-display text-xl text-accent w-16 flex-shrink-0">{item.time}</div>
                    <div className="font-medium">{item.title}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Infos */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="border border-ink/10 p-8 rounded-xl"
            >
              <h3 className="font-display text-2xl mb-6 text-ink/50">Infos pratiques</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-ink/5 pb-2">
                  <span className="text-ink/60">Lieu</span>
                  <span className="font-medium text-right">{event.infos.lieu}</span>
                </div>
                <div className="flex justify-between border-b border-ink/5 pb-2">
                  <span className="text-ink/60">Horaires</span>
                  <span className="font-medium text-right">{event.infos.horaires}</span>
                </div>
                <div className="flex justify-between border-b border-ink/5 pb-2">
                  <span className="text-ink/60">Âge</span>
                  <span className="font-medium text-right">{event.infos.age}</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-ink/60">Accès</span>
                  <span className="font-medium text-right">{event.infos.acces}</span>
                </div>
              </div>
              <div className="mt-8 pt-2">
                <div className="flex flex-col md:flex-row gap-4 items-stretch">
                  <div className="flex-1 flex flex-col">
                    <Button className="w-full text-lg px-2 h-full" withArrow>
                      Prendre sa place
                    </Button>
                  </div>
                  <div className="relative flex-1 mt-2 md:mt-0 flex flex-col">
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 ${event.contest?.available === false ? 'bg-ink/20 text-ink/60' : 'bg-[#ffce3a] text-black shadow-sm'} text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap z-10 flex items-center gap-1`}>
                      {event.contest?.available !== false && <span className="animate-pulse">🎁</span>}
                      JEU CONCOURS
                    </div>
                    <Button 
                      onClick={() => {
                        if (event.contest?.available !== false) {
                          setIsModalOpen(true);
                        }
                      }}
                      variant="outline" 
                      className="w-full text-base px-2 h-full"
                      disabled={event.contest?.available === false}
                    >
                      {event.contest?.buttonText || 'Participer'}
                    </Button>
                  </div>
                </div>
                {event.contest?.description && (
                  <p className="text-center text-[12px] leading-tight text-ink/70 mt-3 px-1">
                    {event.contest.description}
                  </p>
                )}
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h3 className="font-display text-2xl mb-6">FAQ</h3>
              <div className="space-y-3">
                {event.faq.map((item: any, idx: number) => (
                  <FAQItem key={idx} question={item.q} answer={item.a} />
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div 
              className="relative bg-bg w-full max-w-md p-8 rounded-xl shadow-2xl border border-ink/10"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-ink/50 hover:text-ink transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="mb-6">
                <div className="inline-block bg-accent text-ink text-[10px] font-bold px-2 py-0.5 rounded-full mb-4">
                  JEU CONCOURS • {event.city.toUpperCase()}
                </div>
                <h3 className="text-3xl mb-2">Participer au jeu concours</h3>
                <p className="text-ink/70 text-sm">
                  Inscris-toi pour participer au jeu concours et tenter de gagner des places pour l’événement.
                </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                <div>
                  <label htmlFor={`name-${event.id}`} className="block text-sm font-medium text-ink mb-1">Nom</label>
                  <input 
                    type="text" 
                    id={`name-${event.id}`} 
                    required
                    className="w-full px-4 py-3 rounded-sm border border-ink/20 bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Ton nom"
                  />
                </div>
                <div>
                  <label htmlFor={`email-${event.id}`} className="block text-sm font-medium text-ink mb-1">Email</label>
                  <input 
                    type="email" 
                    id={`email-${event.id}`} 
                    required
                    className="w-full px-4 py-3 rounded-sm border border-ink/20 bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="ton@email.com"
                  />
                </div>
                <Button type="submit" className="w-full mt-2">
                  Participer au jeu concours
                </Button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string, key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-ink/10 rounded-lg overflow-hidden">
      <button 
        className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-ink/5 transition-colors cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 text-ink/70 text-sm">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
