import React from "react";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export const ContactUs = () => {
  return (
    <div className='container-lg'>
      <Header />
      <div className='content-wrapper'>
        <div className='contact-title'>
          <h1>For any questions please mail me:</h1>
          <h1 className='active'>
            <a href='mailto:creatuseandr@icloud.com'>
              creatuseandr@icloud.com
            </a>
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};
