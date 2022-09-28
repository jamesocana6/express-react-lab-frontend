import React from "react";
import { useState, useEffect } from "react";

function Projects(props) {

    const [ projects, setProjects ] = useState(null);

    const getProjects = async () => {
        const response = await fetch(props.URL + "projects");
        const data = await response.json()
        setProjects(data);
    }

    useEffect(() => {getProjects()},[])

    const loaded = () => {
        const allProjects = projects.map((p, index) => {
            return (
                <div className="project" key={index}>
                    <h1>{p.name}</h1>
                    <img src={p.image} alt={p.name}/>
                    <a href={p.git}>
                        <button>Github</button>
                    </a>
                    <a href={p.live}>
                        <button>Live Site</button>
                    </a>
                </div>
            )
        })
        return (
            <div className="projects">
                {allProjects}
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

    return projects ? loaded() : loading()

}

export default Projects;