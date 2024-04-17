'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import { NavLink } from "./navLink"
import { Menu, X } from "lucide-react"
import { MenuOverlay } from "./menuOverlay"
import React from "react"

const navLinks = [
    // {
    //     title: 'Sobre',
    //     path: '#sobre',
    // },
    {
        title: 'Projetos',
        path: '#projects',
    },
    {
        title: 'Contato',
        path: '#contacts',
    }
]
export const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    React.useEffect(() => {
        window.addEventListener(
          "resize",
          () => window.innerWidth >= 960 && setNavbarOpen(false),
        );
      }, []);
    
    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link
                    href={"/"}
                    className="text-2xl md:text-5xl text-white font-semibold"
                >
                    Gustavo Monteiro
                </Link>
                {/* <div className="relative w-16 m-1 my-1 bg-red-500">
                    <button className="size-8 bg-white bg-no-repeat bg-center rounded-3xl absolute"></button>
                </div> */}
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                    {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}