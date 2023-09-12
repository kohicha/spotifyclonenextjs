"use client"

import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'
import {BsArrowDownCircle} from 'react-icons/bs'
import Image from 'next/image'
import avatar from 'public/sampleAvatar.jpg'
import Router from 'next/router'
export default function MainCardNav() {
  return (
    <div className="sticky rounded-t-lg  text-sLightGray w-full flex flex-row justify-between px-6 py-4">
        <div className='flex flex-row text-xl gap-2'>
            <div className='bg-sLightGray w-8 h-8 grid place-items-center text-white rounded-full' onClick={()=> Router.back()}> 
                <AiOutlineLeft/>
            </div>
            <div className='bg-sLightGray w-8 h-8 grid place-items-center text-white rounded-full' onClick={()=> Router.forward()}>
                <AiOutlineRight/>
            </div>
        </div>
        <div className='flex flex-row font-bold text-sm gap-2'>
            <button className='bg-white px-4 rounded-full'>
                <span>Explore Premium</span></button>
            <button className='flex flex-row items-center justify-center px-4 py-2 rounded-full bg-sXlGray text-white gap-1'>
                <BsArrowDownCircle/>
                <span>Install app</span>
            </button>
            <div className='rounded-full bg-sLightGray p-1'>
                <Image
                src={avatar}
                alt='sample avatar'
                width={28}
                height={28}
                className='rounded-full'
                />
            </div>
        </div>
    </div>
  )
}
