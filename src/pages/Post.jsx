import React from "react";
import { Link, useNavigate, Form, useNavigation } from "react-router-dom";
import { SlClose } from "react-icons/sl";
import { CiEdit } from "react-icons/ci";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { userState } from "./store";

function Post(props) {
  const route = useNavigate();
  const navigation = useNavigation()

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(props.post.title);
  const [summary, setSummary] = useState(props.post.summary);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  // delete post
  async function delPost(id) {
    if (confirm("are you sure you want to delete")) {
      try {
        await fetch(`http://localhost:7000/posts/${id}`, {
          method: "DELETE",
          headers: {
            "content-Type": "application/json",
          },
        });

        route("/");
      } catch (error) {
        console.log(error);
      }
    }
  }


  //updating post
  async function updatePost(id) {
    
    try {

      await new Promise((resolve, reject) => {
        setTimeout(resolve('resolved'), 6000)
      })
      const request = await fetch(`http://localhost:7000/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title, summary }),
        headers: {
          "content-Type": "application/json",
        },
      });

      route("/");
      handleClose();
      console.log(await request.json());
      // console.log(await request.json);


      if (!request.ok) {
        throw Error("The post could not be updated");
      }
    } catch (error) {
      console.log(error);
    }
  }


  {
    if(navigation.state === 'loading') {
      return <div style={{color: "yellow", fontSize:"1rem", fontFamily:"cursive"}}>Loading.......</div>
    }
  }
  // const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#fff",
        borderRadius: "5px",
        margin: "1rem",
        width: "100%",
        boxShadow: "1px 1px 2px 2px green",
        position: "relative",
      }}
    >

      <SlClose
        color="green"
        size={22}
        style={{
          position: "absolute",
          right: 0,
          top: "-2px",
          cursor: "pointer",
        }}
        onClick={() => delPost(props.post.id)}
      />

{userState.loggedIn ? (


      <p
        style={{ color: "green", cursor: "pointer", fontFamily: "fantasy" }}
        // onClick={() => navigate(-1)}
      >
        {props.post.title}
        <CiEdit size={22} onClick={handleOpen} />
      </p>
      
): null}
      <p style={{ fontSize: "16px" }}> {props.post.summary}</p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "green", fontFamily: "fantasy" }}>
            Edit Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="commentForm">
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter title"
              // required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
            <br />
            <br />
            <div>
              <button onClick={handleClose}>Close</button>

              <button type="submit" onClick={() => updatePost(props.post.id)}>
                Edit Post
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Post;
