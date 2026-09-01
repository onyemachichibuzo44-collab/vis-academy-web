import React from 'react'
import { useParams } from 'react-router-dom'

export default function Course(){
  const { id } = useParams()
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Course Detail — {id}</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">Preview video placeholder</div>
          <h2 className="mt-4 text-2xl font-semibold">What you'll learn</h2>
          <ul className="mt-2 list-disc ml-6 text-gray-700">
            <li>Conceptual clarity with examples</li>
            <li>Practical experiments and diagrams</li>
            <li>Exam-focused problem solving</li>
          </ul>
        </div>
        <aside className="p-6 border rounded-lg">
          <p className="text-sm">Price: ₦5000 / $10</p>
          <button className="mt-4 bg-visGold text-visNavy px-4 py-2 rounded" onClick={()=>alert('Enroll flow placeholder')}>Enroll</button>
        </aside>
      </div>
    </div>
  )
}
