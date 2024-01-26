import CardTasks from "./card-tasks";
import NotFoundTask from "./not-found-task";

type Task = {
  title: string;
  description: string;
  status: "on-going" | "in-process" | "completed" | "canceled";
  number: number;
};

let dataTasks: Array<Task> = [
  {
    title: "Task Costumization",
    description: "Create a simple todos.",
    status: "on-going",
    number: 12,
  },
  {
    title: "Task Costumization",
    description: "Create a simple todos.",
    status: "in-process",
    number: 10,
  },
  {
    title: "building a landing page",
    description: "build a landing page for a website",
    status: "completed",
    number: 8,
  },
  {
    title: "Learn Python",
    description: "learn basic python programming",
    status: "canceled",
    number: 4,
  },
];

export default function RecentTask() {
  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <h1 className="text-xl font-bold text-slate-800">Recent Task</h1>
        <h5 className="text-sm text-slate-500">
          Here are your tasks for today
        </h5>
      </div>

      {dataTasks.length > 0 ? (
        <div className="grid md:grid-cols-4 gap-y-4 md:gap-x-2">
          {dataTasks.map((data, index) => {
            return (
              <CardTasks
                key={index}
                title={data.title}
                description={data.description}
                number={data.number}
                status={data.status}
              />
            );
          })}
        </div>
      ) : (
        <NotFoundTask />
      )}
    </div>
  );
}
