import React, { useState, useEffect } from "react";
import { getEmployees } from "../../services/dummyService";

import SearchBar from "../../components/SearchBar/SearchBar";
import EmployeeListItem from "../../components/EmployeeListItem/EmployeeListItem";
import ErrorBoundary from "../../components/HOCS/ErrorBoundary";

import styles from "./EmployeeList.module.scss";
import empty_list from "../../assets/empty_list.svg";

/**
 * ## EmployeeList
 * Contenedor encargado de manejar el estado de la lista de empleados
 */
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    setLoading(true);

    getEmployees().then(
      res => {
        // setEmployees(res);
        setLoading(false);
      },
      err => setErrors(err)
    );
  };
  const handleChangeSearch = event => {
    console.log("ev", event.target.value);
    setSearch(event.target.value);
  };

  return (
    <ErrorBoundary>
      <SearchBar
        search={search}
        onChangeSearch={ev => handleChangeSearch(ev)}
      ></SearchBar>
      {employees.length > 0 && !errors ? (
        <>
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
        <div className={styles.empty_list}>
          <p>Parece que estamos teniendo problemas</p>{" "}
          <img src={empty_list} alt="empty list"></img>
          <button
            onClick={fetchEmployees}
            className={styles.btn_try}
            disabled={loading}
          >
            Volver a Intentar
          </button>
        </div>
      )}
    </ErrorBoundary>
  );
};

export default EmployeeList;
