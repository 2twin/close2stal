import React, { useState } from "react";

import axios from "axios";

const AddProduction = () => {
  const [productionType, setProductionType] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  const switchType = (e) => {
    setIsEditing(true);
    setProductionType(e.target.name);
    console.log(productionType);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const data = new FormData(e.target);

    const object = {};
    data.forEach(function (value, key) {
      object[key] = value;
    });

    if (productionType === 'video') {
      await axios.post("https://646ba8c47d3c1cae4ce41cab.mockapi.io/api/v1/video", object);
    } else {
      await axios.post("https://646ba0e17d3c1cae4ce41357.mockapi.io/api/v1/music", object);
    }


    setIsEditing(false);
    setProductionType(null);
  };

  const renderForm = () => {
    switch (productionType) {
      case "song":
      case "album":
        return (
          <form
            className="standart-form standart-form_black"
            onSubmit={handleSubmit}
          >
            <input type="text" name="artist" placeholder="ARTIST" />
            <input type="text" name="title" placeholder="TITLE" />
            <input type="text" name="streamingLink" placeholder="LINK TO STREAMING" />
            {/* <label className="file">
              <input type="file" name="cover" placeholder="COVER" />
              <span>Cover</span>
            </label> */}
            <input type="text" name="imageUrl" placeholder="COVER" />
            <button className="btn btn-primary">Save</button>
          </form>
        );
      default:
        return (
          <form
            className="standart-form standart-form_black"
            onSubmit={handleSubmit}
          >
            <input type="text" name="artist" placeholder="ARTIST" />
            <input type="text" name="title" placeholder="TITLE" />
            {/* <label className="file">
              <input type="file" name="video" />
              <span>Video</span>
            </label> */}
            <input type="text" name="thumbnailUrl" placeholder="THUMBNAIL" />
            <input type="text" name="videoUrl" placeholder="VIDEO" />
            <button className="btn btn-primary">Save</button>
          </form>
        );
    }
  };

  return (
    <div className="addProduction">
      <div className="container">
        {!isEditing && (
          <>
            <span className="addProduction__heading">
              Please select your upload type:
            </span>
            <div className="addProduction__tabs">
              <button
                className="addProduction__tab"
                name="song"
                onClick={switchType}
              >
                Song
              </button>
              <button
                className="addProduction__tab"
                name="album"
                onClick={switchType}
              >
                Album / EP
              </button>
              <button
                className="addProduction__tab"
                name="video"
                onClick={switchType}
              >
                Video
              </button>
            </div>
          </>
        )}
        {isEditing && renderForm()}
      </div>
    </div>
  );
};

export default AddProduction;
