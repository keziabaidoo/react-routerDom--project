import React from "react";

import HomeStyles from "../pages/Home.module.css";
import Startup from "../assets/images/male-employee-getting-used-his-new-office-job-along-with-female-colleagues_23-2149034607.jpg";
import Web from '../assets/images/download (2).png'

function Home() {

  return (
    <>
      <section className={HomeStyles.section}>
        <div className={HomeStyles.startupContent}>
          <p>WE ARE NEW BUT DOING AMAZING</p>
          <h2>We give the power back to the user</h2>
          <p style={{fontFamily:"s"}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            aliquam saepe architecto. Nulla, blanditiis aut deleniti quae at
            natus aperiam dolores eum, accusantium provident officia
            consequuntur quisquam quo modi placeat?
          </p>

          <div className={HomeStyles.btn}>
            <button>Explore</button>
          </div>
        </div>

        <img src={Startup} alt="startup" />
      </section>

      <section>
        <div>
          <h2>Services We Provide</h2>
          <p>
            Content marketing is nothing but offering users value. It is not
            just about traffic minion customers.
          </p>
        </div>

        <div className={HomeStyles.services}>
            <div>
                <img src={Web} alt="web design" />
                <p>Web Design</p>
                <h2>Making users amuse is our main go.Let talk and see what you get.</h2>
                <span>Let's Talk</span>
            </div>

            <div>
                <img src={Web} alt="" />
                <p>E-</p>
                <h2>Making users amuse is our main go.Let talk and see what you get.</h2>
                <span>Let's Talk</span>
            </div>

            <div>
                <img src={Web} alt="" />
                <p></p>
                <h2>Making users amuse is our main go.Let talk and see what you get.</h2>
                <span>Let's Talk</span>
            </div>

            <div>
                <img src={Web} alt="" />
                <p></p>
                <h2>Making users amuse is our main go.Let talk and see what you get.</h2>
                <span>Let's Talk</span>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;
