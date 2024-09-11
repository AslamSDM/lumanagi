import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import SubScribe from "./SubScribe";

function Footer() {
  return (
    <footer className="bg-[#222681] mx-auto py-12 w-full">
      <SubScribe />
      <div className="mx-auto pt-10 contrainer">
        <div className="col-md-12">
          {/* Social Links */}
          <ul className="flex justify-center space-x-6 mb-4">
            <li>
              <Link
                target="_blank"
                href="https://www.facebook.com/Lumanagi-106999411853119"
              >
                <FaFacebook className="bg-[#02066F] rounded-full size-6" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://twitter.com/LuMaNaGi?t=y88vM4hc2meqse1VHaomXw&amp;s=09"
              >
                <AiFillTwitterCircle className="border-0 bg-[#02066F] rounded-full size-7" />
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://t.me/+bMAZj4p_PVM2NGM0">
                <FaTelegram className="bg-[#02066F] rounded-full size-6" />
              </Link>
            </li>
          </ul>

          {/* GDPR Link */}
          <div className="flex justify-center">
            <Link
              href="https://lumanagi.com/wp-content/uploads/2024/07/Lumanagi-GDPR-ENGHUN.pdf"
              target="_blank"
              className="text-[#ff073a] hover: text-[#ff073a]/80"
            >
              GDPR
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
