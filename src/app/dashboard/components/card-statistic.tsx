type Props = {
  title: string;
  value: number;
  bgColor?: string;
  bgIconColor?: string;
  children?: React.ReactNode;
};

export default function CardStatistic(props: Props) {
  return (
    <div
      className="px-3 py-5 rounded-xl"
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      <div className="flex items-center gap-x-2">
        <div
          className="rounded-full p-2 text-white"
          style={{
            backgroundColor: props.bgIconColor,
          }}
        >
          {props.children}
        </div>
        <div className="flex flex-col">
          <span className="text-sm md:text-lg font-bold text-zinc-800">
            {props.title}
          </span>
          <span className="text-xs text-slate-700">{props.value} Tasks</span>
        </div>
      </div>
    </div>
  );
}
