import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './../styles/App.css';

const App = () => {
  const dispatch = useDispatch();

  const { name, email } = useSelector((state) => state);

  return (
    <div>

      <h1>User Information</h1>

      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_NAME",
              payload: e.target.value,
            })
          }
        />
      </div>


      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_EMAIL",
              payload: e.target.value,
            })
          }
        />
      </div>

      <div className="output">
        <p>Current values in store:</p>
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
};

export default App;