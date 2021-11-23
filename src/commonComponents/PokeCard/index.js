import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const PokeCard = ({
    img,
    name,
    price,
    handleAddBasket,
    handleClick
}) => {

  return (
    <div className={styles.pokeCard}>
      <div>{img}</div>
      <div>{name}</div>
      <div>price - {price} $</div>

      <div className={styles.buttonsCard}>
        <button onClick={handleAddBasket}>
            Add to basket
        </button>
        <button onClick={handleClick}>
            Go To Details
        </button>
      </div>
    </div>
  );
};

PokeCard.propTypes = {
    handleAddBasket: PropTypes.func,
    handleClick: PropTypes.func
};

export default React.memo(PokeCard);
