import { motion } from "motion/react";

const menuItems = [
  {
    title: "CLAS Signature Cold Brew",
    price: "85k",
    desc: "Ủ lạnh trong 24 giờ với vỏ cam hữu cơ và quế hồi, tạo nên hương vị thanh tao và sảng khoái.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSN3esPxbr8s2lTWUEJs1b0qSvIzfKoNHDI4ejcWFx30xTCI6xkqw1_nfqMylQNJpnMNABt18e6--rks_Qj6pZ4MkQjGwe1Kn8yTAc4RbWNzmhm8_cZ66LVMmD8ySX4qNdo0ygzt9WBKc_CIOM9yB2p7OJmnRw_1hO7jOd06MpH1UHtZoV_s8rWxjWO-stAEwKtvF1r4RJiTcnyWUPK4qtPgaaWXjGKCbt6puB0bKQtnL3ANPoK7jmXYLK2xV5cowCuI6TCghoS6c",
    tags: ["Ethiopia", "Signature"]
  },
  {
    title: "Heritage Latte",
    price: "75k",
    desc: "Sự kết hợp hoàn hảo giữa Espresso đậm đặc và sữa tươi nguyên chất đánh nóng mịn màng.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEUw4bW57UGgWwPYk23qcdRc_fOP6fqbGTmwl7p99Cfu_bHZNZfDpv95A7Qd8Ens0Gg_TSFKDXUtiSa47IPVoR69rlcnRSJkZh3LkHNF7PMu0H7WJbQB4d2xK_g5acn4HJbriGsd4f6lJF1CenGvTCrgoKmBegzTJJR5m11DpXiJjZFKaS1qjPZN_HmphpXBhKxtyLsoRdbSdkea2juZ4U31qeSAtFW5WflgBatd6h7iqM7rK1_75xI5N024Szbi-HQG-GkH5WDFY",
    tags: ["Đà Lạt"]
  },
  {
    title: "Almond Croissant",
    price: "65k",
    desc: "Bánh sừng bò nướng giòn tan trong ngày với lớp nhân kem hạnh nhân béo ngậy đặc trưng.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcjHbcUuzr7qdJHEYbPf5gcQuvTEdsYCVU77bUQZp7KFIzdc81uzkmaJWaSMoeB7bWjFvf5Oy_SYEpBnRpCBtZU4mAGc3Fa0yckxy1DxFGMYB4vap1sGgijDAIXfYpnnXdVX9VR3eU_TztVeNBHqzPxvkzzr1MVS0PRx1Mm6g8YZBWfzWmX-zjmveRO-ZbxkgRUJcgh_stojmHvnZMdb2QZdlTUWGMapQ3rRSA3SDgriZhK7V1MW-uHz6pwcVQZUbZJ_MYuHju034",
    tags: ["Fresh Baked"]
  }
];

export default function Menu() {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl md:text-6xl text-primary mb-6"
          >
            Thực Đơn Nổi Bật
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-label uppercase tracking-widest text-secondary-container bg-secondary/10 inline-block px-4 py-1 rounded-sm"
          >
            Mùa Thu 2024
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {menuItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative mb-8 overflow-hidden rounded-sm">
                <img 
                  alt={item.title} 
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={item.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-surface-container-high/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase font-bold text-on-surface-variant">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline text-2xl text-primary">{item.title}</h3>
                <span className="text-secondary font-bold font-body">{item.price}</span>
              </div>
              <p className="text-on-surface-variant font-body leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="font-label font-bold text-sm tracking-[0.2em] uppercase text-primary border-b-2 border-primary/10 pb-2 hover:border-primary transition-all">
            Xem thực đơn đầy đủ
          </button>
        </div>
      </div>
    </section>
  );
}
