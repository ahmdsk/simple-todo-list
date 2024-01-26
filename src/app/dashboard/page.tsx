import RecentTask from "./components/recent-task";
import Statistics from "./components/statistics";
import Header from "./components/header";

export default function Dashboard() {
  return (
    <div className="container pt-4">
      <div className="flex flex-col gap-y-4">
        <Header />
        <Statistics />
        <RecentTask />
      </div>
    </div>
  );
}
