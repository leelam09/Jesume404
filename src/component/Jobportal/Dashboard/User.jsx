// pages/dashboard.js
"use client";
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { 
  BarChart, 
  LineChart, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  Bar, 
  Line,
  ResponsiveContainer 
} from 'recharts';
import { 
  Home, 
  Briefcase, 
  Calendar, 
  Users, 
  User, 
  HelpCircle, 
  Search, 
  Bell, 
  Settings,
  ChevronRight
} from 'lucide-react';

// Mock data for charts and statistics
const vacancyData = [
  { month: 'Jan', approved: 40, interview: 25, rejected: 10 },
  { month: 'Feb', approved: 35, interview: 22, rejected: 12 },
  { month: 'Mar', approved: 50, interview: 30, rejected: 15 },
  { month: 'Apr', approved: 40, interview: 25, rejected: 18 },
  { month: 'May', approved: 60, interview: 35, rejected: 20 },
  { month: 'Jun', approved: 45, interview: 28, rejected: 15 },
  { month: 'Jul', approved: 65, interview: 40, rejected: 18 },
  { month: 'Aug', approved: 55, interview: 38, rejected: 20 },
  { month: 'Sep', approved: 70, interview: 45, rejected: 22 },
  { month: 'Oct', approved: 60, interview: 40, rejected: 18 },
  { month: 'Nov', approved: 65, interview: 42, rejected: 20 },
  { month: 'Dec', approved: 75, interview: 50, rejected: 25 },
];

const activityData = [
  { month: 'Jan', referrals: 20 },
  { month: 'Feb', referrals: 25 },
  { month: 'Mar', referrals: 15 },
  { month: 'Apr', referrals: 30 },
  { month: 'May', referrals: 22 },
  { month: 'Jun', referrals: 28 },
  { month: 'Jul', referrals: 18 },
  { month: 'Aug', referrals: 35 },
  { month: 'Sep', referrals: 25 },
  { month: 'Oct', referrals: 30 },
  { month: 'Nov', referrals: 20 },
  { month: 'Dec', referrals: 32 },
];

const earningsData = Array(30).fill().map((_, i) => ({
  day: i + 1,
  amount: Math.floor(Math.random() * 40) + 10
}));

