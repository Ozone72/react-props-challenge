import React from "react";
import Card from "../components/Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+987 654 321"
        email="b@beyonce.com"
      />
    </div>
  );
}

export default App;
