"use client";
import { useState } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function JobNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signupDropdownOpen, setSignupDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSignupDropdown = () => {
    setSignupDropdownOpen(!signupDropdownOpen);
  };

  return (
    <header className="relative bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/Clogo.png"
              alt="Careertronic Logo"
              width={180}
              height={40}
            />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-500 hover:bg-gray-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Main Menu Items */}
            <Link
              href="/"
              className="text-gray-700 hover:text-red-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className="text-gray-700 hover:text-red-500 transition-colors"
            >
              Jobs
            </Link>
            <Link
              href="/resume-builder"
              className="text-gray-700 hover:text-red-500 transition-colors"
            >
              Build Your Resume
            </Link>
            <Link
              href="/companies"
              className="text-gray-700 hover:text-red-500 transition-colors"
            >
              Companies
            </Link>

            {/* Search */}
            <div className="relative ml-4">
              <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white">
                <Search size={16} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search job"
                  className="ml-2 outline-none text-sm w-32"
                />
              </div>
            </div>

            {/* Sign Up Dropdown */}
            <div className="relative ml-4">
              <button
                onClick={toggleSignupDropdown}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Sign Up
                <ChevronDown size={16} className="ml-1" />
              </button>

              {signupDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <Link
                      href="/signup/candidate"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                    >
                      Sign up as Candidate
                    </Link>
                    <Link
                      href="/signup/employer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                    >
                      Sign up as Employer
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md"
            >
              Jobs
            </Link>
            <Link
              href="/resume-builder"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md"
            >
              Build Your Resume
            </Link>
            <Link
              href="/companies"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md"
            >
              Companies
            </Link>

            {/* Mobile Search */}
            <div className="px-3 py-2">
              <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white">
                <Search size={16} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search job"
                  className="ml-2 outline-none text-sm w-full"
                />
              </div>
            </div>

            {/* Mobile Sign Up Options */}
            <div className="pt-2 space-y-2 px-3">
              <p className="text-sm font-medium text-gray-700">Sign Up As:</p>
              <Link
                href="/signup/candidate"
                className="block px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200 text-center"
              >
                Candidate
              </Link>
              <Link
                href="/signup/employer"
                className="block px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center"
              >
                Employer
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
