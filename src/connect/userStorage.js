import { useState, useEffect } from "react";
import { galleryStorage, galleryFirestore, timeStamp } from "../firebase/setup";

const useStorage = (image) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = galleryStorage.ref(image.name);
    const databaseRef = galleryFirestore.collection("image");
    storageRef.put(image).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timeStamp();
        databaseRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [image]);
  return { progress, url, error };
};

export default useStorage;
