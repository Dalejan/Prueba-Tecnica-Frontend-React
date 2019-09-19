import React from "react";
import styles from "./EmployeeListItem.module.scss";
import { NavLink } from "react-router-dom";

/**
 * ## EmployeeListItem
 * Componente encargado de pintar la información de un empleado
 */
const EmployeeListItem = props => {
  const { employee, className } = props;

  return (
    <NavLink to={`/detail/${employee.id}`} className={styles.navlink}>
      <div className={styles.item_container}>
        <span className={styles.tooltip}>
          <p>
            {employee.employee_name}
            <span className={styles.tooltiptext}>{employee.employee_name}</span>
          </p>
        </span>
        <p>{employee.employee_salary}</p>
        <p>{employee.employee_age}</p>
      </div>
    </NavLink>
  );
};

export default EmployeeListItem;
