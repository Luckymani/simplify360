import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import InfoSection from "./components/InfoSection.js";
import ChooseCard from "./components/ChooseCard.js";
import {
  companies,
  clients,
  section1,
  section2,
  section3,
  section4,
  section5,
  chooseCardsData,
  integrateData,
  supportImages,
  socialMediaIcons,
} from "./supportingData/ComponentsData.js";

// swiper imports
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles/home.css";

// Import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>

      {/* homepage  */}
      <section className="home">
        <div className="section-wrapper">
          <div className="content">
            <h1>
              &#128075; Hey,
              <br /> Welcome to nextgen
              <br /> customer support !
            </h1>
            <p className="pfs-2">
              Create <strong>“WoW”</strong> experiences for your customers &
              agents. <br />
              We help:
            </p>
            <ul className="list-points">
              <li>
                Agents collaborate and provide quicker resolutions with{" "}
                <span>one inbox for all customer queries</span>
              </li>
              <li>
                <span>Automate repetitive tasks</span>and route tickets to the
                right teams to increase agent productivity.
              </li>
              <li>
                You understand your customers better with{" "}
                <span>game-changing insights</span> and deliver customer
                delight.
              </li>
            </ul>
            <div className="buttons-wrapper">
              <button className="btn">Try For Free</button>
              <button className="btn">Book Demo</button>
            </div>
          </div>
          <div className="image-container">
            <img src="/images/home-image.jpg" alt="home-supportive-image"></img>
          </div>
        </div>
      </section>

      {/* company logos  */}
      <section className="companies">
        {companies.map((value, id) => {
          return (
            <img
              className="company-logos"
              key={id}
              src={`/images/companies/${value}.png`}
              alt="company-logo"
            ></img>
          );
        })}
      </section>

      {/* trusted companies  */}
      <section className="trusted-companies">
        <div className="section-wrapper">
          <h2>
            5000+ global users trust and love using <br />
            Simplify360
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            loop
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {clients.map((subArray, id) => {
              return (
                <SwiperSlide key={id}>
                  <div className="client-wrapper">
                    {subArray.map((value, id) => {
                      return (
                        <img
                          key={id}
                          className="client-image"
                          src={`/images/clients/${value}.png`}
                        ></img>
                      );
                    })}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {/* support and engagement section  */}
      <section className="support-section">
        <h2>
          Explore Simplify360’s end-to-end support,<br/> engagement & growth
          solutions
        </h2>
        <div className="support-images-container">
          {supportImages.map((value, id) => {
            return (
              <img
                key={id}
                className="support-image"
                src={`/images/support/${value}.png`}
              ></img>
            );
          })}
        </div>
      </section>

      <InfoSection values={section1}></InfoSection>
      <InfoSection values={section2}></InfoSection>
      <InfoSection values={section3}></InfoSection>
      <InfoSection values={section4}></InfoSection>
      <InfoSection values={section5}></InfoSection>

      {/* section choose  */}
      <section className="choose">
        <div className="section-wrapper">
          <h2>Why choose Simplify360 for your business?</h2>
          <div className="cards">
            {chooseCardsData.map((object, id) => {
              return <ChooseCard key={id} values={object} />;
            })}
          </div>
        </div>
      </section>

      <section className="integrate">
        <div className="section-wrapper">
        <h2>
          Integrate with your favorite tools on the go. <br/> Accomplish more by doing
          less.
        </h2>
        <div className="integrate-wrapper">
        {integrateData.map((object, id) => {
          return (
            <div key={id} className="integrate-box">
              <img src={`/images/integrate/${object.image}.svg`}></img>
              <p className="pfs-2">{object.title}</p>
            </div>
          );
        })}
        </div>
        </div>
      </section>

      <section className="connections">
        <div className="section-wrapper">
          <div className="content-box">
            <h4>
              All your communication channels in one place. Deliver beyond
              expectations.
            </h4>
            <button className="btn">View all Channels</button>
          </div>
          <div className="icons-wrapper">
            <ul className="social-media-icons">
              {socialMediaIcons.map((value, id) => {
                return (
                  <li key={id}>
                    <img src={`/images/social-media-icons/${value}.svg`}></img>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h2>
          Use Simplify360 for your business. <br/> Deliver customer delight on the go.
        </h2>
        <p className="pfs-2">
          Start using Simplify360 to deliver great customer service. Automate
          support on every channel and save agent time and boost productivity on
          the go.
        </p>
        <button className="btn">Start for Free</button>
      </section>
    </div>
  );
}

export default App;
