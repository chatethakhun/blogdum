import React from 'react'
import { compose, withHandlers, withState, lifecycle } from 'recompose'
import { DropdownContainer } from '../../../theme/common/input/input-theme'

const contents = ['General', "Knowledge"]
const enhance = compose(
    withState('display', 'handleDisplay',  false),
    withState('placeholder','handlePlaceholder', 'Select Category'),
    withState('value', 'handleValue', ''),
    withHandlers(() =>  {
        return({
            handleDropdown: (props) => evt => {
                //console.log(evt)
                props.handleDisplay(!props.display)
            },
            selectDropdown: (props) => evt => {
                //console.log('props in select dropdown function', props)
                props.handleValue(evt.target.textContent)
                props.handleDisplay(false)
                props.handleChange(evt.target.textContent)
            }
        })
    }),
    lifecycle({
        componentDidMount() {
            //console.log('did mount value props ====>', this.props)
            if(this.props.defaultValue) {
                //console.log('have default value')
                this.props.handleValue(this.props.defaultValue)
            }
        }
    })
)

const Dropdown = (props) => (
    <DropdownContainer display={props.display ? 'block': 'none'}>
        <div className='selected'>
            <div className='dropdown' onClick={props.handleDropdown}>
                <span className={!props.value ? 'placeholder': 'value'}>{props.value ? props.value : props.placeholder}</span><i className="fas fa-caret-down"></i>
            </div>
            <div className='selected-dropdown'>
            {
                contents.map((content) => (
                    <ul key={content} onClick={props.selectDropdown}>
                        <a href="#" >{content}</a>
                    </ul>
                ))
            }
            </div>
        </div>
    </DropdownContainer>
)

export default enhance(Dropdown)