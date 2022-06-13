import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigateTo = useNavigate();

  return (
    <>
      <div className="myheader">
        <span style={{fontSize:'30px'}}>This is my Header</span>
        <button onClick={()=>{
          navigateTo("/")
          }} className='btn btn-primary float-end'>LOGOUT</button>
          
      </div>
    </>
  );
}
