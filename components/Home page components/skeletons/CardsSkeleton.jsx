import { Skeleton } from "@/components/ui/skeleton"

export default function CardsSkeleton() {
  return (
    <div>
        <div className="aspect-[5/7] min-w-[150px] w-48 p-4 flex flex-col gap-4 rounded-md 
        bg-sGray" >
            <Skeleton className="w-40 h-40 rounded-sm bg-sLightGray"/>
            <Skeleton className="w-[50%] h-4"/>
            <Skeleton className="w-full h-2"/>
            <Skeleton className="w-full h-2"/>
        </div>
    </div>
  )
}
