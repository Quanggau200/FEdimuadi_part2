import {type RouteObject} from "react-router-dom"
import {publicRoute} from "./PublicRoute.tsx";
const routes =(): RouteObject[]=>{
    return [
        ...publicRoute
    ]
}
export default routes;