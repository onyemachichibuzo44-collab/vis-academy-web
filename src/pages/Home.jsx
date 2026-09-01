import React from 'react'

export default function Home(){
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-block bg-visGold text-visNavy px-3 py-1 rounded-full font-semibold">Accredited • Global • Future-Ready</span>
          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-visNavy">Building minds, inspiring Excellence.<span className="text-visGold"> Shaping the future.</span></h1>
          <p className="mt-4 text-lg text-gray-700">Join thousands of students worldwide at VIS Academy — a premier international STEM academy empowering the next generation of scientists, engineers, and innovators through hands-on learning, research, and global collaboration.</p>
          <div className="mt-6 flex gap-4">
            <button onClick={()=>window.open('https://meet.google.com/fim-eeua-dor','_blank')} className="bg-visGold text-visNavy px-6 py-3 rounded-md font-semibold">🎥 JOIN LIVE CLASS NOW</button>
            <button onClick={()=>window.open('https://classroom.google.com','_blank')} className="border border-gray-300 px-6 py-3 rounded-md">📚 JOIN CLASSROOM</button>
            <button onClick={()=>window.open('https://chat.whatsapp.com/Dw3CxBWDUpZ9cxyVZkRYTI','_blank')} className="bg-visPurple text-white px-6 py-3 rounded-md">💬 JOIN WHATSAPP GROUP</button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg text-center">
              <h3 className="font-semibold">Grades</h3>
              <p>7 - 12 | JSS1 - SS3</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <h3 className="font-semibold">Countries served</h3>
              <p>USA • UK • Canada • Nigeria • Australia • Europe</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <h3 className="font-semibold">Contact</h3>
              <p>+1 402 251-3055 • +234 906 312 3828</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <img src="/assets/hero.jpg" alt="VIS Academy banner" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-visNavy">World-class STEM education for global changemakers</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg bg-white">
            <h3 className="font-semibold">Hands-On Innovation Labs</h3>
            <p className="mt-2 text-sm text-gray-600">State-of-the-art labs for robotics, AI, biochem, and quantum projects with real-world learning.</p>
          </div>
          <div className="p-6 border rounded-lg bg-white">
            <h3 className="font-semibold">Global Partnerships</h3>
            <p className="mt-2 text-sm text-gray-600">Collaborations with universities and research institutions across 30+ countries.</p>
          </div>
          <div className="p-6 border rounded-lg bg-white">
            <h3 className="font-semibold">Career-Ready Outcomes</h3>
            <p className="mt-2 text-sm text-gray-600">95% graduate placement and mentorship from industry experts.</p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-visNavy">Payment Methods</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h4 className="font-semibold">💙 Wise</h4>
            <p className="text-sm text-gray-600 mt-2">Wise Email: scienceandmathsmadeeasy@gmail.com<br/>Account Name: Chibuzo Christogonus Onyemachi</p>
            <button className="mt-4 bg-visGold text-visNavy px-4 py-2 rounded" onClick={()=>window.open('https://chat.whatsapp.com/Dw3CxBWDUpZ9cxyVZkRYTI','_blank')}>WhatsApp confirm</button>
          </div>
          <div className="p-6 border rounded-lg">
            <h4 className="font-semibold">💜 Grey USD Account</h4>
            <p className="text-sm text-gray-600 mt-2">Holder: Chibuzo Christogonus Onyemachi<br/>Account No: 211009027454</p>
            <button className="mt-4 bg-visPurple text-white px-4 py-2 rounded" onClick={()=>navigator.clipboard.writeText('211009027454')}>Copy Account</button>
          </div>
          <div className="p-6 border rounded-lg">
            <h4 className="font-semibold">🧡 OPay (Nigeria)</h4>
            <p className="text-sm text-gray-600 mt-2">Onyemachi Chibuzo — 9134620781</p>
            <button className="mt-4 bg-visBlue text-white px-4 py-2 rounded" onClick={()=>navigator.clipboard.writeText('9134620781')}>Copy Account</button>
          </div>
        </div>
      </section>
    </div>
  )
}
