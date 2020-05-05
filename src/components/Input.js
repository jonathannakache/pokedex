import React from "react";

function Input({ pokemon }) {
  const handleChange = (event) => {
    pokemon(event.target.value);
  };
  return (
    <div className="field ">
      <div className="control">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="input is-primary"
            onChange={handleChange}
            placeholder="Entre un nom de pokemon"
          />
        </form>
      </div>
    </div>
  );
}

export default Input;
