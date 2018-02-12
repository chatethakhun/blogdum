import React from 'react'
import { NotFoundContainer } from '../../component/notfound/notfound'
import { CenterComponent } from './../../component/common/center-component/centercomponent'


export default class NotFound extends React.Component {
    backPage = () => {
        console.log(this.props)
        this.props.router.goBack()
    }
    render() {
        return(
            <NotFoundContainer>
                <CenterComponent title={"Not Found Page"} status={404} onHandleClick={() => this.backPage()}/>
            </NotFoundContainer>
        )
    }
}