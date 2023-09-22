{/*Harun*/}
import CardData from './carddata';

const DynamicCards = ({toDos, setToDos}) => {
console.log(toDos);
    return (
        <>
    <section id="hBgColor">
      <div className="mb-2 mt-2">
        <h3 className="h3 p-1">My to-dos</h3>
      </div>
      {toDos.map((eachToDo) => {
        return <CardData toDo={eachToDo}/>
      })}
      </section>
    </>
  );
};
  

export default DynamicCards;