import { Outlet } from "react-router-dom"
import { Suspense } from "react"; 
import css from "./Layout.module.css"
import { NavLinkStyled } from "./Layout.styled";


    
export const Layout = () => {
    return <>
        <header>
            <nav className={css.container}>
                <NavLinkStyled to="/">Home</NavLinkStyled>
                <NavLinkStyled to="/movies">Movies</NavLinkStyled>
            </nav>
        </header>
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
        
    </>
};