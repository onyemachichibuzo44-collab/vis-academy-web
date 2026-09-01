import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="VIS Academy logo" className="w-12 h-12"/>
          <div>
            <div className="font-bold text-lg">VIS Academy</div>
            <div className="text-xs text-gray-500">VELOCITY INTERNATIONAL STEM ACADEMY</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/courses">Programs</Link>
          <Link to="/">Admissions</Link>
          <Link to="/">Research</Link>
          <Link to="/">Campus</Link>
          <Link to="/">About</Link>
          <a href="#contact">Contact</a>
          <a href="/" className="bg-visGold text-visNavy px-4 py-2 rounded">Enroll Now</a>
        </nav>
      </div>
    </header>
  )
}
