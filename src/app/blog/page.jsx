import React from "react";
import Link from "next/link";
import { getAllBlogPosts } from "@/data/blogData";
import Header from "@/component/Header";
import PostCard from "@/component/PostCard";

export const metadata = {
  title: "Assesment-blog",
  description: "Read our latest articles on fitness, nutrition, and wellness",
  keywords: ["blog", "fitness", "nutrition", "wellness"],
  openGraph: {
    title: "Assesment-blog",
    description: "Read our latest articles on fitness, nutrition, and wellness",
    url: "https://example.com/blog",
    siteName: "Assesment-blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Header title="Our Blog" image="/images/blog.jpg" />

      <section className="related_section">
        <div className="container">
          <div className="section_title p_24">
            <h1 className="title">Latest Articles</h1>
          </div>

          <div className="grid_post_block">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <PostCard
                  image={post.image}
                  category={post.category}
                  date={new Date(post.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                  title={post.title}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
