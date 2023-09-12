import {GoHomeFill} from 'react-icons/go'
import {FiSearch} from 'react-icons/fi'
import Link from 'next/link'
export default function HomeSearch() {
  return (
    <div className="bg-sGray flex flex-col rounded-lg font-semibold text-sm text-gray-200 px-6 py-5 gap-6">
        <Link href={"/"}className='flex flex-row items-center gap-4 text-white' shallow={true}>
            <GoHomeFill className='text-2xl'/>
            <span>
                Home    
            </span>
        </Link>
        <Link href={"/search"}className='flex flex-row items-center gap-4' shallow={true}>
            <FiSearch className='text-2xl'/>
            <span>
                Search  
            </span>
        </Link>
    </div>
  )
}
