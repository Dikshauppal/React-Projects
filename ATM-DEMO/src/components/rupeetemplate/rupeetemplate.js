import React from "react";
import notesicon from "../../assets/images/notesicon.png";
import "./rupeetemplatestyle.css";

const RupeeTemplate = (props) => {
  return (
    <>
    <div className="row">
      <img src={notesicon} alt="Rupee Icon" className="r-style col-2"></img>
      <button className="rupee-num col-2">{props.amount}</button>
      <span className="col-2 value-adjust">{props.value}</span>
      </div>
    </>
  );
};

export default RupeeTemplate;
