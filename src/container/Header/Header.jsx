import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { data, images } from '../../constants';
import './Header.scss';
import { TypeAnimation } from 'react-type-animation';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>

            <p className="p-text">Hello, I am</p>
            <TypeAnimation
      sequence={[
        data.Name, // Types 'One'
        2000,
        '',
        1000 // Waits 1s
       
      ]}
      wrapper="h1"
      cursor={true}
      repeat={Infinity}
      className={"head-text"}
    />
            {/* <h1 className="head-text">{data.Name}</h1> */}
          </div>
        </div>

        <div className="tag-cmp app__flex">
          
                 <TypeAnimation
                 sequence={[
                   data.whoami[0], // Types 'One'
                   2000,
                   data.whoami[1],
                   2000,
                   data.whoami[2],
                   2000,
                    // Waits 1s
                  
                 ]}
                 wrapper="p"
                 cursor={true}
                 repeat={Infinity}
                 className={"p-text"}
               />
          
         
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img  "
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react,images.node,images.javascript,images.typescript, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
