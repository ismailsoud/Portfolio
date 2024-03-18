import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

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

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-2">
        <div className="flex flex-col lg:flex-row">
          {/* services */}
          <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 "
            >
              {/* service list */}
              <h2 className="text-5xl h-[150px] w-full text-center text-slate-300 font-Roboto">
              EDUCATION AND CERTIFICATES
              </h2>
              <div>
                {services.map((service, index) => {
                  // destructure service
                  const { name, description, link } = service;
                  return (
                    <div
                      className="border-b border-white/20 h-36 mb-8 flex mt-10"
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
    </section>
  );
};

export default Services;
