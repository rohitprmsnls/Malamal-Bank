import { Button, Modal } from "antd";
import React, { useState } from "react";

const Withdraw: React.FC = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);



  return (
    <>
      <Modal
        // title="Edit Project"
        className="modal-dark-grey"
        footer={null}
        open={isModalOpen}
      >
        
      </Modal>
    </>
  );
};

export default Withdraw;
