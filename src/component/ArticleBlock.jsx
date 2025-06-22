"use client";

import Image from "next/image";
import React from "react";
import useWindowWidth from "@/hook/useWindowWidth";
import AuthorIntro from "./AuthorIntro";
import ArticleNavigation from "./ArticleNavigation";

const ArticleBlock = React.memo(function ArticleBlock(props) {
  const { author_img, author_name, author_description, date, body } =
    props.postdetails;
  const width = useWindowWidth();

  return (
    <article className="article_block">
      <div className="article_body">
        <div className="author_details">
          <div className="author">
            <Image
              src={author_img}
              alt={author_name}
              title={author_name}
              className="img"
              width={32}
              height={32}
            />
            <div className="text">{author_name}</div>
          </div>
          <div className="post_date">{date}</div>
        </div>
        <div
          className="editor_text"
          dangerouslySetInnerHTML={{ __html: body }}
        ></div>
        <AuthorIntro
          author_img={author_img}
          author_name={author_name}
          author_description={author_description}
        />
        {width >= 767 && <ArticleNavigation />}
      </div>
    </article>
  );
});

export default ArticleBlock;
