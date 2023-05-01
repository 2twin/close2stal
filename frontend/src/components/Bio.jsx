import React, { useState } from "react";
import bigLogo from "../assets/img/big-logo.svg";
import bioPhoto from "../assets/img/bio-photo.png";

const Bio = () => {
  const [show, setShow] = useState(false);

  const handleShowMore = () => {
    setShow(true);
  }

  return (
    <section className="bio">
      <div className="container">
        <div className="bio__inner">
          <img src={bigLogo} alt="STAL" />
          <div className="bio__main">
            <div className="bio__img">
              <img src={bioPhoto} alt="Photo" />
            </div>
            <div className="bio__text">
              <p className={"font-bold" + (show && " show")}>
                STAL (Hunkpaten Duran Castaldi) is a French—speaking artist from
                Cotonou, Benin.
                <br />
                <br />
                The artist was born and lived in Benin until the age of 20, then
                entered Moscow University and moved there to study. Now he is
                finishing the 4th year of bachelor's degree. During his studies
                in Moscow, he was able to learn Russian.
                <br />
                <br />
                The main hobby in his life has always been music. His love for
                her was instilled in him from childhood: music of various genres
                always sounded in his parents' house, and a neighbor, a DJ who
                lived in an apartment opposite, showed how versatile music can
                be.
                <br />
                <br />
                STAL started his career as a musician in early 2017 with two
                friends, Ko2f and Micra, and then he met Levinx, who is now a
                beatmaker and helps Castaldi write beats.
                <br />
                <br />
                STAL easily adapts to different styles of music, but sees
                Hip-Hop, Rap and Afropop in his native French as more familiar
                and suitable for himself.
                <br />
                <br />
                In September 2022, STAL joined EA Records and became the first
                French-speaking artist on the label.
              </p>
              {
                !show && <button className="btn btn-outline" onClick={handleShowMore}>Show More</button>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
