import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import CustomImage from "../common/ImageComponent";

const navigation = [
  { name: "Dashboard", icon: HomeIcon, href: "#", current: true },
  { name: "Team", icon: UsersIcon, href: "#", current: false },
  { name: "Projects", icon: FolderIcon, href: "#", current: false },
  { name: "Calendar", icon: CalendarIcon, href: "#", current: false },
  { name: "Documents", icon: InboxIcon, href: "#", current: false },
  { name: "Reports", icon: ChartBarIcon, href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SideNav = () => {
  return (
    <div className="flex bg-[#081d54] h-screen flex-1 flex-col">
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <div className="flex flex-shrink-0 items-center px-4">
          <p className="text-2xl h-8 font-semibold w-full text-white">
            INTRA <span className="text-orange-600">NET</span>
          </p>
        </div>
        <nav className="mt-5 flex-1 space-y-1 px-2" aria-label="Sidebar">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-[#0b2b7d] text-gray-300"
                  : "text-gray-400 hover:bg-[#071b4f] hover:text-gray-200",
                "group flex items-center rounded-md px-2 py-2 font-medium"
              )}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-gray-500"
                    : "text-gray-400 group-hover:text-gray-500",
                  "mr-3 h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
              <span className="flex-1 text-sm">{item.name}</span>
              {item.count ? (
                <span
                  className={classNames(
                    item.current ? "" : "",
                    "ml-3 inline-block rounded-full py-0.5 px-3 text-xs font-medium"
                  )}
                >
                  {item.count}
                </span>
              ) : null}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex flex-shrink-0 p-4">
        <a href="#" className="group block w-full flex-shrink-0">
          <div className="flex items-center">
            <div>
              <CustomImage
                className="inline-block h-9 w-9 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-300 group-hover:text-gray-500">
                Tom Cook
              </p>
              <p className="text-xs font-medium text-gray-400 group-hover:text-gray-600">
                View profile
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SideNav;
