"use client"
import React from 'react'
import Section from '../Section'
import Badge from '../Badge'
import PrimaryHeading from '../PrimaryHeading'
import Paragraph from '../Paragraph'
import Card from '../Card' // Import the motion-enabled Card
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'


function Digital() {
    const cardData = [
        { id: 1, title: 'Hello World 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero dolorum accusamus odio consectetur aperiam nam dignissimos error odit ex!' },
        { id: 2, title: 'Hello World 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero dolorum accusamus odio consectetur aperiam nam dignissimos error odit ex!' },
        { id: 3, title: 'Hello World 3', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero dolorum accusamus odio consectetur aperiam nam dignissimos error odit ex!' },
        { id: 4, title: 'Hello World 4', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero dolorum accusamus odio consectetur aperiam nam dignissimos error odit ex!' },
        { id: 5, title: 'Hello World 5', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero dolorum accusamus odio consectetur aperiam nam dignissimos error odit ex!' },
    ];

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
    })

    useEffect( () => {
        const lenis = new Lenis()
    
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
      })

    

    return (
        <Section >
            <div  className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start ">
                
                {/* 1. LEFT CONTENT - Made Sticky */}
                <div 
                    className="lg:w-5/12 mb-12 lg:mb-0 
                               lg:sticky lg:top-24 lg:h-screen  lg:flex-col lg:justify-center 
                               "
                >
                    <Badge>Digital Innovation</Badge>
                    <PrimaryHeading>Crafting Digital Experience</PrimaryHeading>
                    <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit harum cumque doloremque, debitis vel corrupti voluptates, voluptas, rem accusamus repellendus unde fugiat tempore perspiciatis velit reprehenderit quasi culpa quae assumenda?</Paragraph>
                </div>

                {/* 2. RIGHT CONTENT - Contains Scrollable Cards */}
                <div ref={container}
                    className="lg:w-3/5 flex flex-col items-center justify-center 
                                 " 
                    // Add significant padding-bottom or margin to allow scrolling past all cards
                    
                >
                    {cardData.map((data, index) => {
                        const targetScale = 1 - ( (cardData.length - index) * 0.05);
                        return <Card 
                            key={data.id}
                            image="/image/Solutions-1.jpg" 
                            className='w-full'
                            index={index}
                            targetScale={targetScale}
                            progress={scrollYProgress}
                            range={[index * .25, 1]}
                        >
                            <h1 className=''>{data.title}</h1>
                            <p>{data.content}</p>
                        </Card>
                    })}
                </div>
            </div>
        </Section>
    )
}

export default Digital