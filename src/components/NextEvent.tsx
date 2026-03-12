import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { Button } from './ui/Button';
import { Chip } from './ui/Chip';
import { events } from '../data/events';
import { X } from 'lucide-react';

export function NextEvent() {
  const event = events[0]; // Septembre - Lyon - Mode
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} id="prochain" className="py-24 bg-bg noise-bg">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-6xl mx-auto bg-white border border-ink/10 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row"
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -10, scale: 1.01 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
        >
          {/* Image side */}
          <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
            <motion.img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover scale-110"
              style={{ y: imgY }}
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="absolute top-4 left-4 bg-accent text-ink px-3 py-1 font-display tracking-wider text-sm rounded-sm">
              PROCHAIN EVENT
            </div>
          </div>

          {/* Content side */}
          <motion.div 
            className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center"
            style={{ y: textY }}
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap gap-2 mb-6"
            >
              <Chip>{event.city}</Chip>
              <Chip>{event.month}</Chip>
              <Chip>{event.theme}</Chip>
            </motion.div>

            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-4xl md:text-5xl mb-4 text-ink"
            >
              {event.title}
            </motion.h2>
            
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg text-ink/70 mb-8"
            >
              {event.promise}
            </motion.p>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mb-8"
            >
              <h3 className="font-display text-xl mb-4 text-ink/50">Ce que tu vas vivre</h3>
              <ul className="space-y-3">
                {event.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-ink/80">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-8 pt-2 w-full"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-stretch">
                <div className="flex-1 flex flex-col">
                  <Button href={`#event-${event.id}`} withArrow className="w-full text-lg px-6 h-full">
                    Prendre sa place
                  </Button>
                </div>
                <div className="relative flex-1 mt-2 sm:mt-0 flex flex-col">
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
                    className="w-full text-base px-6 h-full"
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
            </motion.div>
          </motion.div>
        </motion.div>
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
                  <label htmlFor={`name-next-${event.id}`} className="block text-sm font-medium text-ink mb-1">Nom</label>
                  <input 
                    type="text" 
                    id={`name-next-${event.id}`} 
                    required
                    className="w-full px-4 py-3 rounded-sm border border-ink/20 bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Ton nom"
                  />
                </div>
                <div>
                  <label htmlFor={`email-next-${event.id}`} className="block text-sm font-medium text-ink mb-1">Email</label>
                  <input 
                    type="email" 
                    id={`email-next-${event.id}`} 
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
