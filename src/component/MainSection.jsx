import React from "react";
import ArticleBlock from "./ArticleBlock";
import AsideBlock from "./AsideBlock";

const MainSection = React.memo(function MainSection({
  postdetails: mainPostDetails,
  posts: blogPosts,
  profiles: userProfiles,
}) {
  return (
    <>
      <section className="main_section">
        <div className="container">
          <div className="main_grid">
            <ArticleBlock postdetails={mainPostDetails} />
            <AsideBlock posts={blogPosts} profiles={userProfiles} />
          </div>
        </div>
      </section>
    </>
  );
});

export default MainSection;
