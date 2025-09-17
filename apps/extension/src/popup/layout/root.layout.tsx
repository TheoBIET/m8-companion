import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import "../styles/index.css";

export const RootLayout = () => {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <main className="py-6 flex-1">
        <div className="w-full h-full bg-base-200 rounded-lg p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
