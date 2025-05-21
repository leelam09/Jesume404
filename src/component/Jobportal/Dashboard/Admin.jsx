"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Bell,
  Settings,
  ChevronRight,
  Briefcase,
  Calendar,
  Users,
  User,
  HelpCircle,
  MoreVertical,
} from "lucide-react";

// This component needs to be client-side rendered due to the use of charts
export default function JobPortalDashboard() {
  const [periodVacancy, setPeriodVacancy] = useState("monthly");
  const [periodActivity, setPeriodActivity] = useState("monthly");

  // Using dynamic imports for Recharts to avoid SSR issues
  const [ChartsLoaded, setChartsLoaded] = useState(false);
  const [Charts, setCharts] = useState(null);

  // Load charts on client side only - FIXED: using useEffect instead of useState
  useEffect(() => {
    import("recharts").then((module) => {
      setCharts(module);
      setChartsLoaded(true);
    });
  }, []);

  // Sample data for charts
  const monthlyData = [
    { name: "Jan", published: 30, interview: 20, rejected: 10 },
    { name: "Feb", published: 40, interview: 25, rejected: 15 },
    { name: "Mar", published: 45, interview: 30, rejected: 12 },
    { name: "Apr", published: 35, interview: 28, rejected: 18 },
    { name: "May", published: 50, interview: 32, rejected: 14 },
    { name: "Jun", published: 55, interview: 35, rejected: 16 },
    { name: "Jul", published: 45, interview: 30, rejected: 20 },
    { name: "Aug", published: 60, interview: 40, rejected: 15 },
    { name: "Sep", published: 65, interview: 45, rejected: 12 },
    { name: "Oct", published: 70, interview: 50, rejected: 18 },
    { name: "Nov", published: 75, interview: 55, rejected: 16 },
    { name: "Dec", published: 80, interview: 60, rejected: 20 },
  ];

  const activityData = [
    { name: "1", interviews: 10 },
    { name: "2", interviews: 18 },
    { name: "3", interviews: 12 },
    { name: "4", interviews: 22 },
    { name: "5", interviews: 15 },
    { name: "6", interviews: 25 },
    { name: "7", interviews: 20 },
    { name: "8", interviews: 30 },
    { name: "9", interviews: 25 },
    { name: "10", interviews: 35 },
    { name: "11", interviews: 28 },
    { name: "12", interviews: 40 },
    { name: "13", interviews: 35 },
    { name: "14", interviews: 48 },
    { name: "15", interviews: 40 },
  ];

  const revenueData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 500 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 550 },
    { name: "May", value: 700 },
    { name: "Jun", value: 650 },
    { name: "Jul", value: 800 },
    { name: "Aug", value: 750 },
    { name: "Sep", value: 900 },
    { name: "Oct", value: 850 },
    { name: "Nov", value: 950 },
    { name: "Dec", value: 1000 },
  ];

  const salaryData = [
    { name: "Jan", value: 300 },
    { name: "Feb", value: 280 },
    { name: "Mar", value: 350 },
    { name: "Apr", value: 320 },
    { name: "May", value: 400 },
    { name: "Jun", value: 380 },
    { name: "Jul", value: 450 },
    { name: "Aug", value: 420 },
    { name: "Sep", value: 500 },
    { name: "Oct", value: 480 },
    { name: "Nov", value: 550 },
    { name: "Dec", value: 600 },
  ];

  const jobData = [
    {
      id: 1,
      title: "UI Designer",
      company: "Quantic Media",
      location: "Manchester, England",
      salary: "£2,000 - £2,500",
      color: "blue",
    },
    {
      id: 2,
      title: "Researcher",
      company: "Know Studios",
      location: "Manchester, England",
      salary: "£2,000 - £2,500",
      color: "pink",
    },
    {
      id: 3,
      title: "Frontend",
      company: "Green Corp",
      location: "Manchester, England",
      salary: "£2,000 - £2,500",
      color: "green",
    },
  ];

  const networkData = [
    { name: "Engineer", value: 56 },
    { name: "Designer", value: 31 },
    { name: "Manager", value: 76 },
    { name: "Programmer", value: 82 },
  ];

  // Create a simple placeholder for charts until they're loaded
  const SimplePlaceholder = () => (
    <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
      <p className="text-gray-500 text-sm">Loading chart...</p>
    </div>
  );

  // Render mini chart placeholders
  const MiniChartPlaceholder = () => (
    <div className="w-full h-12 bg-gray-50"></div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white">
        {/* Logo */}
        <div className="flex items-center p-4">
          <div className="h-8 w-8 rounded-md bg-red-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <span className="ml-2 font-bold text-lg">CAREERTRONIC</span>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <div className="px-4">
            <div className="mt-4 flex items-center justify-between text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-3 cursor-pointer">
              <div className="flex items-center">
                <Briefcase size={20} />
                <span className="ml-4">Jobs</span>
              </div>
              <ChevronRight size={16} />
            </div>

            <div className="mt-1 flex items-center justify-between text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-3 cursor-pointer">
              <div className="flex items-center">
                <Calendar size={20} />
                <span className="ml-4">Schedule</span>
              </div>
              <ChevronRight size={16} />
            </div>

            <div className="mt-1 flex items-center justify-between text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-3 cursor-pointer">
              <div className="flex items-center">
                <Users size={20} />
                <span className="ml-4">All Applicant</span>
              </div>
              <ChevronRight size={16} />
            </div>

            <div className="mt-1 flex items-center justify-between text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-3 cursor-pointer">
              <div className="flex items-center">
                <User size={20} />
                <span className="ml-4">Account</span>
              </div>
              <ChevronRight size={16} />
            </div>

            <div className="mt-1 flex items-center justify-between text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-3 cursor-pointer">
              <div className="flex items-center">
                <HelpCircle size={20} />
                <span className="ml-4">Help Desk</span>
              </div>
              <ChevronRight size={16} />
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white p-4 flex items-center justify-between border-b">
          <h1 className="text-lg font-bold">Dashboard</h1>

          {/* Search */}
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border rounded-md py-1 px-3 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search
                size={16}
                className="absolute left-2 top-2 text-gray-400"
              />
            </div>

            {/* Notification */}
            <div className="ml-4 p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <Bell size={20} />
            </div>

            {/* Settings */}
            <div className="ml-2 p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <Settings size={20} />
            </div>

            {/* User */}
            <div className="ml-4">
              <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
                <img
                  src="/api/placeholder/32/32"
                  alt="User"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Stats Cards */}
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="text-2xl font-bold">342</h3>
                  <p className="text-xs text-gray-500">OPEN JOB POSITIONS</p>
                </div>
                <div className="bg-green-100 text-green-500 text-xs font-semibold px-2 py-1 rounded">
                  LIVE
                </div>
              </div>
              {ChartsLoaded && Charts ? (
                <div className="h-12">
                  <Charts.ResponsiveContainer width="100%" height="100%">
                    <Charts.LineChart data={monthlyData.slice(-5)}>
                      <Charts.Line
                        type="monotone"
                        dataKey="published"
                        stroke="#FF6B6B"
                        strokeWidth={2}
                        dot={false}
                      />
                    </Charts.LineChart>
                  </Charts.ResponsiveContainer>
                </div>
              ) : (
                <MiniChartPlaceholder />
              )}
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-bold">984</h3>
                  <p className="text-xs text-gray-500">TOTAL APPLICATIONS</p>
                </div>
              </div>
              {ChartsLoaded && Charts ? (
                <div className="h-12">
                  <Charts.ResponsiveContainer width="100%" height="100%">
                    <Charts.LineChart data={monthlyData.slice(-5)}>
                      <Charts.Line
                        type="monotone"
                        dataKey="interview"
                        stroke="#4CAF50"
                        strokeWidth={2}
                        dot={false}
                      />
                    </Charts.LineChart>
                  </Charts.ResponsiveContainer>
                </div>
              ) : (
                <MiniChartPlaceholder />
              )}
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="text-2xl font-bold">1,567k</h3>
                  <p className="text-xs text-gray-500">TOTAL VIEWS</p>
                </div>
                <div className="bg-red-100 text-red-500 text-xs font-semibold px-2 py-1 rounded">
                  -28%
                </div>
              </div>
              {ChartsLoaded && Charts ? (
                <div className="h-12">
                  <Charts.ResponsiveContainer width="100%" height="100%">
                    <Charts.LineChart data={monthlyData.slice(-5)}>
                      <Charts.Line
                        type="monotone"
                        dataKey="rejected"
                        stroke="#3F51B5"
                        strokeWidth={2}
                        dot={false}
                      />
                    </Charts.LineChart>
                  </Charts.ResponsiveContainer>
                </div>
              ) : (
                <MiniChartPlaceholder />
              )}
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-bold">437</h3>
                  <p className="text-xs text-gray-500">TOTAL SHORTLISTED</p>
                </div>
              </div>
              {ChartsLoaded && Charts ? (
                <div className="h-12">
                  <Charts.ResponsiveContainer width="100%" height="100%">
                    <Charts.LineChart data={monthlyData.slice(-5)}>
                      <Charts.Line
                        type="monotone"
                        dataKey="interview"
                        stroke="#E040FB"
                        strokeWidth={2}
                        dot={false}
                      />
                    </Charts.LineChart>
                  </Charts.ResponsiveContainer>
                </div>
              ) : (
                <MiniChartPlaceholder />
              )}
            </div>
          </div>

          {/* Revenue and Salary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-indigo-900">$682.5</h3>
                  <p className="text-xs text-gray-500">On Track</p>
                </div>
                <div className="bg-green-100 text-green-500 text-xs font-semibold px-2 py-1 rounded">
                  +28%
                </div>
              </div>
              {ChartsLoaded && Charts ? (
                <div className="h-32">
                  <Charts.ResponsiveContainer width="100%" height="100%">
                    <Charts.BarChart data={revenueData.slice(-6)}>
                      <Charts.CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                      />
                      <Charts.XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                      />
                      <Charts.Bar
                        dataKey="value"
                        fill="#FF6B6B"
                        radius={[4, 4, 0, 0]}
                      />
                    </Charts.BarChart>
                  </Charts.ResponsiveContainer>
                </div>
              ) : (
                <SimplePlaceholder />
              )}
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-indigo-900">$324.5</h3>
                </div>
                <div className="bg-green-100 text-green-500 text-xs font-semibold px-2 py-1 rounded">
                  +28%
                </div>
              </div>
              {ChartsLoaded && Charts ? (
                <div className="h-32">
                  <Charts.ResponsiveContainer width="100%" height="100%">
                    <Charts.AreaChart data={salaryData.slice(-8)}>
                      <Charts.Area
                        type="monotone"
                        dataKey="value"
                        stroke="#4CAF50"
                        fill="#E8F5E9"
                      />
                    </Charts.AreaChart>
                  </Charts.ResponsiveContainer>
                </div>
              ) : (
                <SimplePlaceholder />
              )}
            </div>
          </div>

          {/* Main Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            {/* Vacancy Status */}
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Vacancy Status</h3>
                <div className="flex space-x-2 text-sm">
                  <button
                    className={`px-3 py-1 rounded ${
                      periodVacancy === "daily" ? "bg-gray-200" : "bg-white"
                    }`}
                    onClick={() => setPeriodVacancy("daily")}
                  >
                    Daily
                  </button>
                  <button
                    className={`px-3 py-1 rounded ${
                      periodVacancy === "weekly" ? "bg-gray-200" : "bg-white"
                    }`}
                    onClick={() => setPeriodVacancy("weekly")}
                  >
                    Weekly
                  </button>
                  <button
                    className={`px-3 py-1 rounded ${
                      periodVacancy === "monthly"
                        ? "bg-orange-500 text-white"
                        : "bg-white"
                    }`}
                    onClick={() => setPeriodVacancy("monthly")}
                  >
                    Monthly
                  </button>
                </div>
              </div>
              <div className="flex mb-4 text-sm">
                <div className="flex items-center mr-4">
                  <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                  <span>Published</span>
                </div>
                <div className="flex items-center mr-4">
                  <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                  <span>Interviews</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                  <span>Rejected</span>
                </div>
              </div>
              {ChartsLoaded && Charts ? (
                <div className="h-64">
                  <Charts.ResponsiveContainer width="100%" height="100%">
                    <Charts.AreaChart data={monthlyData}>
                      <Charts.CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                      />
                      <Charts.XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                      />
                      <Charts.YAxis axisLine={false} tickLine={false} />
                      <Charts.Tooltip />
                      <Charts.Area
                        type="monotone"
                        dataKey="published"
                        stroke="#4CAF50"
                        fill="#E8F5E9"
                      />
                      <Charts.Area
                        type="monotone"
                        dataKey="interview"
                        stroke="#3F51B5"
                        fill="#E8EAF6"
                      />
                      <Charts.Area
                        type="monotone"
                        dataKey="rejected"
                        stroke="#FF6B6B"
                        fill="#FFEBEE"
                      />
                    </Charts.AreaChart>
                  </Charts.ResponsiveContainer>
                </div>
              ) : (
                <SimplePlaceholder />
              )}
            </div>

            {/* Jobs and Network Section */}
            <div className="flex flex-col">
              {/* Jobs */}
              <div className="bg-white p-4 rounded-lg shadow mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold">Jobs</h3>
                  <div className="flex items-center">
                    <span className="text-orange-500 text-sm font-semibold mr-2">
                      Featured
                    </span>
                    <ChevronRight size={16} className="text-orange-500" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {jobData.map((job) => (
                    <div key={job.id} className="border rounded-lg p-4">
                      <div
                        className={`h-10 w-10 rounded-lg bg-${job.color}-100 flex items-center justify-center mb-4`}
                      >
                        <Briefcase
                          size={20}
                          className={`text-${job.color}-500`}
                        />
                      </div>
                      <h4 className="font-bold">{job.title}</h4>
                      <p className="text-sm text-gray-500">{job.company}</p>
                      <div className="flex items-center mt-4">
                        <div className="h-2 w-2 rounded-full bg-gray-400 mr-2"></div>
                        <span className="text-xs text-gray-500">
                          {job.location}
                        </span>
                      </div>
                      <div className="flex items-center mt-1">
                        <div className="h-2 w-2 rounded-full bg-gray-400 mr-2"></div>
                        <span className="text-xs text-gray-500">
                          {job.salary}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Network */}
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold">Network</h3>
                  <MoreVertical size={16} className="text-gray-500" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {networkData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="relative h-16 w-16 mb-2">
                        <div className="absolute inset-0">
                          <svg viewBox="0 0 36 36" className="h-full w-full">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#eee"
                              strokeWidth="3"
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#FF6B6B"
                              strokeWidth="3"
                              strokeDasharray={`${item.value}, 100`}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-bold">
                              {item.value}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Activity */}
          <div className="bg-white p-4 rounded-lg shadow mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Activity</h3>
              <div className="flex space-x-2 text-sm">
                <button
                  className={`px-3 py-1 rounded ${
                    periodActivity === "daily" ? "bg-gray-200" : "bg-white"
                  }`}
                  onClick={() => setPeriodActivity("daily")}
                >
                  Daily
                </button>
                <button
                  className={`px-3 py-1 rounded ${
                    periodActivity === "weekly" ? "bg-gray-200" : "bg-white"
                  }`}
                  onClick={() => setPeriodActivity("weekly")}
                >
                  Weekly
                </button>
                <button
                  className={`px-3 py-1 rounded ${
                    periodActivity === "monthly"
                      ? "bg-orange-500 text-white"
                      : "bg-white"
                  }`}
                  onClick={() => setPeriodActivity("monthly")}
                >
                  Monthly
                </button>
              </div>
            </div>
            <div className="flex mb-4 text-sm">
              <div className="flex items-center mr-4">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                <span>Interviews</span>
                <span className="ml-2 font-bold">223</span>
              </div>
              <div className="flex items-center mr-4">
                <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                <span>Reports</span>
                <span className="ml-2 font-bold">35,542</span>
              </div>
            </div>
            {ChartsLoaded && Charts ? (
              <div className="h-64">
                <Charts.ResponsiveContainer width="100%" height="100%">
                  <Charts.BarChart data={activityData}>
                    <Charts.CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                    />
                    <Charts.XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                    />
                    <Charts.YAxis axisLine={false} tickLine={false} />
                    <Charts.Tooltip />
                    <Charts.Bar
                      dataKey="interviews"
                      fill="#FF6B6B"
                      radius={[4, 4, 0, 0]}
                    />
                  </Charts.BarChart>
                </Charts.ResponsiveContainer>
              </div>
            ) : (
              <SimplePlaceholder />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
