
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
  return (
    <div className="container mt-5 ">
      <div className="d-flex justify-content-center "> 
        {/* Card 1  flex-wrap gap-4*/}
        <div className="card col-3 m-2" style={{ width: '19rem' }}>
          <img
            src="https://picsum.photos/id/870/200/300?grayscale&blur=2"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card Title 1</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" className="btn btn-primary">Find Out Morel</a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card col-3 m-2" style={{ width: '19rem' }}>
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card Title 2</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" className="btn btn-primary">Find Out Morel</a>
          </div>
        </div>

        {/* Card 3  */}
        <div className="card col-3 m-2" style={{ width: '19rem' }}>
          <img
            src="https://picsum.photos/id/237/200/300"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">Find Out Morel</a>
          </div>
        </div>

        {/* ✅ Card 4*/}
        <div className="card col-3 m-2" style={{ width: '19rem' }}>
          <img
            src="https://picsum.photos/200/300?grayscale"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card Title 4</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">Find Out Morel</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;