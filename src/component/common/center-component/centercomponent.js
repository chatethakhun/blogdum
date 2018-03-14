import React from 'react'
import { CenterContainer } from '../../../theme/common/center-component/center-component-theme'


export const CenterComponent = props => (
    <CenterContainer height={props.height}>
    {   
        !props.loading ? 
            <div>
                
                <div className="title">
                    <h1>{props.title}</h1>
                </div>
                {
                    props.status && props.status === 404 && <div><button onClick={() => props.onHandleClick()}>Back</button></div>
                }
            </div>:
            <i className="fas fa-spinner fa-spin"></i>
        }
    </CenterContainer>
)