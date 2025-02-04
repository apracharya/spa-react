import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import useScrollToComponent from "../functions/useScrollToComponent";

const Footer = () => {
  const scrollToComponent = useScrollToComponent();

  const [data, setData] = useState({
    companyName: "Respira Spa & Wellness",
    footerText:
      "Experience ultimate relaxation and rejuvenation at Respira Spa. We offer a range of therapeutic treatments to nurture your body and soul.",
    location: "Thamel, Kathmandu",
    phone: "+977 9876543212",
    email: "info@respiraspa.com",
  });

  return (
    //   {/* Footer */}
    <footer id="footer-section" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-serif mb-4">{data.companyName}</h3>
            <p className="text-slate-300 mb-4 text-justify">{data.footerText}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                // target="blank"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                // target="blank"
                className="text-slate-300 hover:text-white transition-colors"
                >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                // target="blank"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {scrollToComponent('service-section')}}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <NavLink
                  to="/booking"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Book Appointment
                </NavLink>
              </li>
              <li>
                <button
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Gift Cards
                </button>
              </li>
              <li>
                <button
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Special Offers
                </button>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-300">
                <Clock className="w-4 h-4 mr-2" />
                Sun - Wed: 9:00 AM - 7:00 PM
              </li>
              <li className="flex items-center text-slate-300">
                <Clock className="w-4 h-4 mr-2" />
                Thursday: Closed
              </li>
              <li className="flex items-center text-slate-300">
                <Clock className="w-4 h-4 mr-2" />
                Fri - Sat: 11:00 AM - 6:00 PM
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-300">
                <MapPin className="w-4 h-4 mr-2" />
                {data.location}
              </li>
              <li className="flex items-center text-slate-300">
                <Phone className="w-4 h-4 mr-2" />
                {data.phone}
              </li>
              <li className="flex items-center text-slate-300">
                <Mail className="w-4 h-4 mr-2" />
                {data.email}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Respira Spa & Wellness. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
