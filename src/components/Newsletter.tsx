import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';

export function Newsletter() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="py-24 bg-dust/30">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
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
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl md:text-5xl mb-4"
          >
            Recevoir les dates
          </motion.h2>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-ink/70 mb-10"
          >
            Tu ne peux pas venir cette fois ? Inscris-toi pour être prévenu des prochains événements dans ta ville.
          </motion.p>

          <motion.form 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            onSubmit={handleSubmit} 
            className="bg-white p-8 rounded-xl shadow-sm border border-ink/10 text-left"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" required placeholder="ton@email.com" className="w-full px-4 py-3 rounded-md border border-ink/20 focus:outline-none focus:border-ink bg-bg/50" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Ville</label>
                <select className="w-full px-4 py-3 rounded-md border border-ink/20 focus:outline-none focus:border-ink bg-bg/50 appearance-none">
                  <option>Peu importe</option>
                  <option>Lyon</option>
                  <option>Saint-Étienne</option>
                  <option>Clermont-Ferrand</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Thématiques (optionnel)</label>
              <div className="flex flex-wrap gap-4">
                {['Mode', 'Breakdance', 'Skate'].map(theme => (
                  <label key={theme} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-ink" />
                    <span className="text-sm">{theme}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full">
              {status === 'success' ? 'Inscrit avec succès !' : 'S\'inscrire'}
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
