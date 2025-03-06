import React from 'react';
import './styles.scss';

const Blog = () => {
  const posts = [
    {
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React and how to create your first component',
      date: '2024-03-05',
      readTime: '5 min read',
      slug: 'getting-started-with-react'
    }
  ];

  return (
    <section className="blog" id="blog">
      <div className="container">
        <h2 className="section-title">Latest Posts</h2>
        <div className="blog__grid">
          {posts.map((post, index) => (
            <article key={index} className="blog-card">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-card__meta">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <a href={`/blog/${post.slug}`} className="read-more">
                Read More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
