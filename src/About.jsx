import React from "react";

const About = (props) =>{
    return(
    <>
    <div className="container">
    return <h1 className="text-center"> Hello, I am {props.name} Page :)</h1>
    <br />
    <div className="text-center">
    <div class="card" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    <button className="btn btn-outline-info text-center">Welcome</button>
    </div>
    </div>
    </>
    );
};

export default About;