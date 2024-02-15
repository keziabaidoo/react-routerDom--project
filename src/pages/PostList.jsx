import { useState } from "react";
import React from "react";
import Post from "./Post";
import { Outlet, useLoaderData } from "react-router-dom";

function PostList() {
  // const [posts, setPost] = useState([
  //   {
  //     id: 1,
  //     title: "first post",
  //     summary:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt provident cupiditate est, vitae voluptas, exercitationem similique dicta sequi eligendi a dolore maiores praesentium perspiciatis sint quidem minima earum quaerat asperiores.",
  //   },
  //   {
  //     id: 2,
  //     title: "second post",
  //     summary:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt provident cupiditate est, vitae voluptas, exercitationem similique dicta sequi eligendi a dolore maiores praesentium perspiciatis sint quidem minima earum quaerat asperiores.",
  //   },

  //   {
  //     id: 3,
  //     title: "third post",
  //     summary:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt provident cupiditate est, vitae voluptas, exercitationem similique dicta sequi eligendi a dolore maiores praesentium perspiciatis sint quidem minima earum quaerat asperiores.",
  //   },
  // ]);

  // useEffect(() => {
  // console.log('This just got called');
  //   return () => {
  //     cleanup
  //   }
  // }, [])

  const posts = useLoaderData();

  console.log(posts)

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(16rem, 1fr )",
          gap: "1rem",
        }}
      >
        {posts.length > 0 ? (
          posts.map((post) => {
            return <Post key={post.id} post={post} />;

            // <div key={post.id}>
            //   <p>{post.title}</p>
            //   <p>{post.summary}</p>
            // </div>;
          })
        ) : (
          <p>Please add new post</p>
        
        )}
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default PostList;

export async function postLoader() {
  const data = await fetch("http://localhost:7000/posts/");

  if (!data.ok) throw Error("cannot fetch post");

  return data.json();
}
