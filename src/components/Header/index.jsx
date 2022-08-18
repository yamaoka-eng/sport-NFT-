import { useContext, useState, useEffect, useRef } from 'react'
import { AiOutlineDown, AiOutlineUnorderedList } from "react-icons/ai"
import { getImage } from '../../utils'
import { AppContext } from '../../context/AppContext'
import { Message } from '../../components'
import styles from './index.module.scss'

const Index = () => {

  const langMuneRef = useRef()
  const itemMuneRef = useRef()

  const { HeaderInfo, setLanguage, MessageInfo } = useContext(AppContext)
  const [ lang, setLang ] = useState('English')
  const [ langMuneShow, setLangMuneShow ] = useState(false)
  const [ itemMuneShow, setItemMuneShow ] = useState(false)

  const langClass = 'px-3 py-2 hover:bg-gray-200 transition-all duration-300'

  useEffect(()=>{

    const showLangMune = (e) => {
      if (langMuneRef.current.contains(e.target)) return
      setLangMuneShow(false)
    }

    const showItemMune = (e) => {
      if (itemMuneRef.current.contains(e.target)) return
      setItemMuneShow(false)
    }

    document.body.addEventListener('click', showLangMune)
    document.body.addEventListener('click', showItemMune)

    return () => {
      document.body.removeEventListener('click', showLangMune)
      document.body.removeEventListener('click', showItemMune)
    }
  }, [])

  // 选择语言
  const chosseLang = data => {
    setLang(data)
    setLanguage(data)
  }

  // 连接钱包
  const connectWallet = () => {
    Message.onInfo(MessageInfo.unopen)
  }

  return (
    <header className='w-full bg-white drop-shadow-md text-[#183B56] fixed top-0 left-0 z-[999]'>
      <div className={styles.header}>

        <div className='flex items-center'>
          <div className='w-12 h-12 rounded-full overflow-hidden'>
            <img className='w-full h-full' src={getImage('AVE.png')}/>
          </div>
          <span className='ml-4 text-xl font-semibold hidden md:block'>SPORT</span>
        </div>

        <ul className='hidden md:flex'>
          {HeaderInfo.ulItem.map(item => <li className='mr-6 lg:mr-10 last:mr-0 hover:rotate-12 hover:scale-105 transition-all duration-500 hover:text-red-500' key={item.name}><a className='h-full w-full' href={item.href}>{item.name}</a></li>)}
        </ul>

        <div className='flex items-center'>
          <div className='relative flex items-center cursor-pointer p-3 select-none text-sm' ref={langMuneRef} onClick={()=>setLangMuneShow(!langMuneShow)}>
            <div className='mr-2'>{lang}</div>
            <AiOutlineDown />
            <ul className={`absolute top-10 bg-white shadow-md transition-all duration-[200] border-t border-gray-100 ${!langMuneShow && styles.UlHidden}`}>
              <li className={langClass} onClick={()=>chosseLang('English')}>English</li>
              <li className={langClass} onClick={()=>chosseLang('中文')}>中文</li>
            </ul>
          </div>
          <div className='bg-gradient-to-r from-purple-500 to-pink-500 btn md:px-6 ml-3 text-sm ' onClick={connectWallet}>{HeaderInfo.btn}</div>
          <div ref={itemMuneRef} onClick={()=>setItemMuneShow(!itemMuneShow)} className='ml-3'>
            <AiOutlineUnorderedList className='text-gray-800 md:hidden w-7 h-7'/>
            <ul className={`absolute top-[3.5rem] right-1 bg-white shadow-md border-t border-gray-100 transition-all duration-300 ${!itemMuneShow && styles.UlHidden}`}>
              {HeaderInfo.ulItem.map(item => <li className={`${langClass} hover:text-red-500`} key={item.name}><a className='h-full w-full' href={item.href}>{item.name}</a></li>)}
            </ul>
          </div>
        </div>

        
        
      </div>
    </header>
  );
}

export default Index;
