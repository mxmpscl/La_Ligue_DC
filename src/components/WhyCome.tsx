import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const reasons = [
  { title: 'Rencontrer', desc: 'Créateurs, marques, artistes et passionnés de la même culture.' },
  { title: 'Découvrir', desc: 'Des drops exclusifs, de nouveaux talents et des lieux atypiques.' },
  { title: 'Vivre', desc: 'Une ambiance unique, la scène locale en ébullition et des moments forts.' },
  { title: 'Créer', desc: 'Des photos, des vidéos, des souvenirs et de nouvelles connexions.' }
];

export function WhyCome() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const card1Y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} id="pourquoi" className="py-24 bg-ink text-bg">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl mb-4">Objectif global</h2>
          <p className="text-bg/80 max-w-3xl mx-auto text-lg leading-relaxed">
            Dans le cadre du développement de La Ligue, trois événements physiques seront organisés dans différentes villes de la région Auvergne-Rhône-Alpes. L’objectif est de renforcer le lien entre le média et sa communauté en proposant des rencontres autour de différentes disciplines de la street culture : mode, danse et sports urbains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            className="p-8 border border-bg/20 rounded-xl bg-bg/5"
            style={{ y: card1Y }}
            whileHover={{ scale: 1.02, y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-display mb-6 text-accent">Une expérience commune</h3>
            <p className="text-bg/80 mb-6">Afin de créer un fil conducteur entre les trois villes, plusieurs dispositifs seront présents sur chaque événement :</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-bg/90">Un espace informatif pour découvrir le projet et s’inscrire aux futurs podcasts</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-bg/90">Des interviews de talents et d’acteurs de la street culture</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-bg/90">Des micro-trottoirs avec le public pour produire du contenu social</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-bg/90">Des espaces photo et vidéo pour produire un after-movie</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="p-8 border border-bg/20 rounded-xl bg-bg/5"
            style={{ y: card2Y }}
            whileHover={{ scale: 1.02, y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-display mb-6 text-accent">Frise artistique participative</h3>
            <p className="text-bg/80 mb-6">Une frise artistique évolutive sera installée lors des trois événements :</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-bg/90">Lors du premier événement, une toile vierge sera proposée aux participants</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-bg/90">Les visiteurs pourront dessiner, écrire ou taguer dessus</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-bg/90">La frise évoluera à chaque événement</span>
              </li>
            </ul>
            <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <p className="text-accent font-medium">Le résultat final servira à créer l’affiche officielle de l’édition suivante.</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xl text-bg/90 leading-relaxed">
            En proposant des expériences physiques, <span className="text-accent font-bold">La Ligue</span> affirme son rôle de média culturel capable de rassembler la Génération Z autour de la street culture.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
