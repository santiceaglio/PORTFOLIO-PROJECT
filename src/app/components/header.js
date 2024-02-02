import Image from "next/image";
import Link from "next/link";
import { Social } from "./social";


const Header = () => {
  return <header className="absolute z-50 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">

  <div className= "container mx-auto ">
  
  <div className="container mx-auto">
  </div>
  <Link href={"/"}>
    <Image
    src={"/LOGOSC1.png"}
    width={220}
    height={48}
    alt=""
    priority={true}
    />
  </Link>
  <Social/>
  </div>

  </header>;
};

export default Header;