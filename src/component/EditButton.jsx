"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const MarkdownEditor = dynamic(() => import("./MarkdownEditor"), {
  loading: () => (
    <div className="editor-loading">
      <div className="loading-spinner"></div>
      <p>Loading editor...</p>
    </div>
  ),
  ssr: false,
});

const EditButton = ({ postId }) => {
  const [showEditor, setShowEditor] = useState(false);

  const handleEditClick = () => {
    setShowEditor(true);
  };

  const handleCloseEditor = () => {
    setShowEditor(false);
  };

  return (
    <div className="edit-button-container">
      <button className="btn btn_outline_primary" onClick={handleEditClick}>
        Edit Post
      </button>

      {showEditor && (
        <div className="editor-overlay">
          <div className="editor-modal">
            <div className="editor-header">
              <h3>Edit Post</h3>
              <button
                className="close-button"
                onClick={handleCloseEditor}
                aria-label="Close editor"
              >
                ×
              </button>
            </div>
            <div className="editor-content">
              <MarkdownEditor postId={postId} onClose={handleCloseEditor} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditButton;
