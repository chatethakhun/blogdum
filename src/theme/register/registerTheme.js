import styled from 'styled-components'
import { SCREEN,
         MARGIN,
         FONT } from '../../constant/theme/constant'

export const Register = styled.div`
    background-color: #4BC;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items:center;
    > div {
        display:flex;
        width: 1000px;
        height: 400px;
        background-color: white;
        border-radius: 8px;
        > div {
            display: flex;
            flex:1;
            width:200px;
            margin: 20px;
        }
        > .image-intro {
            background: url("https://picsum.photos/500");
            background-position: center; 
            background-size:cover;
            margin: 0;
            width: 400px;
        }
        .register-form {
            display: flex;
            flex-direction: column;
            > div {
                display: flex;
                width: 100%;
                justify-content: center;
            }
            > .intro-register {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-top: 20px;

                h2 {
                    margin: 0;
                    text-align: center;
                }
                p {
                    display: inline-block;
                    margin: 0px 60px;
                    padding-top: 5px;
                    > span {
                        margin: 0;
                        color: #4BC;
                    }
                }
                > div:last-child {
                    text-align: left;
                }
            }
            > .form {
                display: flex;
                flex-grow: 1;
                width: 100%; 
                margin-top: 5px;
                > form {
                    padding: 20px;
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    align-items: center;
                    > div {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 100%;
                        margin-bottom: 10px;
                        > span {
                            color: red;
                            font-size: 12px;
                            margin-top: 10px;
                        }
                        > input {
                            height: 40px;
                            width: 80%;
                            padding:0px;
                            border: 1px solid #777;
                            border-radius: 4px;
                            text-indent: 10px;
                        }
                        > ::-webkit-input-placeholder {
                            //padding: 0px 10px;
                            text-indent: 10px;
                          }
                    }
                    > button { 
                        width: 80%;
                        height: 40px;
                        border: none;
                        background-color: #89bdd3;
                        color: white;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                    > p {
                        color: red;
                        font-size: 12px;
                    }
                }
            }

        }
    }
    @media screen and (max-width: ${SCREEN.TABLET}) {
        > div {
            width: 100%;
            height: 95%;
            flex-direction:column;
            margin: ${MARGIN.BIG_MARGIN};
            > div {
                margin: 0;
            }
            .image-intro {
                width: 100%;
            }
            .register-form {
                width: 100%;
                p {
                    margin: 0px 50px !important;
                }
                h2,p {
                    font-size: ${FONT.SMALL}
                }
            }
        }
    }
`