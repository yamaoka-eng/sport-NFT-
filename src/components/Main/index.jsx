import { useRef, useEffect } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { IDO, Referral, Stake, Synthetic } from './components'

const Main = () => {

  gsap.registerPlugin(ScrollTrigger)

  const refs = useRef([])

  refs.current = []

  const addRef = ref => {if (ref) refs.current.push(ref)}

  useEffect(()=>{
    gsap.fromTo(
      refs.current[0],
      {
        x: '100%',
        y: '-15%',
        duration: 0.7,
        ease: "power4.out"
      },
      {
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: refs.current[0],
          start: "0% 60%",
        }
      }
    )
    gsap.fromTo(
      refs.current[1],
      {
        x: '-100%',
        y: '10%',
        duration: 0.7,
        ease: "power4.out"
      },
      {
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: refs.current[1],
          start: "0% 60%",
        }
      }
    )
    gsap.fromTo(
      refs.current[2],
      {
        x: '0',
        y: '100%',
        duration: 0.7,
        ease: "power4.out"
      },
      {
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: refs.current[2],
          start: "-100% 60%",
        }
      }
    )
  }, [])

  return (
    <div className='w-full overflow-x-hidden'>
      <div id='IDO' className='relative z-0'><div><IDO /></div></div>
      <div id='Referral' className='relative z-[1]'><div ref={addRef}><Referral /></div></div>
      <div id='Synthetic' className='relative z-[3]'><div ref={addRef}><Synthetic /></div></div>
      <div id='Stake' className='relative z-[2] overflow-y-hidden'><div ref={addRef}><Stake /></div></div>
    </div>
  )
}

export default Main
