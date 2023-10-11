import { Outlet } from "react-router-dom"
import { Suspense } from "react"; 
import { Link } from "react-router-dom";
import css from "./Layout.module.css"
export const Layout = () => {
    return <>
        <header>
            <nav className={css.container}>
            <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </nav>
        </header>
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
        
    </>
};