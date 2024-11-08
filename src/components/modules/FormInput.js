import React from 'react'

function FormInput({name,label,value,onChange,type}) {
  return (
    <div className='form-input'>
        <label htmlFor={name}>{label}</label>
        <input id={name} type={type} value={value} onChange={onChange} name={name} />
    </div>
  )
}

export default FormInput