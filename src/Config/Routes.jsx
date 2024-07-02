import React from "react";

import Catalog from "../Pages/Catalog";
import Home from "../Pages/Home/index";
import Detail from "../Pages/Detail";
// import {Route, Switch} from "react-router-dom";

const RoutesConfig = [
  {
    path: "/:category/search/:keyword",
    element: <Catalog />,
  },
  {
    path: "/:category/:id",
    element: <Detail />,
  },
  {
    path: "/:category",
    element: <Catalog />,
  },
  {
    path: "/",
    element: <Home />,
  },
];
// const RoutesConfig = () => {
//   return (
//     <Switch>
//       <Route path="/:category/search/:keyword" component={Catalog} />
//       <Route path="/:category/:id" component={Detail} />
//       <Route path="/:category" component={Catalog} />
//       <Route path="/" component={Home} />
//     </Switch>
//   );
// };
export default RoutesConfig;
