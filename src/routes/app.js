import EmployeeList from "../containers/EmployeeList/EmployeeList";
import EmployeeDetail from "../containers/EmployeeDetail/EmployeeDetail";

const appRoutes = [
  {
    path: "/employees",
    component: EmployeeList
  },
  {
    path: "/detail/:id",
    component: EmployeeDetail
  },
  { redirect: true, path: "/", to: "/employees" }
];

export default appRoutes;
