import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const BG = '#1B2539';
const ACCENT = '#F77A41';
const LIGHT = '#F0EDEB';

export default function Hero() {
  return (
    <section id="top" style={{ backgroundColor: BG }} className="relative min-h-[90vh] pt-20 overflow-hidden">
      {/* Soft glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: `radial-gradient(closest-side, ${LIGHT}, transparent)` }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
               style={{ backgroundColor: LIGHT, color: BG }}>
            <span className="text-xs font-semibold tracking-wide">DIGITAL GROWTH AGENCY</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
            style={{ color: LIGHT, fontFamily: 'Comfortaa, ui-rounded, system-ui' }}
          >
            Elevate your brand with confident, modern marketing
          </h1>

          <p
            className="mt-6 text-base sm:text-lg max-w-xl"
            style={{ color: LIGHT, fontFamily: 'Nunito Sans, ui-sans-serif, system-ui' }}
          >
            <span style={{ fontFamily: 'Raleway, ui-sans-serif, system-ui' }} className="italic opacity-90">“Lifting brands to new heights.”</span> We combine strategy, design, and technology to drive measurable growth.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: ACCENT, color: BG }}
            >
              Get Started
            </a>
            <a href="#services" className="px-6 py-3 rounded-full border"
               style={{ borderColor: LIGHT, color: LIGHT }}>
              Explore Services
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="h-[420px] sm:h-[520px] lg:h-[640px] w-full rounded-3xl overflow-hidden relative"
          style={{ backgroundColor: '#0f1625' }}
        >
          {/* Spline scene */}
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          {/* Subtle overlay gradient for depth (non-blocking) */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(to top right, rgba(27,37,57,0.0), rgba(247,122,65,0.15))',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
