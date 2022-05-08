import Button from "./button";
import ButtonWithIcon from "./buttonWithIcon";
import plus from "../assets/icon/plus.svg";

export default function Modal({
  title,
  subTitle,
  children,
  onCancel,
  onConfirm,
}) {
  return (
    <div className="py-12 flex  bg-sc-gray w-full ">
      <div className={"m-auto p-8 bg-white rounded-3xl w-[35rem]"}>
        <div className="mb-4 flex flex-row align-center">
          <ButtonWithIcon onClick={onCancel} buttonText={"Close"} />
        </div>
        <div className="mb-8 flex flex-col">
          <h4 className="font-bold">{title}</h4>
          <p className="font-extralight">{subTitle}</p>
        </div>

        {children}

        <div className="mt-8 flex justify-between">
          <Button
            text={"Exit"}
            onClick={onCancel}
            className={"bg-white text-black mr-2 w-2/4 "}
          />
          <Button
            onClick={onConfirm}
            text={"New Award"}
            icon={plus}
            className={" text-white bg-black  w-2/4"}
          />
        </div>
      </div>
    </div>
  );
}
