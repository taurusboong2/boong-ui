import React from 'react';
import Button from '../components/Button';

const Tutorial = () => {
  return (
    <div id="tutorial">
      <h2>Tutorial</h2>
      <div className="color">
        <Button text="버튼1" />
        <Button text="버튼2" color="blue" />
        <Button text="버튼3" color="green" />
        <Button text="버튼4" color="orange" />
      </div>
      <div className="size">
        <Button text="s 사이즈" size="s" />
        <Button text="m 사이즈" size="m" />
        <Button text="l 사이즈" size="l" />
        <Button text="xl 사이즈" size="xl" />
      </div>
      <div className="disabled">
        <Button text="disabled off" disabled={false} />
        <Button text="disabled on" disabled={true} />
      </div>
      <div className="borderRadius">
        <Button text="s br" size="s" radius={true} />
        <Button text="m br" size="m" color="blue" radius={true} />
        <Button text="l br" size="l" color="green" radius={true} />
        <Button text="xl br" size="xl" color="orange" radius={true} />
      </div>
      <div className="function">
        <Button text="기능1" />
        <Button text="기능2" />
        <Button text="기능3" />
      </div>
    </div>
  );
};

export default Tutorial;
