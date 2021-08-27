import { flex } from "@theme/helpers";
import { pxToRem } from "@theme/Theme";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: ${pxToRem(70)};
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${pxToRem(25)};
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  ${flex({ direction: "row", justifyContent: "flex-end" })}
`;

export const Option = styled(Link)`
  padding: ${pxToRem(10)} ${pxToRem(15)};
  cursor: pointer;
`;

export const OptionWithoutLink = styled.span`
  padding: ${pxToRem(10)} ${pxToRem(15)};
  cursor: pointer;
`;
