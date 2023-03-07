import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together</h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-22 p-6 items-start'>
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type={"text"}
              placeholder="Nombre y/o Empresa"
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type={"text"}
              placeholder="Correo electronico"
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type={"text"}
              placeholder="Asunto"
            />
            <textarea
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Escribe un mensaje'
            ></textarea>

            <button className='btn btn-sm'>Enviar mensaje</button>
          </motion.form>
        </div>
      </div>
    </section>

  );
};

export default Contact;
