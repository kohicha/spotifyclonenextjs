import Image from "next/image"
import Link from "next/link"
import avatar from 'public/sampleAvatar.jpg'

export default function AlbumCard() {
  return (
    <Link href={""} className="bg-userCardBG aspect-[5/7] min-w-[150px] w-48 p-4 flex flex-col gap-4 rounded-md">
      <div>
        <Image
        src={avatar}
        alt='sample avatar'
        height={160}
        width={160}
        className='rounded-full'
        />
      </div>
      <p className="text-base font-normal flex flex-col gap-2">
        <span className="font-semibold">Kohi Devs</span>
        <span className="text-sm text-fontGray">Syd, Quaks</span>
      </p>
    </Link>
  )
}
