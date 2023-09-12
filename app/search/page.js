import { ScrollArea } from "@/components/ui/scroll-area";
import Section from "@/components/Home page components/MainCardComponents/Section";
import PlaylistCard from "@/components/Home page components/MainCardComponents/PlaylistCard";
import ArtistCard from "@/components/Home page components/MainCardComponents/ArtistCard";
import AlbumCard from "@/components/Home page components/MainCardComponents/AlbumCard";


export default function SearchPage() {
  const gridLayout = "grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4"
  const flexLayout = "flex flex-row gap-4"
  return (
    <div>
      <ScrollArea className="h-[83vh] px-6">
        <Section SectionTitle={"Recent Searches"} SectionContents={[<PlaylistCard key={"playlist"}/>, <ArtistCard key={"artist"}/>, <AlbumCard key={"album"}/>]} HeaderSize={'text-2xl'} layoutStyle={flexLayout} numCards={1}/>
      </ScrollArea>
    </div>
  )
}
