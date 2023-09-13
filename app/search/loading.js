import CardsSkeleton from "@/components/Home page components/skeletons/CardsSkeleton";
import Section from "@/components/Home page components/MainCardComponents/Section";
export default function Loading() {
    let tags = Array.from({length: 4}, (i) => i + 1);
    const list = tags.map((tag)=>(
      <CardsSkeleton key={tag}/>
  ))
  return (
    <div  className="px-6 flex flex-row gap-4">
        {list}
    </div>
  )
}
