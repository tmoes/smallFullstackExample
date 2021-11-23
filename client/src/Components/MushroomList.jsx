import React from 'react';

var MushroomList = (props) => {
  return (
    <div>
      <br></br>
      {props.mushroomList.length} mushrooms found in the database
      <br></br>
      <div>
        {props.mushroomList.map( mushroom => {
          return (
          <div>
            <img src={mushroom.mushroom_pic_url}></img>
            <br></br>
            <li>Latin name: {mushroom.mushroom_name}</li>
            <li>Common Names: {mushroom.mushroom_common_name}</li>
            <li>Warning: {mushroom.mushroom_caveats}</li>
            <br></br>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default MushroomList;