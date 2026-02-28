const PageSkeleton = () => (
  <div className="min-h-screen bg-background">
    <div className="h-16 border-b border-border" />
    <div className="pt-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="h-10 w-64 bg-muted rounded-sm animate-pulse mb-4" />
        <div className="h-4 w-96 max-w-full bg-muted rounded-sm animate-pulse mb-2" />
        <div className="h-4 w-72 max-w-full bg-muted rounded-sm animate-pulse mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-56 bg-muted rounded-lg animate-pulse" />
          <div className="h-56 bg-muted rounded-lg animate-pulse" />
        </div>
        <div className="mt-8 space-y-4">
          <div className="h-4 w-full bg-muted rounded-sm animate-pulse" />
          <div className="h-4 w-5/6 bg-muted rounded-sm animate-pulse" />
          <div className="h-4 w-4/6 bg-muted rounded-sm animate-pulse" />
        </div>
      </div>
    </div>
  </div>
);

export default PageSkeleton;
