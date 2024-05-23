import { motion as m } from "framer-motion";
import { container, item } from "../animation";
import Link from "next/link";



export default function Contact() {
    return (
        <m.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className="text-gray-900  absolute top-0 bottom-0 left-0 w-full h-full g:px-48 px-16">
            <m.div className="my-64 p-1 overflow-hidden">
                <m.h1
                    animate={{ y:0 }}
                    initial={{ y: "100%" }}
                    transition={{ delay: 0.5, duration: 0.5}} 
                    className="text-6xl text-center lg:text-right lg:text-5xl">PRENDRE RENDEZ-VOUS</m.h1>
                </m.div>
            <div className="flex gap-40">
                <div className="lg:text-2xl text-base">
                    <h4>Mes réseaux:</h4>
                </div>
                <div className="lg:text-6xl text-2xl underline sm:text-left">
                    <m.ul variants={container} initial="hidden" animate="show" >
                        <div className="overflow-hidden">
                            <Link href={"https://www.instagram.com/chez_manely_?igsh=MWh1Z3RjODdiYWV6Ng=="}>
                                <m.li variants={item}>Instagram</m.li>
                            </Link>
                        </div>
                        <div className="overflow-hidden">
                        <Link href={"https://www.facebook.com/profile.php?id=61558455700886"}>
                            <m.li variants={item}>Facebook</m.li>
                        </Link>
                        </div>
                        <div className="overflow-hidden">
                            <Link href={""}>
                                <m.li variants={item}>Linkedin</m.li>
                            </Link>
                        </div>
                    </m.ul>
                </div>
            </div>
        </m.div>
    );
}