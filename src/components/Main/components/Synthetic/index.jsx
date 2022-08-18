import { useContext } from 'react'
import { AppContext } from '../../../../context'
import { getImage } from '../../../../utils'
import { Message } from '../../../index'
import styles from './index.module.scss'

let canPlay = true

const Index = () => {

  let runsOwn = [ -1, -1, -1, -1, -1 ]
  let gensOwn = [ -1, -1, -1, -1 ]

  const { SyntheticInfo, myInfo, MessageInfo, Nfts } = useContext(AppContext)

  // 合成
  const synthesis = () => {
    let i = 0
    runsOwn.forEach(item => { if (item > -1) i++ })
    if (i === 5) return Message.onSuccess(MessageInfo.synthesisSuccess) 
    Message.onError(MessageInfo.NFTNumNotE)
  }

  const playMusic = () => {
    if (canPlay) {
      new Audio(getImage('turn.mp3')).play()
      canPlay = false
    }
  }

  const Card = ({ name, url, divide, index, type }) => {

    switch (type) {
      case 'run':
        runsOwn[index] = myInfo.runsNFTs.findIndex(item => item.name === name)
        break;
      case 'gen':
        gensOwn[index] = myInfo.GenesisNFTs.findIndex(item => item.name === name)
        break;
    }
    
    return (
      <li className={styles.musicCard} onMouseMove={playMusic} onMouseLeave={()=>canPlay=true}>
        <div className={styles.before}>
          <div className={`${(type === 'run' ? runsOwn[index] : gensOwn[index]) !== -1 && 'hidden'} absolute left-0 top-0 w-full h-full px-2 flex text-center justify-center items-center bg-black opacity-70 z-[1] text-xl font-bold`}>
            {SyntheticInfo.isOown}
          </div>
          <div className={styles.imgContainer}>
            <div className={styles.img}><img src={getImage(url)}/><div className={styles.imgShade}></div></div>
            <div className={styles.imgTitle}>
              <span>{name}</span>
            </div>
          </div>
          <div className='flex-1 flex flex-col items-center px-2 pt-2 md:px-6 md:py-6 text-blue-500 font-bold text-center'>
            <p className='py-2 text-xs md:text-base'>{SyntheticInfo.divideText1}</p>
            <p className='text-xs md:text-base'>{SyntheticInfo.divideText2}</p>
            <p className='text-base font-extrabold mt-2 md:text-2xl'>{divide}</p>
          </div>
        </div>
        <div className={styles.back}>
          <div className={styles.bgVido}>
            <img className='w-full h-full' src={getImage(url)} />
          </div>
        </div>
      </li>
    )
  }

  return (
    <div className={styles.synthic}>
      <div className='text-center mb-6 mt-[-1.5rem] felx flex-col items-center'>
        <p className='tracking-wide text-white text-3xl md:text-5xl md:py-10 py-1 mb-4 select-none font-semibold'>{SyntheticInfo.title}</p>
        <p className='text-base md:text-xl font-bold'>{SyntheticInfo.section}</p>
      </div>
      <ul className={styles.musicCards}>
        {Nfts.cryptoRunnerNFTs.map((item, index) => <Card key={item.name} name={item.name} url={item.url} type='run' divide={item.divide} index={index}/>)}
      </ul>
      <div className='transparency-btn mt-3 mb-3 md:mb-10 md:mt-10 cursor-pointer select-none' onClick={synthesis}>{SyntheticInfo.btn}</div>
      <ul className={styles.musicCards}>
        {Nfts.genesisNFTs.map((item, index) => <Card key={item.name} name={item.name} url={item.url} type='gen' divide={item.divide} index={index}/>)}
      </ul>
    </div>
  )
}

export default Index
