import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const testimonials = [
    {
        quote: "The instructors at this music school are truly exceptional. They helped me refine my skills and grow as a musician.",
        name: "Emily Johnson",
        title: "Piano Student"
    },
    {
        quote: "I couldn't be happier with my experience here. The atmosphere is welcoming, and the lessons are tailored to individual needs.",
        name: "Michael Smith",
        title: "Guitar Student"
    },
    {
        quote: "Being a part of this music school has been a transformative journey for me. I've gained confidence and found my passion for music.",
        name: "Sophia Lee",
        title: "Vocal Student"
    },
    {
        quote: "The instructors go above and beyond to ensure that each student receives personalized attention and guidance. Highly recommended!",
        name: "Daniel Brown",
        title: "Drum Student"
    },
    {
        quote: "My time at this music school has been incredibly rewarding. The teachers are supportive, and the environment is conducive to learning.",
        name: "Olivia Taylor",
        title: "Violin Student"
    },
    {
        quote: "I've been taking lessons here for a year now, and I've seen a significant improvement in my musical abilities. It's been a fantastic experience!",
        name: "Ethan Martinez",
        title: "Bass Guitar Student"
    },
    {
        quote: "The music school provides a perfect balance of theory and practical lessons. I've learned so much and look forward to each session.",
        name: "Ava White",
        title: "Flute Student"
    },
    {
        quote: "As a beginner, I was nervous about starting music lessons, but the instructors here made me feel comfortable right from the start. I'm grateful for their patience and expertise.",
        name: "Noah Johnson",
        title: "Saxophone Student"
    }
];

function Testimonials() {
    return (
        <div
            className='
            h-[40rem]
            flex
            flex-col
            rounded-md
            antialias
            bg-black
            dark:bg-black
            dark:bg-dot-white/5
            bg-dot-white/[0.2]
            items-center
            justify-center
            overflow-hidden
            relative
            '
        >
            <h2
                className='
                    text-3xl
                    font-bold
                    py-4
                    text-center
                    z-10
                '
            >
                Hear Our Harmony: Voices of Success
            </h2>
            <div
                className='
                        flex
                        justify-center
                        w-full
                        overflow-hidden
                        px-4
                        sm:px-6
                        lg:px-8
                    '
            >
                <InfiniteMovingCards
                    items={testimonials}
                    direction='left'
                    speed='slow'
                />
            </div>
        </div>
    )
}

export default Testimonials
