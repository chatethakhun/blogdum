import React from 'react'
import { CenterContainer } from '../../../theme/common/center-component/center-component-theme'


export const CenterComponent = ({ title, status, onHandleClick, loading }) => (
    <CenterContainer>
    {   
        !loading ? 
            <div>
                <div className="title">
                    <h1>{title}</h1>
                </div>
                {
                    status && status === 404 && <div><button onClick={() => onHandleClick()}>Back</button></div>
                }
            </div>:
            <i className="fas fa-spinner fa-spin"></i>
        }
    </CenterContainer>
)