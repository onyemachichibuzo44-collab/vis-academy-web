import React from 'react'
import CourseCard from '../components/CourseCard'

const demoCourses = new Array(8).fill(0).map((_,i)=>({
  id: i+1,
  title: `Course ${i+1} - Mathematics & Science`,
  instructor: 'Victor',
  price: i%3===0?0: i%3===1?10:25,
  students: 1200 - i*50,
  rating: 4.8
}))

export default function Courses(){
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Courses</h1>
      <div className="mt-6 grid md:grid-cols-4 gap-6">
        {demoCourses.map(c=> <CourseCard key={c.id} course={c} />)}
      </div>
    </div>
  )
}
