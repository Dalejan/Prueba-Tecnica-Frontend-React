import React from "react";
import styles from "./SearchBar.module.scss";

/**
 * ## SearchBar
 * Componente para realizar búsquedas rápidas por cualquier criterio
 */
const SearchBar = ({ search, onChangeSearch }) => {
  return (
    <div className={styles.searchBar_container}>
      <input type="text" value={search} onChange={onChangeSearch} />
    </div>
  );
};

export default SearchBar;
