import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Image
      src="/assets/images/logos/lumanagi-logo-new.png"
      width={180}
      height={180}
      alt="Lumanagi Logo"
      className="object-contain w-full h-auto"
      priority
    />
  );
}

export default Logo;
