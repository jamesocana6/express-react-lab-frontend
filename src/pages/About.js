import React from "react";
import { useEffect, useState } from "react";

function About(props) {
    const [ about, setAbout ] = useState(null);

    const getAbout = async () => {
        const response = await fetch(props.URL + "about");
        const data = await response.json();
        setAbout(data);
    }

    useEffect(() => getAbout,[]);

    const loaded = () => {
        return (
            <div>
                <h2>{about.name}</h2>
                <h3>{about.email}</h3>
                <p>{about.bio}</p>
            </div>
        )
    }
    
    const loading = () => {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    return about ? loaded() : loading()

}

export default About;