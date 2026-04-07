export default function Footer() {
  return (
    <footer className="bg-surface-container-high pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 max-w-7xl mx-auto text-primary">
        <div className="md:col-span-1">
          <div className="font-headline text-2xl mb-6">CLAS</div>
          <p className="font-body text-xs tracking-tight opacity-70 leading-relaxed">
            Heritage coffee shop experience. Redefining modern classicism through the art of fine coffee and silent spaces.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold uppercase text-[10px] tracking-widest mb-6 opacity-40">Follow Us</h4>
          <div className="flex flex-col gap-3 font-body text-xs tracking-tight">
            <a className="opacity-70 hover:opacity-100 transition-opacity" href="#">Instagram</a>
            <a className="opacity-70 hover:opacity-100 transition-opacity" href="#">Facebook</a>
            <a className="opacity-70 hover:opacity-100 transition-opacity" href="#">Ordering QR</a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold uppercase text-[10px] tracking-widest mb-6 opacity-40">Locations</h4>
          <div className="flex flex-col gap-3 font-body text-xs tracking-tight opacity-70">
            <p>01 Dong Khoi, Dist 1, HCMC</p>
            <p>12 Nha Chung, Hoan Kiem, HN</p>
            <p>45 Le Dai Hanh, Da Lat</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold uppercase text-[10px] tracking-widest mb-6 opacity-40">Inquiry</h4>
          <div className="font-body text-xs tracking-tight opacity-70">
            <p className="mb-2">hello@clascoffee.vn</p>
            <p>+84 28 3822 1234</p>
          </div>
        </div>
      </div>
      
      <div className="mt-20 border-t border-primary/5 pt-8 text-center px-6 md:px-12 max-w-7xl mx-auto">
        <p className="font-body text-xs tracking-tight opacity-70">© 2024 CLAS Coffee Heritage. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
