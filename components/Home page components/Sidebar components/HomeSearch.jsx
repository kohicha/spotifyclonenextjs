import {GoHomeFill} from 'react-icons/go'
import {FiSearch} from 'react-icons/fi'
export default function HomeSearch() {
  return (
    <div className="bg-sGray flex flex-col rounded-lg font-semibold text-sm text-gray-200 px-6 py-5 gap-6">
        <button className='flex flex-row items-center gap-4 text-white'>
            <GoHomeFill className='text-2xl'/>
            <span>
                Home    
            </span>
        </button>
        <button className='flex flex-row items-center gap-4'>
            <FiSearch className='text-2xl'/>
            <span>
                Search  
            </span>
        </button>
    </div>
  )
}
