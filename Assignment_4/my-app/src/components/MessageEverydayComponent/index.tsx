import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from '../Button';
import messages from '../constants/constantMessages.json';
import './style.css';

export default function MessageEverydayComponent() {
  const [modal, setModal] = useState(false);
  const currentDay = new Date();

  return (
    <div>
      <h1>Message Everyday</h1>
      <Modal size='lg' isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          {messages[currentDay.getDay() - 1].headerMessage}
        </ModalHeader>
        <ModalBody>{messages[currentDay.getDay() - 1].bodyMessage}</ModalBody>
        <ModalFooter>
          <Button
            type='default'
            click={() => setModal(false)}
            text='OK'
          ></Button>
        </ModalFooter>
      </Modal>
      <Button
        type='primary'
        click={() => setModal(true)}
        text='Get Your Message'
      ></Button>
    </div>
  );
}
