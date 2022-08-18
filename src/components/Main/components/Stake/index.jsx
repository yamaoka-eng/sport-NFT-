import { useContext } from 'react'
import { AppContext } from '../../../../context'
import { Message } from '../../../index'
import { getImage } from '../../../../utils'
import styles from './index.module.scss'

let canPlay = false

const Index = () => {

  const { StakeInfo, myInfo, MessageInfo } = useContext(AppContext)

  // 领取分红
  const receive = () => {
    if (myInfo.dividendSP === 0) return  Message.onError(MessageInfo.NoRewardAva)
  }

  // 质押
  const stakeClick = () => {
    Message.onError(MessageInfo.unopen)
  }

  // 解锁
  const unlockClick = () => {
    Message.onError(MessageInfo.unopen)
  }

  // 开启盲盒
  const openBindBoxClick = () => {
    Message.onError(MessageInfo.unopen)
  }

  const playMusic = () => {
    if (canPlay) {
      new Audio(getImage('mouseMove.mp3')).play()
      canPlay = false
    }
  }

  const CardNft = ({ stake, name, url, No, divide }) => {
    return(
      <div className='relative w-[10.1rem] h-[17rem] md:w-[14rem] md:h-[24rem] hover:scale-105 md:hover:scale-110 my-2 mx-2 md:m-6 transition-all duration-500 group flex flex-col items-center justify-between bg-white rounded-md drop-shadow-md overflow-hidden' onMouseMove={playMusic} onMouseLeave={()=>canPlay=true}>
        <div className='absolute w-full h-full group-hover:top-[10px] md:group-hover:top-[20px] group-hover:w-[100px] group-hover:h-[100px] md:group-hover:w-[120px] md:group-hover:h-[120px] group-hover:rounded-full transition-all duration-500 overflow-hidden z-[1]'>
          <img className='w-full h-full object-cover object-bottom group-hover:object-top transition-all duration-1000' src={getImage(url)}/>
        </div>
        <div className='md:pt-[150px] pt-[110px] pb-2 flex flex-col justify-between items-center text-sm md:text-lg h-full relative translate-y-[-100px] group-hover:translate-y-0 z-0 transition-all duration-700'>
          <p className='text-orange-400'>{name}</p>
          <div className='w-[80%] h-[2px] bg-gray-400 my-1 md:my-4'></div>
          <p className='text-gray-800'>{StakeInfo.cards.cardInfo.divideText1}</p>
          <p className='text-gray-800'>{StakeInfo.cards.cardInfo.divideText2} <span className='text-base md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff394f] to-[#ffcb27]'>{divide}</span></p>
          <div className='btn bg-gray-900' onClick={stake ? stakeClick : unlockClick}>{ stake ? StakeInfo.cards.cardInfo.btnStake : StakeInfo.cards.cardInfo.btnUnlock }</div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.coolCarousel}>
      <div className='text-gray-900 text-3xl font-bold mb-10'>{StakeInfo.title}</div>
      <div className='flex md:flex-row flex-col justify-between items-center px-5 py-3 rounded-lg border-[1px] border-gray-400 w-full mb-10'>
        <div className='md:pb-0 pb-4 text-gray-800'>{StakeInfo.dividend}<span className='text-orange-500 font-bold'>{myInfo.dividendSP} SP</span></div>
        <div className='btn bg-gray-900' onClick={receive}>{StakeInfo.btn}</div>
      </div>
      {
        (myInfo.runsNFTs.length > 0 || myInfo.GenesisNFTs.length > 0) ?
        <div className='flex-col my-10 p-2 md:p-5 rounded-xl bg-white text-center shadow-lg'>
          <div className='mb-5 text-center flex flex-col items-center'>
            <div className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff394f] to-[#ffcb27] mb-3'>{StakeInfo.cards.available}</div>
            <div className='w-full flex flex-wrap items-center justify-center'>
              {myInfo.runsNFTs.map(item => <CardNft key={item.No} stake={true} name={item.name} url={item.url} divide={item.divide} No={item.No}/>)}
              {myInfo.GenesisNFTs.map(item => <CardNft key={item.No} stake={true} name={item.name} url={item.url} divide={item.divide} No={item.No}/>)}
            </div>
          </div>
          <div className='text-center flex flex-col items-center'>
            <div className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff394f] to-[#ffcb27] mb-3'>{StakeInfo.cards.stake}</div>
            <div className='w-full flex flex-wrap items-center justify-center'>
              {myInfo.stakeRNFTs.map(item => <CardNft key={item.No} stake={false} name={item.name} url={item.url} divide={item.divide} No={item.No}/>)}
              {myInfo.stakeGNFTs.map(item => <CardNft key={item.No} stake={false} name={item.name} url={item.url} divide={item.divide} No={item.No}/>)}
            </div>
          </div>
        </div> :
        <div className='my-10 flex flex-col justify-center items-center text-gray-800'>{StakeInfo.cards.No}</div>
      }
      {
        myInfo.bindBoxNum > 0 ?
        <div className='flex md:flex-row flex-col items-center p-5 rounded-xl bg-white my-10 justify-between text-center shadow-lg'>
          <div className='flex flex-col md:flex-row items-center my-2 md:my-0'>
            <img className='w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem]' src={getImage('bindBox.png')} />
            <div className='my-6 md:my-0 text-center'>
              <span className='text-gray-800 text-xl md:text-2xl font-semibold md:mr-2 md:ml-7'>{StakeInfo.box.boxNum}</span>
              <span className='text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff394f] to-[#ffcb27] text-center'>{myInfo.bindBoxNum}</span>
            </div>
          </div>
          <div className='btn bg-gray-900' onClick={openBindBoxClick}>{StakeInfo.box.btn}</div>
        </div> :
        <div className='my-10 flex flex-col justify-center items-center text-gray-800'>{StakeInfo.box.No}</div>
      }
    </div>
  )
}

export default Index
