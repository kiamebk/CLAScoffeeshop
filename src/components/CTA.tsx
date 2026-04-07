import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="py-24 px-6 md:px-12 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-4xl md:text-5xl mb-8 leading-tight"
        >
          Hãy Ghé Thăm CLAS Và Viết Nên Câu Chuyện Của Riêng Bạn.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg opacity-80 mb-12 font-light tracking-wide"
        >
          Mở cửa hàng ngày từ 07:00 đến 22:00. <br />Chúng tôi luôn sẵn sàng đón tiếp bạn.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="inline-flex flex-wrap justify-center items-center gap-6 text-sm font-label tracking-[0.3em] uppercase"
        >
          <span>Hồ Chí Minh</span>
          <span className="w-2 h-2 bg-secondary-container rounded-full hidden md:block"></span>
          <span>Hà Nội</span>
          <span className="w-2 h-2 bg-secondary-container rounded-full hidden md:block"></span>
          <span>Đà Lạt</span>
        </motion.div>
      </div>
    </section>
  );
}
