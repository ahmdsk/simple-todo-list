import { Clock4, FileCheck, FileX, RefreshCw } from "lucide-react";
import CardStatistic from "./card-statistic";

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

export default function Statistics() {
  return (
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
  );
}
