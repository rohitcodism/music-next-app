'use client'

import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';
import Link from 'next/link';

const events = [
    {
        title: "Piano Lessons",
        description: "Learn to play the piano with our experienced instructors. Whether you're a beginner or advanced pianist, we offer personalized lessons to help you achieve your musical goals.",
        link: "/piano-lessons"
    },
    {
        title: "Guitar Classes",
        description: "Join our guitar classes and master this versatile instrument. Our expert teachers will guide you through the fundamentals, from basic chords to advanced techniques.",
        link: "/guitar-classes"
    },
    {
        title: "Vocal Training",
        description: "Unlock your vocal potential with our comprehensive vocal training program. Develop your voice, build confidence, and explore a variety of musical styles under the guidance of our skilled instructors.",
        link: "/vocal-training"
    },
    {
        title: "Drum Workshops",
        description: "Experience the rhythm of drumming with our dynamic drum workshops. From basic beats to complex rhythms, our classes cater to drummers of all levels, fostering creativity and musical expression.",
        link: "/drum-workshops"
    },
    {
        title: "Violin Masterclass",
        description: "Enroll in our violin masterclass and elevate your playing to new heights. Our experienced teachers provide individualized instruction, helping you refine your technique and musicality.",
        link: "/violin-masterclass"
    }
];


function UpComingWebinars() {
    return (
        <div
            className='
                w-[100%]
                px-12
                text-center
                flex
                flex-col
                items-center
                bg-dot-white/[0.2]
            '
        >
            <h2
                className='
                    font-bold
                    text-3xl
                    sm:text-4xl
                    text-white
                    py-4
                '
            >
                Upcoming Webinars
            </h2>
            <HoverEffect items={events} />
            <div
                className='
                    py-4
                '
            >
                <Link
                    href={"/all-events"}
                >
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl p-4">
                            View all upcoming events
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default UpComingWebinars
