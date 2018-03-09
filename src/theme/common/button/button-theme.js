import { COLOR } from "../../../constant/theme/constant";
import styled from "styled-components";

export const ButtonTheme = styled.button`

    width: ${props => props.width || "80%"};
    height: 40px;
    border: none;
    background-color: ${props => props.bgColor || COLOR.DARK_GRAY};
    color: ${props => props.fontColor || "white"};
    border-radius: 4px;
    cursor: pointer;

 &button: disabled {
    background: #eaeaea;

`;
