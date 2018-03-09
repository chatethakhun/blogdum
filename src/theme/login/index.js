import { COLOR, FONT } from "../../constant/theme/constant";

import background from "../../img/bg1.jpeg";
import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LoginBox = styled.div`
  height: 300px;
  width: 500px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0px 15px;
  position: absolute;
  right: 15%;
  top: 30%;

  @media screen and (max-width: 800px) {
    position: initial;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes lightSpeedIn {
    0% {
      transform: translateX(100%) skewX(-30deg);
      opacity: 0;
    }
    60% {
      transform: translateX(0%) skewX(0deg);
      opacity: 0.5;
    }
    80% {
      transform: translateX(0%) skewX(0deg);
      opacity: 1;
    }
    100% {
      transform: translateX(0%) skewX(0deg);
      opacity: 1;
    }
  }
  @keyframes lightSpeeddown {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    60% {
      transform: translateX(0%);
      opacity: 0.5;
    }
    80% {
      transform: translateX(0%);
      opacity: 1;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
  animation-name: fade-in;
  animation-duration: 1s;

  > div:first-child {
    animation-name: lightSpeedIn;
    animation-duration: 2s;
  }
  > div:nth-child(2) {
    animation-name: lightSpeeddown;
    animation-duration: 2s;
  }
  > div:last-child {
    width: 100%;
    display: flex;
    flex-grow: 1;
    margin-top: 20px;
    background-color: ${COLOR.BROWN};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    justify-content: center;
    align-items: center;
    > a {
      color: ${COLOR.DARK_GRAY};
      text-decoration: none;
    }
  }
`;
export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  > form {
    margin: 0px 20px;
    width: 100%;
    text-align: center;
    > p {
      color: red;
      margin: 0;
      font-size: 12px;
    }
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px 0px;
      > span {
        color: red;
        font-size: 12px;
        margin-top: 10px;
      }
      > input {
        height: 40px;
        width: 80%;
        padding: 0px;
        border: 1px solid #777;
        border-radius: 4px;
        text-indent: 10px;
        font-size: ${FONT.INPUT};
      }
      > &::-webkit-input-placeholder {
        //padding: 0px 10px;
        text-indent: 10px;
      }
    }

    > button {
      width: 80%;
      height: 40px;
      border: none;
      background-color: ${COLOR.DARK_GRAY};
      color: white;
      border-radius: 4px;
      cursor: pointer;
    }
    >button: disabled {
      background: #eaeaea;
    }
  }
`;
