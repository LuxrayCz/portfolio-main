import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border border-b-transparent z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-6 flex justify-between items-center">
        <span className="text-2xl md:text-5xl text-white font-semibold bg-gray-200 rounded-md">
          <Image src="/logo.png" alt="logo" width={100} height={40} />
        </span>

        <p className="text-slate-600">All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
