import { useState, useEffect } from 'react';
import './index.scss'

const ShakeTitle = ({ title, time }) => {

  const [exit, setExit] = useState(false)

  useEffect(()=>{
    
    if (!!time) {
      setTimeout(() => {
        setExit(true)
        }, time)
    }
    
  }, [])

  return (
    <div className={`shake-title ${exit ? 'slide-out-blurred-left' : 'slide-in-elliptic-right-fwd'}`}>
      <div title={title} className='text-malfunction text-5xl'/>
    </div>
  )
}

export default ShakeTitle
