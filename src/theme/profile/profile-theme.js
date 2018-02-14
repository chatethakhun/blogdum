import styled from "styled-components";

import {
  VIEW,
  MARGIN,
  COLOR,
  FONT,
  BORDER,
  PADDING,
  SCREEN
} from "../../constant/theme/constant";

export const ProfileContainer = styled.div`
  height: ${VIEW.FULL_VIEW_HIEGH};
  padding: ${PADDING.BIG_PADDING};
  background-color: ${COLOR.PRIMARY};
  > div {
    display: flex;
    background-color: white;
    padding: ${MARGIN.BIG_MARGIN};
    border-radius: ${BORDER.PRIMARY_RADIUS};
    flex-wrap: wrap;
    > div {
        width: 300px;
      margin-right: ${MARGIN.NORMAL_MARGIN};
    }
    @media screen and (max-width: 800px) {
      > div {
        width: ${VIEW.FULL};
        margin: 0;
      }
    }
  }
  @media screen and (max-width: ${SCREEN.TABLET}) {
    height: -webkit-fill-available;
  }
`;

export const ProfileDetailContainer = styled.div`
  display: flex;
  flex: 1;
  > .name {
    display: flex;
    flex-direction: column;
    width: ${VIEW.FULL};
    padding: 0px 10px;
    .line {
      border: 1px solid ${COLOR.LIGHT_GRAY};
    }
    .edit {
      justify-content: space-between;
      > .icon-edit {
        display: flex;
        align-items: center;
        > i {
          cursor: pointer;
          font-size: ${FONT.HEAD};
        }
      }
    }
    > div {
      display: flex;
      >div:first-child {
        display: flex;
        flex-basis: 20%;
      }
      >div {
        > p {
          margin-left: ${MARGIN.NORMAL_MARGIN};
          font-size:${FONT.NORMAL}
          color: ${COLOR.DARK_GRAY}
        }
        >p:last-child {
          color:${FONT.INPUT}
        }
      }
    }
  }
  @media screen and (max-width: ${SCREEN.MOBILE}) {
    .name {
      > div {
        > div:first-child {
          flex-basis: 35%;
        }
        > div {       
          p {
            margin-left: 0;
            font-size: ${FONT.SMALL}
          }
        }
      }
      padding: 0;
      .edit {
        > div {
          flex: 1;
        }
        .title {
          h2 {
            font-size: ${FONT.SMALL}
          }
        }
        .icon-edit {
          justify-content: flex-end;
          font-size: ${FONT.SMALL}
        }
      }
    }
  }

`;

export const ProfilePictureContainer = styled.div`
  .image-profile {
    > img {
      width: ${VIEW.FULL};
    }
  }

  input {
    display: none;
  }
  p {
    text-align: center;
    cursor: pointer;
  }
  p:hover {
    color: ${COLOR.SECONARY};
  }
`;
