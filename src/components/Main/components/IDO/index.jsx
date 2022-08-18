import { useContext, useRef, useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { AppContext } from '../../../../context'
import { ShakeTitle } from '../../../index'
import { getImage } from '../../../../utils'
import { Message } from '../../../index'
import styles from './index.module.scss'

var timer = null

const Index = () => {

  const videoEl = useRef()

  const [ showVideo, setShowVideo ] = useState(false)

  const { myInfo, IDOInfo, MessageInfo } = useContext(AppContext)

  useEffect(()=>{
    // audioEl.current.volume = 0
    let v = videoEl.current
    const show = () => setTimeout(()=>setShowVideo(true), 500) 
    v.addEventListener('canplaythrough', show) // 监听视频是否加载完成
    return () => v.removeEventListener('canplaythrough', show)
  }, [])

  // 支付100usdt
  const pay100 = () => {
    if (myInfo.participatedIDO) return  Message.onError(MessageInfo.isIDO)
  }
  // 支付200usdt
  const pay200 = () => {
    if (!myInfo.partnerInfo.isPartner) return  Message.onError(MessageInfo.notPartner)
    if (!myInfo.partnerInfo.referralNum < 10) return  Message.onError(MessageInfo.referralNumNotE)
    if (myInfo.partnerInfo.partnerIDO) return  Message.onError(MessageInfo.isIDO)
  }

  const pllayMusic = () => new Audio(getImage('IDO.mp3')).play()

  return (
    <header className={styles.head}>
      <div className='relative z-[2] flex flex-col items-center w-full h-full justify-center'>
        <div className={styles.title}><ShakeTitle title='SPORT'/></div>
        <span className={styles.info}>{IDOInfo.title}</span>
        <label for='toggle' className={`${styles.scaleBtn}`} onClick={pllayMusic}><span>{IDOInfo.IDO}</span></label>
      </div>
      <input type="checkbox" className={styles.checkbox} id='toggle'/>
      <div className={styles.bgVido}>
        <video autoPlay muted controls={false} className={`${styles.bgVidoContentVideo} ${showVideo ? 'z-[1] block' : 'z-0 hidden'}`} ref={videoEl}>
          <source src={getImage('cyberpunk-01.mp4')} type='video/mp4'/>
          <div></div>
        </video>
        <div className={`${styles.bgVidoContentImage} ${!showVideo ? 'z-[1]' : 'z-0'}`}></div>
      </div>
      <div className={styles.scaleBg}></div>
      <div className={styles.containerBg}></div>
      <div className={styles.musicContainer}>
        <label for='toggle' className={styles.back}><IoIosArrowBack />{IDOInfo.scaleBgCloose}</label>
        <div className='flex absolute top-[20%] left-[50%] translate-x-[-50%]'>

        <div className='flex-1 pt-8 pb-4 md:px-4 px-0 mr-2 md:mr-6 shadow-md rounded-xl flex flex-col items-center justify-between bg-white text-center'>
          <img className='w-10 h-10' src={getImage('usdt.png')}/>
          <p className='text-gray-900 py-3 text-sm'>{IDOInfo.card1.title}</p>
          <p className='pb-1 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff394f] to-[#ffcb27]'>{IDOInfo.card1.acquire}</p>
          <p className='text-orange-800 font-semibold text-sm'>1000.0 SPORT</p>
          <p className='text-orange-800 font-semibold pb-3 text-sm'>{IDOInfo.card1.NFT}</p>
          <p className='text-gray-900 pb-2 text-2xl font-bold'>100.0</p>
          <div className='btn bg-gray-900 px-5' onClick={pay100}>{IDOInfo.card1.btn}</div>
        </div>

        <div className='flex-1 pt-8 w-[15rem] pb-4 md:px-4 px-0 shadow-md rounded-xl flex flex-col items-center justify-between bg-white text-center'>
          <img className='w-10 h-10' src={getImage('usdt.png')}/>
          <p className='text-gray-900 py-3 text-sm'>{IDOInfo.card2.title}</p>
          <p className='pb-1 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff394f] to-[#ffcb27]'>{IDOInfo.card2.acquire}</p>
          <p className='text-orange-800 font-semibold text-sm'>2000.0 SPORT</p>
          <p className='text-orange-800 font-semibold pb-3 text-sm'>{IDOInfo.card2.NFT}</p>
          <p className='text-gray-900 pb-2 text-2xl font-bold'>200.0</p>
          <div className='btn bg-gray-900 px-5' onClick={pay200}>{IDOInfo.card2.btn}</div>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Index
