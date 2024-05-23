/* eslint-disable @next/next/no-img-element */
import { motion as m } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";




export default function Galerie() {

    return (


        <m.main
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className="text-gray-900  absolute top-0 bottom-0 left-0 w-full h-full g:px-48 px-16">
        
            <div className="mx-auto px-5 py-20 text-6xl text-center lg:text-center lg:text-7xl">

                <div class="-m-1 flex flex-wrap md:-m-2">

                    <div class="flex w-1/3 flex-wrap">
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="main4"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/PhotoBanner1.jpg" />
                        </div>
                    </div>

                    <div class="flex w-1/3 flex-wrap">
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="main4"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/PhotoBanner2.jpg" />
                        </div>
                    </div>


                    <div class="flex w-1/3 flex-wrap">
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="main4"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/PhotoBanner3.jpg" />
                        </div>
                    </div>

                    <div class="flex w-1/3 flex-wrap">
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="main4"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/PhotoBanner4.jpg" />

                        </div>
                    </div>

                    <div class="flex w-1/3 flex-wrap">
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="main4"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/PhotoBanner5.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </m.main>
    );
}

