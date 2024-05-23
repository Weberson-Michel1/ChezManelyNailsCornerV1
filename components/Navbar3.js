"use client";
import Link from "next/link";
import { useState } from "react";


export default function Navbar3() {

    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () => {
        setisClick(!isClick);
    }

    return (

        <nav className="bg-pink-100 z-20 fixed top-0  w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href={"/"}>
                                <li className="text-1xl font-better px-7 list-none ">Chez</li>
                                <li className="text-2xl font-cormorant list-none">MANELY</li>
                          
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <Link href={"/prestations"} className="font-cormorant text-black hover:bg-white hover:text-black rounded-lg p-2">Prestation | Tarifs</Link>
                            <Link href={"/galerie"} className="font-cormorant text-black hover:bg-white hover:text-black rounded-lg p-2">Galerie</Link>
                            <Link href={"/contact"} className="font-cormorant text-black hover:bg-white hover:text-black rounded-lg p-2">Contact</Link>

                        </div>
                    </div>
                    <div className="md:hidden flex items-center z-50">
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-black md:text-black
                             hover:text-white focus:outline-none focus:ring-inset focus:ring-white"
                            onClick={toggleNavbar}
                        >
                            {isClick ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="h-7 w-7">
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                        clip-rule="evenodd" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="h-7 w-7">
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                        clip-rule="evenodd" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 spa-y-1 sm:px-3 ">
                        <Link href={"/prestations"} className="text-black hover:bg-white hover:text-black rounded-lg p-2">Prestation | Tarifs</Link>
                        <Link href={"/galerie"} className="text-black hover:bg-white hover:text-black rounded-lg p-2">Galerie</Link>
                        <Link href={"/contact"} className="text-black hover:bg-white hover:text-black rounded-lg p-2">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}