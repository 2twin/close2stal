import React, { useState } from "react";

const AddProduction = () => {
  const [productionType, setProductionType] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  const switchType = (e) => {
    setIsEditing(true);
    setProductionType(e.target.name);
    console.log(productionType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    setProductionType(null);
  };

  const renderForm = () => {
    switch (productionType) {
      case "song":
      case "album":
        return (
          <form className="standart-form standart-form_black" onSubmit={handleSubmit}>
            <input type="text" name="artist" placeholder="ARTIST" />
            <input type="text" name="title" placeholder="TITLE" />
            <input type="text" name="link" placeholder="LINK TO STREAMING" />
            <label className="file">
              <input type="file" name="cover" placeholder="COVER" />
              <span>Cover</span>
            </label>
            <button className="btn btn-primary">Save</button>
          </form>
        );
      default:
        return (
          <form className="standart-form standart-form_black" onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="TITLE" />
            <label className="file">
              <input type="file" name="video" />
              <span>Video</span>
            </label>
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
