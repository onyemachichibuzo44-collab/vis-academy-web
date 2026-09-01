import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Course from './pages/Course'
import Learn from './pages/Learn'
import Dashboard from './pages/Dashboard'
import Instructor from './pages/Instructor'
import Admin from './pages/Admin'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/course/:id" element={<Course/>} />
          <Route path="/learn/:id" element={<Learn/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/instructor" element={<Instructor/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
