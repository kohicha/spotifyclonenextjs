import {BiLibrary} from 'react-icons/bi'
import {HiPlus} from 'react-icons/hi'
import {HiOutlineArrowRight} from 'react-icons/hi'
import {FiSearch} from 'react-icons/fi'
import { IoCaretDown } from 'react-icons/io5'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import LibLists from './LibLists'
import { ScrollArea } from "@/components/ui/scroll-area"


export default function UserLibrary() {
    const libraryItems = [
        {id: "userPlaylists", title:"Playlists"},
        {id: "userArtists", title:"Artists"},
        {id: "userAlbums", title:"Albums"},
        {id: "userPodcastAndShows", title:"Podcasts & Shows"}
    ]
  return (
    <div className="bg-sGray flex flex-col max-w-md rounded-lg font-semibold text-sm h-full text-gray-400 pt-2 gap-4">
        <div className='flex flex-row items-center justify-between px-6'>
            <button className='flex flex-row items-center gap-2 hover:brightness-200 transition-all ease-in-out duration-300'>
                <BiLibrary className='text-2xl'/>
                <span className='text-base'>
                    Your Library
                </span>
            </button>
            <div className='flex flex-row gap-2'>
                <span className='rounded-full p-2 bg-sGray hover:brightness-150 transition-all ease-in-out duration-300'>
                    <HiPlus className='text-xl rounded-full hover:brightness-150 transition-all ease-in-out duration-300'/>
                </span>
                <span className='rounded-full bg-sGray p-2 hover:brightness-150 transition-all ease-in-out duration-300'>
                    <HiOutlineArrowRight className='text-xl'/>
                </span>
                
            </div>
        </div>
        <div className='text-xs font-semi   bold text-white flex flex-row gap-2 px-4'>
            {libraryItems.map(({id, title}) => {
                return(
                    <button key={id} className='bg-sLightGray rounded-3xl px-3 py-2 hover:brightness-150 transition-all ease-in-out duration-300'>
                        {title}
                        </button>
                )
            })}
        </div>
        <ScrollArea className='h-full'>
            <div className='flex flex-row items-center justify-between font-normal px-6 text-gray-200 mb-2'>
                <button className='text-lg'>
                    <FiSearch/>
                </button>
                <Select>
                    <SelectTrigger className="max-w-[9rem] bg-sGray border-0 text-xs">
                        <SelectValue placeholder="Recents" />
                    </SelectTrigger>
                    <SelectContent className="bg-sLightGray text-gray-200 border-0 text-sm">
                        <span className='text-xs p-2 mb-6 opacity-60'>Sort by</span>
                        <SelectItem value="recentList">Recents</SelectItem>
                        <SelectItem value="recentlyAddedList">Recently Added</SelectItem>
                        <SelectItem value="alphabeticalList">Alphabetical</SelectItem>
                        <SelectItem value="creatorList">Creator</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <LibLists/>
        </ScrollArea>
        
        
    </div>
  )
}
