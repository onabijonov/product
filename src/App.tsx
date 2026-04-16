import React, { useState } from 'react';
import { ChevronRight, ShieldCheck, Truck, Wrench, BadgeCheck, Phone, Send, Instagram, MapPin, Clock, ExternalLink, Globe, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import logo from './assets/logo.svg';
import iph1 from './assets/images/iph1.png';
import mac1 from './assets/images/mac1.png';
import pad1 from './assets/images/pad1.png';
import imac1 from './assets/images/imac1.png';

export default function App() {
  const [lang, setLang] = useState("O'zbek tili");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const languages = ["O'zbek tili", "Rus tili", "English", "O'zbek tili (Cyrillic)"];

  const fadeInUp = {
    initial: { opacity: 0, y: 60, filter: 'blur(15px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  };

  const springConfig = { type: 'spring', damping: 30, stiffness: 80, mass: 1.2 };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15
       }
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1D1D1F] font-sans flex flex-col items-center selection:bg-[#0066CC] selection:text-white">
      {/* Header */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.2 }}
        className="w-full bg-[#FFFFFF]/70 backdrop-blur-xl border-b border-[#D2D2D7]/30 sticky top-0 z-[100] transition-all duration-300"
      >
        <header className="w-full h-16 px-4 md:px-16 flex justify-between items-center max-w-[1024px] mx-auto relative">
          <div className="flex items-center cursor-pointer">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                opacity: [0.9, 1, 0.9],
              }}
              transition={{ 
                opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-24 h-24 flex items-center justify-center pt-2"
            >
              <img src={logo} alt="ProDuct Logo" className="w-full h-full object-contain" />
            </motion.div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="text-[13px] font-semibold text-[#1D1D1F] px-3 py-2 bg-transparent hover:bg-[#F5F5F7] rounded-full transition-colors flex items-center gap-1.5"
              >
                <Globe className="w-4 h-4 text-[#0071E3]" />
                <span className="hidden sm:inline">{lang}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)}></div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute right-0 top-full mt-2 w-48 bg-white/90 backdrop-blur-xl border border-[#D2D2D7]/50 rounded-[18px] shadow-[--shadow-apple] overflow-hidden py-2 z-50 origin-top-right"
                  >
                    {languages.map((l) => (
                      <button
                        key={l}
                        onClick={() => { setLang(l); setIsLangOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-[13px] transition-colors flex items-center justify-between ${lang === l ? 'text-[#0071E3] font-semibold bg-[#F5F5F7]' : 'text-[#1D1D1F] hover:bg-[#F5F5F7]'}`}
                      >
                        {l}
                        {lang === l && <div className="w-1.5 h-1.5 rounded-full bg-[#0071E3]"></div>}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </div>

            <motion.a 
              href="tel:+998884148888"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-[13px] font-semibold text-white px-5 py-2 bg-[#0071E3] rounded-full border border-white/20 flex items-center gap-2 hover:bg-[#0077ED] transition-all"
            >
              <Phone className="w-3.5 h-3.5" /> <span className="hidden sm:inline">(88) 414-88-88</span>
            </motion.a>
          </div>
        </header>
      </motion.div>

      {/* Hero Section */}
      <section className="w-full pt-20 pb-16 flex flex-col items-center text-center px-6 overflow-x-hidden">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="text-[56px] md:text-[84px] font-semibold tracking-[-0.02em] mb-4 max-w-5xl leading-[1.05]"
        >
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1D1D1F] to-[#86868B]">Yondashuv</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[24px] md:text-[28px] text-[#86868B] font-normal mt-2"
        >
          Official Apple & Pro Workstations.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-row gap-4 items-center justify-center mt-10"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#apple" 
            className="bg-[#0071E3] text-white text-[17px] font-medium px-8 py-3 rounded-full shadow-lg shadow-[#0071E3]/20 hover:bg-[#0077ED] transition-colors"
          >
            Apple
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#pc" 
            className="bg-[#F5F5F7] text-[#1D1D1F] text-[17px] font-medium px-8 py-3 rounded-full hover:bg-[#E8E8ED] transition-colors"
          >
            PC kompyuterlar
          </motion.a>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="w-full max-w-[920px] mx-auto px-4 md:px-0 pb-20">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { Icon: BadgeCheck, text: "100% Rasmiy Mahsulotlar" },
            { Icon: ShieldCheck, text: "Rasmiy Kafolat" },
            { Icon: Truck, text: "Toshkent bo'ylab tezkor yetkazib berish" },
            { Icon: Wrench, text: "Professional maslahat va yig'ib berish" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="bg-[#F5F5F7] rounded-[22px] p-6 flex flex-col items-center text-center gap-3"
            >
              <item.Icon className="w-8 h-8 text-[#0071E3]" strokeWidth={1.5} />
              <h3 className="text-[15px] font-semibold tracking-[-0.01em]">{item.text}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Main Showcase - Apple */}
      <section id="apple" className="w-full max-w-[920px] mx-auto px-4 md:px-0 pb-20 pt-10">
        <motion.h2 
          {...fadeInUp}
          className="text-[40px] font-semibold tracking-[-0.015em] text-center mb-10"
        >
          Apple Ekosistemasi
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[450px] md:auto-rows-[550px]">
          
          {/* MacBook - Large */}
          <motion.div 
            {...fadeInUp}
            whileHover={{ y: -10 }}
            style={{ 
              background: 'linear-gradient(298.41deg, #EBEBEB 49.42%, #FFFFFF 137.1%)'
            }}
            className="md:col-span-8 rounded-[30px] overflow-hidden relative flex flex-col items-center text-center p-8 cursor-pointer group shadow-[--shadow-apple] hover:shadow-[--shadow-apple-hover] transition-all duration-500"
          >
            <h3 className="text-[28px] font-semibold tracking-[-0.01em] mb-1">MacBook Pro</h3>
            <p className="text-[17px] text-[#86868B] font-normal">Aqlbovar qilmas kuch.</p>
            <motion.a 
              href="https://t.me/pro_duct_uz"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 mb-20 px-10 py-2.5 bg-[#1D1D1F] text-white text-[15px] font-semibold rounded-full shadow-lg flex items-center justify-center group-hover:bg-[#0071E3] transition-colors"
            >
              Batafsil
            </motion.a>
            <div className="absolute bottom-10 w-full h-[65%] flex justify-center items-end">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={springConfig}
                src={mac1} 
                alt="Apple MacBook" 
                className="w-[85%] h-full object-contain object-bottom" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </motion.div>

          {/* iPhone - Medium */}
          <motion.div 
            {...fadeInUp}
            whileHover={{ y: -10 }}
            style={{ 
              background: 'linear-gradient(180deg, #000000 0%, #D55E0A 255.77%)'
            }}
            className="md:col-span-4 rounded-[30px] overflow-hidden relative flex flex-col items-center text-center p-8 cursor-pointer group shadow-[--shadow-apple] hover:shadow-[--shadow-apple-hover] transition-all duration-500"
          >
            <h3 className="text-[28px] font-semibold tracking-[-0.01em] mb-1 text-white">iPhone 17 Pro</h3>
            <p className="text-[17px] text-white/70 font-normal">Titanium.</p>
            <motion.a 
              href="https://t.me/pro_duct_uz"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 mb-20 px-10 py-2.5 bg-white text-[#1D1D1F] text-[15px] font-semibold rounded-full shadow-lg flex items-center justify-center hover:bg-[#F5F5F7] transition-colors"
            >
              Batafsil
            </motion.a>
            <div className="absolute bottom-0 w-full h-[65%] flex justify-center items-end">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={springConfig}
                src={iph1} 
                alt="iPhone 17 Pro" 
                className="w-[85%] h-full object-contain object-bottom" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </motion.div>

          {/* iPad - Medium */}
          <motion.div 
            {...fadeInUp}
            whileHover={{ y: -10 }}
            style={{ 
              background: 'linear-gradient(16.28deg, #000000 -187.2%, #747A99 134.34%)'
            }}
            className="md:col-span-6 rounded-[30px] overflow-hidden relative flex flex-col items-center text-center p-8 cursor-pointer group shadow-[--shadow-apple] hover:shadow-[--shadow-apple-hover] transition-all duration-500"
          >
            <h3 className="text-[28px] font-semibold tracking-[-0.01em] mb-1 text-white">iPad Pro</h3>
            <p className="text-[17px] text-white/70 font-normal">Yengil. Kuchli.</p>
            <motion.a 
              href="https://t.me/pro_duct_uz"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 mb-20 px-10 py-2.5 bg-white text-[#1D1D1F] text-[15px] font-semibold rounded-full shadow-lg flex items-center justify-center hover:bg-[#F5F5F7] transition-colors"
            >
              Batafsil
            </motion.a>
            <div className="absolute bottom-6 w-full h-[60%] flex justify-center items-end">
              <motion.img 
                whileHover={{ y: -5, scale: 1.02 }}
                transition={springConfig}
                src={pad1} 
                alt="iPad Pro" 
                className="w-[85%] h-full object-contain object-bottom" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </motion.div>

          {/* Accessories - Medium */}
          <motion.div 
            {...fadeInUp}
            whileHover={{ y: -10 }}
            style={{ 
              background: 'linear-gradient(180deg, #0066CC -142.44%, #FFFFFF 100%)'
            }}
            className="md:col-span-6 rounded-[30px] overflow-hidden relative flex flex-col items-center text-center p-8 cursor-pointer group shadow-[--shadow-apple] hover:shadow-[--shadow-apple-hover] transition-all duration-500"
          >
            <h3 className="text-[28px] font-semibold tracking-[-0.01em] mb-1 text-white">iMac oilasi</h3>
            <p className="text-[17px] text-white/80 font-normal">Yuqori samaradorlik</p>
            <motion.a 
              href="https://t.me/pro_duct_uz"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 mb-20 px-10 py-2.5 bg-[#1D1D1F] text-white text-[15px] font-semibold rounded-full shadow-lg flex items-center justify-center group-hover:bg-[#0071E3] transition-colors"
            >
              Batafsil
            </motion.a>
            <div className="absolute bottom-6 w-full h-[60%] flex justify-center items-end">
              <motion.img 
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={springConfig}
                src={imac1} 
                alt="iMac Family" 
                className="w-[85%] h-full object-contain object-bottom" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Main Showcase - PC */}
      <section id="pc" className="w-full max-w-[920px] mx-auto px-4 md:px-0 pb-24 pt-10">
        <motion.h2 
          {...fadeInUp}
          className="text-[40px] font-semibold tracking-[-0.015em] text-center mb-10"
        >
          Professional PC
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[450px] md:auto-rows-[550px]">
          
          {/* PC Card 1 - Medium */}
          <motion.div 
            {...fadeInUp}
            whileHover={{ y: -10 }}
            className="md:col-span-4 bg-[#F5F5F7] rounded-[22px] overflow-hidden relative flex flex-col items-center text-center p-8 cursor-pointer group shadow-[--shadow-apple] hover:shadow-[--shadow-apple-hover] transition-all duration-500"
          >
            <h3 className="text-[28px] font-semibold tracking-[-0.01em] mb-1">Pro Studio</h3>
            <p className="text-[17px] text-[#86868B] font-normal">Cheksiz imkoniyat.</p>
            <motion.a 
              href="https://t.me/pro_duct_uz"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 mb-20 px-10 py-2.5 bg-[#1D1D1F] text-white text-[15px] font-semibold rounded-full shadow-lg flex items-center justify-center group-hover:bg-[#0071E3] transition-colors"
            >
              Batafsil
            </motion.a>
            <div className="absolute bottom-0 w-full h-[60%] flex justify-center items-end">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={springConfig}
                src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80" 
                alt="Pro PC Setup" 
                className="w-[80%] h-full object-cover object-top rounded-t-3xl" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </motion.div>

          {/* PC Card 2 - Large */}
          <motion.div 
            {...fadeInUp}
            whileHover={{ y: -10 }}
            className="md:col-span-8 bg-[#F5F5F7] rounded-[22px] overflow-hidden relative flex flex-col items-center text-center p-8 cursor-pointer group shadow-[--shadow-apple] hover:shadow-[--shadow-apple-hover] transition-all duration-500"
          >
            <h3 className="text-[28px] font-semibold tracking-[-0.01em] mb-1">Workstation</h3>
            <p className="text-[17px] text-[#86868B] font-normal">Arxitektor va 3D dizaynerlar uchun.</p>
            <motion.a 
              href="https://t.me/pro_duct_uz"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 mb-32 md:mb-20 px-10 py-2.5 bg-[#1D1D1F] text-white text-[15px] font-semibold rounded-full shadow-lg flex items-center justify-center group-hover:bg-[#0071E3] transition-colors"
            >
              Batafsil
            </motion.a>
            <div className="absolute bottom-0 w-full h-[65%] flex justify-center items-end">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={springConfig}
                src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=80" 
                alt="Clean Workstation" 
                className="w-[85%] h-full object-cover object-top rounded-t-3xl" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Target Audience */}
      <section className="w-full max-w-[920px] mx-auto px-4 md:px-0 pb-24 pt-10">
        <motion.h2 
          {...fadeInUp}
          className="text-[40px] font-semibold tracking-[-0.015em] text-center mb-10"
        >
          Kimlar uchun?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Dasturchilar va IT", desc: "Kod yozish va murakkab hisoblashlar uchun ishonchli tizimlar.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" },
            { title: "Dizayner va Kreatorlar", desc: "Aniq ranglar va yuqori render tezligi talab qiluvchilar uchun.", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80" },
            { title: "Biznes va Menejment", desc: "Premium ko'rinish va barqaror ishlashni qadrlovchilar uchun.", img: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=600&q=80" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              {...fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-[#F5F5F7] rounded-[22px] overflow-hidden flex flex-col group cursor-pointer shadow-[--shadow-apple] hover:shadow-[--shadow-apple-hover] transition-all duration-500"
            >
              <div className="h-[200px] w-full overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-[19px] font-semibold tracking-[-0.01em] mb-1">{item.title}</h3>
                <p className="text-[15px] text-[#86868B]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full max-w-[920px] mx-auto px-4 md:px-0 pb-24">
        <motion.div 
          {...fadeInUp}
          className="bg-[#F5F5F7] rounded-[22px] p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0071E3] to-transparent pointer-events-none"
          />
          <h2 className="text-[40px] md:text-[48px] font-semibold tracking-[-0.015em] mb-4 leading-[1.1] relative z-10">Yordam kerakmi?</h2>
          <p className="text-[19px] text-[#86868B] mb-8 max-w-lg relative z-10">
            O'zingizga mos qurilmani tanlashda yordam beramiz. Mutaxassislarimiz bilan bog'laning.
          </p>
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center text-[24px] sm:text-[32px] md:text-[48px] font-semibold tracking-[-0.015em] mb-12 text-[#1D1D1F] relative z-10 whitespace-nowrap"
          >
            {"+998(88)414-88-88".split('').map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  initial: { y: 40, opacity: 0, filter: 'blur(8px)' },
                  animate: { y: 0, opacity: 1, filter: 'blur(0px)' }
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10">
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+998884148888" 
              className="bg-[#1D1D1F] text-white text-[17px] font-normal px-8 py-3.5 rounded-full shadow-[--shadow-apple] hover:shadow-[--shadow-apple-hover] transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> Qo'ng'iroq qilish
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://t.me/Pro_duct_uzb" 
              target="_blank"
              className="bg-[#0071E3] text-white text-[17px] font-normal px-8 py-3.5 rounded-full shadow-[--shadow-apple] hover:shadow-[--shadow-apple-hover] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" /> Telegramdan yozish
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#F5F5F7] pt-16 pb-10 px-4 md:px-16 flex flex-col mt-auto border-t border-[#D2D2D7]/50">
        <div className="max-w-[1024px] mx-auto w-full mb-16">
          <motion.div 
            {...fadeInUp}
            className="w-full h-[350px] bg-[#FFFFFF] rounded-[32px] overflow-hidden shadow-[--shadow-apple] relative group border border-[#D2D2D7]/50"
          >
            <iframe 
              src="https://yandex.com/map-widget/v1/?ll=69.295475%2C41.289287&z=17&pt=69.295475,41.289287,pm2rdm" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allowFullScreen={true}
              className="grayscale-[0.2] contrast-[1.1] brightness-[0.95] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute top-6 left-6 z-10">
              <div className="bg-white/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-[#D2D2D7]/50 shadow-[--shadow-apple]">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#0071E3]" />
                  <span className="text-[14px] font-semibold">Bizning manzil</span>
                </div>
                <p className="text-[12px] text-[#86868B]">Toshkent, Mirobod tumani</p>
                <a 
                  href="https://yandex.com/maps/?ll=69.295475%2C41.289287&z=17&pt=69.295475,41.289287,pm2rdm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[12px] text-[#0071E3] mt-2 flex items-center gap-1 hover:underline"
                >
                  Yandex xaritada ochish <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-[1024px] mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="flex flex-col gap-3">
            <div className="font-semibold text-[21px] tracking-[-0.02em] text-[#1D1D1F] mb-2 flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-32 h-32 object-contain" />
            </div>
            <p className="text-[13px] text-[#86868B] leading-relaxed max-w-[250px]">
              Official Apple va Professional PC kompyuterlari savdosi. Sifat va ishonch kafolati.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-[12px] font-semibold text-[#1D1D1F] uppercase tracking-widest mb-2">Aloqa</h4>
            <a href="tel:+998884148888" className="text-[13px] text-[#86868B] hover:text-[#1D1D1F] flex items-center gap-2 transition-colors">
              <Phone className="w-4 h-4" /> +998(88)414-88-88
            </a>
            <a href="https://t.me/pro_duct_uz" target="_blank" className="text-[13px] text-[#86868B] hover:text-[#1D1D1F] flex items-center gap-2 transition-colors">
              <Send className="w-4 h-4" /> @pro_duct_uz
            </a>
            <a href="https://instagram.com/pro_duct.uz" target="_blank" className="text-[13px] text-[#86868B] hover:text-[#1D1D1F] flex items-center gap-2 transition-colors">
              <Instagram className="w-4 h-4" /> @pro_duct.uz
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-[12px] font-semibold text-[#1D1D1F] uppercase tracking-widest mb-2">Manzil</h4>
            <div className="text-[13px] text-[#86868B] flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>O'zbekiston, Toshkent shahar,<br/>Mirobod tumani</span>
            </div>
            <div className="text-[13px] text-[#86868B] flex items-center gap-2 mt-1">
              <Clock className="w-4 h-4" />
              <span>Du-Yak: 10:00 - 21:00</span>
            </div>
          </div>
        </div>
        
        <div className="w-full h-[1px] bg-[#D2D2D7]/50 mb-6 max-w-[1024px] mx-auto"></div>
        
        <div className="max-w-[1024px] mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[12px] text-[#86868B]">
          <p>&copy; 2026 ProDuct. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-6">
            <span className="hover:text-[#1D1D1F] transition-colors cursor-pointer">Maxfiylik siyosati</span>
            <span className="hover:text-[#1D1D1F] transition-colors cursor-pointer">Foydalanish shartlari</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
