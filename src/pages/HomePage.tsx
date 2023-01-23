import CategoryCard from "../components/cards/CategoryCard";

const HomePage = () => {
    const categories: string[] = [
        "films",
        "characters",
        "planets",
        "starships",
        "vehicles",
        "species",
    ];

    return (
        <>
            <h1 className="page-title">Categories</h1>
            <ul className="categories-list">
                {categories.map((el, index) => (
                    <CategoryCard categoryName={el} key={index} />
                ))}
            </ul>
        </>
    );
};

export default HomePage;
