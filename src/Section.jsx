import {useState} from "react";
import Subsection from "./Subsection.jsx";
import './App.css'

export default function Section({title, labels}){
    const [data, setData] = useState([]);
    const [currSection, setCurrSection] = useState(null);

    function addSection(){
        setData([...data, {id: Math.random()}]);
    }
    return(
        <>
            <div className="heading">
                <h2>{title}</h2>
                <button onClick = {addSection}>+ New</button>
            </div>
            <div>
                {data.map(item => (
                <div className = "subsection" key={item.id}>
                    <Subsection labels = {labels} editMode = {item.id !== currSection} />
                    {item.id !== currSection ?
                    (<button onClick = {() => setCurrSection(item.id)}>Save</button>)
                    : (<button onClick = {() => setCurrSection(null)}>Edit</button>)}
                </ div>
                ))}
            </div>
        </>
    );
}
