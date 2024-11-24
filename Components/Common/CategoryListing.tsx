
import CategoryCard from './CategoryCard';

const categories = [
  {
    title: 'Anti-Aging & Cellular Health Peptides',
    description:
      'We stock solutions that work on a cellular level to promote the body’s natural healing capabilities.',
    image: 'https://via.placeholder.com/100',
  },
  {
    title: 'Focus & Clarity Peptides',
    description:
      'Our Medical Team has carefully selected a range of medications, nootropics, and supplements.',
    image: 'https://via.placeholder.com/100',
  },
  {
    title: 'Immunity Peptides',
    description:
      'Our Medical Team has carefully selected a range of medications, nootropics, and supplements designed.',
    image: 'https://via.placeholder.com/100',
  },
  {
    title: 'Mood and Sleep Peptides',
    description:
      'Mental and physical health are closely linked, making internal well-being essential in fighting the... ',
    image: 'https://via.placeholder.com/100',
  },
  {
    title: 'Muscle Development Peptides',
    description:
      'Products in our Muscle Support range can work on a cellular level to regulate hormones and foster...',
    image: 'https://via.placeholder.com/100',
  },
  {
    title: 'Peptides for Repair & Recovery',
    description:
      'We stock solutions that work on a cellular level to promote the body’s natural healing capabilities.',
    image: 'https://via.placeholder.com/100',
  },
  {
    title: 'Sexual Health Peptides',
    description:
      'Specializes in high-quality Australian medical solutions for sexual health.',
    image: 'https://via.placeholder.com/100',
  },
  {
    title: 'Weight Loss Peptides',
    description: 'Innovative solutions designed to assist with weight management.',
    image: 'https://via.placeholder.com/100',
  },
];

const CategoryListing = () => {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Browse by Category</h2>
        <p className="lead">We are here to help you reach goals faster.</p>
        <p>Our expansive wellness categories can help you explore the right product for you.</p>
        <a href="#categories" className="btn btn-danger">
          Choose Your Category →
        </a>
      </div>
      <div className="row">
        <div className="col-md-6">
          {categories.slice(0, Math.ceil(categories.length / 2)).map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
        <div className="col-md-6">
          {categories.slice(Math.ceil(categories.length / 2)).map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryListing;
