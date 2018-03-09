import { COLOR } from "../../../constant/theme/constant";
import styled from "styled-components";

export const PopupContainer = styled.div`
  display: ${props => props.display};
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 500em;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  > .close {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    span {
      font-size: 48px;
      color: white;
      cursor: pointer;
    }
  }
  }
`;

export const FormCreatePostContainer = styled.div`
> form {
    display: flex;
    justify-content: center;
    > div {
      > div {
        margin-bottom: 15px;
      }
      .title {
        display: flex;
        flex-direction: column;
        > span {
          margin-bottom: 15px;
        }
      }
      .detail {
        display: flex;
        flex-direction: column;
        > span {
          margin-bottom: 15px;
        }
      }
      .button {
          display: flex;
          justify-content: space-between;
      }
    }
`;

export const ImagePreview = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    border: 3px dotted ${COLOR.DARK_GRAY};
    padding: 10px;
    width: 200px;
    border-radius: 4px;
    img {
      width: 100%;
    }
    span {
      text-align: right;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
`;
