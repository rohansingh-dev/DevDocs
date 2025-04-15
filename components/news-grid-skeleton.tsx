import { Skeleton } from "@/components/ui/skeleton"

export function NewsGridSkeleton() {
  // Create an array of 12 items to represent loading cards
  const skeletonCards = Array.from({ length: 12 }, (_, i) => i)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {skeletonCards.map((index) => (
        <div key={index} className="flex flex-col space-y-3 rounded-lg border p-4">
          <Skeleton className="h-48 w-full rounded-md" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <div className="flex justify-between items-center mt-2">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-9 w-24" />
          </div>
        </div>
      ))}
    </div>
  )
}
