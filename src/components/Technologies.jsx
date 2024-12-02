import { RiReactjsLine } from 'react-icons/ri';
import { DiRedis } from 'react-icons/di';
import { SiSnowflake } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { motion } from 'motion/react'
import { SiPandas } from "react-icons/si";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})
const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div whileInView={{opacity: 1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaVuejs className="text-7xl text-green-400"/>
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPandas className="text-7xl text-purple-400" />
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFlask className="text-7xl" />
                </motion.div>
                <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiDjango className="text-7xl" />
                </motion.div>
                <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSnowflake className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiRedis className="text-7xl text-red-700" />
                </motion.div>
            </motion.div>
        </div>
    )
}
export default Technologies