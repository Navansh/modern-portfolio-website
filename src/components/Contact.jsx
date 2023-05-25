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

  const handleChange = () => {}

  const handleSubmit = () =>{}
  return (
    <div className=' xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left',"tween",0.2,1)} className=' bg-black-100 flex-[0.75] p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form action="" ref={formRef} onSubmit={handleSubmit} className=' mt-12 flex flex-col gap-8'>
          <label htmlFor=""></label>

        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")