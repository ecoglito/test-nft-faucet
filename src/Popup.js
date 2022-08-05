import React from "react";
import "./Popup.css";
 
const Popup = props => {
  const [address, setAddress] = React.useState("");
  const [isERC721, setIsERC721] = React.useState(false);
  const [isERC1155, setIsERC1155] = React.useState(false);

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div className = "popup-container">
          <div className = "edit-header">
                <h4>Get Test NFTs</h4>
          </div>
            <form className = "popup-form" onSubmit = {(e) => props.onSubmit(e, address, isERC721, isERC1155)}>
            <label>Address</label>
            <input onChange = {(e) => setAddress(e.target.value)} value = {address}></input>

            <div className = "checkbox-wrapper">
              <div className = "checkbox-flex-container">
                  <p>ERC721</p>
                  <input className = "input-checkbox" type = "checkbox" checked = {isERC721}  onChange = {(e) => {setIsERC721(e.target.checked)}}></input>
                </div>

              <div className = "checkbox-flex-container">
                  <p>ERC1155</p>
                  <input className = "input-checkbox" type = "checkbox" checked = {isERC1155}  onChange = {(e) => setIsERC1155(e.target.checked)}></input>
                </div>     
            </div>

            <input className = "submit-btn" type = "submit"></input>
            </form>
        </div>
      </div>
    </div>
  );
};
 
export {Popup}