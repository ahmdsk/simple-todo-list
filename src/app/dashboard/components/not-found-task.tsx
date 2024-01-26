export default function NotFoundTask() {
  return (
    <div className="flex flex-col items-center justify-center h-32">
      <h1 className="text-2xl font-bold text-slate-800">No Tasks</h1>
      <h5 className="text-sm text-slate-500">
        You don't have any tasks for today
      </h5>
    </div>
  );
}
