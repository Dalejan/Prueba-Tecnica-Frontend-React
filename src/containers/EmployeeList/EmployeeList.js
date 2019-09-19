import React, { useState, useEffect } from "react";
import { getEmployees } from "../../services/dummyService";

import SearchBar from "../../components/SearchBar/SearchBar";
import EmployeeListItem from "../../components/EmployeeListItem/EmployeeListItem";
import ErrorBoundary from "../../components/HOCS/ErrorBoundary";

import styles from "./EmployeeList.module.scss";
import empty_list from "../../assets/empty_list.svg";
import { similarity } from "../../utils/search";

/**
 * ## EmployeeList
 * Contenedor encargado de manejar el estado de la lista de empleados
 */
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

  /**
   * Primera obtención del listado
   */
  useEffect(() => {
    fetchEmployees();
  }, []);

  /**
   * ### fetchEmployees
   * Petición para obtener el listado y verificar si se obtienen u ocurrieron errores
   */

  const fetchEmployees = () => {
    setLoading(true);

    getEmployees()
      .then(res => {
        setEmployees(res);
        setLoading(false);
      })
      .catch(err => setErrors(err));
  };

  /**
   * ### handleChangeSearch
   * @param {any} event
   * Manejador del cambio de value en el input de la barra de búsqueda
   */
  const handleChangeSearch = event => {
    setSearch(event.target.value);
    if (event.target.value + "") {
      let newR = employees.filter(em => {
        return (
          similarity(event.target.value, em.employee_name) > 0.4 ||
          similarity(event.target.value, em.employee_salary) > 0.4 ||
          similarity(event.target.value, em.employee_age) > 0.6
        );
      });
      if (newR.length > 0) {
        setResults(newR);
      }
    }
  };

  return (
    <ErrorBoundary>
      {loading ? (
        <span className={styles.loading}>Cargando....</span>
      ) : (
        <>
          {!errors.keys && !loading && employees.length ? (
            <>
              <SearchBar
                search={search}
                onChangeSearch={ev => handleChangeSearch(ev)}
                className={styles.searchBar}
                results={results}
              ></SearchBar>
              <div className={styles.list_head}>
                <p>Nombre</p>
                <p>Salario</p>
                <p>Edad</p>
              </div>
              {employees.map((e, key) => {
                return (
                  <EmployeeListItem
                    employee={e}
                    key={key}
                    className={styles.list_body}
                  ></EmployeeListItem>
                );
              })}
            </>
          ) : (
            <>
              <div className={styles.empty_list}>
                <p>
                  {" "}
                  {employees.length > 0
                    ? "Parece que estamos teniendo problemas"
                    : "No hemos encontrado nada"}
                </p>{" "}
                <img src={empty_list} alt="empty list"></img>
                <button
                  onClick={fetchEmployees}
                  className={styles.btn_try}
                  disabled={loading}
                >
                  Volver a Intentar
                </button>
              </div>
            </>
          )}
        </>
      )}
    </ErrorBoundary>
  );
};

export default EmployeeList;
