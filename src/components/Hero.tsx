import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from './ui/Button';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 10]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.85]);
  
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
  const textY = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <section className="relative h-screen w-full flex items-end justify-start overflow-hidden bg-ink">
      {/* Logo in Hero */}
      <motion.div 
        className="fixed top-6 left-6 z-50 mix-blend-difference"
        style={{ y, scale, transformOrigin: 'top left' }}
      >
        <img src="/Logo blanc.svg" alt="La Ligue" className="h-6 w-auto" />
      </motion.div>

      {/* Background Video */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-110"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay at the bottom (30-40%) */}
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-ink/90 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="container mx-auto px-6 relative z-10 pb-24"
        style={{ y: textY }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
              }
            }
          }}
          className="max-w-4xl"
        >
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-6xl md:text-8xl lg:text-9xl mb-4 text-bg uppercase leading-[0.85]"
          >
            Les événements<br/>La Ligue
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-lg md:text-2xl font-medium mb-8 text-bg/90 max-w-2xl"
          >
            3 villes. 3 thèmes. Une même culture.
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Button href="#events" variant="primary" withArrow>
              Voir les prochains événements
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
