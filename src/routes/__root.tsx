import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="bg-blue-500 text-white py-4 px-6 font-bold text-xl">
        My Application
      </div>

      <nav className="bg-gray-100 shadow-md">
        <ul className="flex justify-center gap-6 p-4">
          <li>
            <Link
              to="/"
              className="text-gray-800 hover:text-blue-500 transition-colors duration-300 font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="text-gray-800 hover:text-blue-500 transition-colors duration-300 font-semibold"
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-8 p-6">
        <Outlet />
      </div>
    </>
  ),
});
