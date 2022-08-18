import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Header, Footer, Partners, Main } from "./components"
import { getImage } from "./utils"

const App = () => {

  gsap.registerPlugin(ScrollTrigger)

  const refs = useRef([])
  const audioRef = useRef()

  refs.current = []

  const addRef = ref => {if (ref) refs.current.push(ref)}

  useEffect(()=>{

    audioRef.current.volume = 0.3

    const playMusic = () => audioRef.current.play()

    document.body.addEventListener('click', playMusic)

    return () => document.body.removeEventListener('click', playMusic)
  }, [])

  useEffect(()=>{
    refs.current.forEach(ref => {
      gsap.fromTo(
        ref,
        {
          opacity: 0,
          y: '100%',
          duration: 0.7,
          ease: "power4.out"
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ref,
            start: "-100% 60%",
          }
        })
    })
  }, [])

  return (
    <>
    <Header />
    <div className="max-w-[1650px] mx-auto">
      <Main />
      <div ref={addRef}><Partners /></div>
    </div>
    <Footer />
    <audio src={getImage('cyberpunk-01.mp3')} loop preload='auto' ref={audioRef}></audio>
    </>

  )
}

export default App
