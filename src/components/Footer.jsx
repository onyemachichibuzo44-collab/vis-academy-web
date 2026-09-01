import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <div className="font-bold">VIS Academy</div>
            <div className="text-sm text-gray-600">VELOCITY INTERNATIONAL STEM ACADEMY</div>
            <div className="mt-4 text-sm">Email: support@visacademy.com</div>
            <div className="text-sm">Phone: +1 402 251-3055 | +234 906 312 3828</div>
          </div>
          <div>
            <h4 className="font-semibold">Quick links</h4>
            <ul className="mt-2 text-sm text-gray-600">
              <li>Programs</li>
              <li>Admissions</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} VIS Academy. All rights reserved.</div>
      </div>
    </footer>
  )
}
