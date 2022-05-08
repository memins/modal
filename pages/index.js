import { useState } from "react";
import Button from "../components/button";
import Modal from "../components/modal";
import Preview from "../components/preview";
import SelectBox from "../components/selectBox";
import Image from "next/image";
import noAward from "../assets/icon/noAward.png";
import awards from "../assets/icon/awards3.svg";

function HomePage() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [button, setButton] = useState(true);

  const openModal = () => {
    setModal(true);
    setButton(false);
  };

  const openNextModal = () => {
    setModal2(true);
    setModal(false);
  };

  const openLastModal = () => {
    setModal3(true);
    setModal2(false);
  };

  const closeModal = () => {
    setModal(false);
    setButton(true);
  };

  const closeModal2 = () => {
    setModal2(false);
    setButton(true);
  };

  const closeModal3 = () => {
    setModal3(false);
    setButton(true);
  };

  return (
    <div className="flex justify-center min-h-screen h-full">
      {modal3 && (
        <Modal
          title={"Accolades"}
          subTitle={"Determine how much minimum wage you work."}
          onCancel={closeModal3}
          onConfirm={openLastModal}
        >
          <>
            <Preview />
            <div className="flex flex-row justify-between items-center ">
              <SelectBox selectedAward={awards} />
              <SelectBox selectedAward={awards} />
              <SelectBox selectedAward={awards} />
            </div>
          </>
        </Modal>
      )}
      {modal2 && (
        <Modal
          title={"Accolades"}
          subTitle={"Determine how much minimum wage you work."}
          onCancel={closeModal2}
          onConfirm={openLastModal}
        >
          <div className="flex flex-row justify-between items-center ">
            <SelectBox selectedAward={awards} />
            <SelectBox selectedAward={awards} />
            <SelectBox selectedAward={awards} />
          </div>
        </Modal>
      )}
      {modal && (
        <Modal
          title={"Accolades"}
          subTitle={"Determine how much minimum wage you work."}
          onCancel={closeModal}
          onConfirm={openNextModal}
        >
          <div className="px-8 flex flex-col justify-center items-center ">
            <Image src={noAward} alt="noAward" />
            <p className="mb-2 mt-2 font-bold">Apparently no award yet</p>
            <p className="font-extralight text-center">
              Add a question to build up your pre-screening flow that is shown
              to users when they apply for a job.
            </p>
          </div>
        </Modal>
      )}
      {button && (
        <Button
          onClick={openModal}
          text={"open modal"}
          className={"m-auto bg-white text-black "}
        />
      )}
    </div>
  );
}

export default HomePage;
