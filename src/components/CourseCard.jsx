import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseCard({course}){
  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
      <div className="h-36 bg-gray-100 flex items-center justify-center">Thumbnail</div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{course.title}</h3>
        <p className="text-sm text-gray-600">Instructor: {course.instructor} • {course.rating} ★</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm font-bold">{course.price===0? 'Free': `$${course.price}`}</div>
          <Link to={`/course/${course.id}`} className="text-sm text-visPurple">View</Link>
        </div>
      </div>
    </div>
  )
}
