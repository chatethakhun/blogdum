import styled from 'styled-components'

import { FONT, BORDER, VIEW } from '../../../constant/theme/constant'


export const DatepickerContainer = styled.div`
    > i {
        position: relative;
        top: -21px;
        left: 10px;
    }
    > div {
        .react-datepicker-wrapper {
            width: 100%;
            > div {
                height: 30px;
                width: 100%;
                > input {
                    font-family: '${FONT.ICON_FONT}','Ubuntu';
                    width: 99%;
                    height: ${VIEW.FULL};
                    border-radius: ${BORDER.INPUT_RADIUS};
                    border: 1px solid #777;
                    text-indent: 30px;
                    font-size: ${FONT.INPUT};
                }
                input:-moz-placeholder::after  { font-family: fontAwesome; content:'\f002  '; color: #69f }
            }
        }
    }
`