import clsx from "clsx";
import { links } from "../../constants";
import { useNavigate, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="p-4 flex flex-col gap-4 justify-between">
      <h1 className="text-2xl font-bold">M8</h1>
      <ul className="flex flex-col items-center gap-4">
        {links.map((link) => (
          <li key={link.path} onClick={() => navigate(link.path)}>
            <link.icon
              className={clsx(
                "text-3xl text-gray-500 cursor-pointer transition-colors duration-300",
                {
                  "text-primary": location.pathname === link.path,
                  "hover:text-gray-300": location.pathname !== link.path,
                }
              )}
            />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">v0.0.1</p>
      </div>
    </nav>
  );
};
