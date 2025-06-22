import Image from "next/image";
import React from "react";
import Link from "next/link";

const RelatedPost = React.memo(function RelatedPost({
  title,
  articles: relatedArticles,
}) {
  return (
    <>
      <section className="related_section">
        <div className="container">
          <div className="section_title p_24">
            <h2 className="title">{title}</h2>
          </div>
          <div className="grid_post_block">
            {relatedArticles.map((item, i) => {
              return (
                <div className="post_card" key={i}>
                  <div className="card_img">
                    <Image
                      src={item.image}
                      alt="blog"
                      width={400}
                      height={250}
                      className="img_fluid"
                    />
                  </div>
                  <div className="card_body">
                    <Link href={`/blog/${item.slug}`}>
                      <h3 className="title">{item.title}</h3>
                    </Link>
                    <p className="para">{item.description}</p>
                    <div className="author">
                      By <span>{item.author}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
});

export default RelatedPost;
