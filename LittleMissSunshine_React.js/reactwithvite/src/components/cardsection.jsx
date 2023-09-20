{/*Harun*/}
import CardData from './carddata';

const DynamicCards = () => {
    return (
        <>
    <section id="hBgColor">
      <div className="mb-2 mt-2">
        <h3 className="h3 p-1">My to-dos</h3>
      </div>
   <CardData />
   <CardData />
   <CardData />
    </section>
    </>
  );
};
  

export default DynamicCards;