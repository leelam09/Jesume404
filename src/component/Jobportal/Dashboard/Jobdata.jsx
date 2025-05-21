// src/components/JobPortal/Dashboard/Jobdata.jsx
"use client";
import { useState, useRef, useEffect } from "react";
import {
  Eye,
  Edit2,
  Trash2,
  ChevronDown,
  Menu,
  User,
  FileText,
  Clipboard,
  Bell,
  DollarSign,
  BarChart2,
  Settings,
  MessageCircle,
  LogOut,
  Grid,
  MessageSquare,
  CreditCard,
} from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import SidebarItem from "./Sidebardash"; // Adjust the import path as necessary
import Sidebar from "./Sidebardash";

// Mock data for applications
const initialApplicationData = [
  {
    id: 1,
    position: "Network Engineer",
    type: "Full-Time",
    postedDate: "12-01-2024",
    lastDateToApply: "24-01-2024",
    closeDate: "25-01-2024",
    status: "Active",
  },
  {
    id: 2,
    position: "Network Engineer",
    type: "Full-Time",
    postedDate: "12-01-2024",
    lastDateToApply: "24-01-2024",
    closeDate: "25-01-2024",
    status: "Active",
  },
  {
    id: 3,
    position: "Network Engineer",
    type: "Full-Time",
    postedDate: "12-01-2024",
    lastDateToApply: "24-01-2024",
    closeDate: "25-01-2024",
    status: "Active",
  },
  {
    id: 4,
    position: "Network Engineer",
    type: "Full-Time",
    postedDate: "12-01-2024",
    lastDateToApply: "24-01-2024",
    closeDate: "25-01-2024",
    status: "Active",
  },
  {
    id: 5,
    position: "Network Engineer",
    type: "Full-Time",
    postedDate: "12-01-2024",
    lastDateToApply: "24-01-2024",
    closeDate: "25-01-2024",
    status: "Active",
  },
  {
    id: 6,
    position: "Network Engineer",
    type: "Full-Time",
    postedDate: "12-01-2024",
    lastDateToApply: "24-01-2024",
    closeDate: "25-01-2024",
    status: "Active",
  },
  {
    id: 7,
    position: "Network Engineer",
    type: "Full-Time",
    postedDate: "12-01-2024",
    lastDateToApply: "24-01-2024",
    closeDate: "25-01-2024",
    status: "Active",
  },
  {
    id: 8,
    position: "Network Engineer",
    type: "Full-Time",
    postedDate: "12-01-2024",
    lastDateToApply: "24-01-2024",
    closeDate: "25-01-2024",
    status: "Active",
  },
  {
    id: 9,
    position: "Network Engineer",
    type: "Full-Time",
    postedDate: "12-01-2024",
    lastDateToApply: "24-01-2024",
    closeDate: "25-01-2024",
    status: "Active",
  },
  {
    id: 10,
    position: "Network Engineer",
    type: "Full-Time",
    postedDate: "12-01-2024",
    lastDateToApply: "24-01-2024",
    closeDate: "25-01-2024",
    status: "Active",
  },
  {
    id: 11,
    position: "Network Engineer",
    type: "Full-Time",
    postedDate: "12-01-2024",
    lastDateToApply: "24-01-2024",
    closeDate: "25-01-2024",
    status: "Active",
  },
  {
    id: 12,
    position: "Network Engineer",
    type: "Full-Time",
    postedDate: "12-01-2024",
    lastDateToApply: "24-01-2024",
    closeDate: "25-01-2024",
    status: "Active",
  },
];

