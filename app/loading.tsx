export default function Loading() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      {/* Page header skeleton */}
      <div className="h-[220px] bg-slate-200" />
      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-6">
        <div className="h-6 bg-slate-100 rounded w-1/3" />
        <div className="h-4 bg-slate-100 rounded w-2/3" />
        <div className="h-4 bg-slate-100 rounded w-1/2" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-40 bg-slate-100 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
