import { PROJECTS } from "../constants"
import { motion } from 'motion/react'
import * as React from "react";
import { Lightbox } from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";

const Projects = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">Projects</motion.h1>
            <div>{PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="w-full lg:w-1/4">
                        <img onClick={() => setOpen(true)} src={project.image[0].src} width={150} height={150} alt={project.title} className="mb-6 rounded cursor-pointer" />
                        <Lightbox
                            plugins={[Captions]}
                            open={open}
                            close={() => setOpen(false)}
                            slides={project.image.map((img) => ({ src: img.src, title: img.title, description: img.description }))}

                        />
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        <div className="flex flex-start flex-wrap">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </motion.div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Projects