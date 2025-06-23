"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import useWindowWidth from "@/hook/useWindowWidth";
import TourGuides from "./TourGuides";

const PostSlider = dynamic(() => import("../component/PostSlider"), {
  ssr: false,
});
const PostCard = dynamic(() => import("../component/PostCard"), {
  ssr: false,
});

export default function AsideBlock(props) {
  const width = useWindowWidth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const showDesktopVersion = isClient && width >= 767;

  return (
    <aside className="sidebar">
      <div className="sidebar_explore_posts">
        <div className="section_title p_24">
          <h2 className="title">Explore more</h2>
        </div>

        {showDesktopVersion ? (
          <div className="post_card_list">
            {props.posts &&
              props.posts.map((post, index) => (
                <PostCard
                  key={index}
                  image={post.image}
                  category={post.category}
                  date={post.date}
                  title={post.title}
                />
              ))}
          </div>
        ) : (
          <PostSlider posts={props.posts} />
        )}
      </div>
      <div className="sidebar_tour_guides">
        <div className="section_title">
          <h2 className="title">Tour Guides</h2>
        </div>
        <TourGuides profiles={props.profiles} />
      </div>
    </aside>
  );
}
