import { useState, useContext } from 'react'
import { Message } from '../../../index'
import { AppContext } from '../../../../context'
import { getImage } from '../../../../utils'
import './index.scss'

const Index = () => {

  const { myInfo, ReferralInfo: { inviteCard, partnerCard }, MessageInfo } = useContext(AppContext)

  const [ sign, setSign ] = useState(false)

  // 设置邀请人
  const setInviter = () => {
    if (myInfo.setInviter) return Message.onError(MessageInfo.isSetInviter)
    Message.onInfo(MessageInfo.unopen)
  }

  // 合伙人付款
  const partnerPay = () => {
    if (myInfo.partnerInfo.isPartner) return Message.onError(MessageInfo.isPartner)
    Message.onInfo(MessageInfo.unopen)
  }

  // 接收邀请奖励
  const receiveNFT = () => {
    if (myInfo.partnerInfo.inviteRewards.length > 0) return Message.onSuccess(MessageInfo.getSuccess)
    Message.onInfo(MessageInfo.NoRewardAva)
  }

  const pllayMusic = () => new Audio(getImage('slide.mp3')).play()

  return (
    <>
    <div className='bg-slate-100 skew-y-[-7deg] z-10 relative'>
      <div className='logn-card'>
      <div className={`slide-container
        ${sign ? 'md:translate-x-full md:translate-y-0 translate-y-full' : 'md:translate-x-0 md:translate-y-0 translate-y-0'}
      `}>
        <form className={`slide-container-form transition-all duration-500
          ${sign ? 'logn-show z-20 opacity-1' : 'z-0 opacity-0'}`}>
            <h1 className='logn-h1'>{partnerCard.back.title}</h1>
            <p className='text-orange-400 text-xs md:text-sm mb-4 text-center'>{partnerCard.back.section}</p>
            <div className='w-full flex justify-between flex-row'>
              <div className='flex-1 pt-8 pb-4 px-2 m-2 shadow-md rounded-xl flex flex-col items-center justify-between'>
                <img className='w-10 h-10' src={getImage('usdt.png')}/>
                <p className='text-gray-900 py-3 text-lg'>{partnerCard.back.card1.price}</p>
                <p className='text-gray-900 pb-2 text-2xl font-bold'>300.0</p>
                <div className='btn bg-gray-900 px-5' onClick={partnerPay}>{partnerCard.back.card1.btn}</div>
              </div>
              <div className='flex-1 px-2 py-4 m-2 shadow-md rounded-xl flex flex-col items-center justify-between'>
                <p className='text-gray-900 text-center'>{partnerCard.back.card2.InviteNum}<span className='font-black text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#ff394f] to-[#ffcb27]'>{myInfo.partnerInfo.referralNum}</span></p>
                {
                  myInfo.partnerInfo.referralNum < 10 ?
                  <div className='text-center'>{partnerCard.back.card2.NoEnough}</div> :
                  <img className='w-[4rem] h-[8rem] my-3 rounded-xl' src={
                    (myInfo.referralNum >= 10 && myInfo.referralNum < 20) ? getImage('run-01.png') :
                    (myInfo.referralNum >= 20 && myInfo.referralNum < 30) ? getImage('run-02.png') :
                    (myInfo.referralNum >= 30 && myInfo.referralNum < 40) ? getImage('run-03.png') :
                    (myInfo.referralNum >= 40 && myInfo.referralNum < 50) ? getImage('run-04.png') :
                    getImage('run-05.png')
                  }/>
                }
                <div className='btn bg-gray-900 px-4' onClick={receiveNFT}>{partnerCard.back.card2.btn}</div>
              </div>
            </div>
            
        </form>
        <form className='slide-container-form z-10'>
          <h1 className='logn-h1'>{inviteCard.back.title}</h1>
          <span className='text-orange-400'>{inviteCard.back.section}</span>
          <input className='slide-ct-form-input' type="Adrees" placeholder={inviteCard.back.input} />
          <div className='form-btn' onClick={setInviter}>{inviteCard.back.btn}</div>
        </form>
      </div>
      <div className={`slide-container z-20
        ${sign ? 'md:translate-x-0 md:translate-y-0 translate-y-0' : 'md:translate-x-full md:translate-y-0 translate-y-full'}
      `}>
        <div className={`slide-box-container
          ${sign ? 'md:translate-x-1/2 md:translate-y-0 translate-y-1/2' : 'md:translate-x-0 md:translate-y-0 translate-y-0'}
        `}>
          <div className={`slide-box
            ${sign ? 'md:translate-x-0 md:translate-y-0 translate-y-0' : 'md:-translate-x-1/3 md:translate-y-0 -translate-y-1/3'}
          `}>
              <h1 className='logn-h1'>Welcome Back!</h1>
              <p className='my-8'>
                {inviteCard.before.section}
              </p>
              <button className="transparency-btn" onClick={()=>{setSign(false);pllayMusic()}}>{inviteCard.before.btn}</button>
          </div>
          <div className={`slide-box text-center
            ${sign ? 'md:translate-x-1/3 md:translate-y-0 translate-y-1/3' : 'md:translate-x-0 md:translate-y-0 translate-y-0' }
          `}>
              <h1 className='logn-h1'>Hello, Friend!</h1>
              <p className='my-6 text-lg'>{partnerCard.before.section}</p>
              <p>{partnerCard.before.detail1}</p>
              <p>{partnerCard.before.detail2}</p>
              <p>{partnerCard.before.detail3}</p>
              <p>{partnerCard.before.detail4}</p>
              <p className='pb-5'>{partnerCard.before.detail5}</p>
              <button className="transparency-btn" onClick={()=>{setSign(true);pllayMusic()}}>{partnerCard.before.btn}</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Index
