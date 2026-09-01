import React from 'react'

export default function PaymentModal(){
  const copy = async (text)=>{
    await navigator.clipboard.writeText(text)
    alert('Copied to clipboard')
  }
  return (
    <div className="p-4">
      <h3 className="font-semibold">Payment Methods</h3>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <h4>Wise</h4>
          <p className="text-sm text-gray-600">scienceandmathsmadeeasy@gmail.com</p>
          <button onClick={()=>copy('scienceandmathsmadeeasy@gmail.com')} className="mt-2 bg-visGold px-3 py-1 rounded">Copy Email</button>
        </div>
        <div className="p-4 border rounded">
          <h4>Grey USD Account</h4>
          <p className="text-sm text-gray-600">211009027454</p>
          <button onClick={()=>copy('211009027454')} className="mt-2 bg-visPurple text-white px-3 py-1 rounded">Copy</button>
        </div>
        <div className="p-4 border rounded">
          <h4>OPay</h4>
          <p className="text-sm text-gray-600">9134620781</p>
          <button onClick={()=>copy('9134620781')} className="mt-2 bg-visBlue text-white px-3 py-1 rounded">Copy</button>
        </div>
      </div>
    </div>
  )
}
