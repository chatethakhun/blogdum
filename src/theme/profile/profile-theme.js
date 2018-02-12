import styled from "styled-components";

import {
  VIEW,
  MARGIN,
  COLOR,
  FONT,
  BORDER,
  PADDING
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
      border: 1px solid ${FONT.DARK_GRAY};
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
      > p {
        margin-left: ${MARGIN.NORMAL_MARGIN};
        display: flex;
        align-items: center;
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
