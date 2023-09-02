import { Link } from "react-router-dom";
import ImageComponent from "../common/ImageComponent";

const CategoryCard = ({ categoryName }: { categoryName: string }) => {
  return (
    <Link to={`/${categoryName}`} className="category-card">
      <ImageComponent
        src={`categories/${categoryName}.jpg`}
        alt={categoryName}
      />
      <h2 className="category-title">{categoryName}</h2>
    </Link>
  );
};

export default CategoryCard;
