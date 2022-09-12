import React from "react";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";

export const ContactUs = () => {
  const { t } = useTranslation("contactus");

  return (
    <div className='container-lg'>
      <Header />
      <div className='content-wrapper'>
        <div className='contact-title'>
          <h1>{t("contactMe")} :</h1>
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
