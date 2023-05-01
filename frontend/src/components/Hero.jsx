import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="label">
            <p className="font-bold">New Album Out Now</p>
            <button className="btn btn-primary font-bold">Get it now</button>
          </div>
          <div className="label">
            <p className="font-bold">Stal Store</p>
            <button className="btn btn-primary font-bold">Get it now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
