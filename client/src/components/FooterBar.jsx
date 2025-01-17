import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const FooterBar = () => {
  return (
    <footer className='bg-gray-800 h-[80px] flex items-center'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-12 gap-[30px]'>
          <div className='col-span-6'>
            <p className='text-white text-[20px]'>This is our footer</p>
          </div>
          <div className='col-span-6'>
            <div className='flex gap-[16px] justify-end'>
              <Link to='#' className='text-white text-[18px]'>
                <FaFacebook />
              </Link>
              <Link to='#' className='text-white text-[18px]'>
                <FaTwitter />
              </Link>
              <Link to='#' className='text-white text-[18px]'>
                <FaInstagram />
              </Link>
              <Link to='#' className='text-white text-[18px]'>
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
