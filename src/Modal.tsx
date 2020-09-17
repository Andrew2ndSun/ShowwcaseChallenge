import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    width:1000px; 
    height:500; 
    position: fixed; 
    background-color: pink; 
    top: 20%; 
    left: 20%; 
    margin-top: -100px; 
    margin-left: -100px; 
    `;

type Props = {
  modalOpen: boolean;
};

const Modal: React.FC<Props> = ({ modalOpen, children }) => {
  if (!modalOpen) return null;

  return createPortal(
    <div>
      <Wrapper>
        <div>{children}</div>
      </Wrapper>
    </div>,
    document.body
  );
};

export default Modal;