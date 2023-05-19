 import React from "react";
 import ReactDOM from "react-dom";
 import {BrowserRouter} from "react-router-dom";
 import "./index.css";
 import App  from "./App";
 import TodoList from "./ToDoList";
 import ListCom from "./ListCom";
 import CreateNote from "./CreateNote"
import Header from "./Header";
import Footer from './Footer';
import Note from "./Note";




 ReactDOM.render(
 <BrowserRouter>
    <Header/>,
    <CreateNote />,
    <Note/>,
    <Footer/>,
    </BrowserRouter>,
    
     document.getElementById("root")
     
 );

