import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { Button } from './ui/Button';
import { Chip } from './ui/Chip';
import { events } from '../data/events';
import { X } from 'lucide-react';

export function EventGrid() {
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -120]);

  const transforms = [y1, y2, y3];

  return (
    <section ref={ref} id="events" className="py-24 bg-dust/20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl mb-4">Les 3 prochains événements</h2>
          <p className="text-ink/60 max-w-2xl mx-auto">Découvre notre programmation pour la saison. Trois villes, trois ambiances, une seule culture.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, idx) => (
            <motion.div 
              key={event.id}
              style={{ y: transforms[idx] }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <motion.div
                className="bg-white border border-ink/10 rounded-xl overflow-hidden shadow-sm flex flex-col h-full group"
                whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover scale-110"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Chip>{event.city}</Chip>
                    <Chip>{event.month}</Chip>
                  </div>
                  
                  <h3 className="text-3xl mb-2 group-hover:underline decoration-2 underline-offset-4">{event.title}</h3>
                  <p className="text-ink/70 text-sm mb-8 flex-grow">{event.promise}</p>
                  
                  <div className="flex flex-col xl:flex-row gap-4 mt-auto pt-2 items-stretch">
                    <div className="flex-1 flex flex-col">
                      <Button href={`#event-${event.id}`} withArrow className="w-full text-sm px-2 h-full min-h-[44px]">
                        Prendre sa place
                      </Button>
                    </div>
                    <div className="relative flex-1 mt-2 xl:mt-0 flex flex-col">
                      <div className={`absolute -top-2.5 left-1/2 -translate-x-1/2 ${event.contest?.available === false ? 'bg-ink/20 text-ink/60' : 'bg-accent text-ink'} text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap z-10 flex items-center gap-1`}>
                        {event.contest?.available !== false && <span className="animate-pulse">🎁</span>}
                        JEU CONCOURS
                      </div>
                      <Button 
                        onClick={() => {
                          if (event.contest?.available !== false) {
                            setSelectedEvent(event);
                            setIsModalOpen(true);
                          }
                        }}
                        variant="outline" 
                        className="w-full text-sm px-2 h-full min-h-[44px]"
                        disabled={event.contest?.available === false}
                      >
                        {event.contest?.buttonText || 'Participer'}
                      </Button>
                    </div>
                  </div>
                  {event.contest?.description && (
                    <p className="text-center text-[10px] leading-tight text-ink/70 mt-3 px-1">
                      {event.contest.description}
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedEvent && (
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
                  JEU CONCOURS • {selectedEvent.city.toUpperCase()}
                </div>
                <h3 className="text-3xl mb-2">Participer au jeu concours</h3>
                <p className="text-ink/70 text-sm">
                  Inscris-toi pour participer au jeu concours et tenter de gagner des places pour l’événement.
                </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-1">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 rounded-sm border border-ink/20 bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Ton nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
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
