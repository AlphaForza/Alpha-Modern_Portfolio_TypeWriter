import React from 'react';
import {FiFacebook, FiInstagram, FiSlack} from "react-icons/fi";
import {AiOutlineLinkedin,AiOutlineMail} from "react-icons/ai"


const Footer = () => {
    return (
        <div className="bg-[#091427] h-[181px] w-full ">
           <div className="container mx-auto text-white flex flex-col items-center lg:items-start">
               <p className="text-[24px] font-medium py-5">Follow us</p>
               <div className="flex items-center cursor-pointer">
                   <FiFacebook className="text-[46px]"/>
                   <FiInstagram  className="text-[46px] ml-5"/>
                   <AiOutlineLinkedin  className="text-[46px] ml-5"/>
                   <FiSlack className="text-[46px] ml-5"/>
                   <AiOutlineMail  className="text-[46px] ml-5"/>
               </div>
           </div>
        </div>
    );
};

export default Footer;