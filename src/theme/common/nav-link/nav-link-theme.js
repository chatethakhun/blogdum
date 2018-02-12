import styled from 'styled-components'

export const NavContainer = styled.nav`
    height: 50px;
    display: flex;
    justify-content: center;
    background-color: orange;
    .hamburger {
        position: absolute;
        left: 3%;
        display: none;
        flex-direction: column;
        cursor: pointer;
        padding: 10px 10px 0px 0px;
        @media screen and (max-width: 800px) {
            display: flex; 
        }
        > div {
            width: 25px;
            height: 2px;
            background-color: white;
            margin: 3px 0;
        }
    }
    > div {
        display: flex;
        align-items: center;
        > a {
            color: white;
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: 0px 20px;
            height: 70%;
            border-radius: 8px;
    }
    a:hover {
        background-color: #999;
    }
    .active {
        background-color: #555;
    }
}
`