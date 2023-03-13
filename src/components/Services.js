import React from 'react';

import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'


const services = [
  {
    name: 'Desarrodor Full Stack',
    description: "Especialista en el desarrollo de sitios web que integra el diseño de la experiencia del cliente en una página (front end), así como la programación y mantenimiento de la arquitectura interna del sitio (back end)",
    link: 'https://ed.team/blog/que-es-un-programador-full-stack-existen-o-son-un-mito'
  },
  {
    name: 'Desarrollador FrontEnd',
    description: "Desarrollador de toda la parte visual del sistema, se maneja herramientas como JavaScript, HTML, CSS. etc. ",
    link: 'https://ed.team/blog/que-es-backend-y-frontend-guia-completa'
  },
  {
    name: 'Desarrollador BackEnd',
    description: "Persona encargada de la implementación de un sitio web o aplicación web en todos sus componentes, y se ocupa de diseñar la lógica y las soluciones requeridas en un sitio o aplicación web sean ejecutadas correctamente.",
    link: 'https://ed.team/blog/que-es-backend-y-frontend-guia-completa'
  },
 
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
                mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>¿Que puedo hacer?</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Soy un Desarrollador Full Stack con 1 año de experiencia</h3>
            <button className='btn btn-sm'>Ver mi trabajo</button>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[40px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary
                    font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href={link} target="_blank" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href={link} target="_blank" className='text-gradient text-sm'>Ver mas</a>
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
