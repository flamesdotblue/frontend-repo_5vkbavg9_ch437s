import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const BG = '#1B2539';
const ACCENT = '#F77A41';
const LIGHT = '#F0EDEB';

export default function ContactFooter() {
  return (
    <>
      <section id="contact" className="py-20" style={{ backgroundColor: BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: LIGHT, fontFamily: 'Comfortaa, ui-rounded, system-ui' }}>
              Let’s lift your brand
            </h2>
            <p className="text-base mb-8" style={{ color: LIGHT, opacity: 0.85, fontFamily: 'Nunito Sans, ui-sans-serif, system-ui' }}>
              Tell us about your goals and we’ll craft a roadmap to reach them.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3" style={{ color: LIGHT }}>
                <Mail size={18} color={ACCENT} /> hello@brandslift.com
              </div>
              <div className="flex items-center gap-3" style={{ color: LIGHT }}>
                <Phone size={18} color={ACCENT} /> +1 (555) 012-3456
              </div>
              <div className="flex items-center gap-3" style={{ color: LIGHT }}>
                <MapPin size={18} color={ACCENT} /> Remote • Global
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 lg:p-8 shadow-xl space-y-4"
            style={{ backgroundColor: LIGHT }}
            action="mailto:hello@brandslift.com"
            method="POST"
            encType="text/plain"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium" style={{ color: BG }}>Name</label>
                <input type="text" name="name" required className="mt-1 w-full rounded-xl px-4 py-3 outline-none" style={{ backgroundColor: '#ffffff', color: BG }} />
              </div>
              <div>
                <label className="text-sm font-medium" style={{ color: BG }}>Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-xl px-4 py-3 outline-none" style={{ backgroundColor: '#ffffff', color: BG }} />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium" style={{ color: BG }}>Company</label>
              <input type="text" name="company" className="mt-1 w-full rounded-xl px-4 py-3 outline-none" style={{ backgroundColor: '#ffffff', color: BG }} />
            </div>
            <div>
              <label className="text-sm font-medium" style={{ color: BG }}>Project Details</label>
              <textarea name="message" rows={5} className="mt-1 w-full rounded-xl px-4 py-3 outline-none" style={{ backgroundColor: '#ffffff', color: BG }} />
            </div>
            <button type="submit" className="w-full px-6 py-3 rounded-full font-semibold" style={{ backgroundColor: ACCENT, color: BG }}>
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      <footer className="py-8 border-t" style={{ backgroundColor: BG, borderColor: LIGHT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg" style={{ backgroundColor: LIGHT }} />
            <span className="text-sm" style={{ color: LIGHT }}>© {new Date().getFullYear()} BrandsLift. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm hover:opacity-80" style={{ color: LIGHT }}>Privacy</a>
            <a href="#" className="text-sm hover:opacity-80" style={{ color: LIGHT }}>Terms</a>
            <a href="#contact" className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: LIGHT, color: BG }}>Get in Touch</a>
          </div>
        </div>
      </footer>
    </>
  );
}
