import React from 'react';
import { motion, scale } from "motion/react"
import team1 from '../../assets/team/team_cel_one.jpg';
import team2 from '../../assets/team/team_cel_two.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row">


                <div className='flex-1'>
                    {/* <motion.h1
                        animate={{
                            rotate: 180,
                            x:10,
                            y:-10,
                            transition: { duration: 4 }
                        }}
                        className="text-5xl font-bold">Lates job for u!
                    </motion.h1> */}
                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1,
                            transition: { duration: 4 }
                        }}
                        className="text-5xl font-bold">Remote <motion.span
                            animate={{
                                color: ["#ff5733", "#33ff33", "#8a33ff"],
                                transition: { duration: 2, repeat: Infinity, }
                            }}
                        >job
                        </motion.span>  for u!
                    </motion.h1>




                    <p className="py-6">

                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>


                <div className='flex-1'>
                    <motion.img
                        src={team1}
                        animate={{y:[100, 150,100]}}
                        transition={{ duration: 5, repeat: Infinity }}
                        
                        className="max-w-sm border-amber-300 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                    />
                    <motion.img
                        src={team2}
                        animate={{x:[100, 150,100]}}
                        transition={{ duration: 10, delay:5, repeat: Infinity }}
                        
                        className="max-w-sm border-amber-300 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                    />

                </div>
                


                
            </div>
        </div>
    );
};

export default Banner;
