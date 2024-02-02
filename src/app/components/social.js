import Link from "next/link";
import { RiLinkedinBoxLine , RiGithubFill, RiWhatsappFill, RiMailAddFill } from "react-icons/ri";


export const Social = () => {
  return(
    <div className="flex items-center gap-x-5 text-[50px]">
      <Link href={'https://www.linkedin.com/in/santiago-ceaglio-b1a89b263/'} className="hover:text-newred transition-all duration-300"><RiLinkedinBoxLine/></Link>
      <Link href={'https://github.com/santiceaglio'} className="hover:text-newred transition-all duration-300"><RiGithubFill/></Link>
      <Link href={'mailto:santiceagliohf@gmail.com'} className="hover:text-newred transition-all duration-300"><RiMailAddFill/></Link>
    </div>
  )
}