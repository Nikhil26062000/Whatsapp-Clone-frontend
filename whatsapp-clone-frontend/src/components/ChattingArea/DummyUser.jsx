import React from 'react'

const DummyUser = ({name,url}) => {
  return (
    <div
              
              className="flex px-5 py-3 border-gray-800 border-b-2 border-t-0 border-l-0 border-r-0 hover:bg-[#222e35]"
              
            >
              <img
                src={url}
                className="w-[50px] h-[50px] rounded-full mr-3"
              />

              <div className="flex flex-col gap-1 ml-3">
                <p className="font-semibold">{name}</p>
               <p className="text-[#607777] text-sm"> Tap to view</p>
              </div>

              
            </div>
  )
}

export default DummyUser