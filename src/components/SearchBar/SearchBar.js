import React from "react";
import styles from "./SearchBar.module.scss";
import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
/**
 * ## SearchBar
 * Componente para realizar búsquedas rápidas por cualquier criterio
 */
const SearchBar = props => {
  const { search, onChangeSearch, results, className } = props;
  return (
    <div className={[styles.searchBar_container, className].join(" ")}>
      <label>Buscar</label>
      <input
        type="text"
        value={search}
        onChange={onChangeSearch}
        className={styles.input}
      />
      <div className={styles.results_container}>
        <div className={styles.list_head}>
          <p>Nombre</p>
          <p>Salario</p>
          <p>Edad</p>
        </div>
        {results.map((e, key) => {
          return (
            <EmployeeListItem
              employee={e}
              key={key}
              className={styles.list_body}
            ></EmployeeListItem>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
