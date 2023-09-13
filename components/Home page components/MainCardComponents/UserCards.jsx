import Image from "next/image"
import avatar from 'public/sampleAvatar.jpg'
import Link from "next/link"
import {BsFillPlayFill} from "react-icons/bs"

export default function UserCards() {
  return (
    <Link shallow={true} href={"/playlist"} className="max-w-xl min-w-[13rem] rounded-sm flex flex-row items-center justify-between pr-4
    bg-sXlGray bg-opacity-10 hover:bg-opacity-40
    group transition-all ease-in-out duration-300 

    ">
      <div className="flex flex-row items-center">
        <Image
        src={avatar}
        alt='sample avatar'
        width={80}
        height={80}
        className='rounded-l-sm shadow-2xl mr-4 w-16 h-16 lg:w-20 lg:h-20'
        />
        <p>
          Playlist
        </p>
      </div>
      <div className="bg-sGreen rounded-full drop-shadow-2xl p-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
        <BsFillPlayFill className="text-black text-3xl"/>
      </div>
    </Link>
  )
}
