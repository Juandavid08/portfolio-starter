import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import {FaPython, FaReact, FaNode, FaHtml5, FaPhp, FaBootstrap, FaAws, FaFileExcel   } from 'react-icons/fa'
import {DiJavascript1, DiCss3, DiDjango} from 'react-icons/di'
import {SiMysql, SiTailwindcss, SiRubyonrails, SiTypescript } from 'react-icons/si'
import {BsGit} from 'react-icons/bs'
import {TbBrandCSharp} from 'react-icons/tb'

const About = () => {

  const [ref, inView] = useInView({ threshold: 0.5 });
  
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2021;


  return (
    <section id='about' className='section' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[580px] mix-blend-soft-light bg-top'>

          </motion.div>
          
          <motion.div 
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.3}}
          className='flex-1'>
            <h2 className='h2 text-accent'>Sobre Juan David</h2>
            <h3 className='h3 mb-4'>Soy un Desarrollador Full Stack con {yearsOfExperience} año de experiencia</h3>
            <p className='mb-6'>
              Ingeniero de software de la Universidad Cooperativa de Colombia. Me considero una persona organizada 
              y proactiva, me gusta los desafíos y participar en nuevos proyectos, además de aportar todos los 
              conocimientos que he adquirido en mi formación académica.
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={yearsOfExperience} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Años de <br /> Experiencia
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient
                mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={25} duration={2.5} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Proyectos <br /> Terminados
                </div>
              </div>
              
              <div>
                  <div className='flex text-[50px] gap-x-6 max-w-max mx-auto
                  lg:mx-0'>
                      <a href='https://github.com/Juandavid08' target={'_blank'}>
                        <FaPython />
                      </a>
                      <a href='https://www.facebook.com/juan.renteriavalencia' target={'_blank'}>
                        <FaReact />
                      </a>
                      <a href='https://www.instagram.com/juan_renteriav/' target={'_blank'}>
                        <FaNode />
                      </a>
                      <a href="" target={'_blank'}>
                        <DiJavascript1 />
                      </a>
                      <a href="" target={'_blank'}>
                        <FaFileExcel />
                      </a>
                      <a href="" target={'_blank'}>
                        <SiTypescript />
                      </a>
                      <a href="" target={'_blank'}>
                        <TbBrandCSharp />
                      </a>
                </div>

                <div className='flex text-[50px] gap-x-6 mt-5 max-w-max mx-auto
                  '>
                      <a href="" target={'_blank'}>
                        <SiRubyonrails />
                      </a>
                      <a href="" target={'_blank'}>
                        <FaPhp />
                      </a>
                      <a href="" target={'_blank'}>
                        <DiDjango />
                      </a>
                      <a href="" target={'_blank'}>
                        <SiMysql />
                      </a>
                      <a href="" target={'_blank'}>
                        <SiTailwindcss />
                      </a>
                      <a href="" target={'_blank'}>
                        <FaAws />
                      </a>
                      <a href="" target={'_blank'}>
                        <BsGit />
                      </a>
                </div>

            </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
