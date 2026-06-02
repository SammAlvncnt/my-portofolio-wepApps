import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Mohon lengkapi seluruh kolom nama, email, dan pesan Anda.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    // Simulate sending proposal sequence
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setIsSubmitted(false);
    setErrorMsg(null);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 bg-[#F3F3F3] relative border-t border-black/15">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Grid with diagnostic styling info */}
        <div className="flex flex-col gap-2.5 mb-16 text-center items-center">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#2A2A2A] uppercase flex items-center gap-2 font-bold">
            <span className="w-1.5 h-1.5 bg-black" />
            [ PROTOCOL_04 // COMMUNICATIONS ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black uppercase font-display leading-none">
            IDE, SARAN & HUBUNGI DEV
          </h2>
          <div className="w-16 h-[1.5px] bg-black mt-2"></div>
        </div>

        <div className="w-full max-w-2xl mx-auto">
          {/* Form Side with technical border styling */}
          <div className="bg-white p-6 sm:p-10 border-2 border-black rounded-none shadow-[8px_8px_0px_0px_#000000] relative">
            {/* Corner decorator intersections typical of Antigravity */}
            <div className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-black select-none z-10 font-bold">+</div>
            <div className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-black select-none z-10 font-bold">+</div>
            <div className="absolute -bottom-2 -left-1.5 font-mono text-[10px] text-black select-none z-10 font-bold">+</div>
            <div className="absolute -bottom-2 -right-1.5 font-mono text-[10px] text-black select-none z-10 font-bold">+</div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 text-left"
                >
                  <p className="font-mono text-[9px] tracking-wider text-black uppercase flex items-center gap-1.5 font-bold mb-2">
                    <span className="w-1.5 h-1.5 bg-black" />
                    // NODE_MESSAGE_SERVICE_STARK_ACTIVE // PORT_3000
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[11px] text-black uppercase tracking-wide font-bold">Nama Lengkap *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Samuel Alvin"
                        className="w-full bg-transparent border-b-2 border-black hover:border-black focus:border-black focus:outline-none py-3 px-1 text-sm rounded-none transition-colors font-mono"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[11px] text-black uppercase tracking-wide font-bold">Alamat Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. samuel@gmail.com"
                        className="w-full bg-transparent border-b-2 border-black hover:border-black focus:border-black focus:outline-none py-3 px-1 text-sm rounded-none transition-colors font-mono"
                      />
                    </div>
                  </div>

                  {/* Message details */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[11px] text-black uppercase tracking-wide font-bold">Ide, Saran & Pesan Anda *</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Jelaskan secara ringkas ide, saran, tantangan proyek Anda atau pesan..."
                      className="w-full bg-transparent border-b-2 border-black hover:border-black focus:border-black focus:outline-none py-3 px-1 text-sm rounded-none transition-colors resize-none font-mono"
                    />
                  </div>

                  {/* Error Message rendering if validation fails */}
                  {errorMsg && (
                    <div className="bg-red-50 text-red-700 p-3.5 border-2 border-red-500 font-mono text-[11px] flex items-center gap-2 rounded-none">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Submit Action */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3.5 mt-2 font-mono text-xs uppercase tracking-wider text-center transition-all bg-black text-white hover:bg-[#2A2A2A] rounded-none flex items-center justify-center gap-2 cursor-pointer pointer-events-auto border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] duration-150 ${
                      isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                    }`}
                  >
                    <span>{isSubmitting ? 'Mengirim...' : 'Kirim Ide & Saran'}</span>
                    <Send className="w-4 h-4 text-white" />
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="success-receipt"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-16 h-16 rounded-none bg-neutral-100 flex items-center justify-center text-black mb-6 border-2 border-black shadow-[4px_4px_0px_0px_#000000]">
                    <CheckCircle2 className="w-8 h-8 text-black" />
                  </div>

                  <h3 className="font-sans font-black text-2xl text-black mb-2 uppercase leading-none tracking-tight">
                    Pesan Anda Berhasil Terkirim!
                  </h3>
                  <p className="text-[#2A2A2A] text-sm font-mono max-w-md leading-relaxed mb-6">
                    Terima kasih atas ide dan saran berharga Anda. Pesan Anda telah kami terima secara langsung di dalam sistem kami. Kami akan meninjau dan merespons surel Anda secepatnya.
                  </p>

                  <div className="flex justify-center">
                    <button
                      onClick={resetForm}
                      className="px-5 py-2.5 bg-black hover:bg-[#2A2A2A] text-white font-mono text-[10px] uppercase tracking-wider flex items-center gap-2 border border-black rounded-none transition-all pointer-events-auto cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]"
                    >
                      <span>Kirim Pesan Lainnya</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
