import {BsFillPlayCircleFill} from 'react-icons/bs'
import {GiNextButton} from 'react-icons/gi'
import {GiPreviousButton} from 'react-icons/gi'
import {TbRepeat} from 'react-icons/tb'
import {FaShuffle} from 'react-icons/fa6'
import {FiHeart} from 'react-icons/fi'
import {BsFilePlay} from 'react-icons/bs'
import {PiMicrophoneStageBold} from 'react-icons/pi'
import {HiOutlineQueueList} from 'react-icons/hi2'
import {LuMonitorSpeaker} from 'react-icons/lu'
import {TbVolume2} from 'react-icons/tb'
import Image from 'next/image'
import avatar from 'public/sampleAvatar.jpg'
import { Slider } from '../ui/slider'


export default function Player() {
  return (
    <div className="bg-black px-2 py-4 w-full flex flex-row text-white justify-between items-center">
         <div className='flex flex-row items-center gap-4 mr-8'>
         <Image
                src={avatar}
                alt='sample avatar'
                width={56}
                height={56}
                className='rounded-sm'
                />
                <p className='flex flex-col'>
                    <span className='text-sm'>I miss u</span>
                    <span className='text-xs'>Artist</span>
                </p>
                <FiHeart/>
         </div>
         <div className='flex flex-col justify-center items-center gap-2'>
            <div className='flex flex-row text-xl text-sLGray gap-4'>
                <button className='hover:text-white'>
                    <FaShuffle/>
                </button>  
                <button className='hover:text-white'>
                    <GiPreviousButton/>
                </button>
                <button className='text-3xl text-white'>
                    <BsFillPlayCircleFill/>
                </button>
                <button className='hover:text-white'>
                    <GiNextButton/>
                </button>
                <button className='hover:text-white'>
                    <TbRepeat/>
                </button>
            </div>
            <div className='flex flex-row text-xs gap-2'>
                <span>
                    9:22
                </span>
                <Slider className='w-[40rem]' defaultValue={[49]} max={100} step={1}/>
                <span>
                    20:05
                </span>
            </div>
            
         </div>
        <div className='flex flex-row text-lg gap-3 text-sLGray '>
            <button className='hover:text-white'>
                <BsFilePlay/>
            </button>
            <button className='hover:text-white'>
                <PiMicrophoneStageBold/>
            </button>
            <button className='hover:text-white'>
                <HiOutlineQueueList/>
            </button>
            <button className='hover:text-white'>
                <LuMonitorSpeaker/>
            </button>
            <div className='flex flex-row gap-2'>
                <button className='hover:text-white'>
                    <TbVolume2/>
                </button>
                <Slider className='w-24' defaultValue={[49]} max={100} step={1}/>
            </div>
        </div>
    </div>
  )
}
