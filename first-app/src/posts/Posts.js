import Post from "../post/Post.js";
import "./posts.css"

export default function Posts() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with JavaScript",
      content:
        "JavaScript is a versatile language used for web development. In this post, we'll cover the basics.",
    },
    {
      id: 2,
      title: "Understanding CSS Grid",
      content:
        "CSS Grid makes it easier to design web layouts. Let’s explore how it works with examples.",
    },
    {
      id: 3,
      title: "Why Learn Data Structures?",
      content:
        "Data structures form the backbone of efficient programming. This post explains their importance.",
    },
    {
      id: 4,
      title: "Exploring Node.js",
      content:
        "Node.js allows JavaScript to run on the server. We'll look at its features and benefits.",
    },
    {
      id: 5,
      title: "Version Control with Git",
      content:
        "Git helps developers track changes and collaborate efficiently. This guide introduces the basics.",
    },
  ];

  let postsView = posts.map((post) => {
    return <Post key={post.id} title={post.title} content={post.content} />;
  });

  return <div className="posts">{postsView}</div>;
}
