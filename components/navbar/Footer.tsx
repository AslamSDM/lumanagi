import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaDiscord,
  FaTelegramPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col w-full py-20 max-md:py-10">
      <div className="flex flex-wrap items-start justify-between w-full gap-10 max-md:flex-col max-md:items-center">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center gap-6 max-md:w-full max-md:items-center">
          <Image
            src="/assets/images/logos/lumanagi-logo2.png"
            width={267}
            height={60}
            alt="Company Logo"
            className="max-w-full"
            style={{ width: "auto", height: "auto", objectFit: "contain" }}
            priority // Added priority for LCP
          />
          <nav className="flex gap-4 mt-4">
            {[
              { Icon: FaTwitter, ariaLabel: "Twitter" },
              { Icon: FaFacebookF, ariaLabel: "Facebook" },
              { Icon: FaLinkedinIn, ariaLabel: "LinkedIn" },
              { Icon: FaInstagram, ariaLabel: "Instagram" },
              { Icon: FaDiscord, ariaLabel: "Discord" },
              { Icon: FaTelegramPlane, ariaLabel: "Telegram" },
            ].map(({ Icon, ariaLabel }, idx) => (
              <Link
                key={idx}
                href="#"
                aria-label={ariaLabel}
                className="flex items-center justify-center p-2 transition rounded-full hover:bg-indigo-900"
              >
                <Icon className="text-lg text-white" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-24 text-base leading-10 text-white max-md:flex-col max-md:items-center max-md:gap-10">
          {/* Company Section */}
          <div className="flex flex-col items-start max-md:items-center">
            <h3 className="text-gray-400">Company</h3>
            <ul className="mt-3 space-y-2 max-md:text-center">
              {["About us", "Blog", "Press", "Careers"].map((text, idx) => (
                <li key={idx}>
                  <Link href="#" className="hover:text-gray-300">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col items-start max-md:items-center">
            <h3 className="text-gray-400">Legal</h3>
            <ul className="mt-3 space-y-2 max-md:text-center">
              {["Privacy Policy", "Terms & Conditions", "Cookies"].map(
                (text, idx) => (
                  <li key={idx}>
                    <Link href="#" className="hover:text-gray-300">
                      {text}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full my-8 border-t border-white/20" />

      {/* Bottom Section */}
      <div className="flex flex-wrap items-center justify-between w-full gap-6 text-sm text-center max-md:flex-col">
        {/* Copyright and Language */}
        <div className="text-white/70">
          <div>© Lumanagi</div>
          <div className="mt-3">
            <span className="cursor-pointer">HU</span>{" "}
            <span className="mx-2">|</span>{" "}
            <span className="cursor-pointer">EN</span>
          </div>
        </div>

        {/* Token Display */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/images/logos/lumanagi-coin 1.png"
            width={42}
            height={42}
            alt="Lumanagi Icon"
            className="object-contain"
            style={{ width: "auto", height: "auto" }}
            priority // Added priority for LCP
          />
          <div className="text-white">0.002 ETH</div>
          <button className="px-4 py-3 text-white transition rounded-lg bg-rose-600 hover:bg-rose-700">
            BUY LMNG →
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
