import styled from 'styled-components'
import { MARGIN } from '../../constant/theme/constant'

export const IncomeContainer  = styled.div`
    h1 {
        color: #333;
        text-align: center;
        margin: 0;
    }
    height: 100vh;
    background-color: #4BC;
    display: flex;
    justify-content: center;
    > .add-box {
        height: 500px;
        width: 400px;
        padding: 30px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 3px 3px 60px 0px #777;
        margin: ${MARGIN.BIG_MARGIN};
        > form {
            h3 { 
                margin: 10px 0px;
                text-align: left;
            }
            > button {
                width: 100%;
                height: 30px;
                border-radius: 4px;
                color: white;
                background-color: orange;
                border:none;
                cursor: pointer;
            }
            > button:hover {
                background-color: #e68929;
            }
            > div:not(first-child) {
                margin-bottom: 10px;
            }
            > div {
                &.date {
                    height: 80px;
                }
                hr {
                    background-color: #777;
                    border: 1px solid orange;
                    margin-bottom: 10px;
                }
  
                &.income {
                    > div {
                        display: flex;
                        div: first-child {
                            margin-right: 10px;
                        }

                        div {
                            display: flex;
                            flex:1; 
                            flex-direction: column;
                            > span {
                                font-size:10px;
                                color: red;
                                margin-top: 5px;
                            }
                            > input {
                                font-family: 'Font Awesome\ 5 Free', 'Ubuntu';
                                width: 100%;
                                height: 30px;
                                border-radius: 4px;
                                border: 1px solid #777;
                                text-indent: 10px;
                                font-size: 15px;
                            }
                        }
                    }
                }
                &.note {
                    > div {
                        textarea {
                            width: 99%;
                            height: 80px;
                            border: 1px solid #777;
                            border-radius: 4px;
                            font-size: 15px;
                            text-indent: 10px;
                        }
                    }
                }
            }
        }
    }

`