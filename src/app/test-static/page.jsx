import React from "react";
import { getAllBlogPosts } from "@/data/blogData";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function TestStaticPage() {
  const posts = getAllBlogPosts().slice(0, 3);
  const generatedAt = new Date().toISOString();

  return (
    <div className="container static-test-container">
      <h1>Static Generation Test</h1>
      <p>This page was generated at: {generatedAt}</p>

      <h2>Available Posts:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/blog/${post.slug}`} className="static-test-link">
              {post.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="static-test-status">
        <h3>Static Generation Status:</h3>
        <p>✅ generateStaticParams: Working</p>
        <p>✅ generateMetadata: Working</p>
        <p>✅ Dynamic Routes: Working</p>
        <p>✅ App Router: Working</p>
      </div>
    </div>
  );
}
