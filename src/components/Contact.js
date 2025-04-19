import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
  
    const nombreUsuario = form.current.nombre.value;
    const correoUsuario = form.current.email.value; // Correo del usuario para la confirmación
  
    // Primero, enviar el correo a ti con la plantilla para ti
    emailjs
      .sendForm(
        'service_34gaal3',  // Tu ID del servicio
        'template_0kw1mok',  // Tu plantilla para recibir el mensaje (mensaje a ti)
        form.current,
        '4WkQcDkwLyRMHCkos'  // Tu ID de usuario
      )
      .then(
        (result) => {
          // Ahora enviar un correo de confirmación al usuario con su propia plantilla
          emailjs
            .send(
              'service_34gaal3',  // El mismo servicio
              'template_z1in88y',  // La plantilla para la respuesta al cliente
              {
                nombre: nombreUsuario,  // Datos para personalizar el mensaje de confirmación
                email: correoUsuario
              },
              '4WkQcDkwLyRMHCkos'  // Tu ID de usuario
            )
            .then(() => {
              setLoading(false);
              Swal.fire('¡Gracias!', `Tu mensaje fue enviado con éxito, ${nombreUsuario}.`, 'success');
              form.current.reset();
            })
            .catch((error) => {
              setLoading(false);
              console.error('Error al enviar el correo de confirmación al usuario:', error);
              Swal.fire({
                icon: 'error',
                title: 'Error',
                html: `Ocurrió un error al enviar tu mensaje. Por favor, contacta a <strong>juandavid-661@hotmail.com</strong> para más ayuda.`,
              });
            });
        },
        (error) => {
          setLoading(false);
          console.error('Error al enviar el correo a ti:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            html: `Ocurrió un error al enviar tu mensaje. Por favor, contacta a <strong>juandavid-661@hotmail.com</strong> para más ayuda.`,
          });
        }
      );
  };
  
  

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
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Déjame tu mensaje</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Trabajemos <br /> juntos</h2>
            </div>
          </motion.div>
  
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-22 p-6 items-start'>
  
            {/* Nombre y/o Empresa */}
            <div className="relative w-full">
              <input
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-transparent focus:border-accent transition-all peer'
                type="text"
                id="nombre"
                placeholder="Nombre y/o Empresa"
                name="nombre"
                required
                minLength={2}
              />
              <label
                htmlFor="nombre"
                className='absolute left-0 top-1/2 transform -translate-y-1/2 text-white transition-all peer-focus:top-0 peer-focus:text-accent peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-white'
              >
                Nombre y/o Empresa
              </label>
            </div>
  
            {/* Correo electrónico */}
            <div className="relative w-full">
              <input
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-transparent focus:border-accent transition-all peer'
                type="email"
                id="email"
                placeholder="Correo electrónico"
                name="email"
                required
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                title="Ingresa un correo válido"
              />
              <label
                htmlFor="email"
                className='absolute left-0 top-1/2 transform -translate-y-1/2 text-white transition-all peer-focus:top-0 peer-focus:text-accent peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-white'
              >
                Correo electrónico
              </label>
            </div>
  
            {/* Asunto */}
            <div className="relative w-full">
              <input
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-transparent focus:border-accent transition-all peer'
                type="text"
                id="asunto"
                placeholder="Asunto"
                name="asunto"
                required
                minLength={3}
              />
              <label
                htmlFor="asunto"
                className='absolute left-0 top-1/2 transform -translate-y-1/2 text-white transition-all peer-focus:top-0 peer-focus:text-accent peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-white'
              >
                Asunto
              </label>
            </div>
  
            {/* Número de teléfono */}
            <div className="relative w-full">
              <input
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-transparent focus:border-accent transition-all peer'
                type="tel"
                id="telefono"
                placeholder="Número de teléfono"
                name="telefono"
                pattern="^\+?\d{7,15}$"
                title="Ingresa un número válido (mínimo 7 dígitos)"
              />
              <label
                htmlFor="telefono"
                className='absolute left-0 top-1/2 transform -translate-y-1/2 text-white transition-all peer-focus:top-0 peer-focus:text-accent peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-white'
              >
                Número de teléfono
              </label>
            </div>
  
            {/* Mensaje */}
            <div className="relative w-full">
              <textarea
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-transparent focus:border-accent transition-all peer resize-none mb-12'
                placeholder='Escribe un mensaje'
                name="mensaje"
                required
                minLength={10}
              ></textarea>
              <label
                htmlFor="mensaje"
                className='absolute left-0 top-1/2 transform -translate-y-1/2 text-white transition-all peer-focus:top-0 peer-focus:text-accent peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-white'
              >
                Escribe un mensaje
              </label>
            </div>
  
            {/* Botón de Enviar */}
            <button className='btn btn-sm' disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
  
};

export default Contact;
