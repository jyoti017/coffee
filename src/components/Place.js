import { useState } from 'react';
import data from '../json/data.json'

const Place = () =>{

    const [selectedImage, setSelectedImage] = useState(data.places[0].imageUrl);
    return <section className="place section" id="place">
    <div className="place__container container">
      <h2 className="section__title">
      Cosy facilities for a delightful <br />
      and comfortable experience.
      </h2>

      <div className="place__content grid">
        <div className="place__images">
          <img src={selectedImage} alt="" className="place__img-big"/>
          <div className="place__img-smalls">
            {data.places.map((place, index) => {
                return <img
                key={index}
                src={place.imageUrl}
                alt=''
                onClick = {() => setSelectedImage(place.imageUrl)}
                className={`place__img-small ${selectedImage === place.imageUrl && 'active'}`}
              />
            })}
          </div>
        </div>

        <div className="place__data">
          <h2 className="place__title">Find a place you love</h2>
          <p className="place__description">
          Experience the perfect blend of productivity and <br />
          inspiration in our vibrant and beautifully designed space.
          </p>
        </div>
      </div>
    </div>
  </section>
}

export default Place;