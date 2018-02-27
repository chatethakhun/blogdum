import { COLOR, MARGIN } from "../../../constant/theme/constant";

import styled from "styled-components";

export const NavContainer = styled.nav`
    height: 50px;
    display: flex;
    justify-content: center;
    background-color: ${COLOR.BLUE};
    .hamburger {
        position: absolute;
        left: 5%;
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
    .log-out {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        margin-right: ${MARGIN.BIG_MARGIN};
        > p:hover {
            color: ${COLOR.DARK_GRAY};
            cursor: pointer;
        }
        > p {
            color:${COLOR.WHITE}
        }
    }
}
`;
