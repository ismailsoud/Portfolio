import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col">
          {/* text */}
          <div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 flex flex-col justify-center items-center"
            >
              <h4 className="text-xl uppercase text-green-800 font-medium mb-2 tracking-wide font-Roboto">
                Get in touch
              </h4>
              <h2 className="text-[36px] lg:text-[75px] leading-none mb-12 ">
                Let's work <br /> together!
              </h2>
            </motion.div>
          </div>
          {/* form */}
          <div>
            <motion.form
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className=""
            >
              <div className="flex w-full justify-center space-x-16">
                <a href="mailto:ismailsoudassi00@gmail.com" >
                  <IoMail size={50}/>
                </a>
                <a href="https://www.linkedin.com/in/ismail-soudassi-60433a279/">
                  <FaLinkedin size={50}/>
                </a>
                <a href="https://github.com/ismailsoud">
                  <FaGithub size={50}/>
                </a>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
