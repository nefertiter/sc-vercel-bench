import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EnglishLayout = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.$ === "undefined") {
      window.jQuery = window.$ = require("../public/js/jquery.min.js");
    }
    require("../public/js/unveil.js");
    jQuery(document).ready(function () {
      jQuery(".speedUp main img, .lazy-bg, .lazy-wistia").unveil(
        350,
        function () {
          jQuery(this).load(function () {
            this.style.opacity = 1;
          });
        }
      );
    });
  });
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default EnglishLayout;
