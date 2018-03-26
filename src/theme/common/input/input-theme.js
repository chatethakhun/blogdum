import { COLOR, FONT } from "../../../constant/theme/constant";

import styled from "styled-components";

export const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  > textarea {
    border-radius: 4px;
    border: 1px solid #777;
    font-size: ${FONT.INPUT};
    padding: 10px;
    &::placeholder {
      color: ${COLOR.LIGHT_GRAY};
    }
  }
  > span {
    color: ${COLOR.LIGHT_GRAY};
    font-size: ${FONT.SMALL};
    padding: 10px 0px;
  }
`;

export const TextInput = styled.input`
  height: 40px;
  width: ${props => props.width || "80%"};
  padding: 0px;
  border: 1px solid #777;
  border-radius: 4px;
  text-indent: 10px;
  font-size: ${FONT.INPUT};
  &::placeholder {
    color: ${COLOR.LIGHT_GRAY};
  }
`;


export const DropdownContainer = styled.div`
  position: relative;
  > .selected {
    > .dropdown {
      border-radius: 4px;
      border: 1px solid #777;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      height: 40px;
      align-items:center;
      padding: 0px 10px;
      > .placeholder {
        font-size: ${FONT.INPUT};
        color: ${COLOR.LIGHT_GRAY};
        
      }
      > .value {
        font-size: ${FONT.INPUT};
        color: #333; 
      }
    }
    .selected-dropdown {
      display: ${props => props.display || null};
      -webkit-box-shadow: 0 10px 6px -6px #777;
      -moz-box-shadow: 0 10px 6px -6px #777;
      box-shadow: 0 10px 6px -6px #777;
      position: absolute;
      border: 1px solid #777;
      top: 50px;
      right: 0;
      left:0;
      background-color: white;
      z-index: 99;
      border-radius: 4px;
      > ul {
        -webkit-padding-start: 0px;
        margin: 0px;
        padding: 10px 10px;
        cursor: pointer;
        > a {
          text-decoration: none;
          color: #333;
        }
      }
      > ul:hover {
        background: ${COLOR.SECONARY};
        > a {
          color: white;
        }
      }
    }
  }

  
`