import Image from "next/image"
import Link from "next/link"
import avatar from 'public/sampleAvatar.jpg'
import {BsFillPlayFill} from "react-icons/bs"

export default function PlaylistCard() {
  return (
    <Link href={""} className="aspect-[5/7] min-w-[150px] w-48 p-4 flex flex-col gap-4 rounded-md 
    bg-sXlGray bg-opacity-10 hover:bg-opacity-40
    group transition-all ease-in-out duration-300

    ">
      <div className="grid h-40 w-40 relative">
        <Image
        src={avatar}
        alt='sample avatar'
        height={160}
        width={160}
        className='rounded-sm col-span-1 row-span-1'
        />
        <div className="col-span-1 row-span-1 w-12 h-12 bg-sGreen absolute right-2 bottom-0 group-hover:-translate-y-2 shadow-black rounded-full drop-shadow-2xl p-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
          <BsFillPlayFill className="text-black text-3xl"/>
        </div>
      </div>
      <p className="text-base font-normal flex flex-col gap-2">
        <span className="font-semibold">Daily Mix</span>
        <span className="text-ellipsis text-sm text-fontGray line-clamp-2">10pm Na Ba?, 10pm Na Nga, Hala Ito Na, Arghh, I miss you!!!</span>
      </p>
    </Link>
  )
}
