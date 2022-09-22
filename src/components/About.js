import React from "react";

const About = ({image = "https://via.placeholder.com/215", text}) => {
    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{text}</p>
        </aside>
    )
}

export default About;