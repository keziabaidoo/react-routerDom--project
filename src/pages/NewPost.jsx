import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { redirect, useLoaderData, useNavigate, Form } from "react-router-dom";
import Post from "./Post";


function NewPost() {
  // const [title, setTitle] = useState("");
  // const [summary, setSummary] = useState("");

  const [show, setShow] = useState(true);

  //navigate to previous page
  const navigate = useNavigate();

  // const post = useLoaderData();

  const handleClose = () => navigate(-1);

    // const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     const post = {
  //       title: title,
  //       summary: summary,
  //     };

  // try {

  // const request = await  fetch('http://localhost:8080/posts', {
  //     method: 'POST',
  //     body:JSON.stringify(post),
  //     header: {
  //       'content-type': 'application/json'
  //     }
  //   });

  //   if(request.ok) {
  //     console.log(request.json())
  //   }
  // } catch (error) {
  //    console.log(error)
  // }

  //   };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: "green", fontFamily: "fantasy" }}>
          Add new post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form action="/create-post" method="POST">
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter title"
            // required
          />
          <br /> <br />
          <label htmlFor="title">Summary</label>
          <br />
          <textarea
            name="summary"
            id="summary"
            cols="24"
            rows="5"
            placeholder="Enter summary"
            // required
          />
          <br />
          <br />
          <div>
            <button onClick={handleClose}>Close</button>

            <button>Add Post</button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default NewPost;


export async function postAction({ request }) {
  const formData = await request.formData();


  
  const title = formData.get("title");
  const summary = formData.get("summary");
  
  if(!title)  {
    alert('Title is required');
    return null;
  }

  if(!summary) {
    alert('Summary is required')
  }


  await fetch("http://localhost:7000/posts/", {
    method: "POST",
    body: JSON.stringify({
      title,
      summary,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // console.log(post);

  return redirect("/");
}

// export async function handlePost({ params }) {
//   const id = params.postId;

//   const response = await fetch("http://localhost:8080/posts/" + id, {
//     method: "POST",
//     header: {
//       "content-Type": "application/json",
//     },
//     body: JSON.stringify([title, summary]),
//   });

//   if (!response.ok) {
//     throw Error("cannot fetch data");
//   }

//   console.log(response.json());

//   return response.json();
// }
