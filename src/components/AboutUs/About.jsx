import React from "react";
import './About.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const Banner = () => (

  <div className="container-fluid p-0">
    <div className="banner position-relative">
      <img
        src="products/about-bg.jpg"
        className="img-fluid"
        alt="Banner Image"
      />
      <div className="banner-text text-center position-absolute top-50 start-50 translate-middle text-white">
        <h1>Welcome to Kevin Masala</h1>
        <h2 className="banner__heading inline-richtext h1">
          Timeless Flavors, Endless Memories
        </h2>
      </div>
    </div>
  </div>
);

const AboutUs = () => (
  <div className="container md-4">
    <div className="text-center mt-4">
      <h1 className="about-header">About Us</h1>
    </div>
    <div className="row">
      <div className="col-md-6 mt-5">
        <img
          src="products/about1.jpeg"
          className="rounded d-block mx-auto img-1"
          width="75%"
          height="75%"
          alt="about us"
        />
      </div>
      <div className="col-md-6 mt-5 about-col">
        <h3 className="title-1">
          We Are <span className="title1-span">Kevin Masala..</span>
        </h3>
        <h5 className="title-2">@sofia Food Products</h5>
        <p className="content-1">
          Welcome to Kevin Masala, your trusted partner in authentic and
          organic flavor. At Kevin Masala, we bring tradition to your table
          with a diverse range of high-quality products, including tangy
          pickles, non-veg pickles, and our signature spicy powders, crafted to
          elevate every meal. What sets us apart? Our commitment to purity and
          authenticity. Each product is carefully prepared using handpicked
          ingredients, ensuring every jar and packet reflects the richness of
          organic goodness. Our spicy powders, the heart of our collection, are
          a true labor of love—meticulously ground and blended to deliver bold
          and unforgettable flavors. Choose Kevin Masala, where every bite
          tells a story of quality, passion, and a love for the art of cooking.
          Experience the magic of organic spices and flavors, perfected for
          every home kitchen.
        </p>
      </div>
    </div>
  </div>
);

const MissionVision = () => (
  <div className="row">
    <div className="col-md-6 mission-side">
      <div className="row">
        <div className="col-md-6">
          <img
            src="products/mission.png"
            className="rounded d-block mx-auto box-img"
            width="55%"
            height="82%"
            alt="Our Mission"
          />
        </div>
        <div className="col-md-6">
          <h3 className="box-header">Our Mission</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="box-content">
            "Experience the rich heritage of South Indian cuisine with our
            premium, authentic recipes. Crafted for exceptional taste and
            freshness, we bring tradition to every bite."
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-6 vision-side">
      <div className="row">
        <div className="col-md-6">
          <img
            src="products/vision.png"
            className="rounded d-block mx-auto box-img"
            width="55%"
            height="82%"
            alt="Our Vision"
          />
        </div>
        <div className="col-md-6">
          <h3 className="box-header">Our Vision</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="box-content">
            We promote healthier living with organic South Indian food. Our
            vision is to be a trusted global brand, blending tradition and
            innovation.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Timeline = () => {
  const timelineData = [
    {
      year: "1971",
      content:
        "My parents founded their company, Sofia food Products, in Pondicherry, specializing in a range of pickles.",
    },
    {
      year: "1980",
      content:
        "We launched with a special emphasis on non-vegetarian varieties, including prawn, dry fish, and fish pickles.",
    },
    {
      year: "1995",
      content:
        "They aimed to expand their company across Pondicherry, bringing unique non-vegetarian pickles to every corner while preserving traditional flavors.",
    },
    {
      year: "2010",
      content:
        "We planned to launch Kevin Masala, featuring a range of aromatic spice blends and spicy powders designed to elevate both traditional and modern recipes.",
    },
    {
      year: "2020",
      content:
        "The company was unfortunately shut down due to the challenges posed by the COVID-19 pandemic, which significantly impacted operations and market conditions.",
    },
    {
      year: "2023",
      content:
        "The company has been reopened with advanced machinery and is now successfully managed by M. Aroquiassamy.",
    },
    {
      year: "2025",
      content:
        "We will newly launch the brand Kevin Masala, offering a fresh range of high-quality spice blends, powders, and flavorful pickles.",
    },
  ];

  return (
    <div className="row">
      <h1 className="text-center my-5 journey-header">Our Journey</h1>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "timeline-item-left" : "timeline-item-right"
            }`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h5 className="timeline-header">{item.year}</h5>
              <p className="timeline-con">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutPage = () => (
  <div id="about-page">
    <Banner />
    <AboutUs />
    <MissionVision />
    <Timeline />
  </div>
);

export default AboutPage;
