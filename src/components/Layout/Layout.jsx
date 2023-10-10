import { Outlet } from "react-router-dom"
import { Suspense } from "react"; 
import { Link } from "react-router-dom";
export const Layout = () => {
    return <>
        <header>
            <nav>
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