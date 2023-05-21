import React from "react";

const AddStoreItem = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="addProduction">
      <div className="container">
        <form
          className="standart-form standart-form_black"
          onSubmit={handleSubmit}
        >
          <input type="text" name="name" placeholder="PRODUCT NAME" />
          <input type="text" name="description" placeholder="DESCRIPTION" />
          <label className="file">
            <input type="file" name="photo" placeholder="PHOTO" />
            <span>Photo</span>
          </label>
          <input type="number" name="price" placeholder="PRICE" min={0} />
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddStoreItem;
