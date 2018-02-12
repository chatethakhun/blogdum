import styled from 'styled-components'
import { VIEW , BORDER, COLOR} from '../../../constant/theme/constant'

export const CenterContainer = styled.div`
    display:flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: ${VIEW.FULL};
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
            border-radius: ${BORDER.PRIMARY_RADIUS};
            border: none;
            color: white;
            width: ${VIEW.FULL};
            background-color: ${COLOR.SECONARY};
        }
    }
`