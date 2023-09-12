import { ScrollArea } from "@/components/ui/scroll-area";
import Section from "@/components/Home page components/MainCardComponents/Section";
import UserCards from "@/components/Home page components/MainCardComponents/UserCards";
import PlaylistCard from "@/components/Home page components/MainCardComponents/PlaylistCard";
import ArtistCard from "@/components/Home page components/MainCardComponents/ArtistCard";
import AlbumCard from "@/components/Home page components/MainCardComponents/AlbumCard";

export default function Home() {
  const gridLayout = "grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4"
  const flexLayout = "flex flex-row gap-4"
  return (
      <div>
        <ScrollArea className='h-[83vh] px-6'>
          <Section SectionTitle={"Good evening"} SectionContents={<UserCards/>} HeaderSize={'text-3xl'} layoutStyle={gridLayout} numCards={6} isHidden={'hidden'}/>
          <Section SectionTitle={"Made For You"} SectionContents={<PlaylistCard/>} HeaderSize={'text-xl'} layoutStyle={flexLayout} numCards={6}/>
          <Section SectionTitle={"Artist"} SectionContents={<ArtistCard/>} HeaderSize={'text-xl'} layoutStyle={flexLayout} numCards={6}/>
          <Section SectionTitle={"Album"} SectionContents={<AlbumCard/>} HeaderSize={'text-xl'} layoutStyle={flexLayout} numCards={6}/>
        </ScrollArea>
    </div>
     
  )
}