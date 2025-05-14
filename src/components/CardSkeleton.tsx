const CardSkeleton = () => {
  return (
    <div className="animate-pulse rounded-2xl border p-4 space-y-4 bg-muted max-w-96 sm:max-w-80">
      <div className="h-4 bg-muted-foreground/40 rounded w-1/2" />
      <div className="h-3 bg-muted-foreground/20 rounded w-3/4" />
      <div className="h-3 bg-muted-foreground/20 rounded w-1/3" />
      <div className="h-8 w-8 bg-muted-foreground/30 rounded-full mt-4" />
    </div>
  )
}

export default CardSkeleton