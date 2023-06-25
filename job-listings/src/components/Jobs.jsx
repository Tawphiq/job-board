import React from 'react'
import Details from '../data.json'
import Top from './Top'




const Jobs = () => {
    
  return (
    <div className='max-w-md sm:max-w-xl lg:max-w-full'>
        <Top />
        {
            Details && Details.map(detail => {
                return (
                    <div className='grid m-4 p-4 bg-white shadow-lg rounded-md'>
                        <div key = {detail.id} className=''>
                            <div>
                                <div>
                                    <img src={detail.logo} alt="" />
                                </div>
                                <div className='grid grid-cols-2'>
                                <div className='text-teal-400 font-bold mb-3'>{detail.company}</div>
                                <div>{detail.new}</div>
                                <div>{detail.featured}</div>
                                </div>
                                <div className='font-bold'>{detail.position}</div>
                                <div className='grid grid-cols-3 pt-4 pb-4 mb-4 border-b-2 text-gray-500 font-semibold'>
                                <div>{detail.postedAt}</div>
                                <div>{detail.contract}</div>
                                <div>{detail.location}</div>
                                </div>
                                <div className='grid grid-cols-3'>
                                <div className='footer'>{detail.role}</div>
                                <div className='footer'>{detail.level}</div>
                                <div className='footer'>{detail.languages[0]}</div>
                                </div>
                                <div className='grid grid-cols-3'>
                                <div>{detail.languages[1]}</div>
                                <div>{detail.languages[2]}</div>
                                </div>
                                <div className='footer'>{detail.tools}</div>
                                
                            </div>
                        </div>
                    </div>
                )
            }
                )
        }
    </div>
  )
}

export default Jobs