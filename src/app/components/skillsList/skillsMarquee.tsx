import Marquee from 'react-fast-marquee'
import { Technologie } from './technologie'
import html from '../../../../public/img/html.svg'
import css from '../../../../public/img/css.svg'
import js from '../../../../public/img/js.svg'
import ts from '../../../../public/img/ts.svg'
import prisma from '../../../../public/img/prisma.jpg'
import fastify from '../../../../public/img/fastify.svg'
import tailwind from '../../../../public/img/tailwind.svg'
import nextjs from '../../../../public/img/nextjs.svg'
import sqlserver from '../../../../public/img/sql-server.svg'
import mongodb from '../../../../public/img/mongodb.svg'
import csharp from '../../../../public/img/csharp.svg'
import dotnet from '../../../../public/img/dotnet.svg'
import bootstrap from '../../../../public/img/bootstrap.svg'
import jquery from '../../../../public/img/jquery.svg'
import figma from '../../../../public/img/figma.svg'
import react from '../../../../public/img/react.svg'
import reactNative from '../../../../public/img/react.svg'
import asp from '../../../../public/img/asp.png'
import sqlite from '../../../../public/img/sqlite.svg'

export const dataSkills = [
  {
    id: 1,
    skill: 'HTML',
    img: html,
  },
  {
    id: 2,
    skill: 'CSS',
    img: css,
  },
  {
    id: 3,
    skill: 'Javascript',
    img: js,
  },
  {
    id: 4,
    skill: 'Typescript',
    img: ts,
  },
  {
    id: 5,
    skill: 'Prisma',
    img: prisma,
  },
  {
    id: 6,
    skill: 'Fastify',
    img: fastify,
  },
  {
    id: 7,
    skill: 'Tailwind',
    img: tailwind,
  },
  {
    id: 8,
    skill: 'Next.JS',
    img: nextjs,
  },
  {
    id: 9,
    skill: 'SQL-Server',
    img: sqlserver,
  },
  {
    id: 10,
    skill: 'MongoDB',
    img: mongodb,
  },
  {
    id: 11,
    skill: 'SQLite',
    img: sqlite,
  },
  {
    id: 12,
    skill: 'Csharp',
    img: csharp,
  },
  {
    id: 13,
    skill: 'DotNet',
    img: dotnet,
  },
  {
    id: 14,
    skill: 'ASP.NET',
    img: asp,
  },
  {
    id: 15,
    skill: 'Bootstrap',
    img: bootstrap,
  },
  {
    id: 16,
    skill: 'JQuery',
    img: jquery,
  },
  {
    id: 17,
    skill: 'Figma',
    img: figma,
  },
  {
    id: 18,
    skill: 'React',
    img: react,
  },
  {
    id: 19,
    skill: 'React-Native',
    img: reactNative,
  },
  
]

export const SkillsMarquee = () => {
  return (
    
      <div className='mt-0 xl:mt-0 py-2 w-full'>
        <div className='flex w-full flex-col md:flex-row gap-2 md:gap-4 py-2 md:py-4 text-slate-200'>
          <Marquee autoFill speed={80}>
            {dataSkills.map(({ id, skill, img }) => (
              <Technologie key={id} srcImg={img} skill={skill} />
            ))}
          </Marquee>
        </div>
      </div>

    //   <Element name="Skills" className="w-full">
    //     <div className="mt-0 xl:mt-0 py-2 w-full">
    //       <div className="flex w-full flex-center-col md:flex-center-row gap-2 md:gap-4 py-2 md:py-4">
    //         <Marquee autoFill speed={60}>
    //           {dataSkills.map(({ id, skill, img }) => (
    //             <Technologie key={id} srcImg={img} skill={skill} />
    //           ))}
    //         </Marquee>
    //       </div>
    //     </div>
    //   </Element>
  )
}