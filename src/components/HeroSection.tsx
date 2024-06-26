'use client'

import Link from 'next/link';
import React from 'react'
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';

//TODO : IF possible try to change the moving border color to white.

function HeroSection() {
    return (
        <div
            className='
                h-auto
                md:h-[40rem]
                w-full
                rounded-md
                flex
                flex-col
                items-center
                justify-center
                relative
                overflow-hidden
                mx-auto
                py-10
                md:py-0
            '
        >
            <Spotlight 
                fill='white'
                className='
                    -top-40
                    left-0
                    md:left-60
                    md:-top-20
                '
            />
            <div
                className="
                    p-4
                    relative
                    z-10
                    w-full
                    text-center
                    flex
                    flex-col
                    gap-4
                "
            >
                <h1
                    className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-2"
                >
                    Master the art of music
                </h1>
                <p
                    className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto pb-2"
                >
                    Dive into our comprehensive music courses and transform your musical journey today. Whether you are a beginner or looking to refine your skills, join us to unlock your true potential.
                </p>
                <div
                    className='
                        my-4
                    '
                >
                    <Link href={"/courses"}>
                        <Button
                            borderRadius='1.75rem'
                            className='
                                bg-black
                                bg-opacity-[0.5]
                            '
                        >
                            Explore Courses
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
