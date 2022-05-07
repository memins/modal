import React, { useState } from "react";
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
  award: [
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
  const [selectedAward, setselectedAward] = useState(awards);

  console.log("selectedAward", selectedAward);
  return (
    <div className="bg-[hsl(0,0%,96%)] my-8 py-4 px-5 rounded-2xl">
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold">Accolades Preview</p>
        <Button text="Delete" className="m-0" />
      </div>
      <div className="bg-white my-5 py-6 px-4 rounded-2xl">
        <div>
          <div className="flex flex-row justify-between items-center">
            <Image src={left} alt="left" />
            {data.award.map((project, key) => {
              console.log("map", project);
              return (
                <div tabIndex={key}>
                  <a
                    href="#"
                    onClick={() => setselectedAward(project.image)}
                    className="rounded-xl p-3 border-2 border-solid border-sc-gray-20 flex justify-center  focus:border-red-400  cursor-pointer "
                  >
                    <Image
                      src={project.image}
                      alt={project.image}
                      width={40}
                      height={40}
                      key={key}
                    />
                  </a>
                </div>
              );
            })}
            <Image src={right} alt="right" />
          </div>
          <Divider />
          <div className="flex flex-row justify-between py-3">
            <SelectBox className="p-11 mr-6" selectedAward={selectedAward} />
            <div className="flex flex-col justify-between w-full">
              <Input placeholder="Placeholder" />
              <Input placeholder="Example: Altın Örümcek" />
              <Input placeholder="Write featured" />
              <Input placeholder="S" />
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
