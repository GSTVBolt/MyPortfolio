"use client";
import React, { useState, useRef, useEffect } from "react";
import { ProjectCard } from "./projectCard";
import { ProjectTag } from "./projectTag";
import { motion, useAnimation, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "",
    description: "",
    image: "",
    tag: ["", ""], //"All", "Web", "Mobile"
    gitUrl: "/",
    previewUrl: "/",
  }
];

export const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");

  const refSection = useRef(null);
  const isInViewSection = useInView(refSection, { once: true });

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInViewSection) {
      mainControls.start('visible')
      slideControls.start('visible')
    }
  }, [isInViewSection])

  const handleTagChange = (newTag: React.SetStateAction<string>) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      id="projects"
      ref={refSection}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1.0, delay: 0.25 }}
    >
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12 dark:text-white">
        Meus Projetos
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </motion.section>
  )
}