import React from "react";
import cert1 from "../IMG/cert1.jpg";
import cert2 from "../IMG/cert2.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../CSS/Certificate.css'
// import '../JS/Certificate.js'

const onClick =()=>{
    document.querySelectorAll('.certificategallery img').forEach(image =>{
        image.onclick = () =>{
            document.querySelector('.popupsection').style.display = 'block';
            document.querySelector('.popupsection img').src = image.getAttribute('src');
            document.querySelector('body').style.overflow = 'hidden';
    
        }
    });
    
    document.querySelector('.popupsection span').onclick = () =>{
        document.querySelector('.popupsection').style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
    }
}

export default function Certificate() {
  return (
    <>
    <Navbar certificate="#FFA500"/>
      <section className="bg-gray-900 w-screen certificatesection">
        <div className="certificategallery">
          <div className="image" onClick={onClick}>
            <img src={cert1} alt="" />
          </div>
          <div className="image">
            <img src={cert2} alt="" />
          </div>
        </div>
        <div className="popupsection">
          <span>×</span>
          <img src={cert1} alt="" />
        </div>
      </section>

      <Footer/>
    </>
  );
}
