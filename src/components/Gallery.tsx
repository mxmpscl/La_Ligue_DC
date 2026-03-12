import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const images = [
  "/Ambiance%201.jpg",
  "/Ambiance%202.jpg",
  "/Ambiance%203.jpg",
  "/Ambiance%204.jpg",
];

export function Gallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const x4 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const transforms = [x1, x2, x3, x4];

  return (
    <section ref={ref} className="py-24 bg-bg overflow-hidden">
      <motion.div 
        className="container mx-auto px-6 mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl md:text-6xl">L'ambiance La Ligue</h2>
        <p className="text-ink/60 mt-4">Un aperçu de ce qui t'attend.</p>
      </motion.div>

      <motion.div 
        className="flex gap-4 px-6 overflow-x-auto no-scrollbar pb-8 snap-x"
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
        {images.map((src, idx) => (
          <motion.div 
            key={idx}
            className="min-w-[80vw] sm:min-w-[400px] h-[300px] sm:h-[400px] rounded-xl overflow-hidden flex-shrink-0 snap-center group"
            style={{ x: transforms[idx] }}
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 20 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            <img src={src} alt="Ambiance" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
