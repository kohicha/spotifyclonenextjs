import { ScrollArea } from "@/components/ui/scroll-area";
import MainCardNav from "./MainCardComponents/MainCardNav";
import Section from "./MainCardComponents/Section";
import UserCards from "./MainCardComponents/UserCards";
import PlaylistCard from "./MainCardComponents/PlaylistCard";
import ArtistCard from "./MainCardComponents/ArtistCard";
import AlbumCard from "./MainCardComponents/AlbumCard";

export default function MainCard() {
  const gridLayout = "grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4"
  const flexLayout = "flex flex-row gap-4"
  return (
    <div className="bg-sGray rounded-lg w-full">
      <MainCardNav/>
      <div>
        <ScrollArea className='h-[83vh] px-6'>
          <Section SectionTitle={"Good evening"} SectionContents={<UserCards/>} HeaderSize={'text-3xl'} layoutStyle={gridLayout} nums={6} isHidden={'hidden'}/>
          <Section SectionTitle={"Made For You"} SectionContents={<PlaylistCard/>} HeaderSize={'text-xl'} layoutStyle={flexLayout} nums={6}/>
          <Section SectionTitle={"Artist"} SectionContents={<ArtistCard/>} HeaderSize={'text-xl'} layoutStyle={flexLayout} nums={6}/>
          <Section SectionTitle={"Album"} SectionContents={<AlbumCard/>} HeaderSize={'text-xl'} layoutStyle={flexLayout} nums={6}/>
        </ScrollArea>
    </div>
    </div>
     
  )
}
