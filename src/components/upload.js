import React, { useState } from "react";
import ProgressBar from "./progressBar";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const imageType = ["image/png", "image/jpeg", "image/jpg"];

  const changeHandler = (e) => {
    let selectedImage = e.target.files[0];
    if (selectedImage && imageType.includes(selectedImage.type)) {
      setImage(selectedImage);
      setError("");
    } else {
      setImage(null);
      setError("Please select an image file(png,jpg or jpeg)");
    }
  };

  return (
    <form>
      <label>
        <input className="label" type="file" onChange={changeHandler} />
        <i class="bi bi-plus-circle-fill"></i>
      </label>
      <div>
        {error && (
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>Info! </strong>
            {error}
          </div>
        )}
        {image && (
          <div class="alert alert-info" role="alert">
            <strong>Uploading..</strong>
            {image.name}
          </div>
        )}
        {image && <ProgressBar image={image} setImage={setImage} />}
      </div>
    </form>
  );
};

export default UploadImage;
