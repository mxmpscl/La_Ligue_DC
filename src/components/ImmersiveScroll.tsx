import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const images = [
  '/Ambiance%201.jpg',
  '/Ambiance%202.jpg',
  '/Ambiance%203.jpg',
  '/Ambiance%204.jpg',
  '/Ambiance%205.jpg',
  '/Ambiance%206.jpg',
  '/Ambiance%207.png',
  '/Ambiance%208.png',
  '/Ambiance%209.png',
  '/Ambiance%2010.png',
  '/Ambiance%2011.png',
  '/Ambiance%2012.png',
];

const words = ['Découvrir', 'Créer', 'Vivre', 'Rencontrer'];

export function ImmersiveScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: entryProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Word 1: 0.0 to 0.25
  const word1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.2, 0.25], [0, 1, 1, 0]);
  const word1Y = useTransform(scrollYProgress, [0, 0.25], [80, -80]);
  const word1Scale = useTransform(scrollYProgress, [0, 0.25], [0.85, 1.15]);

  // Word 2: 0.25 to 0.5
  const word2Opacity = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const word2Y = useTransform(scrollYProgress, [0.25, 0.5], [80, -80]);
  const word2Scale = useTransform(scrollYProgress, [0.25, 0.5], [0.85, 1.15]);

  // Word 3: 0.5 to 0.75
  const word3Opacity = useTransform(scrollYProgress, [0.5, 0.55, 0.7, 0.75], [0, 1, 1, 0]);
  const word3Y = useTransform(scrollYProgress, [0.5, 0.75], [80, -80]);
  const word3Scale = useTransform(scrollYProgress, [0.5, 0.75], [0.85, 1.15]);

  // Word 4: 0.75 to 1.0
  const word4Opacity = useTransform(scrollYProgress, [0.75, 0.8, 0.95, 1], [0, 1, 1, 0]);
  const word4Y = useTransform(scrollYProgress, [0.75, 1], [80, -80]);
  const word4Scale = useTransform(scrollYProgress, [0.75, 1], [0.85, 1.15]);

  // Image animations
  // Phase 1 (0 - 0.25)
  const img1Opacity = useTransform(entryProgress, [0, 0.25, 0.4, 0.4375], [0, 1, 1, 0]);
  const img1Scale = useTransform(entryProgress, [0, 0.4375], [1.15, 0.95]);
  
  const img2Opacity = useTransform(scrollYProgress, [0.05, 0.1, 0.2, 0.25], [0, 1, 1, 0]);
  const img2Y = useTransform(scrollYProgress, [0.05, 0.25], [150, -100]);
  const img2Rotate = useTransform(scrollYProgress, [0.05, 0.25], [8, -4]);
  
  const img3Opacity = useTransform(scrollYProgress, [0.1, 0.15, 0.25, 0.3], [0, 1, 1, 0]);
  const img3X = useTransform(scrollYProgress, [0.1, 0.3], [-150, 100]);
  const img3Rotate = useTransform(scrollYProgress, [0.1, 0.3], [-8, 5]);

  // Phase 2 (0.25 - 0.5)
  const img4Opacity = useTransform(scrollYProgress, [0.2, 0.25, 0.45, 0.5], [0, 1, 1, 0]);
  const img4Scale = useTransform(scrollYProgress, [0.2, 0.5], [0.95, 1.2]);

  const img5Opacity = useTransform(scrollYProgress, [0.3, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
  const img5Y = useTransform(scrollYProgress, [0.3, 0.5], [-150, 100]);
  const img5Rotate = useTransform(scrollYProgress, [0.3, 0.5], [-5, 6]);

  const img6Opacity = useTransform(scrollYProgress, [0.35, 0.4, 0.5, 0.55], [0, 1, 1, 0]);
  const img6X = useTransform(scrollYProgress, [0.35, 0.55], [150, -100]);
  const img6Rotate = useTransform(scrollYProgress, [0.35, 0.55], [6, -4]);

  // Phase 3 (0.5 - 0.75)
  const img7Opacity = useTransform(scrollYProgress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]);
  const img7Scale = useTransform(scrollYProgress, [0.45, 0.75], [1.2, 0.95]);

  const img8Opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
  const img8Y = useTransform(scrollYProgress, [0.55, 0.75], [150, -100]);
  const img8Rotate = useTransform(scrollYProgress, [0.55, 0.75], [4, -6]);

  const img9Opacity = useTransform(scrollYProgress, [0.6, 0.65, 0.75, 0.8], [0, 1, 1, 0]);
  const img9X = useTransform(scrollYProgress, [0.6, 0.8], [-150, 100]);
  const img9Rotate = useTransform(scrollYProgress, [0.6, 0.8], [-6, 4]);

  // Phase 4 (0.75 - 1.0)
  const img10Opacity = useTransform(scrollYProgress, [0.7, 0.75, 0.95, 1], [0, 1, 1, 0]);
  const img10Scale = useTransform(scrollYProgress, [0.7, 1], [0.95, 1.15]);

  const img11Opacity = useTransform(scrollYProgress, [0.8, 0.85, 0.95, 1], [0, 1, 1, 0]);
  const img11Y = useTransform(scrollYProgress, [0.8, 1], [-150, 100]);
  const img11Rotate = useTransform(scrollYProgress, [0.8, 1], [-4, 5]);

  const img12Opacity = useTransform(scrollYProgress, [0.85, 0.9, 1, 1], [0, 1, 1, 1]);
  const img12X = useTransform(scrollYProgress, [0.85, 1], [150, 0]);
  const img12Rotate = useTransform(scrollYProgress, [0.85, 1], [5, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-ink">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-ink">
        
        {/* Phase 1 */}
        <motion.div className="absolute inset-0 w-full h-full" style={{ opacity: img1Opacity, scale: img1Scale }}>
          <img src={images[0]} onError={(e) => e.currentTarget.src = 'https://picsum.photos/seed/street1/1920/1080'} alt="Ambiance 1" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
        </motion.div>
        
        <motion.div className="absolute w-[85vw] h-[60vh] md:w-[50vw] md:h-[70vh] left-[5vw] md:left-[10vw] top-[20vh] md:top-[15vh] shadow-2xl overflow-hidden rounded-sm" style={{ opacity: img2Opacity, y: img2Y, rotate: img2Rotate }}>
          <img src={images[1]} onError={(e) => e.currentTarget.src = 'https://picsum.photos/seed/street2/1920/1080'} alt="Ambiance 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>

        <motion.div className="absolute w-[80vw] h-[50vh] md:w-[45vw] md:h-[60vh] right-[5vw] md:right-[10vw] top-[35vh] md:top-[25vh] shadow-2xl overflow-hidden rounded-sm" style={{ opacity: img3Opacity, x: img3X, rotate: img3Rotate }}>
          <img src={images[2]} onError={(e) => e.currentTarget.src = 'https://picsum.photos/seed/street3/1920/1080'} alt="Ambiance 3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>

        {/* Phase 2 */}
        <motion.div className="absolute inset-0 w-full h-full" style={{ opacity: img4Opacity, scale: img4Scale }}>
          <img src={images[3]} onError={(e) => e.currentTarget.src = 'https://picsum.photos/seed/street4/1920/1080'} alt="Ambiance 4" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
        </motion.div>

        <motion.div className="absolute w-[90vw] h-[55vh] md:w-[55vw] md:h-[65vh] left-[5vw] md:left-[25vw] top-[15vh] md:top-[10vh] shadow-2xl overflow-hidden rounded-sm" style={{ opacity: img5Opacity, y: img5Y, rotate: img5Rotate }}>
          <img src={images[4]} onError={(e) => e.currentTarget.src = 'https://picsum.photos/seed/street5/1920/1080'} alt="Ambiance 5" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>

        <motion.div className="absolute w-[85vw] h-[50vh] md:w-[40vw] md:h-[55vh] right-[5vw] md:right-[15vw] top-[40vh] md:top-[35vh] shadow-2xl overflow-hidden rounded-sm" style={{ opacity: img6Opacity, x: img6X, rotate: img6Rotate }}>
          <img src={images[5]} onError={(e) => e.currentTarget.src = 'https://picsum.photos/seed/street6/1920/1080'} alt="Ambiance 6" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>

        {/* Phase 3 */}
        <motion.div className="absolute inset-0 w-full h-full" style={{ opacity: img7Opacity, scale: img7Scale }}>
          <img src={images[6]} onError={(e) => e.currentTarget.src = 'https://picsum.photos/seed/street7/1920/1080'} alt="Ambiance 7" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
        </motion.div>

        <motion.div className="absolute w-[80vw] h-[65vh] md:w-[45vw] md:h-[75vh] left-[10vw] md:left-[15vw] top-[25vh] md:top-[12.5vh] shadow-2xl overflow-hidden rounded-sm" style={{ opacity: img8Opacity, y: img8Y, rotate: img8Rotate }}>
          <img src={images[7]} onError={(e) => e.currentTarget.src = 'https://picsum.photos/seed/street8/1920/1080'} alt="Ambiance 8" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>

        <motion.div className="absolute w-[90vw] h-[45vh] md:w-[50vw] md:h-[55vh] left-[5vw] md:left-[35vw] top-[10vh] md:top-[20vh] shadow-2xl overflow-hidden rounded-sm" style={{ opacity: img9Opacity, x: img9X, rotate: img9Rotate }}>
          <img src={images[8]} onError={(e) => e.currentTarget.src = 'https://picsum.photos/seed/street9/1920/1080'} alt="Ambiance 9" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>

        {/* Phase 4 */}
        <motion.div className="absolute inset-0 w-full h-full" style={{ opacity: img10Opacity, scale: img10Scale }}>
          <img src={images[9]} onError={(e) => e.currentTarget.src = 'https://picsum.photos/seed/street10/1920/1080'} alt="Ambiance 10" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
        </motion.div>

        <motion.div className="absolute w-[85vw] h-[70vh] md:w-[45vw] md:h-[80vh] right-[5vw] md:right-[10vw] top-[15vh] md:top-[10vh] shadow-2xl overflow-hidden rounded-sm" style={{ opacity: img11Opacity, y: img11Y, rotate: img11Rotate }}>
          <img src={images[10]} onError={(e) => e.currentTarget.src = 'https://picsum.photos/seed/street11/1920/1080'} alt="Ambiance 11" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>

        <motion.div className="absolute w-[95vw] h-[55vh] md:w-[55vw] md:h-[65vh] left-[2.5vw] md:left-[15vw] top-[30vh] md:top-[25vh] shadow-2xl overflow-hidden rounded-sm" style={{ opacity: img12Opacity, x: img12X, rotate: img12Rotate }}>
          <img src={images[11]} onError={(e) => e.currentTarget.src = 'https://picsum.photos/seed/street12/1920/1080'} alt="Ambiance 12" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>

        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-ink/30 pointer-events-none" />

        {/* Texts */}
        <motion.h2 
          className="absolute text-6xl md:text-[10rem] font-display text-white uppercase tracking-tighter text-center w-full drop-shadow-2xl z-10"
          style={{ opacity: word1Opacity, y: word1Y, scale: word1Scale }}
        >
          {words[0]}
        </motion.h2>

        <motion.h2 
          className="absolute text-6xl md:text-[10rem] font-display text-white uppercase tracking-tighter text-center w-full drop-shadow-2xl z-10"
          style={{ opacity: word2Opacity, y: word2Y, scale: word2Scale }}
        >
          {words[1]}
        </motion.h2>

        <motion.h2 
          className="absolute text-6xl md:text-[10rem] font-display text-white uppercase tracking-tighter text-center w-full drop-shadow-2xl z-10"
          style={{ opacity: word3Opacity, y: word3Y, scale: word3Scale }}
        >
          {words[2]}
        </motion.h2>

        <motion.h2 
          className="absolute text-6xl md:text-[10rem] font-display text-white uppercase tracking-tighter text-center w-full drop-shadow-2xl z-10"
          style={{ opacity: word4Opacity, y: word4Y, scale: word4Scale }}
        >
          {words[3]}
        </motion.h2>

      </div>
    </section>
  );
}
