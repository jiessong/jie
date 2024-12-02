import { PUBLICATION } from "../constants"
import { motion } from "motion/react"
const Publication = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">Publications</motion.h1>
            <div>
                {PUBLICATION.map((publication, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{publication.date}</p>
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-bold">
                                Title: <span className="font-normal">{publication.title}</span>
                            </h6>
                            <h6 className="mb-2 font-bold">
                                Authors: <span className="font-normal">{publication.Authors}</span>
                            </h6>
                            <h6 className="mb-2 font-bold">
                                Journal: <span className="font-normal">{publication.Journal}</span>
                            </h6>
                            <p className="mb-4 text-neutral-400 italic">{publication.description}</p>
                            
                            <div className="flex flex-start flex-wrap">
                                {publication.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mb-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}</span>
                            ))}
                            </div>
                            
                        </motion.div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Publication