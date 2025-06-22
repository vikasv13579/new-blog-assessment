import React from "react";
import {
  getBlogPostBySlug,
  getAllBlogPosts,
  getRelatedPosts,
} from "@/data/blogData";
import Header from "@/component/Header";
import MainSection from "@/component/MainSection";
import RelatedPost from "@/component/RelatedPost";
import BlogComments from "@/component/BlogComments";
import EditButton from "@/component/EditButton";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you are looking for does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, "fitness", "blog", "wellness"],
    authors: [{ name: post.author_name, url: "https://example.com" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://example.com/blog/${post.slug}`,
      siteName: "Assesment-blog",
      images: [
        {
          url: post.image,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      author: post.author_name,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      creator: "@Assesment-blog",
    },
    alternates: {
      canonical: `https://example.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="container">
        <div className="error-page">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <a href="/blog" className="btn btn_primary">
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  const postdetails = {
    title: post.title,
    image: post.image,
    author_img: post.author_img,
    author_name: post.author_name,
    author_description: post.author_description,
    date: new Date(post.date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    body: post.body,
  };

  const relatedPosts = getRelatedPosts(post.slug, 3);
  const articles = relatedPosts.map((relatedPost) => ({
    image: relatedPost.image,
    title: relatedPost.title,
    description: relatedPost.excerpt,
    author: relatedPost.author_name,
    slug: relatedPost.slug,
  }));

  const recentPosts = getAllBlogPosts()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  return (
    <>
      <Header title={postdetails.title} image={postdetails.image} />
      <MainSection
        postdetails={postdetails}
        posts={recentPosts}
        profiles={[]}
      />

      <div className="container">
        <div className="edit-section">
          <EditButton postId={post.id} />
        </div>
      </div>
      <BlogComments postId={post.id} />
      <RelatedPost title="Related articles" articles={articles} />
    </>
  );
}
