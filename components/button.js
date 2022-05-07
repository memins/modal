import Image from "next/image";

export default function Button({ text, className, onClick, icon }) {
  return (
    <div
      className={
        "m-auto py-3 px-8 font-bold border-solid border border-black rounded-2xl flex justify-center items-center " +
        className
      }
    >
      {icon && (
        <div className="flex justify-center items-center mr-3">
          <Image src={icon} alt={icon} />
        </div>
      )}
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
