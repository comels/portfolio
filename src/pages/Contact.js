import React from "react";
import Nav from "../components/Nav";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import ContactForm from "../components/ContactForm";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Contact = () => {
  const transition = { ease: [0.6, 0.01, 0.05, 0.9], duration: 0.8 };

  const varients = {
    initial: {
      opacity: 0,
      transition: { duration: 0.9 },
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.9 },
      x: -200,
    },
  };
  return (
    <main>
      <Mouse />
      <Nav />
      <SocialNetwork />
      <motion.div
        className="contact"
        initial="initial"
        variants={varients}
        animate="visible"
        exit="exit"
        transition={transition}
      >
        <ContactForm />
        <Button left={"/project4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
