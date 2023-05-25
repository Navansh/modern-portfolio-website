import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headerImg from '../assets/header-img.svg'
import { styles } from '../styles'


const Hero = () => {

  const toRotate = ["Frontend Developer", "Backend Developer" , "Web3 Developer"]
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text,setText] = useState('')
  const [index, setIndex] = useState(1);
  const [delta,setDelta] = useState(10 - Math.random()*1)
  const period = 450

  useEffect(()=>{
    let ticker = setInterval(()=>{
      tick()
    },delta)

    return () => {clearInterval(ticker)}
  },[text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  return (
    <div>
      <section className='relative w-full mx-auto h-screen'>
        <div className={` absolute inset-0 top-[120px] max-w-7xl mx-auto` }>
          <div className='flex flex-col md:flex-row md:mt-10 w-full justify-between'>
            <div className=' max-w-3xl mr-1'>
              <span className=' tagline'>Welcome to my Portfolio</span>
              <h1 className='text-7xl mt-10 md:mt-24 py-14'>{`👋 I'm Navansh `}
                <br />
                <div className=''></div>
                <div className='wrap font-bold mt-2'> <span className='br22 '>{text} </span> </div>
              </h1>
            </div>

            <div>
              <img src={headerImg} alt="banner" id='imgg' className=' scale-75' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero