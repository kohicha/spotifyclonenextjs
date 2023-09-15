import PlaylistHeader from "@/components/Home page components/PlaylistComponents/PlaylistHeader";
import SongLists from "@/components/Home page components/PlaylistComponents/SongLists";

export default function Playlist() {
  return (
    <section className="">
      <PlaylistHeader playlistTitle={`I miss you`} userName={`kohi`} numSongs={111}/>
      <SongLists/>
    </section>
  )
}
