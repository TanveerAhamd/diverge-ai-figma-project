import React from 'react';
import { Button } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import './Button.css';

const ButtonStyle = ({title}) => {
  return (
    <div className="lets-talk-button bg-white text-primary d-flex align-items-center gap-3 py-2 ps-3 pe-2 border-0 border rounded-pill border-primary">
      <b>{title}</b>
      <Button variant="light" className="rounded-circle ms-auto d-flex align-items-center p-2">
        <ArrowRight color="white" size={20} />
      </Button>
    </div>
  );
};

export default ButtonStyle;
