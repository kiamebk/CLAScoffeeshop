import { motion } from "motion/react";
import { MapPin } from "lucide-react";

const images = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZCHWWxvJ-gSopsfP5pAzj5qOWZDqGA4NyfkNRJh-iiAsKo7in1a0Fv45Mso5_aAuZnrSVrNBgCFXXkOC21KGtrN6-nHUHyGZG1xR21LqzzUALOYlr6hfXjvYiVBf7TF403K9upjO4Gvx93YAQe93V7KSJhoeRerzA7KM2ZyDCZ_j8GHzLBW2AKrS55L08llQm-eVLp9kU5KNXh83gB7ZF18sZ9e_Lya9p4uoWYAOvoDoVPQ6MXP9h5uXVawYQW1f02BPueQp1GW0",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwwMuQAg15cwtuKkl7xloTf5iTZYpqHc0M5-L2DDUmL_ff00omInJ73npYPKqUtpB42sFpwK-ZyknSFtT6JDRR61dk3BKU24jUbKz2C90A0AO3IeLvgeotXQNnjK0PpY2Ln5RFtpSHu5iOP8n8bREyafL5a49OB15C6h3kdSnzeA06ZgN5Iu5AXxGp7BbKLo_gVdBYOHZoy44MnV2COhlIBsLXXHEg_jeXq3nAKYW7fJYEqBEETtsV7p_tdQ-6RaMO_TzvoUzE0RY",
    className: "md:col-span-1"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCassBGIdijFkuaf8lyCxrMt1I9JwZDNp0J5lgOT1y63aKaARZkbGxQqj4Xluty4Uyd0CJ4-qPn8jCaf9T9B_PlVv-rJnRPKsytNLiLG1uxFzmt3HOZWdHaoRhdThXTlTcxWjPSHOUnqQzny-e65PDHfY5bAXQNoYRSDpga3hK6v4aHex5GPw1u1VJxI4kOBHll00Mx3V9xEOJnDMAcK0chHP-CXBjqnGDEVmcDWJ282oka-PeG29ELf7KmPNHJhvXTGyNFJWsdMmQ",
    className: "md:col-span-1"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxVhDqa0mb7evAQIobs3JEKRctZqw6CEW_uBzCGZdVOshG9dEWtEoGs3e67ZBlhuP_uYsyJPGqtTr-W7VTagiymEd1yXaOBrTg2H23O7jzFl5loaMb6hDAEdbo7fSipW9-dDmfHQrUK9ZUkrBjMJiWK-4jWprR47LxFHKrkWOBDMdu5sakg0Ojkx-Z41u4wDBQMc2prngXEYYXOps63KdcVFz1eQOa22uTARMnOzn5RXXqxkIP5XOrTt5wSeHxYcj-_Tuwz7ZaaYU",
    className: "md:col-span-2"
  }
];

export default function Gallery() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="font-headline text-4xl md:text-6xl text-primary mb-4">Không Gian</h2>
            <p className="text-on-surface-variant italic">Nơi sự tối giản gặp gỡ sự sang trọng cổ điển.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-surface-container-highest px-6 py-3 rounded-full text-sm font-label uppercase tracking-widest text-secondary flex items-center gap-2"
          >
            <MapPin size={16} />
            Saigon Heritage District
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[600px]">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${img.className} relative overflow-hidden group rounded-sm`}
            >
              <img 
                alt={`Interior View ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                src={img.src}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
