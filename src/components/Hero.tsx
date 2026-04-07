import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          alt="Rustic elegant cafe interior" 
          className="w-full h-full object-cover filter brightness-90 contrast-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS9mfBRZUYWgKLfrtoHZ0xsKRB9Pv-ZnV_xuIPHMBKNcmjriduUJyZb8AdcX1shkICtTau2eYC6VsmN1dBFLSe2qsGj87Dlo_oAShHpUeJ5Gj-uXE-d0cBf61Gh_hwbn7-B9rLMIpVg2BrggImSODHr4d836wYis8bkGXdDv4IxIsM8nLWcAvQDpIO-0mi1yIPevda8AIRG_zHf_ZjE3Dy98Iwm4fhTo4rvyWXdzEk7WhwTDqFU4PkfMMMBDn-fzXQmAzDfdSluNk"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/60 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-label uppercase tracking-[0.3em] text-secondary text-sm mb-6 block"
        >
          Kinh Điển & Tinh Tế
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.1] mb-8"
        >
          Sự Tinh Tế Trong <br />Từng Giọt Cà Phê
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="font-body text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed mb-10"
        >
          CLAS - Nơi khởi đầu của những câu chuyện lịch thiệp. Một không gian di sản mang hơi thở Châu Âu giữa lòng phố.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-wrap gap-6"
        >
          <button className="bg-primary text-white px-8 py-4 rounded-md font-label font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all">
            Khám phá Menu
          </button>
          <button className="border border-outline-variant text-primary px-8 py-4 rounded-md font-label font-bold text-sm tracking-widest uppercase hover:bg-surface-container transition-all">
            Không Gian
          </button>
        </motion.div>
      </div>
    </section>
  );
}
