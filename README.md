# Responsive Blog Page - Next.js

This project is a responsive blog page built with Next.js, created as a practical task to demonstrate proficiency in frontend development, particularly with static site generation, client-side rendering, and modern CSS.

## Live Demo

[https://new-blog-assessment.vercel.app/]

## Figma Design

The project's UI is based on the following Figma design:
[Figma - New Practical Task](https://www.figma.com/design/4mNg610JaxrMzCXY6MnGSB/New-Practical-Task?node-id=0-1&p=f&t=ABNsSzRT6qOHW3UG-0)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18.x or later)
- npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/vikasv13579/new-blog-assessment.git
    ```
2.  Navigate to the project directory
    ```sh
    cd new-blog-assessment
    ```
3.  Install NPM packages
    ```sh
    npm install
    ```
4.  Run the development server
    npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features Implemented

- **Static Site Generation (SSG):** Blog posts are statically generated using `getStaticProps` and `getStaticPaths` for optimal performance.
- **Dynamic Routing:** Each blog post has its own unique URL (e.g., `/blog/post-title`).
- **Client-Side Rendering (CSR):** The comments section is fetched and rendered on the client-side using a `useEffect` hook.
- **Dynamic Component Loading:** An "Edit" button dynamically loads a Markdown editor using `next/dynamic` to reduce the initial bundle size.
- **Responsive Design:** The application is fully responsive across various screen sizes, from mobile to desktop, using Flexbox/Grid and media queries.
- **Modern CSS:** Styled with plain CSS, adhering to BEM naming conventions and best practices for layout and interactivity.
- **Semantic HTML:** Built with a focus on accessibility and clean, semantic markup.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** JavaScript
- **Styling:** CSS (with BEM)
- **Deployment:** Vercel (or your choice)
