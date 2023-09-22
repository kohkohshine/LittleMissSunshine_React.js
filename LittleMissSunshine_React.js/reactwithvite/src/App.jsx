import DynamicCards from './components/cardsection'
import Form from "./components/form";
import NavBar from "./components/navbar";
import {useState} from 'react';

const App = () => {
    const[toDos, setToDos] = useState([
        {date:'22.09.2023', title:'birthday todo', toDo:'get something from the shop.'},
        {date:'29.09.2023', title:'party todo', toDo:'bake a cake.'}
    ])
    return(
        <>
        <NavBar />
        <Form setToDos={setToDos} />
        <DynamicCards setToDos={setToDos} toDos={toDos} />
        </>
    )
};



export default App;

