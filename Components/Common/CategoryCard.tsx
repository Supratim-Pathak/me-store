
const CategoryCard = (props: any) => {
  return (
    <div className="d-flex align-items-center mb-4">
      {/* Left Content */}
      <div className="flex-grow-1">
        <h4 className="fw-bold">{props.title}</h4>
        <p>{props.description}</p>
      </div>
      {/* Right Image */}
    </div>
  );
};

export default CategoryCard;
