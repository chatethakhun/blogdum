import { COLOR, SCREEN } from "../../constant/theme/constant";

import styled from "styled-components";

export const CreatePostContainer = styled.div`
  padding: 10px;
  background-color: ${COLOR.WHITE};
  border-radius: 10px;
  cursor: text;
  border: 1.1px solid ${COLOR.DARK_GRAY};
  > span {
    opacity: 0.3;
  }
`;

export const HeaderPost = styled.div`
  .title {
    margin: 10px 0px;
    p {
      font-size: 28px;
      margin: 0;
      font-family: "ubuntuBold";
      color: ${COLOR.DARK_GRAY};
    }
  }
  .profile {
    margin: 10px 0px;
    display: flex;
    position: relative;
    > .image {
      width: 70px;
      height: 70px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    > .name {
      display: flex;
      align-items: center;
      ui {
        li {
          display: block;
          margin: 5px 0px;
        }
        li:first-child {
          font-size: 18px;
          font-family: "ubuntuMedium";
          color: ${COLOR.DARK_GRAY};
        }
        li:last-child {
          color: ${COLOR.MEDIUM_GRAY};
          font-family: "ubuntuMedium";
          font-size: 14px;
        }
        @media screen and (max-width: ${SCREEN.TABLET}) {
          li:first-child {
            font-size: 14px;
          }
          li:last-child {
            font-size: 10px;
          }
        }
      }
    }
    .edit-delete {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      button {
        cursor: pointer;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-left: 10px;
      }
    }
  }
`;

export const ContentContainer = styled.div`
  .image {
    img {
      width: 100%;
    }
  }
  .content {
    margin-top: 10px;
  }
`;

export const CategoryListContainer = styled.div`
  > div {
    padding: 10px 5px;
    cursor: pointer;
    &.active {
      background-color: ${COLOR.SECONARY};
      > span {
        color: white;
      }
    }
    > span {
      padding: 0px 10px;
    }
    &:hover {
      background-color: ${COLOR.SECONARY};
      > span {
        color: white;
      }
    }
  }
`
