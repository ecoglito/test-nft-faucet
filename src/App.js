import logo from './logo.svg';
import React from "react";
import './App.css';

import {Popup} from "./Popup.js"


function App() {

  const [isOpen, setIsOpen] = React.useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const onSubmit = (e, address, isERC721, isERC1155) => {
    e.preventDefault();
    console.log(address, isERC721, isERC1155);
  }

  return (
    <div>
      <button className = "test-nft-btn" onClick = {togglePopup}>Get Test NFTs</button>
      {isOpen && <Popup 
        onSubmit = {onSubmit}
        handleClose = {togglePopup}
      />}
    </div>
  );
}

export default App;
