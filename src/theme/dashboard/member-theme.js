import styled from 'styled-components'

export const Container = styled.div`
    background-color:#4BC;
    display:flex;
    flex-direction:column;
    align-items: center;
    padding: 40px;
    height: 100%;
    .table {
        background: white;
        width: 100%;
        display: flex;
        margin: 5px 0px;
        > div {
            display: flex;
            flex-basis: 30%;
            justify-content: center;
            > h3 {
                text-align: center;
            }
        }
    }
    .table:first-child {
        background-color:orange;
        border-radius: 8px;
        h3 {
            color: white;
        }
    }
`