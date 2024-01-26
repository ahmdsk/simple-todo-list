import { CheckCircle2 } from "lucide-react";

type Props = {
    title: string;
    description: string;
    status: "on-going" | "in-process" | "completed" | "canceled";
    number: number;
}

export default function CardTasks(props: Props) {
  return (
    <div className="relative flex justify-center">
      <div className="border-2 border-black bg-[#f6f6f6] px-4 py-3 rounded-2xl w-full">
        <h1 className="text-lg font-extrabold">{props.title}</h1>
        <h6 className="text-sm text-gray-700">{props.description}</h6>
        <span className="text-xs text-slate-800 flex items-center gap-x-1 pt-2">
          <CheckCircle2 className="w-4 h-4" /> {props.number} Tasks
        </span>
      </div>
      <div className="bg-black w-11/12 h-full absolute -z-10 top-2 rounded-2xl"></div>
    </div>
  );
}
