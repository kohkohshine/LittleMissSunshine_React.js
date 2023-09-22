{/*Harun*/}

const CardData = ({toDo}) => {
    return (
        <>
{/* Card example */}
<div className="card shadow">
<div className="card-body" style={{ minWidth: '50rem' }}>
  <div className="d-flex justify-content-end">
    <p className="p-0 hDate" style={{ fontSize: '10px' }}>
      {toDo.date}
    </p>
  </div>
  <h5 className="card-title" style={{ marginTop: '-1.5rem' }}>
    {toDo.title}
  </h5>
  <p className="card-text">
{toDo.todo}
  </p>
  <div className="gap-1 hIcons">
    <button className="btn btn-primary d-none" type="button" style={{ fontSize: '1.2rem' }}>
      <i className="bi bi-pencil-square"></i>
    </button>
    <button className="btn btn-danger"  type="button" style={{ fontSize: '1.2rem' }}>
      <i className="bi bi-trash"></i>
    </button>
    <button className="btn btn-success" type="button" style={{ fontSize: '1.2rem' }}>
      <i className="bi bi-check-circle"></i>
    </button>
  </div>
</div>
</div>

      {/* Card Done Example */}
      
      <div className="card shadow mt-1">
        <div className="card-body">
          <div className="d-flex justify-content-end">
            <p className="p-0 hDate" style={{ fontSize: '10px' }}>
              01/08/2023
            </p>
          </div>
          <h5 className="card-title" style={{ marginTop: '-1.5rem' }}>
          Card title:
          </h5>
          <p className="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the cards content. 
          </p>
          <div className="gap-3 hIcons">
            <button className="btn btn-primary" type="button" style={{ fontSize: '1.2rem' }}>
              <i className="bi bi-pencil-square"></i>
            </button>
            <button className="btn btn-danger" type="button" style={{ fontSize: '1.2rem' }}>
              <i className="bi bi-trash"></i>
            </button>
            <button className="btn btn-warning" id="hCancelBtn" type="button" style={{ fontSize: '1.2rem' }}>
              <i className="bi bi-arrow-counterclockwise"></i>
            </button>
          </div>
        </div>
    </div> 
</>
    )
};

export default CardData;