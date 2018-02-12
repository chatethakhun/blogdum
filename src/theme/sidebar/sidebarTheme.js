import styled from 'styled-components'

export const SideBarContainer = styled.div`
height: 100vh;
> div {
    height: 100vh;
    > .profile {
        > div {
            text-align: center;
            margin-top: 10px;
            img {
                border-radius: 50%;
                width: 130px;
                height: 130px;
                cursor: pointer;
            }
        }
    }
    p, h2, a {
        color: white;
        text-align: center;
    }
    a {
        text-decoration:none; 
        display: flex;
        justify-content: center;
    }
    hr {
        border: 1px solid white;
    }
    height: 100%;
    width: 150px;
    background-color: #168d9e;
    display:flex;
    flex-direction: column;
    .list {
        > ul {
            > a {
                padding: 10px;
            }
            list-style-type: none;
            -webkit-padding-start: 0px;
            a:hover {
                background-color: rgba(239,196,100,0.4);
            }
        }
    }

    > div {
    }

    .signout {
        display: flex;
        flex:1;
        flex-direction: column;
        justify-content: flex-end;
        padding : 10px;
        > div > p {
            font-size: 12px;
        }
        button {
            height: 30px;
            width: 100%;
            background-color: orange;
            border: none;
            color: white;
            border-radius: 8px;
        }
        button:active {
            background-color: #c1923a;
        }
    }
    >ul {
        -webkit-padding-start: 0px;
    }
}
`