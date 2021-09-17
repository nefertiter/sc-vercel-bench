import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import dynamic from "next/dynamic";

const Header = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.$ === "undefined") {
      window.jQuery = window.$ = require("../public/js/jquery.min.js");
    }
    // Addings Bootstrap
    require("../styles/bootstrap/assets/javascripts/bootstrap/collapse");

    const is_touch_device = () => {
      return (
        $(window).width() < 1024 ||
        "ontouchstart" in window || // works on most browsers
        navigator.maxTouchPoints
      ); // works on IE10/11 and Surface
    };

    if (!is_touch_device()) {
      require("../public/js/bootstrap-hover-dropdown.min.js");
      $(".js-activated").dropdownHover({
        instantlyCloseOthers: false,
        delay: 0,
      });
      // .dropdown();
    } else {
      $(".js-activated").on("click", function (ev) {
        ev.preventDefault();
        $(this).parent().addClass("open");
      });
    }

    // if ($(".navbar .navbar-collapse").length > 0) {
    // var sticky = new Waypoint.Sticky({
    //   element: $(".navbar .navbar-collapse")[0],
    // });
    // }

    // if ($(window).width() <= 768) {
    //   $(window).scroll(function () {
    //     y = window.scrollY;
    //     if (y > 120) {
    //       $(".sticky-bottom").addClass("stuck");
    //     } else {
    //       $(".sticky-bottom").removeClass("stuck");
    //     }
    //   });
    // }
  }, []);
  return (
    <header>
      <div className="navbar">
        <div className="navbar-header">
          <div className="container">
            <ul className="info pull-right">
              <li>
                <a data-toggle-cart="" style={{ position: "relative" }}>
                  <i style={{ fontSize: "135%" }} className="icon-sc-cart"></i>
                  <span className="cart-dot"></span>
                </a>
              </li>
              <li>
                <a href="http://espanol.startchurch.com/">
                  {" "}
                  Ver nuestro sitio en Español
                </a>
              </li>
            </ul>
            <ul className="info pull-left">
              <li>
                <a href="/login">Sign In</a>
              </li>
              <li>
                <a href="/register/">Register</a>
              </li>
              <li>
                <a href="/cloud/">Access Cloud Software</a>
              </li>
              <li>
                <a href="/support">Software Support</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a
                  href=""
                  data-remote="false"
                  data-toggle="modal"
                  data-target="#modal-hover"
                >
                  Free eBook!
                </a>
              </li>
              <li>
                <a
                  className="blink"
                  style={{ color: "#fa5821" }}
                  href="/careers"
                >
                  <b>We&apos;re Hiring!</b>
                </a>
              </li>
            </ul>
            <Link href="/" className="navbar-brand">
              <a className="navbar-brand">
                <Image
                  src="/www-assets/images/sc/logo.svg" // Route of the image file
                  height={40}
                  width={229}
                  className="logo"
                  alt="StartChurch"
                />
              </a>
            </Link>
            <a
              className="btn responsive-menu pull-right"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <i className="icon-menu-1"></i>
            </a>
          </div>
        </div>
        <div className="yamm">
          <div className="sticky-wrapper">
            <div className="navbar-collapse collapse">
              <div className="container">
                <Link href="/">
                  <a className="navbar-brand">
                    <Image
                      src="/www-assets/images/sc/logo.svg" // Route of the image file
                      height={40}
                      width={229}
                      className="logo"
                      alt="StartChurch"
                    />
                  </a>
                </Link>
                <ul className="nav navbar-nav">
                  <li className="hidden-desktop-navbar">
                    <a href="/sac" target="_blank" style={{ color: "#59aa3c" }}>
                      <i className="icon-phone contact"></i> SCHEDULE A CALL
                    </a>
                    <a
                      href="tel:8774944655"
                      className="business-time"
                      style={{ color: "#59aa3c" }}
                    >
                      Call us at
                      <span
                        className="rTapNumber227338"
                        style={{ visibility: "visible" }}
                      >
                        (844) 834-3319
                      </span>
                    </a>
                  </li>

                  <li className="hidden-desktop-navbar dropdown">
                    <a href="/cloud" className="dropdown-toggle js-activated">
                      Cloud
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="/login">Sign In</a>
                      </li>
                      <li>
                        <a href="/register/">Register</a>
                      </li>
                      <li>
                        <a href="/cloud">Cloud</a>
                      </li>
                      <li>
                        <a href="/support">Support</a>
                      </li>
                    </ul>
                  </li>

                  <li
                    className="dropdown hidden-desktop-navbar trackable fs-service-menu-mobile"
                    data-event="services_menu"
                    data-name="b"
                  >
                    <a
                      href="/services"
                      className="dropdown-toggle js-activated fs-services"
                    >
                      Services
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="fs-start-church"
                          href="/services/501c3-church"
                        >
                          Start a Church
                        </a>
                      </li>
                      <li className="fs-start-ministry">
                        <a href="/services/501c3-ministry">Start a Ministry</a>
                      </li>
                      <li className="fs-501c3">
                        <a href="/services/501c3?">
                          <span style={{ textTransform: "none" }}>
                            GET 501(c)(3) STATUS
                          </span>
                        </a>
                      </li>
                      <li className="fs-bookkeeping">
                        <a href="/services/bookkeeping">Bookkeeping</a>
                      </li>
                      <li className="fs-housing-allowance">
                        <a href="/services/housing-allowance">
                          Housing Allowance
                        </a>
                      </li>
                      <li className="fs-all-services">
                        <a href="/services">See All Services</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown yamm-fullwidth hidden-mobile-navbar">
                    <a href="#" className="dropdown-toggle js-activated">
                      Resources
                    </a>
                    <ul
                      className="dropdown-menu yamm-dropdown-menu"
                      style={{
                        width: 260,
                        top: "auto",
                        left: "auto",
                        right: "unset",
                      }}
                      // style="width: 260px; top: auto; left: auto; right: unset;"
                    >
                      <li>
                        <div className="yamm-content row">
                          <div className="inner" style={{ marginBottom: 0 }}>
                            <h3>
                              <a href="/blog">BLOG</a>
                            </h3>
                            <ul className="circled">
                              <li>
                                <a href="/blog/view/name/prepare-for-pastor-appreciation-day-2021">
                                  <small style={{ textTransform: "none" }}>
                                    Prepare for Pastor Appreciation Day 2021
                                  </small>
                                </a>
                              </li>
                              <li>
                                <a href="/blog/view/name/3-top-questions-pastors-ask-us-the-most">
                                  <small style={{ textTransform: "none" }}>
                                    3 Top Questions Pastors Ask Us the Most
                                  </small>
                                </a>
                              </li>
                              <li>
                                <a href="/blog/view/name/an-effective-strategy-for-your-church-in-2021">
                                  <small style={{ textTransform: "none" }}>
                                    An Effective Strategy for Your Church in
                                    2021
                                  </small>
                                </a>
                              </li>
                            </ul>
                            <h3>
                              <a href="{{ path('podcast') }}">PODCAST</a>
                            </h3>
                            <h3>WEBINARS</h3>
                            <ul className="circled">
                              <li>
                                <a href="{{ path ('launch_legally') }}">
                                  <small style={{ textTransform: "none" }}>
                                    Launch Legally Webinar
                                  </small>
                                </a>
                              </li>
                              <li>
                                <a href="{{ path ('bookkeeping_webinar') }}">
                                  <small style={{ textTransform: "none" }}>
                                    Bookkeeping Webinar
                                  </small>
                                </a>
                              </li>
                            </ul>
                            <h3>
                              <a href="{{ path ('faqs') }}">FAQs</a>
                            </h3>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- Mobile Resources Menu --> */}
                  <li className="dropdown hidden-desktop-navbar">
                    <a href="#" className="dropdown-toggle js-activated">
                      Resources
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-toggle js-activated"
                          href="/blog"
                        >
                          Blog
                        </a>
                        <ul className="dropdown-menu">
                          {/* {% for post in posts %}
                                            <li><a href="/blog/view/name/{{post.slug}}"><span style="text-transform: none; font-weight: 400;">{{post.title}}</span></a></li>
                                        {% endfor %} */}
                          <li>
                            <a href="/blog">See all posts</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="{{ path('podcast') }}">Podcast</a>
                      </li>
                      <li>
                        <a className="dropdown-toggle js-activated" href="#">
                          Webinars
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="{{ path ('launch_legally') }}">
                              <span
                                style={{
                                  textTransform: "none",
                                  fontWeight: 400,
                                }}
                              >
                                Launch Legally Webinar
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="{{ path ('bookkeeping_webinar') }}">
                              <span
                                style={{
                                  textTransform: "none",
                                  fontWeight: 400,
                                }}
                              >
                                Bookkeeping Webinar
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown">
                    <a
                      href="{{ path ('about_us') }}"
                      className="dropdown-toggle js-activated"
                    >
                      About
                    </a>
                    <ul className="dropdown-menu">
                      <li className="hidden-desktop-navbar">
                        <a href="{{ path ('about_us') }}">
                          About
                          <span style={{ textTransform: "none" }}>
                            StartCHURCH
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="{{ path ('www_careers') }}">Careers</a>
                      </li>
                      <li>
                        <a href="{{ path ('testimonials') }}">Testimonials</a>
                      </li>
                      <li>
                        <a href="{{ path ('about_us_executive_team') }}">
                          Executive Team
                        </a>
                      </li>
                      <li className="hidden-desktop-navbar">
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </li>
                  <li className="hidden-mobile-navbar">
                    <a
                      href="tel:+18448751494"
                      className="business-time "
                      style={{ color: "#fa5821" }}
                    >
                      <i className="icon-phone contact"></i>Call Us{" "}
                      <span className="rTapNumber227338">844-921-5459</span>
                    </a>
                    <a
                      href="/sac"
                      target="_blank"
                      className="business-time hidden"
                      style={{ color: "#fa5821" }}
                    >
                      {" "}
                      <i className="icon-phone contact"></i> SCHEDULE A CALL
                    </a>
                  </li>
                  <li className="dropdown hidden-desktop-navbar">
                    <a
                      href="/products"
                      className="dropdown-toggle js-activated"
                    >
                      Products
                    </a>
                    <ul className="dropdown-menu">
                      <h4>Browse Products by Category</h4>
                      <li>
                        <a href="/products/church">Starting a Church</a>
                      </li>
                      <li>
                        <a href="/products/ministry">Starting a Nonprofit</a>
                      </li>
                      <li>
                        <a href="/products/finances">Manage Your Finances</a>
                      </li>
                      <li>
                        <a href="/products/administration">Administration</a>
                      </li>
                      <li>
                        <a href="/products/church-resources">
                          Church Resources
                        </a>
                      </li>
                      <li>
                        <a href="/products/compliance">Compliance Assistance</a>
                      </li>
                      <li>
                        <a href="/products/strategy">
                          Branding &amp; Online Strategy
                        </a>
                      </li>
                      <li>
                        <a href="/products">See All Products</a>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown hidden-desktop-navbar">
                    <a href="#" className="dropdown-toggle js-activated">
                      Resources
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-toggle js-activated"
                          href="/blog"
                        >
                          Blog
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="/blog/view/name/an-effective-strategy-for-your-church-in-2021">
                              <span
                                style={{
                                  textTransform: "none",
                                  fontWeight: 400,
                                }}
                              >
                                An Effective Strategy for Your Church in 2021
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/view/name/3-top-myths-pastors-hear-about-501c3-status">
                              <span
                                style={{
                                  textTransform: "none",
                                  fontWeight: 400,
                                }}
                              >
                                3 Top Myths Pastors Hear About 501(c)(3) Status
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/view/name/9-traits-of-successful-church-planters">
                              <span
                                style={{
                                  textTransform: "none",
                                  fontWeight: 400,
                                }}
                              >
                                9 Traits of Successful Church Planters
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/blog">See all posts</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/podcast">Podcast</a>
                      </li>
                      <li>
                        <a className="dropdown-toggle js-activated" href="#">
                          Webinars
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="/launch-legally">
                              <span
                                style={{
                                  textTransform: "none",
                                  fontWeight: 400,
                                }}
                              >
                                Launch Legally Webinar
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/bookkeepingwebinar">
                              <span
                                style={{
                                  textTransform: "none",
                                  fontWeight: 400,
                                }}
                              >
                                Bookkeeping Webinar
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  {/* <li className="dropdown">
                    <a
                      href="/about-us"
                      className="dropdown-toggle js-activated"
                    >
                      About
                    </a>
                    <ul className="dropdown-menu">
                      <li className="hidden-desktop-navbar">
                        <a href="/about-us">
                          About
                          <span style={{ textTransform: "none" }}>
                            StartCHURCH
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/careers">Careers</a>
                      </li>
                      <li>
                        <a href="/testimonials">Testimonials</a>
                      </li>
                      <li>
                        <a href="/about-us/executive-team">Executive Team</a>
                      </li>
                      <li className="hidden-desktop-navbar">
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </li> */}
                  <li className="dropdown hidden-desktop-navbar">
                    <a
                      href="//espanol.startchurch.com/"
                      className="dropdown-toggle js-activated"
                    >
                      Español
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="//espanol.startchurch.com/">
                          Ver nuestro sitio en Español
                        </a>
                      </li>
                      <li className="hidden-desktop-navbar">
                        <a
                          href="/sac"
                          target="_blank"
                          className="business-time hidden"
                          style={{ color: "#59aa3c" }}
                        >
                          <i className="icon-phone contact"></i> Haga una cita
                        </a>

                        <a
                          href="tel:8774944655"
                          style={{ color: "#59aa3c" }}
                          className="business-time"
                        >
                          Llame Hoy al
                          <span
                            className="rTapNumber257507"
                            style={{ visibility: "visible" }}
                          >
                            (833) 225-8281
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="hidden-desktop-navbar"
                    style={{ paddingBottom: 15 }}
                  >
                    <a
                      href="/checkout/index/system"
                      style={{ position: "relative" }}
                      className="dropdown-toggle js-activated"
                    >
                      <i
                        style={{ fontSize: "135%" }}
                        className="icon-sc-cart"
                      ></i>
                      <span className="cart-dot"></span> YOUR CART
                    </a>
                    <ul className="dropdown-menu">
                      <li
                        className="menu-cart hidden-desktop-navbar"
                        style={{ margin: 0 }}
                      >
                        <div className="panel-body">
                          <p
                            className="text-center"
                            style={{ padding: "15px 0 0" }}
                          >
                            No products in your cart
                          </p>
                          <table className="table table-striped"></table>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown pull-right searchbox">
                    <a href="#" className="dropdown-toggle js-activated">
                      <i className="icon-search"></i>{" "}
                      <span style={{ display: "inline-block" }}>
                        <span className="visible-xs">SEARCH</span>
                      </span>
                    </a>
                    <div className="dropdown-menu">
                      <form
                        id="search"
                        className="navbar-form search"
                        role="search"
                        method="GET"
                        action="/search"
                      >
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Type to search"
                          name="q"
                        />
                        <button
                          type="submit"
                          className="btn btn-default btn-submit icon-right-open"
                        ></button>
                      </form>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="hidden-desktop-navbar">
            <span
              className="rTapNumber227338 business-time "
              style={{ visibility: "visible" }}
            >
              (844) 834-3319
            </span>
            <a
              href="/sac"
              target="_blank"
              className="business-time hidden"
              style={{ color: "#fa5821" }}
            >
              {" "}
              <i className="icon-phone contact"></i> SCHEDULE A CALL
            </a>
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
