import Logo from "@/app/media/logo.png";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const items = [
    {
      name: "FEATURES",
      link: "#FEATURES",
    },
    {
      name: "DEVLOPERS",
      link: "#developers",
    },
    {
      name: "COMPANY",
      link: "#company",
    },
    {
      name: "BLOG",
      link: "#blog",
    },
    {
      name: "CHANGELOG",
      link: "#changelog",
    },
  ];

  return (
    <div className="flex justify-between  pr-16 pl-16 pt-2 border-b border-white/15 pb-4">
        
      <Image src={Logo} 
      height={40}
      width={40} />
      
        <nav className="text-center flex items-center border rounded-3xl border-white/15 p-2">
          {items.map((item) => (
            <Link href={item.link} key={item.name} className="text-gray-300 p-2">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="border border-white/15 p-1 rounded-lg flex items-center">
        <button className="text-gray-300 flex items-center x bg-[#140031] ml-1 mr-1 m-1 pl-2 pr-2 p-1 rounded-lg  border border-white/15">Join Waitlist</button>
        </div>
      
    </div>
  );
};

export default Nav;
