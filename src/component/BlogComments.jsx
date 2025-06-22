"use client";

import React, { useState, useEffect } from "react";
import { getCommentsForPost } from "@/data/blogData";
import CommentForm from "./CommentForm";

const BlogComments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  console.log("comments", comments);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const fetchedComments = await getCommentsForPost(postId);
        setComments(fetchedComments);
      } catch (err) {
        setError("Failed to load comments");
        console.error("Error fetching comments:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  const addNewComment = (commentData) => {
    const newComment = {
      id: Date.now(),
      postId: postId,
      image: "/images/user1.png",
      name: commentData.name,
      rating: parseFloat(commentData.rating),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
      content: commentData.content,
      isNew: true,
    };

    setComments((prevComments) => [...prevComments, newComment]);
  };

  if (loading) {
    return (
      <section className="comments-section">
        <div className="container">
          <div className="section_title p_24">
            <h2 className="title comment_title">Comments</h2>
          </div>
          <div className="comments-list">
            {[1, 2, 3].map((i) => (
              <div key={i} className="comment-item">
                <div className="comment-avatar skeleton-avatar"></div>
                <div className="comment-content">
                  <div className="comment-header skeleton-name"></div>
                  <div className="comment-text skeleton-text"></div>
                  <div className="comment-text skeleton-text"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="comments-section">
        <div className="container">
          <div className="section_title p_24">
            <h2 className="title comment_title">Comments</h2>
          </div>
          <div className="comments-error">
            <p>{error}</p>
            <button
              className="btn btn_primary"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="comments-section">
      <div className="container">
        <div className="section_title p_24">
          <h2 className="title comment_title">Comments ({comments.length})</h2>
        </div>

        {comments.length === 0 ? (
          <div className="no-comments">
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          <div className="comments-list">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className={`comment-item ${comment.isNew ? "new-comment" : ""}`}
              >
                {comment.isNew && <div className="new-comment-badge">New</div>}
                <div className="comment-avatar">
                  <img
                    src={comment.image}
                    alt={comment.name}
                    className="img_fluid"
                  />
                </div>
                <div className="comment-content">
                  <div className="comment-header">
                    <h4 className="comment-author">{comment.name}</h4>
                    <div className="comment-meta">
                      <span className="comment-rating">{comment.rating} ★</span>
                      <span className="comment-date">{comment.date}</span>
                    </div>
                  </div>
                  <div className="comment-text">
                    <p>{comment.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="comment-form-section">
          <CommentForm onCommentSubmit={addNewComment} />
        </div>
      </div>
    </section>
  );
};

export default BlogComments;
