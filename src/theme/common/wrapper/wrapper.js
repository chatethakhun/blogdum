import { COLOR, PADDING } from "../../../constant/theme/constant";

import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${props => props.padding || PADDING.BIG_PADDING};
  width: ${props => props.width || null};
  height: ${props => props.height || null};
  background-color: ${props => props.bgColor || COLOR.LIGHT_GRAY};
  border-radius: ${props => props.borderRadius || null};
  margin: ${props => props.margin || null};
`;
