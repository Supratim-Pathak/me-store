import React from 'react';

const Videos = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="mb-4">Our Featured Videos</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/example1"
              title="Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-md-6 mb-4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/example2"
              title="Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
