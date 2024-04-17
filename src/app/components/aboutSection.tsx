'use client'
import React, { useTransition, useState } from "react"
import Image from "next/image"
import { TabButton } from "./tabButton"

export const AboutSection = () => {

    const TAB_DATA = [
        {
            title: "Educação",
            id: "educacao",
            content: (
                <ul className="list-disc pl-2">
                    <li>Universidade Paulista UNIP - Sorocaba-SP - 08/19 a 07/21</li>
                    <p className="font-light">Análise e Desenvolvimento de Sistemas</p>
                </ul>
            ),
        },
        {
            title: "Experiência",
            id: "experiencia",
            content: (
                <ul className="list-disc pl-2">
                    <li>Freelancer - 01/24 (Atualmente)</li>
                    <p className="font-light">Atuo com desenvolvimento Web, e também crio páginas com Wordpress</p>
                    <br />
                    <li>Cadmus Soluçoes em T.I - 01/20 a 12/20</li>
                    <p className="font-light">Designer UX/UI | Dev C# .Net - Estagiário </p>
                    <br />
                    <li>Ventron - 02/19 a 12/19</li>
                    <p className="font-light">Auxiliar RH | Designer UX/UI - Aprendiz </p>
                </ul>
            ),
        },
    ]

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: React.SetStateAction<string>) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/img/about-image.png"
                    alt="gustavo"
                    className=""
                    width={500}
                    height={500}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold mb-4">Sobre mim</h2>
                    <p className="text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio doloremque ratione.</p>
                    <div className="flex flex-row mt-8 justify-start">
                        <TabButton
                            selectTab={() => handleTabChange("educacao")}
                            active={tab === "educacao"}
                        >
                            {" "}
                            Educação{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("experiencia")}
                            active={tab === "experiencia"}
                        >
                            {" "}
                            Experiência{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab) && TAB_DATA.find((t) => t.id === tab)!.content}
                    </div>
                </div>
            </div>
        </section>
    )
}
