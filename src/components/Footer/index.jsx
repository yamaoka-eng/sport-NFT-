import { useContext } from 'react' 
import { AppContext } from '../../context/AppContext'
import { getImage } from '../../utils'
import { FaTelegram } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"

const Index = () => {

  const { FooterInfo } = useContext(AppContext)

  return (
    <footer className="flex flex-col w-full z-50 relative">
      <div className='flex flex-wrap bg-[#181F2D] py-3 px-6 justify-between'>
        <div>
          <div className='flex items-center mb-3'>
            <div className='w-12 h-12 rounded-full overflow-hidden'>
              <img className='w-full h-full' src={getImage('AVE.png')}/>
            </div>
            <span className='ml-4 text-xl font-semibold text-white'>SPORT</span>
          </div>
          <div className='text-xs max-w-[700px] mb-4 md:mb-0 break-normal'>
            {FooterInfo.section}
          </div>
        </div>

        <div className='flex justify-between md:justify-center md:flex-col w-full md:w-auto'>
          <div className='text-2xl font-semibold md:mb-2 mb-0'>{FooterInfo.contact}</div>
          <div className='flex'>
            <FaTelegram className='w-[1.75rem] h-[1.75rem] mr-3'/>
            <AiFillTwitterCircle className='w-[1.8rem] h-[1.8rem]' />
          </div>
        </div>
        
      </div>
      <div className="flex justify-center text-white bg-[#253046] py-2 text-sm">© 2022 Laeeb. Design with by：<span className="text-red-600"> SPORT</span>.</div>
    </footer>
  )
}

export default Index
