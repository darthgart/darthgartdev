const CardSkeleton = () => {
  return (
    <div
      className="animate-pulse border-2 shadow-md rounded-2xl h-44 max-w-96 mx-5 sm:mx-0 p-4 space-y-4 bg-muted"
    >
      <div className="h-4 bg-muted-foreground/40 rounded w-1/2" />
      <div className="h-3 bg-muted-foreground/20 rounded w-3/4" />
      <div className="h-3 bg-muted-foreground/20 rounded w-1/3" />
      <div className="flex justify-between pt-2">
        <div className="h-3 w-16 bg-muted-foreground/30 rounded" />
        <div className="h-3 w-12 bg-muted-foreground/30 rounded" />
      </div>
    </div>
  )
}

export default CardSkeleton