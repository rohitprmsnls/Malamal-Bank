import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [activeColor, setActiveColor] = useState(false);


  const toggleModal = () => {
    setIsActive((currentState) => {
      return !currentState;
    });
  };

  return (
    <>
      <p onClick={() => setOpen(true)}>
        log in
      </p>
      <Modal
        title=""
        visible={isActive}
        onCancel={toggleModal}
      >

        hello world

        <h1>hello world</h1>

      </Modal>
    </>
  );
};

export default App;