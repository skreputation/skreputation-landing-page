import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className="flex flex-wrap-reverse bg-black  text-white">
        <main className="flex flex-col justify-center items-center mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-20 lg:w-100">
          <a className="text-emerald-300" href="#">
            <h2 className="text-3xl">
              <FontAwesomeIcon icon={faEnvelopeOpen} /> CONTACT ME
            </h2>
          </a>
          <div className='' >
            <img src="/logo_name.png" style={{height:200}} />
        </div>
        </main>
      </div>
    );
};

export default Footer;