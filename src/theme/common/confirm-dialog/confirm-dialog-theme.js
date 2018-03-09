import { COLOR, PADDING, SCREEN } from "../../../constant/theme/constant";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 50%;
  transform: translateX(50%);

  > div {
    padding: ${PADDING.BIG_PADDING};
    background-color: ${COLOR.WHITE};
    max-width: 300px;
    border-radius: 4px;
    @media screen and (max-width: ${SCREEN.MOBILE}) {
      padding: 10px;
      .button {
        button {
          margin-bottom: 10px;
        }
      }
    }
    .label {
      text-align: center;
    }
    .button {
      text-align: center;
      button {
        margin-left: 10px;
      }
    }
  }
`;
