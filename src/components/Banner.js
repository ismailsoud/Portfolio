import React from "react";
import Image from "../assets/avatar.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto text-slate-200">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              ISMAIL <span>SOUDASSI</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] uppercase leading-[1] font-Roboto text-400"
            >
              <span className="mr-4 font-secondary font-semibold">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  4000,
                  "Problem Solver",
                  2000,
                  "Fast learner",
                  2000,
                ]}
                speed={50}
                className="text-green-800 font-Roboto text-400"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a href="mailto:ismailsoudassi00@gmail.com" className="btn btn-lg flex justify-center items-center">
                Contact me
              </a>
            </motion.div>
            {/* socials  */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[40px] gap-x-10 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.linkedin.com/in/ismail-soudassi-60433a279/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/ismailsoud">
                <FaGithub />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden  lg:flex flex-1 max-w-[300px] lg:max-w-[400px] "
          >
            <img src={Image} alt="Avatar pink logo" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
