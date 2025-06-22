import React from "react";
import Link from "next/link";
import RelatedPost from "@/component/RelatedPost";
import Header from "@/component/Header";
import MainSection from "@/component/MainSection";
import BlogComments from "@/component/BlogComments";
import {
  blogPosts,
  mainPostDetails,
  relatedArticles,
  userProfiles,
} from "@/dummy/data";

export const metadata = {
  title: mainPostDetails.title,
  description: "Learn more about our company.",
  keywords: ["about", "company", "info"],
  authors: [{ name: mainPostDetails.author_name, url: "https://example.com" }],
  openGraph: {
    title: mainPostDetails.title,
    description: "OG description for social sharing",
    url: "https://example.com/about",
    siteName: "Assesment-blog",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: mainPostDetails.title,
    description: "Learn more about us on Twitter",
    images: ["https://example.com/twitter-image.jpg"],
    creator: "@Assesment-blog",
  },
  robots: {
    index: false,
    follow: false,
    nocache: false,
  },
};

export default function Home() {
  return (
    <>
      <Header title={mainPostDetails.title} image={mainPostDetails.image} />
      <MainSection
        postdetails={mainPostDetails}
        posts={blogPosts}
        profiles={userProfiles}
      />
      <BlogComments postId={mainPostDetails.id} />
      <RelatedPost title={"Related articles"} articles={relatedArticles} />

      <section className="related_section">
        <div className="container">
          <div
            className="main_heading"
            style={{ textAlign: "center", marginBottom: "24px" }}
          >
            <h2 className="title">Explore More Articles</h2>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ marginBottom: "20px" }}>
              Discover more fitness tips, nutrition advice, and wellness
              insights in our blog.
            </p>
            <Link href="/blog" className="btn btn_primary">
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
