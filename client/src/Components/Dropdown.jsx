import React from 'react';

const Dropdown = props => {
  return (
    <div>
      <label htmlFor="region">Choose a region:  </label>
      <select name="region" id="region">
        <option value="Default">Default</option>
        <option value="Northwest">Northwest</option>
        <option value="Southwest">Southwest</option>
        <option value="Rocky_Mountains">Rocky Mountains</option>
        <option value="Midwest">Midwest</option>
        <option value="Northeast">Northeast</option>
        <option value="Southeast">Southeast</option>
      </select>
      <button id="submitRegion" onClick={ () => props.getMushroomList() }>
        Submit Region
      </button>
    </div>
  );
};

export default Dropdown;