import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-center">Welcome to dashboard</h1>
      <h2>To visit our dashboard features</h2>
      <div className="flex items-center gap-5 mt-5">
        <Button className="rounded-lg font-extrabold hover:text-white px-8">
          <Link to="/dashboard/events-item">Event Items</Link>
        </Button>
        <p>and</p>
        <Button className="rounded-lg font-extrabold hover:text-white px-8">
          <Link to="/dashboard/recent-events">Recent Event</Link>
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
