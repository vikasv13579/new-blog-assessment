import { FillStarIcon, LineStarIcon, MapIcon } from "@/assets/icon/icon";
import Image from "next/image";
import React from "react";

const TourGuides = React.memo(function TourGuides(props) {
  return (
    <>
      {props.profiles &&
        props.profiles.map((item, i) => {
          return (
            <div className="tour_guides_card" key={i}>
              <div className="card_body">
                <Image
                  src={item.image}
                  alt={item.name}
                  title={item.name}
                  className="avatar"
                  width={60}
                  height={60}
                />
                <div>
                  <h3 className="title">{item.name}</h3>
                  <address className="location">
                    <MapIcon />
                    <span>{item.location}</span>
                  </address>
                </div>
              </div>
              <div className="star_count">
                <ul className="star_icon">
                  <li>
                    <FillStarIcon />
                  </li>
                  <li>
                    <FillStarIcon />
                  </li>
                  <li>
                    <FillStarIcon />
                  </li>
                  <li>
                    <FillStarIcon />
                  </li>
                  <li>
                    <LineStarIcon />
                  </li>
                </ul>
                <div className="count">({`${item.rating}.0`})</div>
              </div>
            </div>
          );
        })}
    </>
  );
});

export default TourGuides;
