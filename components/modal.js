import Button from "./button";
import ButtonWithIcon from "./buttonWithIcon";

export default function Modal({ title, subTitle, children, onCancel }) {
  return (
    <div
      class="py-12 flex bg-gray-300 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
      id="modal"
    >
      <div className={"m-auto p-8 bg-white rounded-3xl w-1/3"}>
        <div className="mb-2 flex flex-row align-center">
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
            text={"New Award"}
            className={" text-white bg-black  w-2/4"}
          />
        </div>
      </div>
    </div>
  );
}
