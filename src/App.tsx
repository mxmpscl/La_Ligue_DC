/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { NextEvent } from './components/NextEvent';
import { EventGrid } from './components/EventGrid';
import { EventDetail } from './components/EventDetail';
import { ImmersiveScroll } from './components/ImmersiveScroll';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { events } from './data/events';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <NextEvent />
      <EventGrid />
      
      {events.map((event, index) => (
        <EventDetail key={event.id} event={event} index={index} />
      ))}
      
      <ImmersiveScroll />
      <Newsletter />
      <Footer />
    </div>
  );
}
