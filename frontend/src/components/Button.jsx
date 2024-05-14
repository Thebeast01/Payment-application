import React from 'react'

export function Button({ label, onClick }) {
        return (
                <div>
                        <button type='button' onClick={onClick}
                                className='w-full bg-slate-950 rounded-lg text-center p-3 text-white mt-2'>
                                {label}
                        </button>
                </div>
        )
}


