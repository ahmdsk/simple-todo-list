import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-3 items-center justify-between min-h-screen">
      <div className="flex flex-col flex-1 gap-y-3">
        <h1 className="text-4xl font-bold text-slate-900">
          Create a simple todos.
        </h1>
        <p className="text-md text-slate-800 text-justify">
          "Faire" is perfect for individuals seeking a minimalist and effective
          solution for managing their daily tasks, whether for personal
          projects, work-related activities, or any other goal-oriented
          endeavors. With its simplicity and functionality, this application
          empowers users to take control of their schedules and achieve a more
          organized and productive lifestyle.
        </p>

        <div className="flex items-center gap-x-2">
          <Button>Get Started</Button>
          <Button variant={"outline"}>
            How To <HelpCircle className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex flex-1 justify-center">
        <Image
          src="/images/TaskList.svg"
          alt="Task List Image"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
