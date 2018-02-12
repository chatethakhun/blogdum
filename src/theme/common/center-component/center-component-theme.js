import styled from 'styled-components'

export const CenterContainer = styled.div`
    display:flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    .title {
        display: flex;
        justify-content: center;

        > h1 {
            color: white;
        }
    }
    > div {
        button {
            height: 30px;
            border-radius: 8px;
            border: none;
            color: white;
            width: 100%;
            background-color: orange;
        }
    }
`