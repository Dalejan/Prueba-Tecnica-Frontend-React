import React, { useState, useEffect } from "react";
import { getEmployeeById } from "../../services/dummyService";
import { NavLink } from "react-router-dom";

/**
 * ## EmployeeDetail
 * @param {any} props
 * Contenedor de la información de un paciente
 */
const EmployeeDetail = props => {
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    getEmployeeById(props.match.params.id).then(res => {
      setEmployee(res);
    });
  }, []);

  return (
    <div>
      <NavLink to={`/`}>Volver</NavLink>
      {employee ? (
        <div>
          <p>{employee.employee_name}</p>
          <p>{employee.employee_salary}</p>
          <p>{employee.employee_age}</p>
        </div>
      ) : (
        <p>No hay una mondá</p>
      )}
    </div>
  );
};

export default EmployeeDetail;