export default function ApplicationDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [applicationData, setApplicationData] = useState(
    initialApplicationData
  );
  const [allFiltersOpen, setAllFiltersOpen] = useState(false);
  const [candidatesFilterOpen, setCandidatesFilterOpen] = useState(false);
  const [profilesFilterOpen, setProfilesFilterOpen] = useState(false);

  // References for dropdown menus
  const allFiltersRef = useRef(null);
  const candidatesFilterRef = useRef(null);
  const profilesFilterRef = useRef(null);

  // Handle clicks outside dropdowns to close them
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        allFiltersRef.current &&
        !allFiltersRef.current.contains(event.target)
      ) {
        setAllFiltersOpen(false);
      }
      if (
        candidatesFilterRef.current &&
        !candidatesFilterRef.current.contains(event.target)
      ) {
        setCandidatesFilterOpen(false);
      }
      if (
        profilesFilterRef.current &&
        !profilesFilterRef.current.contains(event.target)
      ) {
        setProfilesFilterOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Delete application handler
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this application?")) {
      setApplicationData(applicationData.filter((app) => app.id !== id));
    }
  };

  return (
    <>
      <Head>
        <title>Applications | Careertronic</title>
        <meta
          name="description"
          content="View and manage your job applications"
        />
      </Head>

      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside
          className={`bg-white w-64 min-h-screen shadow-md fixed transition-all duration-300 ease-in-out z-20 ${
            isMenuOpen ? "left-0" : "-left-64"
          } lg:left-0`}
        >
          <div className="p-4 bg-gray-800">
            <div className="flex items-center">
              <img src="/logo.png" alt="Careertronic" className="h-8" />
              <span className="ml-2 text-lg font-bold text-white">
                CAREERTRONIC
              </span>
            </div>
          </div>

          <div className="p-4 border-b flex items-center">
            <Menu size={20} className="text-gray-700 mr-2" />
            <span className="font-medium">Dashboard</span>
          </div>

          <nav className="mt-2">
            <ul>
              <SidebarItem
                icon={<Grid />}
                label="Dashboard"
                active={false}
                path="/"
              />
              <SidebarItem
                icon={<User />}
                label="Profile"
                active={false}
                path="/profile"
              />
              <SidebarItem
                icon={<FileText />}
                label="Job Listings"
                active={false}
                path="/job-listings"
              />
              <SidebarItem
                icon={<Clipboard />}
                label="Applications"
                active={true}
                path="/applications"
                textColor="text-red-500"
              />
              <SidebarItem
                icon={<Bell />}
                label="Job Post"
                active={false}
                path="/job-post"
              />
              <SidebarItem
                icon={<CreditCard />}
                label="Payment & Subscription plans"
                active={false}
                path="/payment"
              />
              <SidebarItem
                icon={<BarChart2 />}
                label="Report & analysis"
                active={false}
                path="/reports"
              />
              <SidebarItem
                icon={<Settings />}
                label="Setting"
                active={false}
                path="/settings"
              />
              <SidebarItem
                icon={<MessageSquare />}
                label="Support & Feedback"
                active={false}
                path="/support"
              />
            </ul>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <button className="flex items-center w-full px-4 py-2 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-lg transition-all">
              <LogOut size={20} className="mr-3" />
              <span>Log out</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          {/* Navbar */}
          <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="flex justify-between items-center px-4 py-3">
              <button
                className="text-gray-500 lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu size={24} />
              </button>

              <div className="flex items-center ml-auto">
                <button className="p-1 text-gray-400 hover:text-gray-500 mr-2">
                  <Bell size={20} />
                </button>
                <div className="relative">
                  <div className="flex items-center cursor-pointer">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img
                          src="/avatar.png"
                          alt="User"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="ml-2 text-sm font-medium text-gray-700 hidden sm:block">
                        Username
                      </span>
                      <ChevronDown size={16} className="ml-1 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Page Heading */}
          <div className="bg-gray-800 text-white p-4">
            <h1 className="text-xl font-medium">Applications</h1>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="bg-white rounded-md shadow-sm">
              {/* Filter Options */}
              <div className="p-4 border-b flex flex-wrap gap-2">
                <div className="dropdown relative" ref={allFiltersRef}>
                  <button
                    className="bg-white border rounded-md px-4 py-2 text-sm flex items-center hover:bg-gray-50 transition-all"
                    onClick={() => setAllFiltersOpen(!allFiltersOpen)}
                  >
                    All filters
                    <ChevronDown size={16} className="ml-2" />
                  </button>
                  {allFiltersOpen && (
                    <div className="absolute mt-1 w-48 bg-white rounded-md shadow-lg z-10 border">
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          All Applications
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Active Jobs
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Closed Jobs
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Recent Applications
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <div className="dropdown relative" ref={candidatesFilterRef}>
                  <button
                    className="bg-white border rounded-md px-4 py-2 text-sm flex items-center hover:bg-gray-50 transition-all"
                    onClick={() =>
                      setCandidatesFilterOpen(!candidatesFilterOpen)
                    }
                  >
                    View all Candidates
                    <ChevronDown size={16} className="ml-2" />
                  </button>
                  {candidatesFilterOpen && (
                    <div className="absolute mt-1 w-48 bg-white rounded-md shadow-lg z-10 border">
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          All Candidates
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Shortlisted
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Interview Scheduled
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Selected
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Rejected
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <div className="dropdown relative" ref={profilesFilterRef}>
                  <button
                    className="bg-white border rounded-md px-4 py-2 text-sm flex items-center hover:bg-gray-50 transition-all"
                    onClick={() => setProfilesFilterOpen(!profilesFilterOpen)}
                  >
                    Approve/Reject Profiles
                    <ChevronDown size={16} className="ml-2" />
                  </button>
                  {profilesFilterOpen && (
                    <div className="absolute mt-1 w-48 bg-white rounded-md shadow-lg z-10 border">
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Pending Approval
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Approved Profiles
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Rejected Profiles
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Shortlist Candidates
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r"
                      >
                        NO
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r"
                      >
                        Position{" "}
                        <ChevronDown size={14} className="inline-block ml-1" />
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r"
                      >
                        Type{" "}
                        <ChevronDown size={14} className="inline-block ml-1" />
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r"
                      >
                        Posted Date{" "}
                        <ChevronDown size={14} className="inline-block ml-1" />
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r"
                      >
                        Last Date To Apply{" "}
                        <ChevronDown size={14} className="inline-block ml-1" />
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r"
                      >
                        Close Date{" "}
                        <ChevronDown size={14} className="inline-block ml-1" />
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r"
                      >
                        Status{" "}
                        <ChevronDown size={14} className="inline-block ml-1" />
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions{" "}
                        <ChevronDown size={14} className="inline-block ml-1" />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {applicationData.map((app) => (
                      <tr
                        key={app.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r">
                          {app.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                          {app.position}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r">
                          {app.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r">
                          {app.postedDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r">
                          {app.lastDateToApply}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r">
                          {app.closeDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap border-r">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            {app.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <button
                              className="text-green-500 hover:text-green-700 transition-colors"
                              title="View"
                            >
                              <Eye size={18} />
                            </button>
                            <button
                              className="text-blue-500 hover:text-blue-700 transition-colors"
                              title="Edit"
                            >
                              <Edit2 size={18} />
                            </button>
                            <button
                              className="text-red-500 hover:text-red-700 transition-colors"
                              title="Delete"
                              onClick={() => handleDelete(app.id)}
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

