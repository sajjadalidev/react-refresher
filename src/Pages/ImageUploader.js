import { useState } from "react";
import classes from "./ImageUploader.module.css";
import axios from "axios";
export const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const fileSelectorHandler = (event) => {
    // console.log(event.target.files[0]);
    setImage(event.target.files[0]);
  };
  const fileUploader = () => {
    const fd = new FormData();
    console.log("image name", image.name);
    console.log("this is image", image);
    fd.append("image", image, image.name);
    axios.post("https://react-refresher-17bdf.appspot.com", fd).then((res) => {
      debugger;
      console.log(res);
    });
  };
  return (
    <div>
      <input type="file" onChange={fileSelectorHandler} />
      <div className={classes.actions}>
        <button onClick={fileUploader}> Upload Image</button>
      </div>
    </div>
  );
};
