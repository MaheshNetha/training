import { Navigate, useRoutes } from "react-router-dom";
import Signin from "../components/Auth/Signin";
import BrokerList from "../components/Demat/BrokerList";
import UserProfile from "../components/Profile/UserProfile";
import AppLayout from '../layouts/AppLayout'

const routes = [
    {

        path: "/",
        element: <AppLayout />,
    children: [
        { element: <Navigate to="/signin" replace /> },
        { path: "signin", element: <Signin /> }, 
        { path: "profile", element: <UserProfile /> }, 
        { path: "demat", element: <BrokerList /> },         
      
        { path: "*", element: <h4>Not Found</h4> },
      ]
      ,
    }

];

export default function Router() {
  return useRoutes(routes);
}
