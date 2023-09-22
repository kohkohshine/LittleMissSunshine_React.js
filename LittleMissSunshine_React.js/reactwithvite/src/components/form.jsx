{/*Nora*/}
import {useState} from 'react';

const Form = () => {
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [toDo, setToDo] = useState('');
  const handleClick = (e) => {
    e.preventDefault();
    resetForm();
  };
  const resetForm = () => {
    setDate('');
    setTitle('');
    setToDo('');
  }
  
  const handleData = (currentToDos) => {
    [...currentToDos, {date, title, toDo}]
  }

  return (
    <>
      <section>
        <main
          className="position-relative"
          style={{ height: "100vh" }}
        >
          <div
            className="card p-5 position-absolute"
            style={{
              width: "40vw",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <h3 className="h3 text-center">Enter to-do</h3>
            <div className="mb-2 mx-5">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Date
              </label>
              <input
                type="date"
                name="date"
                className="form-control"
                id="exampleFormControlInput1"
                value={date}
                onChange={(e)=>setDate(e.target.value)}
              />
            </div>
            <div className="mb-2 mx-5">
              <label htmlFor="exampleFormControlInput2" className="form-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Birthday-to-do"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />
            </div>
            <div className="mb-2 mx-5">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                ToDo
              </label>
              <textarea
                name="toDo"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Bake Cake/ Get Confetti/..."
                value={toDo}
                onChange={(e)=>setToDo(e.target.value)}
              ></textarea>
            </div>
            <div className="mx-5 d-flex flex-row gap-2" id="buttonAppear">
              <button
                type="button"
                className="btn btn-success px-3"
                //ender what should happen when toggled
                onClick={handleClick}
              >
                + Add
              </button>
              <button type="button" className="btn btn-danger px-3">
                <i className="bi bi-trash"></i> Delete All
              </button>
            </div>
            <div
              id="alertDiv"
              className="d-flex flex-row justify-content-center mt-2 p-1"
              style={{ color: "white" }}
            >
              <p
                className="text-bg-success"
                id="successAlert"
                style={{ fontSize: "0.8rem" }}
              >
                &check; You have successfully added a to-Do
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Form;