const networkData = [
  { role: 'Engineer', percentage: 65 },
  { role: 'Designer', percentage: 40 },
  { role: 'Manager', percentage: 75 },
  { role: 'Programmer', percentage: 90 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('daily');
  const [activityTab, setActivityTab] = useState('daily');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-16 md:w-64 bg-black text-white flex flex-col">
        <div className="p-4 flex items-center justify-center md:justify-start">
          <div className="bg-red-600 rounded-md p-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
          </div>
          <span className="hidden md:block ml-2 font-bold text-lg">CAREERTRONIC</span>
        </div>
        
        <div className="flex flex-col flex-grow">
          <SidebarItem icon={<Home size={20} />} text="Dashboard" active />
          <SidebarItem icon={<Briefcase size={20} />} text="Jobs" />
          <SidebarItem icon={<Calendar size={20} />} text="Schedule" />
          <SidebarItem icon={<Users size={20} />} text="All Applicant" />
          <SidebarItem icon={<User size={20} />} text="Account" />
          <SidebarItem icon={<HelpCircle size={20} />} text="Help Desk" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <div className="bg-white p-4 flex items-center justify-between border-b">
          <div className="flex items-center">
            <button className="mr-4 md:hidden">
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          
          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <Search size={18} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <button className="relative p-2 mr-2">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <button className="p-2 mr-2">
              <Settings size={20} />
            </button>
            
            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
              <img src="/api/placeholder/40/40" alt="User profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Stats Cards */}
            <StatCard 
              value="342" 
              label="Total Applications"
              change="+25%"
              positive={true}
              chart={<MiniLineChart color="#FF5555" data={[30, 40, 25, 50, 45, 60, 70]} />}
            />
            <StatCard 
              value="984" 
              label="Total Interviews"
              change="+15%"
              positive={true}
              chart={<MiniLineChart color="#4CAF50" data={[20, 30, 25, 40, 45, 60, 55]} />}
            />
            <StatCard 
              value="1,567k" 
              label="Total Views"
              change="-10%"
              positive={false}
              chart={<MiniLineChart color="#2196F3" data={[40, 50, 35, 60, 55, 70, 65]} />}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <StatCard 
              value="437" 
              label="Total Saved"
              chart={<MiniLineChart color="#9C27B0" data={[15, 25, 20, 35, 30, 45, 40]} />}
            />
            <MoneyCard 
              value="$682.5" 
              label="On track"
              positive={true}
              chart={<BarMiniChart data={earningsData.slice(0, 15)} />}
            />
            <MoneyCard 
              value="$324.5" 
              change="+3.6%" 
              positive={true}
              chart={<LineMiniChart data={earningsData} />}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Vacancy Status Chart - 3 columns */}
            <div className="bg-white p-4 rounded-lg shadow lg:col-span-3">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Vacancy Status</h2>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                    <span className="text-xs text-gray-600">Approved</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                    <span className="text-xs text-gray-600">Interview</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                    <span className="text-xs text-gray-600">Rejected</span>
                  </div>
                </div>
                <div className="flex">
                  <TabButton 
                    active={activeTab === 'daily'} 
                    onClick={() => setActiveTab('daily')}
                    label="Daily"
                  />
                  <TabButton 
                    active={activeTab === 'weekly'} 
                    onClick={() => setActiveTab('weekly')}
                    label="Weekly"
                  />
                  <TabButton 
                    active={activeTab === 'monthly'} 
                    onClick={() => setActiveTab('monthly')}
                    label="Monthly"
                  />
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={vacancyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="approved" 
                      stroke="#4CAF50" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={3}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="interview" 
                      stroke="#2196F3" 
                      strokeWidth={3} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="rejected" 
                      stroke="#F44336" 
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Jobs Section - 2 columns */}
            <div className="bg-white p-4 rounded-lg shadow lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Jobs</h2>
                <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium flex items-center">
                  Newest <ChevronRight size={16} />
                </div>
              </div>
              <div className="space-y-3">
                <JobCard 
                  title="UI Designer"
                  location="Manchester, England"
                  salary="£25,000"
                  range="£30,000"
                  color="bg-blue-500"
                  icon="💻"
                />
                <JobCard 
                  title="Researcher"
                  location="Manchester, England"
                  salary="£18,000"
                  range="£25,000"
                  color="bg-pink-500"
                  icon="🔍"
                />
                <JobCard 
                  title="Frontend"
                  location="Manchester, England"
                  salary="£20,000"
                  range="£35,000"
                  color="bg-green-500"
                  icon="⚙️"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4">
            {/* Activity Chart - 3 columns */}
            <div className="bg-white p-4 rounded-lg shadow lg:col-span-3">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Activity</h2>
                <div className="flex items-center">
                  <div className="mr-4 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                    <span className="text-xs text-gray-600">Referrals: 219</span>
                    <span className="text-xs text-green-500 ml-1">(+5%)</span>
                  </div>
                  <div className="mr-4 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                    <span className="text-xs text-gray-600">Views: 58,234</span>
                  </div>
                </div>
                <div className="flex">
                  <TabButton 
                    active={activityTab === 'daily'} 
                    onClick={() => setActivityTab('daily')}
                    label="Daily"
                  />
                  <TabButton 
                    active={activityTab === 'weekly'} 
                    onClick={() => setActivityTab('weekly')}
                    label="Weekly"
                  />
                  <TabButton 
                    active={activityTab === 'monthly'} 
                    onClick={() => setActivityTab('monthly')}
                    label="Monthly"
                  />
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="referrals" fill="#F44336" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Network Section - 2 columns */}
            <div className="bg-white p-4 rounded-lg shadow lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Network</h2>
                <ChevronRight size={16} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {networkData.map((item, index) => (
                  <NetworkCard 
                    key={index}
                    role={item.role}
                    percentage={item.percentage}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component for sidebar items
function SidebarItem({ icon, text, active }) {
  return (
    <div className={`flex items-center py-3 px-4 ${active ? 'bg-gray-800' : ''}`}>
      <div className="text-gray-400">{icon}</div>
      <span className="hidden md:block ml-4 text-sm">{text}</span>
      {active && <div className="hidden md:block ml-auto w-1 h-6 bg-red-500 rounded-full"></div>}
    </div>
  );
}

// Component for tab buttons
function TabButton({ active, onClick, label }) {
  return (
    <button
      className={`px-3 py-1 text-xs rounded-md ${active ? 'bg-red-500 text-white' : 'text-gray-500'}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// Component for statistics cards
function StatCard({ value, label, change, positive, chart }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
      <div>
        <div className="flex items-end">
          <h3 className="text-2xl font-bold">{value}</h3>
          {change && (
            <span className={`ml-2 text-xs ${positive ? 'text-green-500' : 'text-red-500'}`}>
              {change}
            </span>
          )}
        </div>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
      <div className="w-24 h-12">
        {chart}
      </div>
    </div>
  );
}

// Component for money cards
function MoneyCard({ value, label, change, positive, chart }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className="text-xs text-gray-500">{label}</p>
        </div>
        {change && (
          <span className={`text-xs ${positive ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </span>
        )}
      </div>
      <div className="h-16">
        {chart}
      </div>
    </div>
  );
}

// Component for job cards
function JobCard({ title, location, salary, range, color, icon }) {
  return (
    <div className="flex items-start p-2 border border-gray-100 rounded-lg">
      <div className={`w-10 h-10 ${color} text-white rounded-lg flex items-center justify-center text-xl`}>
        {icon}
      </div>
      <div className="ml-3 flex-1">
        <h3 className="font-medium">{title}</h3>
        <div className="flex items-center text-xs text-gray-500 mt-1">
          <span className="flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {salary} - {range}
          </span>
        </div>
      </div>
    </div>
  );
}

// Component for network cards
function NetworkCard({ role, percentage }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#E6E6E6"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={role === 'Engineer' ? '#FF5555' : role === 'Designer' ? '#2196F3' : role === 'Manager' ? '#FF9800' : '#4CAF50'}
            strokeWidth="3"
            strokeDasharray={`${percentage}, 100`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-semibold">{percentage}%</span>
        </div>
      </div>
      <span className="mt-2 text-sm">{role}</span>
    </div>
  );
}

// Mini line chart for stat cards
function MiniLineChart({ color, data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data.map((value, index) => ({ value, index }))}>
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke={color} 
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

// Mini bar chart for money cards
function BarMiniChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <Bar dataKey="amount" fill="#F44336" />
      </BarChart>
    </ResponsiveContainer>
  );
}

// Mini line chart for money cards
function LineMiniChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line 
          type="monotone" 
          dataKey="amount" 
          stroke="#4CAF50" 
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}