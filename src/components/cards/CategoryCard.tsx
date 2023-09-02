import { Link } from "react-router-dom";

const CategoryCard = ({ categoryName }: { categoryName: string }) => {
  return (
    <Link to={`/${categoryName}`} className="category-card">
      <div className="image-wrapper">
        <img
          src={require(`../../assets/images/categories/${categoryName}.jpg`)}
          alt={categoryName}
        />
      </div>
      <h2 className="category-title">{categoryName}</h2>
    </Link>
  );
};

export default CategoryCard;
