import {
  BORDER,
  COLOR,
  FONT,
  MARGIN,
  PADDING,
  SCREEN,
  VIEW
} from "../../constant/theme/constant";

import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: ${VIEW.FULL_VIEW_HIEGH};
  padding: ${PADDING.BIG_PADDING};
  background-color: ${COLOR.LIGHT_GRAY};
  > div {
    display: flex;
    background-color: white;
    padding: ${MARGIN.BIG_MARGIN};
    border-radius: ${BORDER.PRIMARY_RADIUS};
    flex-wrap: wrap;
    width: 800px;
    > div {
        width: 300px;
        margin-right: ${MARGIN.BIG_MARGIN};
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
  flex-direction: column;
  .head {
    display: flex;
    justify-content:space-between;
    .title {
      h2 {
        margin: 0px 0px;
      }
    }
    .edit-button {
      display: flex;
      align-items:center;
      cursor: pointer;
    }
  }
  .profile-detail {
    .detail {
      display: flex;
      > div:first-child {
        flex-basis: 150px;
      }
      p {
        margin: 5px 0px;
        word-wrap: break-word;
      }
    }
  }
`;

export const ProfilePictureContainer = styled.div`
  .image-profile {
    width: 300px;
    height: 300px;
    > .img {
      width: ${VIEW.FULL};
      height: ${VIEW.FULL};
      background-size: cover;
      background-position: center;
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


export const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .edit-form {
    width: 30%;
    > form {
      > div {
        margin: 10px 0px;
        input {
          height: 30px;
          width: 98%;
          border-radius: ${BORDER.INPUT_RADIUS};
          border: 1px solid ${COLOR.DARK_GRAY};
          text-indent: 10px;
          font-size:${FONT.INPUT}
        }
        input[name='password'] {
          display:none;
        }
      }
      > button {
        height: 30px;
        width: 100%;
        background-color: ${COLOR.DARK_GRAY};
        color: ${COLOR.WHITE};
        border:none;
        border-radius: ${BORDER.INPUT_RADIUS};
        cursor:pointer;
      }
    }
  }
  .edit-picture {
    width: 200px;
    height: 200px;
    margin-bottom: 50px;
    .img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
    }
    .text-change {
      text-align: center;
      p {
        cursor: pointer;
      }
    }
  }
`

export const Wrapper = styled.div`
  text-align:center;
  .image {
    background-position:center;
    background-size:cover;
    width:300px;
    height:300px;
  }
  >input[type='file'] {
    display:none;
  }
  p {
    cursor: pointer;
  }
  p:hover {
    color: blue;
  }
`