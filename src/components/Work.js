import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
//importacion de las imagenes
import Img1 from '../assets/LogoRedPositivos.png'
import Img2 from '../assets/Hanabi.png'
import Img3 from '../assets/LogoInicial.png'


const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
           variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div>
              <h2 className='h2 leading-tight text-accent'>Mys ultimos <br /> proyectos</h2>
              <p className='max-w-sm mb-12'>En esta seccion se puede ver los diferentes proyectos que he realizado para algunas empresas (Paginas web, aplicaciones web, etc.)</p>
              <button className='btn btn-sm'>Ver todos</button>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50
                      rounded-xl'>
              <a href='http://redpositivos.com.co/' target={'_blank'}>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40
                      transition-all duration-300'></div>
              <img
                className='group-hover:scale-125 w-[600px] h-[300px] transition-all duration-500'
                src={Img1}
                alt="" />
              </a>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
                        transition-all duration-500 z-50'
              >
                <span className='text-gradient'>RED POSITIVOS</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
                        transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Pagina Web</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50
                      rounded-xl'>
              <a href='https://hanabi.com.co/' target={'_blank'}>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40
                      transition-all duration-300'></div>
              <img
                className='group-hover:scale-125 w-[600px] h-[300px]  transition-all duration-500'
                src={Img2}
                alt="" />
              </a>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
                        transition-all duration-500 z-50'
              >
                <span className='text-gradient'>HANABI</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
                        transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>E-commerce</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50
                      rounded-xl'>
              <a href='https://corxy.tech/' target={'_blank'}>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40
                      transition-all duration-300'></div>
              <img
                className='group-hover:scale-125 w-[600px] h-[300px] transition-all duration-500'
                src={Img3}
                alt="" />
              </a>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
                        transition-all duration-500 z-50'
              >
                <span className='text-gradient'>CORXY WEB</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
                        transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Pagina Web</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
};

export default Work;
