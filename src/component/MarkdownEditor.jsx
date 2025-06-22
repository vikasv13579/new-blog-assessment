"use client";

import React, { useState, useEffect } from 'react';
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blogData';

const MarkdownEditor = ({ postId, onClose }) => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPostContent = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Find the post by ID from all blog posts
        const allPosts = getAllBlogPosts();
        const post = allPosts.find(p => p.id === postId);

        if (post) {
          setTitle(post.title);
          // Convert HTML body to markdown-like content for editing
          const markdownContent = post.body
            .replace(/<h3>(.*?)<\/h3>/g, '### $1\n')
            .replace(/<h2>(.*?)<\/h2>/g, '## $1\n')
            .replace(/<h1>(.*?)<\/h1>/g, '# $1\n')
            .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
            .replace(/<em>(.*?)<\/em>/g, '*$1*')
            .replace(/<p>(.*?)<\/p>/g, '$1\n\n')
            .replace(/<blockquote>(.*?)<\/blockquote>/g, '> $1\n')
            .replace(/<ul>(.*?)<\/ul>/g, '$1')
            .replace(/<ol>(.*?)<\/ol>/g, '$1')
            .replace(/<li>(.*?)<\/li>/g, '- $1\n')
            .replace(/<br\s*\/?>/g, '\n')
            .replace(/&nbsp;/g, ' ')
            .trim();

          setContent(markdownContent);
        } else {
          // Fallback content if post not found
          setTitle('Sample Post Title');
          setContent('# Sample Post\n\nThis is a sample post content that you can edit.\n\n## Features\n\n- Feature 1\n- Feature 2\n- Feature 3\n\n**Bold text** and *italic text* are supported.\n\n> This is a blockquote example.');
        }
      } catch (error) {
        console.error('Error loading post:', error);
        // Fallback content on error
        setTitle('Sample Post Title');
        setContent('# Sample Post\n\nThis is a sample post content that you can edit.\n\n## Features\n\n- Feature 1\n- Feature 2\n- Feature 3\n\n**Bold text** and *italic text* are supported.');
      } finally {
        setLoading(false);
      }
    };

    loadPostContent();
  }, [postId]);

  const handleSave = async () => {
    setSaving(true);
    try {
      // Simulate API call to save the post
      await new Promise(resolve => setTimeout(resolve, 1000));

      // In a real app, you would send the data to your API
      console.log('Saving post:', { postId, title, content });

      alert('Post saved successfully!');
      onClose();
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Error saving post. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Your changes will be lost.')) {
      onClose();
    }
  };

  // Simple markdown to HTML converter
  const convertMarkdownToHtml = (markdown) => {
    return markdown
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
      .replace(/^- (.*$)/gim, '<li>$1</li>')
      .replace(/\n\n/gim, '</p><p>')
      .replace(/\n/gim, '<br>')
      .replace(/^<p>(.*)<\/p>$/gim, '<p>$1</p>')
      .replace(/<li>(.*?)<\/li>/gim, '<ul><li>$1</li></ul>')
      .replace(/<\/ul>\s*<ul>/gim, '');
  };

  if (loading) {
    return (
      <div className="markdown-editor">
        <div className="editor-loading">
          <div className="loading-spinner"></div>
          <p>Loading post content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="markdown-editor">
      <div className="editor-toolbar">
        <button
          className="btn btn_primary"
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
        <button
          className="btn btn_outline_primary"
          onClick={handleCancel}
          disabled={saving}
        >
          Cancel
        </button>
      </div>

      <div className="editor-fields">
        <div className="field-group">
          <label htmlFor="post-title">Title</label>
          <input
            id="post-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="title-input"
            placeholder="Enter post title..."
          />
        </div>

        <div className="field-group">
          <label htmlFor="post-content">Content (Markdown)</label>
          <textarea
            id="post-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="content-textarea"
            placeholder="Write your post content in Markdown..."
            rows={20}
          />
        </div>

        <div className="field-group">
          <label>Preview</label>
          <div className="content-preview">
            <div
              className="markdown-preview"
              dangerouslySetInnerHTML={{
                __html: convertMarkdownToHtml(content)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;