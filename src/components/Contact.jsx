import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'



const Contact = () => {

  const formRef = useRef();
  const [form,setForm] = useState({
    name : "",
    email : "",
    message : ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const {name,value} = event.target;

    setForm({...form, [name]:value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true)

    // template_ug72jm3
    // service_6p7z5cm
    // MXjcdsA8ZmIQIAUGn

    //now we'll use the emailjs client to handle sending of our emails
    emailjs.send("service_6p7z5cm","template_ug72jm3",
    {
      from_name: form.name,
      to_name : 'Navansh',
      from_email : form.email,
      to_email : "navanshkhandelwal14@gmail.com",
      message: form.message,
    },
    "MXjcdsA8ZmIQIAUGn")
    
    .then(()=>{
      setLoading(false)
      alert(" I will get back to you as soon as possible")

      setForm({
        name : "",
        email : "",
        message : ""
      })
    }, (error) =>{
      setLoading(false)
      console.log(error)
      alert("Soemthing went Wrong !")
    })


  }


  return (
    <div className=' xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left',"tween",0.2,1)} className=' bg-black-100 flex-[0.75] p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form action="" ref={formRef} onSubmit={handleSubmit} className=' mt-12 flex flex-col gap-8'>
          {/* 1st Field : Name  */}
          <label className=' flex flex-col'>
            <span className=' text-white font-medium mb-4'>Your Name</span>
            <input 
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your Name ?"
              className=' bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'

              />
          </label>

          {/* 2nd Field : Email  */}
          <label className=' flex flex-col'>
            <span className=' text-white font-medium mb-4'>Your Email</span>
            <input 
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email ?"
              className=' bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'

              />
          </label>

          {/* 3rd Field Message  */}
          <label className=' flex flex-col'>
            <span className=' text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows="7" 
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Put in your thoughts...."
              className=' bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'

              />
          </label>

          <button type='submit' className=' bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {
              loading ? "Sending..." : "Send"
            }
          </button>

        </form>
      </motion.div>

      <motion.div variants={slideIn('right',"tween",0.2,1)} className=' xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas></EarthCanvas>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")