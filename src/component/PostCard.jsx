import Image from "next/image";
import React from "react";

const PostCard = React.memo(function PostCard({
  image,
  category,
  date,
  title,
}) {
  // Safety check for image prop
  const imageSrc = image || "/images/blog.jpg"; // Fallback image
  const imageAlt = title || "Blog post image";

  return (
    <div className="post_card">
      <Image
        src={imageSrc}
        alt={imageAlt}
        title={title}
        className="img_fluid"
        width={301}
        height={165}
      />
      <div className="card_body">
        <ul className="list">
          <li className="category">{category || "General"}</li>
          <li className="date">| {date || "No date"}</li>
        </ul>
        <h3 className="title">{title || "Untitled Post"}</h3>
      </div>
    </div>
  );
});

export default PostCard;
