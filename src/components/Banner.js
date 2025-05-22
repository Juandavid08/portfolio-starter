import React from 'react';
import Image from '../assets/services.png';
import { FaGithub, FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <section className='min-h-screen flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items center'>
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className='flex-1 text-center font-secondary lg:text-left'>
            <div>
              <h1
                variants={fadeIn('down', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
                Juan <span>David</span>
              </h1>
              <div

                className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
                <span className='text-white mr-2'>Soy</span>
                <TypeAnimation sequence={[
                  'Ingeniero',
                  2000,
                  'Desarrollador',
                  2000,
                  'Automatizador',
                  2000,
                  'Cientifico de datos',
                  2000,
                  'Desarrollador de IA',
                  2000,
                ]}
                  speed={50}
                  className='text-accent'
                  wrapper='span'
                  repeat={Infinity}
                />

              </div>
              <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Soy Ingeniero de software, científico de datos y desarrollador con inteligencia artificial. Me enfoco en crear soluciones escalables y eficientes, integrando tecnologías como Python, Java, JavaScript, Node.js, MongoDB, MySQL, Django, React, Docker, Kubernetes, TensorFlow, Keras, Flutter y servicios de AWS en mis proyectos. Mi trabajo incluye el desarrollo de aplicaciones y la implementación de IA y análisis de datos </p>
            </div>
            <div className='flex max-w-max gap-x-6 items-center mb-12
              mx-auto lg:mx-0'>
              <button className='btn btn-lg'><a href='#contact'>Contactame</a></button>
              <a href='https://github.com/Juandavid08' target={'_blank'} className='text-gradient btn-link'>
                Mi repositorio
              </a>
            </div>
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto
              lg:mx-0'>
              <a href='https://github.com/Juandavid08' target={'_blank'}>
                <FaGithub />
              </a>
              <a href='https://www.facebook.com/juan.renteriavalencia' target={'_blank'}>
                <FaFacebookF />
              </a>
              <a href='https://www.instagram.com/juan_renteriav/' target={'_blank'}>
                <FaInstagram />
              </a>
              <a href="https://wa.me/573116874555?text=Hola%20Juan,%20me%20interesa%20hablar%20contigo%20de%20trabajo" target={'_blank'}>
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img
              src={Image}
              alt="Servicios"
              className="opacity-80 rounded-2xl"
              style={{
                WebkitMaskImage: 'linear-gradient(black 50%, transparent)',
                maskImage: 'linear-gradient(black 50%, transparent)',
                WebkitMaskSize: '100% 95%',
                maskSize: '100% 90%',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
              }}
            />

          </motion.div>

        </div>
      </div>
    </section>

  );
};

export default Banner;
