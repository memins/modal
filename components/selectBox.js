import Image from "next/image";
import awards from "../assets/icon/awards3.svg";
import trash from "../assets/icon/delete.svg";
import { cs } from "classnames";

export default function SelectBox({ text, className, onClick, selected }) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 border-solid border border-sc-gray rounded-xl ${className}`}
    >
      {selected && <Image src={trash} alt="delete" />}
      <Image src={awards} alt="awards" />
      <div className="mt-10 flex flex-col justify-center items-center">
        <p className="font-bold	text-black/25 leading-4 tracking-widest ">
          FEATURED
        </p>
        <p className="font-normal py-1">Silver</p>
        <p className="font-bold">Kristal Elma</p>
      </div>
    </div>
  );
}
