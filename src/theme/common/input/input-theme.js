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
`;
