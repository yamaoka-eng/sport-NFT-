import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { getImage } from '../../utils'
import styles from './index.module.scss'

const Index = () => {

  const { PartnersInfo } = useContext(AppContext)

  const images = [
    'dapp.png',
    'biance.png',
    'dr.png',
    'gate.png',
    'ops.png',
    'tp.png',
    'tw.png',
    'uni.png',
  ]

  return (
    <div className={styles.partners}>
      <div className='select-none text-[#183b56] text-4xl md:text-6xl font-black mb-10'>{PartnersInfo.title}</div>
      <ul>
        {images.map(item => <li key={item}>
          <img className='w-full' src={getImage(item)}/>
        </li>)}
      </ul>
    </div>
  )
}

export default Index
