import { motion as m } from "framer-motion";

export default function Prestation() {
    return (
        <m.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className="text-gray-900  absolute top-0 bottom-0 left-0 w-full h-full g:px-48 px-16 font-cormorant  bg-[url('/images/PrestaPage.jpg')] bg-cover flex-wrap flex justify-center overflow-auto">
            <div className="my-44 p-1 ">
                <h1 className="text-6xl text-center  lg:text-5xl backdrop-blur">PRESTATIONS ET TARIFS</h1>
            </div>
            <div className=" flex-wrap flex w-100 gap-4 justify-around ">
                <div className="">
                    <h4 className="lg:text-6xl text-3xl underline decoration-2 backdrop-blur">Rallongement:</h4>
                <div className="lg:text-2xl text-2xl sm:text-left flex justify-around backdrop-blur">
                    <ul>
                        <li>Taille S</li>
                        <li>Taille M</li>
                        <li>Taille L</li>
                    </ul>
                    <ul>
                        <li>50€</li>
                        <li>55€</li>
                        <li>60€</li>
                    </ul>
                </div>
                </div>
                <div className="">
                    <h4 className="lg:text-6xl text-3xl underline decoration-2 backdrop-blur">Renforcement:</h4>
                <div className="lg:text-2xl text-2xl sm:text-left flex justify-around backdrop-blur">
                    <ul>
                        <li>Taille S</li>
                        <li>Taille M</li>
                        <li>Taille L</li>
                    </ul>
                    <ul>
                        <li>45€</li>
                        <li>50€</li>
                        <li>55€</li>
                    </ul>
                </div>
                </div>
                <div className="">
                    <h4 className="lg:text-6xl text-3xl underline decoration-2 backdrop-blur">Remplissage:</h4>
                <div className="lg:text-2xl text-2xl sm:text-left flex justify-around backdrop-blur">
                    <ul>
                    <li>Taille S</li>
                        <li>Taille M</li>
                        <li>Taille L</li>
                    </ul>
                    <ul>
                        <li>45€</li>
                        <li>50€</li>
                        <li>55€</li>
                    </ul>
                </div>
                </div>
                <div className="">
                    <h4 className="lg:text-6xl text-3xl underline decoration-2 backdrop-blur">Vernis semi permanent:</h4>
                <div className="lg:text-2xl text-2xl sm:text-left flex justify-around backdrop-blur">
                    <ul>
                    <li>Couleur offerte</li>
                    </ul>
                    <ul>
                        <li>55€</li>
                    </ul>
                </div>
                </div>
                <div className="">
                    <h4 className="lg:text-6xl text-3xl underline decoration-2">Dépose:</h4>
                <div className="lg:text-2xl sm:text-1xl flex justify-between">
                    <ul>
                    <li>Avec soin</li>
                    </ul>
                    <ul>
                        <li>45€</li>
                    </ul>
                </div>
                </div> <div className="">
                    <h4 className="lg:text-6xl text-3xl underline decoration-2 backdrop-blur">Couleur-French</h4>
                    <h4 className="lg:text-6xl text-3xl underline decoration-2 backdrop-blur">Baby Boomer/Color:</h4>

                <div className="lg:text-2xl text-2xl sm:text-left flex justify-around backdrop-blur">
                    <ul>
                    <li>Pour les dix doigts</li>
                    </ul>
                    <ul>
                        <li>+5€</li>
                    </ul>
                </div>
                </div>
                
            </div>
        </m.div>
    )
}