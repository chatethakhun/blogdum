import styled from 'styled-components'



export const DatepickerContainer = styled.div`
    > i {
        position: relative;
        top: -26px;
        left: 10px;
    }
    > div {
        .react-datepicker-wrapper {
            width: 100%;
            > div {

                width: 100%;
                > input {
                    font-family: 'FontAwesome','Ubuntu';
                    width: 99%;
                    height: 30px;
                    border-radius: 4px;
                    border: 1px solid #777;
                    text-indent: 30px;
                    font-size: 15px;
                }
                input:-moz-placeholder::after  { font-family: fontAwesome; content:'\f002  '; color: #69f }
            }
        }
    }
`