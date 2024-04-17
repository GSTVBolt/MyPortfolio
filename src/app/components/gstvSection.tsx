'use client'
import Image from "next/image"
import { Download } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { ButtonSubmit } from "./buttons/button"
import { motion } from 'framer-motion'
import Link from 'next/link'

export const GstvSection = () => {
    return (
        <section className="lg:py-16  mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold dark:text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-300 via-sky-500 to-emerald-400">
                            Olá, Eu sou {""}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'o Gustavo',
                                1000,
                                'Desenvolvedor Fullstack',
                                1000,
                                // 'Designer UI/UX',
                                // 1000,
                            ]}
                            wrapper="span"
                            speed={10}
                            // style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-slate-400 sm:text-lg mb-6 lg:text-xl dark:text-slate-500">
                    {'/*'} Desenvolvedor Fullstack, amante de Tecnologia e fascinado por Design UX/UI, mergulho de cabeça na missão de transformar ideias em realidade. Sou movido pela paixão de aprender os conceitos por trás das coisas! {'*/'}
                    </p>
                    <div className="flex">
                        <Link
                            href='https://drive.google.com/uc?export=download&id=1wdbpGSW-dKpiCjTjj7V1JX5VVl393JiM'>
                                
                            <ButtonSubmit >
                                <Download className="animate-bounce mr-1.5" />
                                C.V
                            </ButtonSubmit>
                        </Link>
                        {/* <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-200">
                            Hire Me
                        </button> */}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }} className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] relative">
                        <Image
                            src="/img/gustavo.png"
                            alt="gustavo"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

