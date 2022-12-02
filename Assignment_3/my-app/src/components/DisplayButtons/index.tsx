import { useState } from 'react';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import './style.css';

export default function DisplayButtons() {
  const [selectedButton, setSelectedButton] = useState<number>(-1);

  const handleButtonGroupClick = (selected: number) => {
    console.log(selected);
    setSelectedButton(selected);
  };

  return (
    <div id='main_container'>
      <h2>Display Buttons</h2>
      <h2>Primary</h2>
      <Button type='primary' className='button' text='Yess' />
      <h2>Default</h2>
      <Button type='default' className='button' text='Yes' />
      <h2>Button Group</h2>
      <ButtonGroup
        direction='col'
        clickOn={handleButtonGroupClick}
        selected={selectedButton}
      >
        <Button type='primary' text='Yes' />
        <Button type='primary' text='No' />
        <Button type='primary' text='Nimic' />
      </ButtonGroup>
    </div>
  );
}
