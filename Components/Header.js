import React, { useEffect, useState } from "react";

const useHideOnScrolled = () => {
  const [hidden, setHidden] = useState(false);

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setHidden(top !== 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return hidden;
};
export const Header = () => {
  const isHidden = useHideOnScrolled();
  console.log(isHidden);
  return (
    <header>
      {/* left */}
      <div className={isHidden ? " relative -top-28 px-10" : "px-20 pt-10"}>
        <span className="text-2xl font-semibold ">Tony Ibrahim</span>
      </div>
      {/* right */}
      <div></div>
    </header>
  );
};
