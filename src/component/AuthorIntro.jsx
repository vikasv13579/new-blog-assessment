import React from "react";
import Image from "next/image";

const AuthorIntro = React.memo(function AuthorIntro({
  author_img,
  author_name,
  author_description,
}) {
  return (
    <div className="author_intro">
      <div className="section_title p_24">
        <h2 className="title">
          About <span>{author_name}</span>
        </h2>
      </div>
      <Image
        src={author_img}
        alt={author_name}
        title={author_name}
        width={100}
        height={100}
        className="author_img"
      />
      <p className="para">{author_description}</p>
    </div>
  );
});

export default AuthorIntro;
