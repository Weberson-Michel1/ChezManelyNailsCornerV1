import Head from "next/head";
import { delay, motion as m } from "framer-motion";
import { container, item } from "../animation";


export default function Home() {
    return (
        <m.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className="text-gray-900 top-0 bottom-0 left-0 w-full h-full  bg-[url('/images/Home.jpg')] bg-cover lg:px-48 px-16 absolute overflow-auto flex-wrap flex justify-center"
        >
            <Head>
                <title>ChezManely</title>
                <meta name="" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="font-cormorant flex flex-col justify-center">
                <m.div className="" variants={container} initial="hidden" animate="show">
                    <m.h1

                        className="text-6xl text-center  relative lg:text-7xl font-better z-10 ">Chez</m.h1>
                    <m.h1

                        class="manely ">MANELY</m.h1>
                    <div className="overflow-hidden">

                        <m.h1
                            variants={item}
                            className="text-2xl text-center lg:text-3xl font-cormorant">Nails Corner</m.h1>
                    </div>
                </m.div>
            </main>
                <div className="bg-none fixed bottom-0 w-full font-cormorant">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div>
                        <h2>Design By</h2>
                        <h2>WM</h2>
                        <h2>2024</h2>
                    </div>
                    </div>                   
                </div>
        </m.div>
    );
}