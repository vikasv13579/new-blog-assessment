"use client";

import {
  AngryIcon,
  ChatIcon,
  HappyIcon,
  LoveIt,
  NeutralIcon,
  VHappyIcon,
} from "@/assets/icon/icon";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ratingOptions = [
  { value: 1, icon: <AngryIcon />, label: "Angry" },
  { value: 2, icon: <NeutralIcon />, label: "Neutral" },
  { value: 3, icon: <HappyIcon />, label: "Happy" },
  { value: 4, icon: <VHappyIcon />, label: "Very Happy" },
  { value: 5, icon: <LoveIt />, label: "Love It" },
];

function ErrorMessage({ message }) {
  return message ? <p style={{ color: "red" }}>{message}</p> : null;
}
export default function CommentForm({ onCommentSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const formattedDate = new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      const newComment = {
        image: "/images/user1.png",
        name: data.name,
        rating: parseFloat(data.rating),
        date: formattedDate,
        content: data.message,
      };

      onCommentSubmit?.(newComment);
      reset();
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("Error submitting comment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="comment_form_section">
      <div className="container">
        <div className="section_title">
          <h2 className="title comment_title">Add a comment</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form_grid" suppressHydrationWarning>
            {/* Name & Email */}
            <div>
              <div className="form_group mb_20">
                <label htmlFor="name" className="form_label">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="form_control"
                  {...register("name", { required: "Name is required" })}
                />
                <ErrorMessage message={errors.name?.message} />
              </div>
              <div className="form_group">
                <label htmlFor="email" className="form_label">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  className="form_control"
                  {...register("email", { required: "Email is required" })}
                />
                <ErrorMessage message={errors.email?.message} />
              </div>
            </div>

            {/* Comment */}
            <div className="form_group">
              <label htmlFor="comment" className="form_label">
                Comment
              </label>
              <textarea
                id="comment"
                placeholder="Write your comment here..."
                className="form_control textarea"
                {...register("message", { required: "Message is required" })}
              />
              <ErrorMessage message={errors.message?.message} />
            </div>

            {/* Rating */}
            <div className="rating_btn_block full_width">
              <div className="rating_block">
                <label>Rate the usefulness of the article</label>
                <div className="rating_list">
                  {ratingOptions.map(({ value, icon, label }) => (
                    <label key={value} style={{ cursor: "pointer" }}>
                      <input
                        type="radio"
                        value={value}
                        style={{ display: "none" }}
                        {...register("rating", {
                          required: "Rating is required",
                        })}
                      />
                      <div className="rating_item">
                        <div className="icon">{icon}</div>
                        <div className="label">{label}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="button_block">
                <button
                  type="submit"
                  className="btn btn_primary"
                  disabled={submitting}
                >
                  <ChatIcon />
                  {submitting ? "Submitting..." : "Submit"}
                  <span className="comment_text">Comment</span>
                </button>
              </div>
            </div>
            <ErrorMessage message={errors.rating?.message} />
          </div>
        </form>
      </div>
    </section>
  );
}
