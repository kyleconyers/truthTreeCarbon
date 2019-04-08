import React from "react";

function Form({ q, handleInputChange, handleFormSubmit,}) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Location Name</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Type the name of the location you want to learn about"
          name="q"
          onChange={handleInputChange}
          required
        />
        
      </div>
      {/* <div className="form-group">
        <label htmlFor="Query">
          <strong>Top Value</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={topValue}
          placeholder="Type percent population range above searched location to include"
          top="top"
          onChange={handleInputChange}
          // required
        />
        
    </div> */}
      {/* <div className="form-group">
        <label htmlFor="Query">
          <strong>Bottom Value</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={bottomValue}
          placeholder="Type percnet population range below searched location to include"
          bottom="bottom"
          onChange={handleInputChange}
          required
        />
        
      </div> */}
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form> 
  );
}

export default Form;
