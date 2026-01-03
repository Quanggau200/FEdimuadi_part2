import {lazy, Suspense} from "react";
import {ErrorPage} from "../component/common/ErrorPage.tsx";
import MainLayout from "../component/layouts/MainLayout.tsx";

const Home = lazy(() => import('../feature/product/component/product.tsx'))
const SignUp = lazy(() => import('../feature/auth/component/signup.tsx'))
const SignIn = lazy(() => import('../feature/auth/component/signin.tsx'))
export const publicRoute = [
    {
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/', element: <Home/>
            }
        ]
    },
    {
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/login', element: <SignIn/>
            },
            {
                path: '/register', element: <SignUp/>
            }
        ]
    }
]