import { COLOR, PADDING } from "../../../constant/theme/constant";

import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${props => props.padding || PADDING.BIG_PADDING};
  width: ${props => props.width || null};
  height: ${props => props.height || null};
  min-height: ${props => props.minHeight || null};
  background-color: ${props => props.bgColor || COLOR.LIGHT_GRAY};
  border-radius: ${props => props.borderRadius || null};
  margin: ${props => props.margin || null};
  flex-basis: ${props => props.basis || null};
  animation: ${props => props.animation || null };


  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateV(0%);
    }
  }
`;


export const TwoColumn = styled.div`
  display: flex;
`