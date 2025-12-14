import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import team1 from '../../assets/team/team1.jpg';
import team2 from '../../assets/team/team2.jpg';

const Banner = () => {
  return (
    <div className="hero mb-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
       <div className='flex-1'>
         <motion.img
          animate={{ y: [100, 150] }}
          transition={{duration: 5, repeat: Infinity, repeatType: 'reverse'}}
          src={team1}
          className="max-w-sm border-s-8 border-b-8 border-blue-500 rounded-tl-4xl rounded-br-4xl shadow-2xl"
          alt="stock"
        />
         <motion.img
          animate={{ x: [100, 150] }}
          transition={{duration: 10, repeat: Infinity, repeatType: 'reverse'}}
          src={team2}
          className="max-w-sm border-s-8 border-b-8 border-blue-500 rounded-tl-4xl rounded-br-4xl shadow-2xl"
          alt="stock"
        />
       </div>
        <div className='flex-1'>
          <motion.h1
            animate={{ rotate: 360, y: 20 }}
            transition={{ duration: 2 }}
            className="text-5xl font-bold"
          >
            Latest Jobs for You
          </motion.h1>

          <motion.h1
            animate={{ rotate: 360, y: 20 }}
            transition={{ duration: 2 }}
            className="text-5xl font-bold"
          >
            Remote{' '}
            <motion.span
              // animate color keyframes
              animate={{ color: ['#ff0000', '#0000ff'] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              style={{ display: 'inline-block' }}
            >
              Jobs
            </motion.span>{' '}
            for You
          </motion.h1>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
