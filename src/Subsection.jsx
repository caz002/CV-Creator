import {useState} from 'react';
import "./App.css";

export default function Subsection({labels, editMode}){
    let initialData = [];
    const [data, setData] = useState(initialData);

    for( let i = 0; i < labels.length; i++){
        initialData.push("");
    }

    function handleChange(e, index){
        let newData = data.map((items, i) => i === index ? e.target.value : items);
        setData(newData);
    }
    
    return(
        <>
        {editMode === true ?
        (<form>
            {labels.map((item, index) => {
                return(<>
                <p>{item}</p>
                    <input type = "text" onChange = {(e) => handleChange(e, index)} value={data[index]} />
                </>)
            })}
        </form>)
        : (labels.map((item, index) => {
        return(<>
            <p key = {index}>{item}</p>
            <p>{data[index]}</p>
            </>)})
        )} 
        </>
       
    );
}