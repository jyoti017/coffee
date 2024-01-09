

const Special = () => {

    return <div className="special section container" id="special">
    <div className="special__container">
      <div className="special__box">
        <h2 className="section__title">
          Best coffees that make you <br />
          happy and cheer you up!
        </h2>
      </div>

      <div className="special__category">
        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/coffee-beans.png"
              alt=""
              className="special__img"
            />
          </div>
          <h3 className="special__title">Original Coffee</h3>
          <p className="special__description">
            We select the best beans coffee, for a true taste.
          </p>
        </div>
        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/hot-drink.png"
              alt=""
              className="special__img"
            />
          </div>
          <h3 className="special__title">Hot Coffee</h3>
          <p className="special__description">
          Savor the warmth and flavor of our piping hot coffee.
          </p>
        </div>
        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/coffee-cup.png"
              alt=""
              className="special__img"
            />
          </div>
          <h3 className="special__title">Ice Coffee</h3>
          <p className="special__description">
          Icy bliss in a cup: our irresistible iced coffee.
          </p>
        </div>
      </div>
    </div>
  </div>
}

export default Special;

