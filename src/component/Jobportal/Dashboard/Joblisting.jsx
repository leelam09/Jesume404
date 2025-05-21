import React from "react";
import {
  MoreVertical,
  LayoutDashboard,
  User,
  FileText,
  Send,
  CreditCard,
  BarChart2,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

const jobData = Array(5).fill({
  title: "Network Engineer",
  status: "Active",
  postedDate: "28 Mar 2025",
  location: "home",
  matches: 6891,
  pending: 76,
});

export default function JobListings() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        {/* Logo area */}
        <div className="p-4 border-b">
          <div className="flex items-center">
            <div className="bg-red-600 text-white p-1 rounded mr-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-800">CAREERTRONIC</h2>
          </div>
        </div>

        {/* Navigation items */}
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            {/* Dashboard item with hamburger menu */}
            <div className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded">
              <svg
                className="w-6 h-6 mr-3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span>Dashboard</span>
            </div>

            {/* Regular Dashboard */}
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded"
            >
              <LayoutDashboard className="w-5 h-5 mr-3" />
              <span>Dashboard</span>
            </a>

            {/* Profile */}
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded"
            >
              <User className="w-5 h-5 mr-3" />
              <span>Profile</span>
            </a>

            {/* Job Listings - Active */}
            <a
              href="#"
              className="flex items-center p-2 text-red-600 bg-red-50 rounded font-medium"
            >
              <FileText className="w-5 h-5 mr-3" />
              <span>Job Listings</span>
            </a>

            {/* Applications */}
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded"
            >
              <Send className="w-5 h-5 mr-3" />
              <span>Applications</span>
            </a>

            {/* Job Post */}
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded"
            >
              <svg
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 8V16M8 12H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span>Job Post</span>
            </a>

            {/* Payment & Subscription plans */}
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded"
            >
              <CreditCard className="w-5 h-5 mr-3" />
              <span className="text-sm">Payment & Subscription plans</span>
            </a>

            {/* Report & analysis */}
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded"
            >
              <BarChart2 className="w-5 h-5 mr-3" />
              <span>Report & analysis</span>
            </a>

            {/* Setting */}
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded"
            >
              <Settings className="w-5 h-5 mr-3" />
              <span>Setting</span>
            </a>

            {/* Support & Feedback */}
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded"
            >
              <HelpCircle className="w-5 h-5 mr-3" />
              <span>Support & Feedback</span>
            </a>
          </div>
        </nav>

        {/* Log out button */}
        <div className="p-4">
          <a
            href="#"
            className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded"
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span>Log out</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header with job listings and post button */}
        <div className="bg-gray-800 text-white p-4 rounded-t">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-medium">Job Listings</h1>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center transition">
              Post a Job <span className="ml-1">+</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 shadow-sm">
          <div className="flex flex-wrap gap-3 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-4 pr-10 py-2 border rounded w-64"
              />
              <span className="absolute right-3 top-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <select className="px-4 py-2 border rounded">
              <option>All filters</option>
            </select>
            <select className="px-4 py-2 border rounded">
              <option>Active</option>
            </select>
            <select className="px-4 py-2 border rounded">
              <option>Job type</option>
            </select>
            <select className="px-4 py-2 border rounded">
              <option>Under Review</option>
            </select>
            <select className="px-4 py-2 border rounded">
              <option>Expired</option>
            </select>
            <select className="px-4 py-2 border rounded">
              <option>Select plan</option>
            </select>
          </div>
        </div>

        {/* Job Cards */}
        <div className="space-y-4 mt-4">
          {jobData.map((job, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow-sm hover:shadow transition-all"
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center">
                    <h2 className="text-lg font-semibold">{job.title}</h2>
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
                      Active
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    deepakdongare | Posted on {job.postedDate} | {job.location}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="font-medium">{job.pending}</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                    {job.pending} pending
                  </span>
                  <div className="text-blue-600">{job.matches} &gt;</div>
                  <div className="text-gray-500">Database Matches</div>
                  <MoreVertical className="cursor-pointer hover:text-red-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
