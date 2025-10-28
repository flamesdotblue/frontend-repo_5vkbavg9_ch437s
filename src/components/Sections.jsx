import { motion } from 'framer-motion';
import { Rocket, Megaphone, LineChart, Palette, Smartphone, Search } from 'lucide-react';

const BG = '#1B2539';
const ACCENT = '#F77A41';
const LIGHT = '#F0EDEB';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function SectionHeader({ overline, title, tone = 'dark' }) {
  const textColor = tone === 'light' ? BG : BG;
  return (
    <div className="mb-8">
      {overline && (
        <div className="text-xs font-semibold tracking-widest" style={{ color: tone === 'light' ? BG : LIGHT }}>
          {overline}
        </div>
      )}
      <h2
        className="text-3xl md:text-4xl font-semibold mt-2"
        style={{ color: tone === 'light' ? BG : LIGHT, fontFamily: 'Comfortaa, ui-rounded, system-ui' }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function Sections() {
  return (
    <>
      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            <SectionHeader overline="ABOUT US" title="We don’t just market — we elevate." tone="dark" />
            <p className="text-lg leading-relaxed" style={{ color: BG, fontFamily: 'Nunito Sans, ui-sans-serif, system-ui' }}>
              BrandsLift crafts growth through precise strategy, standout creative, and technology that scales. We partner with ambitious teams to clarify their story, amplify their presence, and convert attention into momentum.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="rounded-3xl overflow-hidden shadow-xl"
            style={{ backgroundColor: LIGHT }}
          >
            <div className="aspect-[16/10] w-full" style={{ background: `linear-gradient(120deg, ${LIGHT}, rgba(247,122,65,0.25))` }} />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20" style={{ backgroundColor: LIGHT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader overline="SERVICES" title="Growth, engineered with creativity" tone="light" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl p-6 border hover:translate-y-[-4px] transition-transform"
                style={{ backgroundColor: BG, borderColor: 'rgba(240,237,235,0.12)' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(247,122,65,0.15)' }}>
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: LIGHT, fontFamily: 'Comfortaa, ui-rounded, system-ui' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: LIGHT, opacity: 0.85, fontFamily: 'Nunito Sans, ui-sans-serif, system-ui' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="py-20" style={{ backgroundColor: BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader overline="PORTFOLIO" title="Selected Work" tone="dark" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((p, i) => (
              <motion.a
                key={p.title}
                href="#"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl overflow-hidden border relative"
                style={{ borderColor: 'rgba(240,237,235,0.12)' }}
              >
                <div className="aspect-[4/3] w-full" style={{ backgroundColor: '#0f1625' }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                     style={{ background: 'linear-gradient(180deg, rgba(247,122,65,0.0), rgba(247,122,65,0.35))' }} />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="px-3 py-2 rounded-full inline-block" style={{ backgroundColor: LIGHT, color: BG }}>
                    {p.title}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: LIGHT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader overline="TESTIMONIALS" title="What our clients say" tone="light" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl p-6 shadow-sm"
                style={{ backgroundColor: '#ffffff' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img src={`https://i.pravatar.cc/80?img=${i + 3}`} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold" style={{ color: BG }}>{t.name}</div>
                    <div className="text-sm opacity-70" style={{ color: BG }}>{t.role}</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: BG }}>{t.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    title: 'Brand Strategy',
    desc: 'Positioning, messaging, and brand systems that unlock clarity and growth.',
    icon: <Rocket size={18} color={ACCENT} />,
  },
  {
    title: 'Paid Media',
    desc: 'Full-funnel campaigns across Meta, Google, and more with measurable ROI.',
    icon: <Megaphone size={18} color={ACCENT} />,
  },
  {
    title: 'Analytics & CRO',
    desc: 'Track what matters and optimize experiences to convert attention into revenue.',
    icon: <LineChart size={18} color={ACCENT} />,
  },
  {
    title: 'Creative & Content',
    desc: 'Thumb-stopping content and design systems for multi-channel storytelling.',
    icon: <Palette size={18} color={ACCENT} />,
  },
  {
    title: 'Mobile & Web',
    desc: 'High-performance sites and apps that feel effortless and fast.',
    icon: <Smartphone size={18} color={ACCENT} />,
  },
  {
    title: 'SEO',
    desc: 'Technical, on-page, and content SEO strategies that compound over time.',
    icon: <Search size={18} color={ACCENT} />,
  },
];

const portfolio = [
  { title: 'Fintech Growth Sprint' },
  { title: 'DTC Launch System' },
  { title: 'SaaS Demand Engine' },
];

const testimonials = [
  {
    name: 'Ava Williams',
    role: 'VP Marketing, Horizon',
    quote:
      'BrandsLift helped us build a measurable growth engine. Our CAC dropped 32% and demo volume doubled in a quarter.',
  },
  {
    name: 'Marcus Reid',
    role: 'Founder, Lumi DTC',
    quote:
      'From brand strategy to paid, they delivered beyond expectations. The creative system they built still scales today.',
  },
  {
    name: 'Sara Chen',
    role: 'CMO, Nimbus SaaS',
    quote:
      'Tight execution, beautiful design, and deeply analytical. The perfect partner for ambitious teams.',
  },
];
