import { useRoutes } from "react-router-dom";
import Home from "page/home";
import RentCar from "page/rent-resources/rent";

const routerSource = (props) => [
  { index: true, path: "/", element: <Home {...props} title="Home" /> },
  { index: true, path: "/start-rent-car", element: <RentCar {...props} title="Rent Car" /> },
  { index: true, path: "/*", element: <>ERROR</> },
];

const AppRoutes = (props) => {
  const router = routerSource(props);
  let routes = useRoutes(router);
  return routes;
};

export default AppRoutes;
