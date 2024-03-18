import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import Img4 from "../assets/portfolio-img4.png";
import Img5 from "../assets/portfolio-img5.png";

const Work = () => {
  return (
    <section className="section lg:pt-0 " id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight font-Roboto text-5xl text-slate-300">
                My Latest Work
              </h2>
              <p className="max-w-sm mb-16 text-slate-200 font-Roboto ">
                Here are some of my recent projects, spanning from web scraping and automation to web apps and AI integrations.
              </p>
              <button className="btn btn-sm"><a href='https://github.com/ismailsoud?tab=repositories'>View all projects</a></button>
            </div>
            {/* image */}
            <a href="https://marocweblabs.000webhostapp.com/" className="group relative overflow-hidden border-2 border-slate-400 rounded-sm hover:shadow-xl shadow-slate-950">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt="Img 1"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-slate-400 font-Roboto">Web development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Agency website</span>
              </div>
            </a>
            <a href="https://github.com/ismailsoud/job-scraper" className="group relative overflow-hidden border-2 border-slate-400 rounded-sm hover:shadow-xl shadow-slate-950">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img4}
                alt="Img 1"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-slate-400 font-Roboto">Web Scraping / Api</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Job Scraping Api</span>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* image */}
            <a href="https://github.com/ismailsoud/whatsapp_bulk_messages" className="group relative overflow-hidden border-2 border-slate-400 rounded-sm ">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt="Img 2"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-slate-400 font-Roboto">Automation</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Whatsapp Bulk Messages</span>
              </div>
            </a>

            {/* image */}
            <a href="https://github.com/ismailsoud/Ai-image-generator" className="group relative overflow-hidden border-2 border-slate-400 rounded-sm ">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt="Img 3"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-slate-400 font-Roboto">Ai integration</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Ai image generator</span>
              </div>
            </a>
            <a href="https://github.com/ismailsoud/ChatApp" className="group relative overflow-hidden border-2 border-slate-400 rounded-sm ">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img5}
                alt="Img 3"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-slate-400 font-Roboto">Chat app</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-xl text-white">ChatApp using React.js/TailwindCss and Socket.io</span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
