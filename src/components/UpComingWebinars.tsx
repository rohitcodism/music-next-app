'use client'

import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';

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
        </div>
    )
}

export default UpComingWebinars
