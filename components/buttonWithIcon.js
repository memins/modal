import Image from "next/image";
import close from "../assets/icon/disableclose.svg";

export default function Button({ buttonText, className, onClick }) {
  return (
    <>
      <Image src={close} alt="close" className="w-6 h-6 cursor-pointer" />
      <button onClick={onClick} className={"ml-2 font-bold" + className}>
        {buttonText}
      </button>
    </>
  );
}
