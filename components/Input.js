import React from 'react'

function Input({label, placeholder}) {
  return (
    <div className="w-fit">
        <div className="pb-1 w-fit text-md text-gray-600">
        {label}
        </div>
        <input type="text" placeholder={placeholder} className="pl-4 bg-[#F8F8F8] text-base border border-[#D9D9D9] rounded py-2 px-24" />
  </div>
  )
}

export default Input