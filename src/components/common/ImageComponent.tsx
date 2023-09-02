import React, { useEffect, useState } from "react";
import placeholder from "../../assets/images/placeholder.jpg";
import cn from "classnames";

const ImageComponent: React.FC<{ src: string; alt: string }> = ({
  src,
  alt,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    try {
      const downloadedImage = require(`../../assets/images/${src}`);
      setIsLoaded(true);
      setImage(downloadedImage);
    } catch (err) {
      setImage(placeholder);
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className={cn("image-wrapper", isLoaded && "loaded")}>
      <img src={image} alt={alt} />
    </div>
  );
};

export default ImageComponent;
