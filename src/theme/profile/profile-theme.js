import styled from 'styled-components'

export const ProfileContainer = styled.div`

    height: 100vh;
    padding: 20px;
    background-color: #4bc;
    > div {
        display: flex;
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        flex-wrap: wrap;
        > div {
            margin-right: 10px;
        }
    }
`


export const ProfileDetailContainer = styled.div`
    display: flex;
    flex: 1;
    > .name {
        display:flex;
        flex-direction:column;
        width: 100%;
        padding: 0px 10px;
        .edit {
            margin-bottom: 20px;
            margin-top: 10px;
            justify-content: flex-end;
            > i {
                cursor: pointer;
                font-size: 24px;
            }
        }
        > div {
            display: flex;
            > p {
                margin-left: 10px;
                display:flex;
                align-items:center;
            }
        }
    }
`

export const ProfilePictureContainer = styled.div`
    > img {
        width: 300px;
    }
    input {
        display: none;
    }
    p {
        text-align: center;
        cursor: pointer;
    }
    p:hover {
        color: orange;
    }
`