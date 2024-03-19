import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import Img4 from "../assets/portfolio-img4.png";
import Img5 from "../assets/portfolio-img5.png";
import Img6 from "../assets/portfolio-img6.png";

const Work = () => {
  return (
    <section className="lg:pt-0" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-10 gap-y-10 flex-wrap">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex gap-y-12 mb-10 lg:mb-0"
          >
            <div className="w-full flex items-center flex-col mb-14">
              <h2 className="h2 leading-tight text-center font-Roboto text-5xl text-slate-300">
                My Latest Work
              </h2>
              <p className="mb-16 text-slate-200 text-2xl text-center font-Roboto">
                Here are some of my recent projects, spanning from web scraping
                and automation to web apps and AI integrations.
              </p>
              <a href="https://github.com/ismailsoud?tab=repositories" className="btn btn-lg h-16 flex justify-center items-center">
                  View all Projects
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col lg:flex-row lg:space-x-10 gap-y-12 mb-10 lg:mb-0"
          >
            <a
              href="https://marocweblabs.000webhostapp.com/"
              className="group lg:w-1/2 relative overflow-hidden border-2 border-slate-400 rounded-sm hover:shadow-xl "
            >
              {/* overlay */}
              <div className="w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 border-b-[1px] border-slate-400"
                src={Img1}
                alt="Img 1"
              />
              <div className="p-5">
                <p className="w-full text-center text-2xl font-Roboto">
                  Web Agnecy Website
                </p>
                <p className="font-Roboto text-md text-slate-400 ">
                  Moroccan web labs's online presence with a sleek, responsive
                  website showcasing their products and services. Optimized for
                  speed, SEO, and easy content management.
                </p>
              </div>
            </a>
            <a
              href="https://github.com/ismailsoud/job-scraper"
              className="group lg:w-1/2 relative overflow-hidden border-2 border-slate-400 rounded-sm hover:shadow-xl shadow-slate-950"
            >
              {/* overlay */}
              <div className="w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 border-b-[1px] border-slate-400"
                src={Img4}
                alt="Img 1"
              />
              <div className="p-5">
                <p className="w-full text-center text-2xl font-Roboto">
                Job Scraping Api
                </p>
                <p className="font-Roboto text-md text-slate-400 ">
                  A script that scrapes job posts from major freelancing
                  websites (Upwork, Freelancer, Mostaql). You can use it as is,
                  or you use it as an API, and it will be updated once every
                  5 minutes + Webstie for display.
                </p>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col lg:flex-row lg:space-x-10 gap-y-10"
          >
            {/* image */}
            <a
              href="https://github.com/ismailsoud/whatsapp_bulk_messages"
              className="group lg:w-1/2 relative overflow-hidden border-2 border-slate-400 rounded-sm "
            >
              {/* overlay */}
              <div className="w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 border-b-[1px] border-slate-400"
                src={Img2}
                alt="Img 2"
              />
              <div className="p-5">
                <p className="w-full text-center text-2xl font-Roboto">
                Whatsapp Bulk Messages
                </p>
                <p className="font-Roboto text-md text-slate-400 ">
                This script offers you the convenience of sending identical or customized messages to a list of numbers in an Excel spreadsheet, all without the need to add them to your contacts or include them in a group chat.
                </p>
              </div>
            </a>

            {/* image */}
            <a
              href="https://github.com/ismailsoud/Ai-image-generator"
              className="group lg:w-1/2 relative overflow-hidden border-2 border-slate-400 rounded-sm "
            >
              {/* overlay */}
              <div className="w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 border-b-[1px] border-slate-400"
                src={Img3}
                alt="Img 3"
              />
              <div className="p-5">
                <p className="w-full text-center text-2xl font-Roboto">
                Ai image generator
                </p>
                <p className="font-Roboto text-md text-slate-400 ">
                Ai image generator using openAi api in react
                </p>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col lg:flex-row lg:space-x-10 gap-y-10"
          >
            <a
              href="https://github.com/ismailsoud/ChatApp"
              className="group lg:w-1/2 relative overflow-hidden border-2 border-slate-400 rounded-sm "
            >
              {/* overlay */}
              <div className="w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 border-b-[1px] border-slate-400"
                src={Img5}
                alt="Img 3"
              />
              <div className="p-5">
                <p className="w-full text-center text-2xl font-Roboto">
                  Web Agnecy Website
                </p>
                <p className="font-Roboto text-md text-slate-400 ">
                A ChatApp using React.js/TailwindCss and Socket.io for communication. You create your unique ID, this ID can be shared with friends, family, or colleagues, once you've done that, you're ready to chat in real-time. There are no complex processes, just a simple and easy way to have instant conversations.
                </p>
              </div>
            </a>
            <a
              href="https://github.com/ismailsoud/E-comerce-sotre"
              className="group lg:w-1/2 relative overflow-hidden border-2 border-slate-400 rounded-sm "
            >
              {/* overlay */}
              <div className="w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 border-b-[1px] border-slate-400"
                src={Img6}
                alt="Img 3"
              />
              <div className="p-5">
                <p className="w-full text-center text-2xl font-Roboto">
                  E-comerce-sotre
                </p>
                <p className="font-Roboto text-md text-slate-400 ">
                  A React.js-powered MI Store clone, featuring a sleek interface and seamless navigation.
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
