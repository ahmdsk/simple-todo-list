"use client";

import { Clock4, FileCheck, FileX, RefreshCw } from "lucide-react";
import Image from "next/image";
import CardStatistic from "../components/card-statistic";

type StatisticsCard = {
  title: string;
  value: number;
  icon?: React.ReactNode;
  bgColor?: string;
  bgIconColor?: string;
};

let dataStatistics: Array<StatisticsCard> = [
  {
    title: "On Going",
    value: 24,
    icon: <RefreshCw className="h-6 w-6" />,
    bgColor: "#5694f2",
    bgIconColor: "#4c84d9",
  },
  {
    title: "In Process",
    value: 12,
    icon: <Clock4 className="h-6 w-6" />,
    bgColor: "#fec347",
    bgIconColor: "#e4ae3f",
  },
  {
    title: "Completed",
    value: 42,
    icon: <FileCheck className="h-6 w-6" />,
    bgColor: "#53c2c5",
    bgIconColor: "#4aaeb0",
  },
  {
    title: "Canceled",
    value: 8,
    icon: <FileX className="h-6 w-6" />,
    bgColor: "#f26e56",
    bgIconColor: "#d9624c",
  },
];

type Task = {
  title: string;
  description: string;
  status: "on-going" | "in-process" | "completed" | "canceled";
}

let dataTasks: Array<Task> = [
  {
    title: "Task Costumization",
    description: "Create a simple todos.",
    status: "on-going"
  },
  {
    title: "Task Costumization",
    description: "Create a simple todos.",
    status: "in-process"
  },
  {
    title: "building a landing page",
    description: "build a landing page for a website",
    status: "completed"
  },
  {
    title: "Learn Python",
    description: "learn basic python programming",
    status: "canceled"
  }
];

export default function DetailTaskPage() {
  return (
    <div className="container pt-4">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-xl font-bold text-slate-900">Dashboard</h1>

        <div className="flex items-center gap-x-3">
          <Image
            width={50}
            height={50}
            alt="Profile Image"
            src={"/avatar/user-1.jpg"}
            className="rounded-full"
          />
          <div className="">
            <h1 className="text-lg font-bold text-slate-800">Hi, Bruce</h1>
            <h5 className="text-sm text-slate-500">
              Your daily adventure starts now
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {dataStatistics.map((data, index) => {
            return (
              <CardStatistic
                title={data.title}
                value={data.value}
                bgColor={data.bgColor}
                bgIconColor={data.bgIconColor}
                key={index}
              >
                {data.icon}
              </CardStatistic>
            );
          })}
        </div>

        <div className="">
          <h1 className="text-xl font-bold text-slate-800">Your Tasks</h1>
          <h5 className="text-sm text-slate-500">
            Here are your tasks for today
          </h5>

          <div className="mt-4 grid md:grid-cols-4 gap-x-3">
            <div className="flex flex-col gap-y-2">
              <div className="bg-[#5694f2] font-bold text-sm p-2 rounded-xl max-w-fit">
                On going
              </div>

              <div className="flex flex-col gap-y-4">
                <div className="relative flex justify-center">
                  <div className="border-2 border-black bg-[#f6f6f6] px-4 py-3 rounded-2xl w-full">
                    <h1 className="text-lg font-extrabold leading-5">
                      Task Costumization
                    </h1>
                    <span className="text-sm text-slate-700">3 Lists</span>
                  </div>
                  <div className="bg-black w-11/12 h-full absolute -z-10 top-2 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
