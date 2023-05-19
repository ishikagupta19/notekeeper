import React, {useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Button from '@mui/material/Button';

import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';


const CreateNote =(props) =>{


    const [expand, setExpand]=useState(false);

    const [note, setNote] = useState({
        title:"",
        content:"",
    });

    const InputEvent =(event)=>{
        // const value= event.target.value;
        // const name= event.target.name;

        const {name,value} = event.target;
        setNote((prevData)=>{
            return{
                ...prevData,
                [name]: value,
            }
        })
        console.log(note);
    }

    const addEvent=()=>{
        note.title=note.title.trim();
        note.content=note.content.trim();
        if(note.title>"" || note.content>"")
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        });

    }
    const expandIt=()=>{
        setExpand(true);

    }

    const btoNormal=()=>{
        setExpand(false);
    }



    return <>
    <div className="main_note" onDoubleClick={btoNormal}>
        <form>
           { expand?
            <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"/>: null}
            <textarea rows="" columns="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a note..." onClick={expandIt} > </textarea>
           { expand?
            <Button  onClick={addEvent}>
                <AddBoxIcon className="plus_sign"/>
            </Button>:null}
        </form>
    </div>
    </>
};


// const CreateNote = () => {

//     const [note,setNote] = useState({
//         title:"",
//         content:"",
//     });
    
//     const InputEvent = (event) ={

//         // const value = event.target.value;
//         // const name = event.target.name;

//         const { name, value } = event.target;

//         setNote((prevData) => {
//             return{
//                 ...prevData,
//                 [name]: value,

//             }
//         })
//     }

//     const addEvent = 

//     return (
//         <>
//             <div className="main_note">
//                 <form>
//                     <input 
//                     type="text"
//                     name="title"
//                     value={note.title} 
//                     onChange={InputEvent} 
//                     placeholder="Title" 
//                     autoComplete="off"
//                     />
//                     <textarea 
//                     name="content" 
//                     cols="" 
//                     rows="" 
//                     value={note.content}
//                     onChange={InputEvent}  
//                     placeholder="Write a note..." >
//                     </textarea>
//                     <Button onClick={addEvent}>
//                      <AddBoxIcon className="plus_sign"/>
//                     </Button>
//                 </form>
//             </div>
//             </>
//     );
// };

export default CreateNote;