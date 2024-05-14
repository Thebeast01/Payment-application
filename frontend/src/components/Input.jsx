/* eslint-disable react/prop-types */
import React from 'react'

const Input = ({ label, onChange, placeholder }) => {
        return (
                <div>
                        <div className='flex flex-col '>
                                <label htmlFor="">{label}</label>
                                <input onChange={onChange} type="text" className='rounded-lg p-2 bg-transparent border-2 border-slate-400 ' placeholder={placeholder} />
                        </div>
                </div>
        )
}

export default Input
