import Image from "next/image"
import avatar from 'public/sampleAvatar.jpg'
import Link from "next/link"
export default function UserCards() {
  return (
    <Link href={""} className="max-w-xl min-w-[13rem] bg-userCardBG rounded-sm flex flex-row items-center ">
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
    </Link>
  )
}
