function Category() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Browse by category
        </h2>
        <p className="text-center text-gray-600 mb-10">
          We are here to help you reach goals faster. Our expansive wellness
          categories can help you explore the right product for you.
        </p>
        <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Category Cards */}
          {[
            {
              title: "Anti-Aging & Cellular Health Peptides",
              description:
                "We stock solutions that work on a cellular level to promote the body’s natural healing capabilities.",
              image:
                "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/3.png",
            },
            {
              title: "Immunity Peptides",
              description:
                "Our Medical Team have carefully selected a range of medications, nootropics and supplements.",
              image:
                "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/3.png",
            },
            {
              title: "Focus & Clarity Peptides",
              description:
                "We stock solutions that work on a cellular level to promote the body’s natural healing capabilities.",
              image:
                "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/3.png",
            },
            {
              title: "Mood and Sleep Peptides",
              description:
                "Mental and physical health are closely linked, making internal well being essential in fighting the good fight.",
              image:
                "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/3.png",
            },
            // Add more categories here
          ].map((category, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 text-center shadow-sm"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
