'use client'

import React from 'react'
import courseData from "../Data//music_courses.json";
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image?: string
}

function Featured() {

    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);

    return (
        <div
            className='
                py-12
                bg-black
            '
        >
            <div>
                <div className="text-center">
                    <h2
                        className='
                            text-base
                            font-semibold
                            tracking-wide
                            uppercase
                            text-teal-600
                        '
                    >
                        Featured Courses
                    </h2>
                    <p
                        className='
                            mt-2
                            text-3xl
                            leading-8
                            font-extrabold
                            tracking-tight
                            text-white
                            sm:text-4xl
                        '
                    >
                        Learn With The Best
                    </p>
                </div>
            </div>
            <div
                className='
                    mt-10
                '
            >
                <div
                    className='
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3
                        gap-8
                        justify-center
                    '
                >
                    {featuredCourses.map((course) => (
                        <div
                            className="flex justify-center"
                            key={course.id}
                        >
                            <BackgroundGradient
                                className="
                                    rounded-[22px] 
                                    max-w-sm 
                                    p-4
                                    sm:p-10
                                    bg-white
                                    dark:bg-zinc-900
                                    dark:text-white
                                    text-black
                                "
                            >
                                <div
                                    className='
                                    p-4
                                    sm:p-6
                                    flex
                                    flex-col
                                    items-center
                                    text-center
                                    flex-grow
                                    '
                                >
                                    <p
                                        className='
                                            text-pretty
                                            text-base
                                            pb-4
                                            font-bold
                                            track-wider
                                            antialiased
                                        '
                                    >
                                        {course.title}
                                    </p>
                                    <p
                                        className='
                                        text-sm 
                                        text-neutral-600 
                                        dark:text-neutral-400
                                        flex-grow
                                        '
                                    >
                                        {course.description}
                                    </p>
                                    <Link
                                        href={`/courses/${course.slug}`}
                                        className='
                                            mt-2
                                            font-semibold
                                        '
                                    >
                                        Learn more
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className='
                    mt-20
                    text-center
                '
            >
                <Link
                    href={"/course"}
                >
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            View all courses
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Featured;