
"use client"
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronsRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Helper component for the inner content
const CardContent = ({ children, link }) => {
    // Standard access for title, paragraph, and link logic
    const title = children[0]?.props?.children;
    const paragraph = children[1]?.props?.children;

    return (
        <div className="cardBottom absolute bottom-0 px-5 py-5 w-full bg-white/60 backdrop-blur-xl flex flex-col gap-2">
            <h1 className='text-xl text-black font-extrabold'>{title}</h1>
            <p className='text-sm text-ellipsis line-clamp-2'>{paragraph}</p>
            <Link className='text-sm hover:underline underline-offset-4 flex items-center font-bold text-zinc-600 hover:text-zinc-950 hover:brightness-110 active:scale-98' href={link}> 
                Read More <ChevronsRight size={20} className='ml-1.5 text-sm'/>
            </Link>
        </div>
    );
};


function Card({ children, image, link = '#', className, progress, range, index, targetScale }) {
    // 1. Create a reference to the card div
    const ref = useRef(null);

    // 2. Track scroll progress of the element
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'] // Tracks when element enters/leaves viewport
    });

    // 3. Map the scroll progress (0 to 1) to opacity
    // Opacity: 1 when the card is in the middle of the screen (0.3 to 0.7 visibility), 
    // fades to 0 as it leaves the top (1.0 visibility)
    const opacity = useTransform(
        scrollYProgress, 
        [0.2, 0.4, 0.6, 1], // Input range (where the card is in the viewport)
        [0.2, 1, 1, 0]      // Output range (opacity value)
    );
    
    // We can also add a small scale transformation for visual flair
    const scale = useTransform(
        scrollYProgress, 
        [0,1],
        [2,1]
    );

    const cardScale=useTransform(progress, range, [1, targetScale]);

    return (
        // Use motion.div and attach the ref
        <div ref={ref} className=' h-[100vh] flex justify-center items-center sticky top-0'>
            <motion.div 
            style={{ opacity,top:`calc(-5vh + ${(index-1) * 25}px)`,scale:cardScale }} // Apply the animated styles
            className={`relative  rounded-4xl overflow-hidden  top-[-25%] `}
        >
            <motion.div
                className='w-full h-full'
                // style={{scale}}
            >
            <Image 
                src={image} 
                // style={{scale}}
                alt="Person" 
                height={500} 
                width={500}
                className="w-full h-full object-fit" // Ensure image fits well
            />
            </motion.div>
            <CardContent link={link}>{children}</CardContent>
            
            </motion.div>
        </div>
    );
}

export default Card;