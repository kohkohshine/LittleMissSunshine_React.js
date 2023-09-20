{/*Harun*/}
import { useState } from "react";

const CardData = ( ) => {
    const [doneCard,setDoneCard] = useState(false);
    const [undoCard,setUndoCard] = useState(true);

    const toggleDoneCard = () => {
      setDoneCard(true);
      setUndoCard(false);
    };
    const toggleUndoCard = () => {
      setUndoCard(true);
      setDoneCard(false);
    }
  
  return (
        <>
{/* Card example */}
<div className={`card shadow mt-1 ${ doneCard ?'text-decoration-line-through' : ''}`} style={{width: '40vw'}}>
<div className={`card-body ${doneCard ? 'bg-success' : ''}`}>
  <div className="d-flex justify-content-end">
    <p className="p-0 hDate" style={{ fontSize: '10px' }}>
      01/08/2023
    </p>
  </div>
  <h5 className="card-title" style={{ marginTop: '-1.5rem' }}>
    Card title:
  </h5>
  <p className="card-text">
    Some quick example text to build on the card title <br></br>and make up the bulk of the s content.
  </p>
  <div className="gap-3 hIcons">
    <button className="btn btn-primary" type="button" style={{ fontSize: '1.2rem' }}>
      <i className="bi bi-pencil-square"></i>
    </button>
    <button className="btn btn-danger"  type="button" style={{ fontSize: '1.2rem' }}>
      <i className="bi bi-trash"></i>
    </button>
    <button className={`btn btn-success ${doneCard ? 'd-none' : ''} `} type="button" onClick={toggleDoneCard} style={{ fontSize: '1.2rem'}}>
      <i className="bi bi-check-circle"></i>
    </button>
    <button className={`btn btn-warning ${undoCard ? 'd-none' : ''}`} id="hCancelBtn" type="button" style={{ fontSize: '1.2rem' }} onClick={toggleUndoCard}>
              <i className="bi bi-arrow-counterclockwise"></i>
            </button>

  </div>
</div>
</div>
</>
    )
};

export default CardData;