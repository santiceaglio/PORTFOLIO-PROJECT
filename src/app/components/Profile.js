

// export default function Profile() {
//   return (
//     <div className="hidden xl:flex xl:max-w-none z-10">
//       <Image
//         src="/profilephoto.png"
//         priority
//         width={700}
//         height={700}
//         alt="Profile photo Matias Rivarola rivarola matias"
//         className="translate-z-0 w-full h-full"
//       />
//     </div>
//   );
// }

import Image from "next/image"

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none z-10">
    <Image src={"/bulb.png"} priority width={700} height={700} alt="" className="translate-z-0 w-[50%] h-[50%] mb-[90%] ml-[30%] "/>
    </div>;
};

export default Avatar;
