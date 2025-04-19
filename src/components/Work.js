import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/LogoRedPositivos.png';
import Img2 from '../assets/Hanabi.png';
import Img3 from '../assets/LogoInicial.png';
import Img4 from '../assets/mobilize-fs.png';
import Img5 from '../assets/Exogena.jpg';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>

          {/* Columna izquierda */}
          <motion.div 
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className='flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0'
          >
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Mis últimos <br /> proyectos
              </h2>
              <p className='max-w-sm mb-12'>
                En esta seccion se podran evidenciar desarrollos web que cuentan con repositorios activos.
              </p>
              <button className='btn btn-sm'>Ver todos</button>
            </div>

            {/* Proyecto 1 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl h-[300px]'>
              <a href='http://redpositivos.com.co/' target='_blank' rel='noopener noreferrer'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img
                  className='group-hover:scale-105 w-full h-full object-contain transition-all duration-500'
                  src={Img1}
                  alt="Red Positivos"
                />
              </a>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>RED POSITIVOS</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Página Web</span>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl h-[300px]'>
              <a href='http://redpositivos.com.co/' target='_blank' rel='noopener noreferrer'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img
                  className='group-hover:scale-105 w-full h-full object-contain transition-all duration-500'
                  src={Img5}
                  alt="Red Positivos"
                />
              </a>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Aplicacion para la extraccion de datos para informacion exogena</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Aplicacion de escritorio</span>
              </div>
            </div>
          </motion.div>

          {/* Columna derecha */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className='flex-1 flex flex-col gap-y-10'
          >

            {/* Proyecto 3 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl h-[300px]'>
              <a href='https://hanabi.com.co/' target='_blank' rel='noopener noreferrer'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img
                  className='group-hover:scale-105 w-full h-full object-contain transition-all duration-500'
                  src={Img2}
                  alt="Hanabi"
                />
              </a>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>HANABI</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>E-commerce</span>
              </div>
            </div>

            {/* Proyecto 4 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl h-[300px]'>
              <a href='https://corxy.tech/' target='_blank' rel='noopener noreferrer'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img
                  className='group-hover:scale-105 w-full h-full object-contain transition-all duration-500'
                  src={Img3}
                  alt="Corxy"
                />
              </a>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>CORXY WEB</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Página Web</span>
              </div>
            </div>

            {/* Proyecto 5*/}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl h-[300px]'>
              <a href='https://www.mobilize-fs.com.co/' target='_blank' rel='noopener noreferrer'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img
                  className='group-hover:scale-105 w-full h-full object-contain transition-all duration-500'
                  src={Img4}
                  alt="MFS"
                />
              </a>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Mobilize Financial Services</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Sistema web de gestión de reservas en oficina</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
