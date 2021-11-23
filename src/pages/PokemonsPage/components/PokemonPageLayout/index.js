import { CircularProgress, stepperClasses } from "@mui/material";
import PropTypes from "prop-types";
// import MaterialCard from "../../../../commonComponents/MaterialCard";
import CustomPagination from "../../../../commonComponents/CustomPagination";

import styles from "./styles.module.scss";
import PokeCard from "../../../../commonComponents/PokeCard";

const PokemonPageLayout = ({ 
    list, 
    isLoading, 
    handleGoToDetails,
    currentPage,
    handlePageChange,
    handleAddToBasket
}) => {
    return (
    <div className={styles.wrapper}>
        <h1 className={styles.h1}>POKEMONS SHOP</h1>
        
        <div className={styles.cardsArea}>      

        {isLoading ? (
        <CircularProgress />
        ) : 
            list.map(({ image, name, price, id}) => {
                return (
                    <PokeCard
                        img={image}
                        name={name}
                        price={price}
                        id={id}
                        handleClick={() => handleGoToDetails(name)}
                        handleClick={handleAddToBasket} />
                );
            }
        )}
        </div>

        <CustomPagination currentPage={currentPage} onPageChange={handlePageChange} pageCount={10} />
    </div>
    );
};

PokemonPageLayout.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    })
    ),
};

export default PokemonPageLayout;