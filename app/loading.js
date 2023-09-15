import { ScrollArea } from "@/components/ui/scroll-area"
import Section from "@/components/Home page components/MainCardComponents/Section"
import { Skeleton } from "@/components/ui/skeleton"
import CardsSkeleton from "@/components/Home page components/skeletons/CardsSkeleton"
export default function Loading() {
    const gridLayout = "grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4"
  const flexLayout = "flex flex-row gap-4"
  return (
    <ScrollArea className='h-[83vh] px-6 flex flex-col'>
          <Section SectionTitle={<Skeleton className="w-40 bg-sGray"/>} SectionContents={<CardsSkeleton/>} HeaderSize={'text-xl'} layoutStyle={flexLayout} numCards={8}/>
          <Section SectionTitle={<Skeleton className="w-40 bg-sGray"/>} SectionContents={<CardsSkeleton/>} HeaderSize={'text-xl'} layoutStyle={flexLayout} numCards={8}/>
          <Section SectionTitle={<Skeleton className="w-40 bg-sGray"/>} SectionContents={<CardsSkeleton/>} HeaderSize={'text-xl'} layoutStyle={flexLayout} numCards={8}/>
        </ScrollArea>
  )
}
