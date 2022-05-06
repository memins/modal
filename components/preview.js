import Button from "./button";
import Image from "next/image";
import left from "../assets/icon/left.svg";
import right from "../assets/icon/right.svg";
import awards from "../assets/icon/awards3.svg";
import awards1 from "../assets/icon/awards1.svg";
import awards2 from "../assets/icon/awards3.svg";
import awards3 from "../assets/icon/awards4.svg";
import Divider from "./divider";
import SelectBox from "./selectBox";
import Input from "./input";

const data = {
  projects: [
    {
      image: awards,
    },
    {
      image: awards1,
    },
    {
      image: awards3,
    },
    {
      image: awards2,
    },
  ],
};

export default function Preview({ text, className, onClick }) {
  return (
    <div className="bg-[#F5F5F5] my-8 py-4 px-5 rounded-2xl">
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold">Accolades Preview</p>
        <Button text="Delete" className="m-0" />
      </div>
      <div className="bg-white my-5 py-6 px-4 rounded-2xl">
        <div>
          <div className="flex flex-row justify-between items-center">
            <Image src={left} alt="left" />
            {data.projects.map((project, key) => {
              return (
                <div
                  className="rounded-xl p-3 border-2 border-solid border-sc-gray-20 flex justify-center  focus:border-red-400  cursor-pointer "
                  tabindex={key}
                >
                  <Image
                    src={project.image}
                    alt={project.image}
                    width={40}
                    height={40}
                  />
                </div>
              );
            })}
            <Image src={right} alt="right" />
          </div>
          <Divider />
          <div className="flex flex-row justify-between py-3">
            <SelectBox className="p-11 mr-6" />
            <div className="flex flex-col justify-between w-full">
              <Input />
              <Input />
              <Input />
              <Input />
            </div>
          </div>
          <Button
            //   onClick={openModal}
            text={"Save Award"}
            className={"bg-black text-white w-full mt-6"}
          />
        </div>
      </div>
    </div>
  );
}
