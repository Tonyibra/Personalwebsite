import React, { useEffect, useState } from "react";

export const Header = () => {
  const [scroll, isScroll] = useState(false);
  setInterval(() => {
    isScroll(true);
  }, 3500);
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, [scroll]);
  return (
    <header>
      {/* left */}
      <div className={"px-6 pt-6"}>
        <span className="text-2xl font-semibold ">Tony Ibrahim</span>
      </div>
      {/* right */}
      <div></div>
    </header>
  );
};
