import { useState } from "react";
import Button from "../components/button";
import Modal from "../components/modal";
import Image from "next/image";
import noAward from "../assets/icon/noAward.png";

function HomePage() {
  const [modal, setModal] = useState(false);
  const [button, setButton] = useState(true);

  const openModal = () => {
    setModal(true);
    setButton(false);
  };

  const closeModal = () => {
    setModal(false);
    setButton(true);
  };

  return (
    <div class="flex justify-center h-screen">
      {modal && (
        <Modal
          title={"Accolades"}
          subTitle={"Determine how much minimum wage you work."}
          onCancel={closeModal}
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
          className={"bg-white text-black "}
        />
      )}
    </div>
  );
}

export default HomePage;
