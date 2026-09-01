import React from 'react'
import { useParams } from 'react-router-dom'

export default function Learn(){
  const { id } = useParams()
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Learning — Course {id}</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="w-full bg-black text-white h-64 flex items-center justify-center">Video player placeholder</div>
          <div className="mt-4">Lesson content, notes & resources</div>
        </div>
        <aside className="p-4 border rounded-lg">
          <h3 className="font-semibold">Curriculum</h3>
          <ul className="mt-2">
            <li><label><input type="checkbox"/> Lesson 1 - Intro</label></li>
            <li><label><input type="checkbox"/> Lesson 2 - Practice</label></li>
          </ul>
        </aside>
      </div>
    </div>
  )
}
