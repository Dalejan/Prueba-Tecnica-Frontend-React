import axios from "axios";

const URL = "http://dummy.restapiexample.com/api/v1";

/**
 * ### getEmployees
 * Método para obtener todos los empleados de la lista
 */
export const getEmployees = () => {
  return axios.get(`${URL}/employees`).then(res=>res.data);
};

/**
 * ### getEmployeeById
 * @param {string} id identificación del empleado
 * Método para obtener la información de un empleado en específico
 */
export const getEmployeeById = id => {
  return axios.get(`${URL}/employee/${id}`).then(res=>res.data);
};
