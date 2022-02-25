import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
// import Home from "./Home";
// import Admin from "./Admin";
import logo from "./chitkara-university-logo.png";

const heading = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Support",
    href: "#support",
  },
  {
    name: "Sustainability",
    href: "#sustainability",
  },
  {
    name: "Newsletters & Reports",
    href: "#newsletters",
  },
  {
    name: "Gallery",
    href: "#gallery",
  },
  {
    name: "Policies & Procedures",
    href: "#policies",
  },
];

const home = [
  {
    name: "About us",
    description: "",
    href: "#about",
    link: "/about",
    icon: SupportIcon,
  },

  {
    name: "The Team",
    description: "",
    href: "#team",
    link: "/team",
    icon: ShieldCheckIcon,
  },
];

const aboutus = [
  {
    name: "Overview",
    description: "",
    href: "#overview",
    icon: SupportIcon,
  },

  {
    name: "Training for Staff",
    description: "",
    href: "#trainingStaff",
    icon: ShieldCheckIcon,
  },
  {
    name: "Team Roles",
    description: "",
    href: "#teamRoles",
    icon: ShieldCheckIcon,
  },
];
const support = [
  {
    name: "Space Allotment",
    description: "",
    link: "/support",
    href: "#support",
    icon: HomeIcon,
  },
  {
    name: "Maintenance",
    description: "",
    link: "/support",
    href: "#maintenance",
    icon: ChartBarIcon,
  },
  {
    name: "Housekeeping",
    description: "",
    link: "/support",
    href: "#housekeeping",
    icon: CursorClickIcon,
  },
  {
    name: "Sanitization",
    description: "",
    link: "/support",
    href: "#santization",
    icon: ShieldCheckIcon,
  },
  {
    name: "Pantries",
    description: "",
    link: "/support",
    href: "#pantries",
    icon: ShieldCheckIcon,
  },
  {
    name: "Common Venues",
    description: "",
    link: "/support",
    href: "#venues",
    icon: ShieldCheckIcon,
  },
  {
    name: "Inventory",
    description: "",
    link: "/support",
    href: "#inventory",
    icon: ShieldCheckIcon,
  },
  {
    name: "Demand for furniture",
    description: "",
    link: "/support",
    href: "#demandff",
    icon: ShieldCheckIcon,
  },
  {
    name: "Facilities",
    description: "",
    link: "/support",
    href: "#facilities",
    icon: ShieldCheckIcon,
  },
];

const sustainability = [
  {
    name: "Cleanliness",
    description: "",
    link: "/sustainability",
    href: "#susclean",
    icon: SupportIcon,
  },

  {
    name: "Waste Managment",
    description: "",
    link: "/sustainability",
    href: "#suswaste",
    icon: ShieldCheckIcon,
  },
  {
    name: "Water management",
    description: "",
    link: "/sustainability",
    href: "#suswater",
    icon: ShieldCheckIcon,
  },
];

const newsletters = [
  {
    name: "Newsletters",
    description: "",
    link: "/newsletters",
    href: "#newsletters",
    icon: SupportIcon,
  },

  {
    name: "Sustainability Report",
    description: "",
    link: "/newsletters",
    href: "#susreport",
    icon: ShieldCheckIcon,
  },
  {
    name: "Celebrations & Arrangements",
    description: "",
    link: "/newsletters",
    href: "#celebrations",
    icon: ShieldCheckIcon,
  },
];

const gallery = [
  {
    name: "The Academic Buildings",
    description: "",
    link: "/gallery",
    href: "#academicbuildings",
    icon: SupportIcon,
  },

  {
    name: "The Administrative Buildings",
    description: "",
    link: "/gallery",
    href: "#adminbuildings",
    icon: ShieldCheckIcon,
  },
  {
    name: "The Achievements",
    description: "",
    link: "/gallery",
    href: "#achievements",
    icon: ShieldCheckIcon,
  },
  {
    name: "STPS",
    description: "",
    link: "/gallery",
    href: "#stp",
    icon: ShieldCheckIcon,
  },
];
const resources = [
  {
    name: "STPS",
    description: "",
    href: "#stp",
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <>
      <Popover className=" sticky top-0 z-50 relative bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center border-b border-darkgray-100 py-4 md:justify-start md:space-x-10">
                {/* Brand image/logo */}
                <div className="flex justify-start lg:w-5 lg:flex-1">
                  <a href="#home">
                    <img
                      className="h-8 w-auto sm:h-10"
                      src={logo}
                      alt=" logo"
                    />
                  </a>
                </div>

                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>

                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          )}
                        >
                          <span>Home</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {home.map((item) => (
                                  <Link to={item.link}>
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    >
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-red-600"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          )}
                        >
                          <span>Support</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {support.map((item) => (
                                  <Link to={item.link}>
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    >
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-red-600"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          )}
                        >
                          <span>Sustainability</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {sustainability.map((item) => (
                                  <Link to={item.link}>
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    >
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-red-600"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          )}
                        >
                          <span>Newsletters & Reports</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {newsletters.map((item) => (
                                  <Link to={item.link}>
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    >
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-red-600"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          )}
                        >
                          <span>Gallery</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {gallery.map((item) => (
                                  <Link to={item.link}>
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    >
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-red-600"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Link to="/policies">
                    <a
                      href="#policies"
                      className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      Policies & Procedures
                    </a>
                  </Link>
                </Popover.Group>

                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  {/* <a
                    href="/dashboard"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-600"
                  >
                    Admin
                  </a> */}
                  <Link to="/dashboard"> Admin</Link>
                </div>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img className="h-8 w-auto" src={logo} alt="Workflow" />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {heading.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          >
                            {/* <item.icon
                            className="flex-shrink-0 h-6 w-6 text-red-600"
                            aria-hidden="true"
                          /> */}
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div>
                      <a
                        href="#notifs"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                      >
                        Notifications
                      </a>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}
