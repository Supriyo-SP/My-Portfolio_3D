import React from 'react'

const Button = ({ className, id, text }) => {
  return (
   <a onClick={(e) => {
     e.preventDefault();
     const target = document.getElementById("counter");
     if (target && id) {
     const offset= window.innerHeight - target.getBoundingClientRect().top;
     target.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
     }
   }} className={`${className ??''} cta-wrapper`} id={id}>
    <div className="cta-button group ">
        <div className="bg-circle"/>
          <p className="text">{text}</p>
          <div className="arrow-wrapper">
            <img src="src/assets/public/images/arrow-down.svg" alt="arrow" />
          </div>
        
    </div>
   </a>
  )
}

export default Button