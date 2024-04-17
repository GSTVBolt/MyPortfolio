'use client'
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import GithubIcon from "../../../public/github-icon-light.svg";
import LinkedinIcon from "../../../public/linkedin-icon-light.svg";
import GithubIconDark from '../../../public/github-icon-dark.svg';
import LinkedinIconDark from '../../../public/linkedin-icon-dark.svg';
import Link from "next/link";
import Image from "next/image";
import { ButtonSubmit } from "./buttons/button";
import { motion, useAnimation, useInView } from "framer-motion";

export const EmailJsSection = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
            slideControls.start('visible')
        }
    }, [isInView])

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (name === '' || email === '' || message === '') {
            alert("Preencha todos os campos")
            return
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_u8vu8cx", "template_4sh9dup", templateParams, "c6CQwQflSOxwvhXZd")
            .then((res) => {
                console.log("EMAIL ENVIADO", res.status, res.text)
                setName('')
                setMessage('')
                setEmail('')
            }, (err) => {
                console.log("ERRO: ", err)
            })
    }

    return (
        <motion.section
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1.0, delay: 0.25 }}
            id="contacts"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 "></div>
            <div className="z-0">
                <h5 className="text-xl font-bold my-2 dark:text-white">
                    Vamos nos Conectar
                </h5>
                <p className="mb-4 max-w-md dark:text-[#ADB7BE]">
                    {" "}
                    Atualmente estou em busca de novas oportunidades, minha caixa de entrada está sempre aberta. Se você tiver alguma dúvida ou
                    apenas quiser dizer oi, farei o possível para entrar em contato com você!
                </p>
                <div className="socials flex flex-row gap-2 ">
                    <Link href="https://github.com/GSTVBolt" target="_blank">
                        <Image
                            className="hidden dark:block"
                            src={GithubIconDark}
                            alt="Github Icon Dark"
                            width={48}
                        />
                        <Image
                            className="block dark:hidden"
                            src={GithubIcon}
                            alt="Github Icon Ligth"
                            width={40}
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/gustavo-monteiro-28893b246/" target="_blank">
                        <Image
                            className="hidden dark:block"
                            src={LinkedinIconDark}
                            alt="Linkedin Icon Dark"
                            width={48}
                        />
                        <Image
                            className="block dark:hidden"
                            src={LinkedinIcon}
                            alt="Linkedin Icon Ligth"
                            width={40}
                        />
                    </Link>
                </div>
            </div>

            <form className="flex flex-col" onSubmit={sendEmail}>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium dark:text-white"
                    >
                        Seu nome
                    </label>
                    <input
                        name="name"
                        type="text"
                        id="name"
                        required
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium dark:text-white"
                    >
                        Seu email
                    </label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        required
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="teste@google.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block text-sm mb-2 font-medium dark:text-white"
                    >
                        Mensagem
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Vamos falar sobre..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                </div>
                <ButtonSubmit type="submit">
                    Enviar mensagem
                </ButtonSubmit>
            </form>

        </motion.section>
    );
}