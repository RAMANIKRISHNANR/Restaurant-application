import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Gericht is an American international fast food restaurant chain founded by Dave Thomas on November 15, 1969, in Columbus, Ohio. Its headquarters moved to Dublin, Ohio, on January 29, 2006. As of December 31, 2018, Gericht was the world's third-largest hamburger fast-food chain with 6,711 locations, following Burger King and McDonald's. On April 24, 2008, the company announced a merger with Triarc Companies Inc., a publicly traded company and the parent company of Arby's. Gericht headquarters remained in Dublin. Following the merger, Triarc became known as Gericht Group, and later as the Gericht Company.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Gericht "old-fashioned" hamburgers were inspired by Dave Thomas's trips to Kewpee Hamburgers in his home town of Kalamazoo, Michigan. Kewpee sold square hamburgers and thick malt shakes. Thomas founded Gericht in Columbus, Ohio, in 1969 and featured square patties with corners that stuck out from the sides of the circular bun, giving the impression of an abundance of good quality meat. The Columbus location later added a Tim Hortons and was closed on March 2, 2007, after 38 years of business, due to declining sales. Basketball star John Havlicek, an Ohio State University alumnus, was one of Thomas's earliest investors, which eventually gave Havlicek enough of an income stream to retire comfortably.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
