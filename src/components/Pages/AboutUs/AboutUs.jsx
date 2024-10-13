import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">
      <div className="information-container">
        <h2>About Us</h2>
        <br />
        <h5>We're an Organic Veggies Farm</h5>
        <h5>that began operating in 2005!</h5>
        <br />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          malesuada feugiat pulvinar. Curabitur elementum dolor sed erat
          hendrerit scelerisque. Vivamus lacus felis, suscipit vitae tincidunt
          sed, aliquet vitae turpis. Nam posuere neque a nisi mollis iaculis.
          Donec consectetur justo vel porttitor tristique. In dictum tincidunt
          ipsum in posuere. Etiam sit amet tortor sed lorem ultrices euismod
          vitae quis leo. Mauris eget luctus lacus. Cras orci augue, aliquam
          vitae rhoncus id, imperdiet nec risus. Integer eu efficitur quam, eu
          aliquet nisi. Phasellus finibus dapibus imperdiet. Nunc viverra
          lobortis risus id sollicitudin. Proin vitae ullamcorper nibh. Aliquam
          in erat lectus. Etiam ut risus in tellus tristique tempor. Sed non
          elit auctor, suscipit massa aliquam, dictum tellus. Nam turpis nibh,
          luctus vitae urna ac, ornare placerat odio. Suspendisse volutpat
          pellentesque ex, eu pellentesque leo bibendum quis. Donec bibendum non
          nisl sollicitudin interdum. Maecenas eget tempor nisi, vel finibus
          purus. Fusce sed nisl urna. Sed pretium neque id felis mattis, in
          consequat lectus dapibus. Nunc hendrerit finibus neque et tempor.
          Aenean vitae metus at sapien posuere commodo vel quis nisi. Praesent
          consectetur facilisis libero, in auctor magna pulvinar sed. Nunc
          convallis tellus libero, non convallis elit lacinia accumsan. Donec
          blandit libero sed odio venenatis ornare. Donec ultricies vulputate
          purus at tempus. Sed ut nunc in diam rutrum lacinia. Suspendisse diam
          arcu, maximus ac urna rhoncus, sodales dapibus dui. Donec eu erat
          rhoncus, ullamcorper enim nec, luctus mauris. Sed viverra justo eget
          felis elementum rhoncus. Duis et elementum tortor, quis cursus nulla.
          Pellentesque est sem.
        </p>
      </div>
      <Link to="/">
        <button className="go-back-button">Back</button>
      </Link>
    </div>
  );
}

export default AboutUs;
