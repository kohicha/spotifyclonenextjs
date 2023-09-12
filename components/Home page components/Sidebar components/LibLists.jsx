import React from 'react'

import Image from 'next/image'
import avatar from 'public/sampleAvatar.jpg'
import Link from 'next/link'
export default function LibLists() {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `I miss you ${a.length - i} times` 
  )
  return (
    <div className='h-[60vh] rounded-md px-2'>
      {tags.map((tag) => (
            <Link shallow={true} href={'/playlist'} key={tag} className='px-2 py-2 rounded-md flex flex-row justify-start items-center gap-2 bg-sGray hover:bg-sLightGray w-full'>
              <div>
                <Image
                src={avatar}
                alt='sample avatar'
                width={50}
                height={50}
                className='rounded-sm'
                />
              </div>
              <div className='font-normal text-start text-white'>
                <p className='text-base tracking-tight'>
                  {tag}
                </p>
                <p className='text-sm text-fontGray'>
                  Playlist • 10pm pasado na playlist
                </p>
              </div>
            </Link>
      ))}
      
    </div>
    
  )
}
