"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white py-8 px-4 sm:px-6 md:px-10 lg:px-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Footerbggg.png"
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col border-b border-gray-700 pb-6 sm:pb-8">
          {/* Logo and Description */}
          <div className="flex flex-col sm:flex-row mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Image
                  src="/FooterLogo.png"
                  alt="Careertronic Logo"
                  width={100}
                  height={70}
                />
              </div>
              <div className="ml-3 sm:ml-5">
                <h2 className="text-xl sm:text-2xl font-bold text-red-500">
                  CAREERTRONIC
                </h2>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-400 max-w-md">
                  Explore our services today and discover how we can empower your
                  business or career.
                </p>
              </div>
            </div>
          </div>
          
          {/* Footer Links */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-6">
            {/* Reach Us */}
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-2 text-lg">Reach us</h3>
              <p className="text-gray-400 hover:text-red-500 text-sm mb-2">
                📞 Contact: +91 9343202785
              </p>
              <p className="text-gray-400 hover:text-red-500 text-sm mb-2">
                📧 mail: contact@careertronics.in
              </p>
              <p className="text-gray-400 hover:text-red-500 text-sm">
                📍3rd Floor, KNR SQUARE, OPP The Platina Gachibowli,
                Hyderabad, Telangana, 500032
              </p>
            </div>
            
            {/* Company */}
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-2 text-lg">Company</h3>
              <ul className="text-gray-400 space-y-1 text-sm">
                <li className="hover:text-red-500 cursor-pointer transition duration-200">About</li>
                <li className="hover:text-red-500 cursor-pointer transition duration-200">Contact</li>
                <li className="hover:text-red-500 cursor-pointer transition duration-200">Services</li>
                <li className="hover:text-red-500 cursor-pointer transition duration-200">Business consulting</li>
              </ul>
            </div>

            {/* Legal */}
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-2 text-lg">Legal</h3>
              <ul className="text-gray-400 space-y-1 text-sm">
                <li>
                  <Link href="/Policy" className="hover:text-red-500 transition duration-200">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/Terms" className="hover:text-red-500 transition duration-200">
                    Terms & Services
                  </Link>
                </li>
                <li>
                  <Link href="/cancel" className="hover:text-red-500 transition duration-200">
                    Cancellation and Refund
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-red-500 transition duration-200">
                    Shipping and Delivery Policy
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-2 text-lg">Quick Links</h3>
              <ul className="text-gray-400 space-y-1 text-sm">
                <li className="hover:text-red-500 cursor-pointer transition duration-200">Software training</li>
                <li className="hover:text-red-500 cursor-pointer transition duration-200">Industrial training</li>
                <li className="hover:text-red-500 cursor-pointer transition duration-200">
                  Custom Software development
                </li>
                <li>
                  <Link href="/Franchise" className="hover:text-red-500 transition duration-200">
                    Become Franchise Partner
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row gap-4 lg:justify-between items-center mt-6">
          {/* Social Media */}
          <div className="flex space-x-4 mb-4 lg:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
              <FaYoutube size={20} />
            </a>
          </div>
          
          {/* Newsletter Subscription */}
          <div>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 text-black rounded-l-md sm:rounded-none sm:rounded-l-md outline-none w-full sm:w-auto"
              />
              <button className="bg-red-500 text-white px-4 py-2 mt-2 sm:mt-0 rounded-md sm:rounded-none sm:rounded-r-md">
                Subscribe
              </button>
            </form>
            <p className="text-gray-400 text-xs mt-2">
              * We will send you weekly updates for better tool management.
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs sm:text-sm mt-6">
          Copyright © 2024{" "}
          <span className="text-red-500">
            Careertronic Global Services Pvt. Ltd
          </span>{" "}
          | All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;