

function Featuredproducts() {
  return (
    <section className="bg-gray-50 p<y-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-600">
          Featured Products
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Spartan Strong",
              price: "$100.00",
              status: "In Stock",
            },
            { name: "NAD+", price: "$80.00", status: "In Stock" },
            { name: "Tirzepatide", price: "$100.00", status: "In Stock" },
            { name: "Kisspeptin", price: "$140.00", status: "In Stock" },
            // Add more products as needed
          ].map((product, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 text-center shadow-md"
            >
              <img
                src="/path-to-product-image.jpg"
                alt={product.name}
                className="h-40 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <p className="text-green-500 mb-4">{product.status}</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-red-600 text-white py-2 px-4 rounded">
                  Buy Now
                </button>
                <button className="bg-gray-100 py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featuredproducts;
