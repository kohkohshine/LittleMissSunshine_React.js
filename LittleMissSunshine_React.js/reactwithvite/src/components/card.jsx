{/*Harun*/}
const DynamicCards = () => {
    return (
        <>
    <section id="hBgColor">
      <div className="mb-2 mt-2">
        <h3 className="h3 p-1">My to-do's</h3>
      </div>
   {/*Card example*/}
      <div className="card shadow d-none">
        <div className="card-body" style={{ minWidth: '50rem' }}>
          <div className="d-flex justify-content-end">
            <p className="p-0 hDate" style={{ fontSize: '10px' }}>
              01/08/2023
            </p>
          </div>
          <h5 className="card-title" style={{ marginTop: '-1.5rem' }}>
            Card title:
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="gap-1 hIcons">
            <button className="btn btn-primary d-none" id="hEditBtn" type="button" style={{ fontSize: '1.2rem' }}>
              <i className="bi bi-pencil-square"></i>
            </button>
            <button className="btn btn-danger" id="hDeleteBtn" type="button" style={{ fontSize: '1.2rem' }}>
              <i className="bi bi-trash"></i>
            </button>
            <button className="btn btn-success" id="hDoneBtn" type="button" style={{ fontSize: '1.2rem' }}>
              <i className="bi bi-check-circle"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Card Done Example */}
      <div className="card shadow mt-1 d-none">
        <div className="card-body">
          <div className="d-flex justify-content-end">
            <p className="p-0" style={{ fontSize: '10px' }} id="hDate">
              <del>01/08/2023</del>
            </p>
          </div>
          <h5 className="card-title" style={{ marginTop: '-1.5rem' }}>
            <del>Card title:</del>
          </h5>
          <p className="card-text">
            <del>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </del>
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
    </section>
    </>
  )
};
  

export default DynamicCards;