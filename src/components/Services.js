import React from 'react';

import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'


const services = [
  {
    name: 'Desarrollador Full Stack (Backend y Frontend)',
    description: "Especialista en desarrollo web, integrando diseño de experiencia de usuario (frontend) con programación y mantenimiento del backend.",
    link: 'https://ed.team/blog/que-es-un-programador-full-stack-existen-o-son-un-mito'
  },
  {
    name: 'Analista de Datos Avanzado',
    description: "Persona encargada de la recopilación, análisis y presentación de datos para ayudar a las empresas a tomar decisiones informadas y estratégicas.",
    link: 'https://www.bbva.com/es/innovacion/analista-de-datos-destrezas-y-funciones-de-una-profesion-con-futuro/'
  },
  {
    name: 'Ingeniero de Machine Learning',
    description: "Desarrollador especializado en la creación de algoritmos y modelos que permiten a las máquinas aprender de los datos y realizar predicciones o tomar decisiones sin ser programadas explícitamente.",
    link: 'https://www.bbva.com/es/innovacion/que-formacion-necesita-un-ingeniero-experto-en-machine-learning/'
  },
  {
    name: 'Automatizador de Procesos',
    description: "Desarrollador especialista en crear soluciones que automatizan tareas y flujos de trabajo dentro de sistemas informáticos, así ahorrando tiempo y recursos destinados a estas.",
    link: 'https://www.ibm.com/mx-es/topics/automation'
  },
  {
    name: 'Ingeniero de Inteligencia Artificial',
    description: "Desarrollador especializado en la creación de sistemas y aplicaciones que utilizan técnicas de IA para simular procesos cognitivos humanos.",
    link: 'https://www.palermo.edu/ingenieria/ingenieria-inteligencia-artificial/'
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
            className='flex-1 lg:bg-bottom bg-no-repeat
                mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>¿Que puedo hacer?</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Ingeniero de software con más de 4 año de experiencia</h3>
            <a href="https://github.com/Juandavid08" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-sm">Ver mi trabajo</button>
            </a>

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
                    className='border-b border-white/20 h-[160px] mb-[40px] flex'
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
