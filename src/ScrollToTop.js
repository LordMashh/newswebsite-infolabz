import React, { useState, useEffect } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import "./index.css";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showBottomBtn, setShowBottomBtn] = useState(false);
  useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            setShowBottomBtn(true);
          } else {
            setShowBottomBtn(false);
          }
      });
      return () => {
        window.removeEventListener("scroll");
      };
      
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const scrollToBottom = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    };
    return (
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}{" "}
            {" "}
            {showBottomBtn && (
                <FaAngleDown
                    className="icon-position-down icon-style"
                    onClick={scrollToBottom}
                />
            )}{" "}
        </div>
    );
};
export default ScrollToTop;