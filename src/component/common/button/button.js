import React from 'react'

export const ButtonComponent = ({loading, onClick, lable}) => (
    
        loading ? 
            <button>
                <i className="fas fa-spinner fa-spin"></i>
            </button>
            :
            <button type='submit'></button>
    
)