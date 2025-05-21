// components/JobPortal/Dashboard/Sidebardash.jsx
import { useState } from "react";
import Link from "next/link";
import {
  LayoutGrid,
  User,
  FileText,
  ClipboardList,
  FilePlus,
  CreditCard,
  BarChart2,
  Settings,
  MessageSquare,
  LogOut,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Sidebardash = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("payment-subscription");

  // Navigation items
  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutGrid size={18} className="min-w-[18px]" />,
      href: "/dashboard",
    },
    {
      id: "profile",
      label: "Profile",
      icon: <User size={18} className="min-w-[18px]" />,
      href: "/profile",
    },
    {
      id: "job-listings",
      label: "Job Listings",
      icon: <FileText size={18} className="min-w-[18px]" />,
      href: "/job-listings",
    },
    {
      id: "applications",
      label: "Applications",
      icon: <ClipboardList size={18} className="min-w-[18px]" />,
      href: "/applications",
    },
    {
      id: "job-post",
      label: "Job Post",
      icon: <FilePlus size={18} className="min-w-[18px]" />,
      href: "/job-post",
    },
    {
      id: "payment-subscription",
      label: "Payment & Subscription",
      icon: <CreditCard size={18} className="min-w-[18px]" />,
      href: "/payment-subscription",
    },
    {
      id: "report-analysis",
      label: "Report & Analysis",
      icon: <BarChart2 size={18} className="min-w-[18px]" />,
      href: "/report-analysis",
    },
    {
      id: "setting",
      label: "Setting",
      icon: <Settings size={18} className="min-w-[18px]" />,
      href: "/setting",
    },
    {
      id: "support-feedback",
      label: "Support & Feedback",
      icon: <MessageSquare size={18} className="min-w-[18px]" />,
      href: "/support-feedback",
    },
  ];

  // Toggle sidebar collapse
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Handle navigation click
  const handleNavClick = (itemId) => {
    setActiveItem(itemId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-20">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md bg-white shadow-md"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform transition-all duration-300 ease-in-out bg-white shadow-lg z-10 ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        } ${isCollapsed ? "w-16" : "w-64"}`}
      >
        <div className="p-4 bg-white border-b flex justify-between items-center">
          {!isCollapsed && (
            <Link href="/dashboard">
              <span className="flex items-center cursor-pointer">
                <img src="/logo.png" alt="Careertronic" className="h-8" />
              </span>
            </Link>
          )}
          {isCollapsed && (
            <div className="mx-auto">
              <Link href="/dashboard">
                <span className="flex items-center cursor-pointer">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="h-8 w-8 object-contain"
                  />
                </span>
              </Link>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="hidden lg:block p-1 rounded-full hover:bg-gray-200"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight size={16} />
            ) : (
              <ChevronLeft size={16} />
            )}
          </button>
        </div>

        <div className="p-4 border-b">
          {!isCollapsed && (
            <h2 className="text-sm font-semibold text-gray-600 mb-4">
              Dashboard
            </h2>
          )}
          <nav>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    <span
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center ${
                        isCollapsed ? "justify-center" : ""
                      } px-2 py-2 rounded-md w-full text-left cursor-pointer ${
                        activeItem === item.id
                          ? "text-red-500 bg-red-50"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                      title={isCollapsed ? item.label : ""}
                    >
                      <div className={isCollapsed ? "mx-auto" : "mr-3"}>
                        {item.icon}
                      </div>
                      {!isCollapsed && <span>{item.label}</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="p-4 mt-auto">
          <Link href="/logout">
            <span
              className={`flex items-center ${
                isCollapsed ? "justify-center" : ""
              } px-2 py-2 text-gray-700 hover:bg-gray-200 rounded-md w-full text-left cursor-pointer`}
              title={isCollapsed ? "Log out" : ""}
            >
              <div className={isCollapsed ? "mx-auto" : "mr-3"}>
                <LogOut size={18} />
              </div>
              {!isCollapsed && <span>Log out</span>}
            </span>
          </Link>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebardash;
