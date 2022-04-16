import React from "react";
import "./App.css";

function App() {
  return (
    <body>
      <div className="bg">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        ></link>

        <header>
          <nav class="navbar">
            <div class="logo">Merka</div>
            <ul class="nav-list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
          <main>
            <img src="/img/bitcoin-logo.png" className="bitcoin"></img>
          </main>
          <div class="icon">
            <ul>
              <li>
                <img src="/img/frame1.png" className="frame1"></img>
              </li>
              <li>
                <img src="/img/frame2.png" className="frame2"></img>
              </li>
              <li>
                <img src="/img/frame3.png" className="frame3"></img>
              </li>
            </ul>
          </div>
        </header>
        <div>
          <ul>
            <li>
              <img src="/img/Box.png" className="box"></img>
            </li>
            <li>
              <img src="/img/stepper.png" className="stepper"></img>
            </li>
          </ul>
        </div>

        <div className="block">
          <h1>
            <p>MERKLABS BLOCKCHAINDEVELOPMENT</p>
            <p>
              DEVELOPMENT AND
              <img src="/img/package.png" className="package"></img>
            </p>

            <p>SECURITY SOLUTIONS</p>
          </h1>
          <h3>
            <p>We provide blockchain development services and also assure </p>
            <p>you comprehensive security in blockchain developmen</p>
          </h3>
          <button className="button">Explore More</button>
        </div>
        <div className="footer">
          <img src="/img/coonect.png" className="coonect"></img>
        </div>
      </div>
      {/* <div className="rect">
        <img src="/img/Rectangle 1.png" className="rectangle"></img>
      </div> */}
    </body>
  );
}

export default App;
