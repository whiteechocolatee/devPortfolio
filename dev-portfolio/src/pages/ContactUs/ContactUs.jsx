import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { containerVariants } from "../pageAnimations";

export const ContactUs = () => {
  const { t } = useTranslation("contactus");

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='container-lg'>
      <div className='content-wrapper'>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          className='contact-title'>
          <h1 className="contactTitle">{t("contactMe")} :</h1>
          <h1 className='active contactMail'>
            <a href='mailto:creatuseandr@icloud.com'>
              creatuseandr@icloud.com
            </a>
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
};
