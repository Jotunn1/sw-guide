import React, { useState } from "react";
import placeholder from "../../assets/images/placeholder.jpg";
import cn from "classnames";

const ImageComponent: React.FC<{ src: string; alt: string }> = ({
  src,
  alt,
}) => {
  const assetPath = `../../assets/images/${src}`;
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const imageElement = event.target as HTMLImageElement;
    imageElement.src = placeholder;
  };

  const handleImageLoad = () => setIsLoaded(true);

  return (
    <div className={cn("image-wrapper", isLoaded && "loaded")}>
      <img
        src={assetPath}
        alt={alt}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImageComponent;
