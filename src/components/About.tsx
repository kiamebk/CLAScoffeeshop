import { motion } from "motion/react";
import { MoveRight } from "lucide-react";

export default function About() {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:col-span-5 order-2 md:order-1"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-surface-container-high -z-10 transition-transform group-hover:scale-105 duration-700"></div>
            <img 
              alt="Artisan coffee preparation" 
              className="w-full aspect-[4/5] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYxwLllCQ_EaaRdNaDkGmN3-dyvZOUiZPryglVEXnES62A4elN9S6r0CmRhRufSkHHzzysgdjTC6XXsggvyesrEHJS_NDqKMM2ZaT8RIL6UKAI0T6okxXE-m-qR0O6Oj7ueeggEFw4yhzxdgjeE2WpyIQED25qPDM8AIO5wpzQb8I6aS--Z4q2AGXsb1OsDVjUUUCHifBc0fed2ilZRHD7q0dDXv3j5HSCvaABJ5yNg6bu8Vd4P2I5HNgt1C9ViIaNnom36UP9esw"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:col-span-7 order-1 md:order-2 md:pl-16"
        >
          <h2 className="font-headline text-4xl md:text-6xl text-primary mb-8">Về Chúng Tôi</h2>
          <div className="space-y-6 text-lg text-on-surface-variant leading-loose font-body">
            <p>Tại CLAS, chúng tôi không chỉ pha chế cà phê; chúng tôi phục chế lại những trải nghiệm văn hóa đã bị lãng quên. Lấy cảm hứng từ những tiệm cà phê di sản tại Paris và Vienna, mỗi tách cà phê là một bản giao hương giữa hạt Robusta đậm đà từ vùng cao nguyên Việt Nam và kỹ thuật rang xay thủ công tinh xảo.</p>
            <p>Triết lý của chúng tôi nằm ở sự tĩnh lặng. Giữa nhịp sống hối hả, CLAS là một khoảng lặng cần thiết để bạn tìm lại chính mình qua những hương vị thuần khiết nhất.</p>
          </div>
          <motion.div 
            whileHover={{ x: 10 }}
            className="mt-12 flex items-center gap-4 text-primary font-bold tracking-widest uppercase text-sm border-b border-primary/20 pb-2 w-fit cursor-pointer"
          >
            Xem câu chuyện của chúng tôi
            <MoveRight size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
