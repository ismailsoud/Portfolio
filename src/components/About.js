import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { BsArrowUpRight } from "react-icons/bs";

const services = [
  {
    name: "ISTAG Bab tizimi (in progress)",
    description:
      "Digital Develepment Web Full Stack",
  },
  {
    name: "Cisco certificate (2024)",
    description:
      " Python Essentials",
    link: 'https://www.credly.com/badges/bce12465-107c-4b86-9598-8d303c91b422/linked_in_profile'   
  },
  {
    name: "Freecodecamp certificate (2024)",
    description:
      "Scientific Computing With Python",
      link: 'https://www.freecodecamp.org/certification/Smail001/scientific-computing-with-python-v7'
  },
  {
    name: "Freecodecamp certificate (2023)",
    description:
      "Responsive Web Design",
      link: 'https://www.freecodecamp.org/certification/Smail001/responsive-web-design'
  },
];
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section lg:pt-32 lg:pb-0" id="about" ref={ref}>
      <div className="container mx-auto font-Roboto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <div className="lg:w-1/2 h-full px-2">
            {/* text */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1"
            >
              <h2 className="text-5xl h-[150px] py-8 w-full text-center text-slate-300 font-Roboto">
                About me
              </h2>
              <p className="mb-6 font-Roboto ">
                As a student, I'm actively looking to improve my skills as a
                full-stack developer. I've had the opportunity to work with
                various programming languages and frameworks, and I've been
                involved in diverse projects such as website development, web
                scraping, automation, bot creation, AI integrations, API
                integrations, and ongoing personal projects. I'm passionate
                about learning and eager to explore new opportunities to expand
                my knowledge and contribute to impactful projects.
              </p>
            </motion.div>
          </div>
          <div className="lg:w-1/2 h-full hidden lg:flex">
            {/* services */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 "
            >
              {/* service list */}
              <h2 className="text-5xl h-[150px] py- w-full text-center text-slate-300 font-Roboto">
              EDUCATION AND
              CERTIFICATES
              </h2>
              <div>
                {services.map((service, index) => {
                  // destructure service
                  const { name, description, link } = service;
                  return (
                    <div
                      className="border-b border-white/20 h-24 mb-8 flex"
                      key={index}
                    >
                      <div className="max-w-[476px]">
                        <h4 className="text-[20px] tracking-wider font-Roboto mb-6">
                          {name}
                        </h4>
                        <p className="leading-tight font-Roboto text-slate-400">
                          {description}
                        </p>
                      </div>
                      <div className="flex flex-col flex-1 items-end">
                        <a
                          href={link}
                          className="text-green-700 border rounded-md border-slate-400 w-9 h-9 mb-[42px] flex justify-center items-center"
                        >
                          <BsArrowUpRight />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
