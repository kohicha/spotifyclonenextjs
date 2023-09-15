import React from 'react'
import Image from 'next/image'
import avatar from 'public/sampleAvatar.jpg'
export default function PlaylistHeader({playlistTitle, numSongs,userName}) {
  return (
    <>
    <div className='text-white bg-purple-700'>
        <div className='flex flex-row gap-4'>
        <Image
        src={avatar}
        alt='sample avatar'
        width={232}
        height={232}
        className='shadow-lg min-w-[192px]'
        />
        <span className='flex flex-col justify-around '>
            <p className='text-sm'>Playlist</p>
            <p className='text-8xl font-bold'>{playlistTitle}</p>
            <span className='flex flex-row text-xs gap-2 items-center '>
                <div>
                    <Image
                    src={avatar}
                    alt='sample avatar'
                    width={24}
                    height={24}
                    className='shadow-lg rounded-full'
                    />
                </div>
                <p className='font-bold'>
                {userName} • {numSongs} songs
                </p>
            </span>
        </span>
        
        
        
        </div>
        
    </div>
    </>
    
  )
}
