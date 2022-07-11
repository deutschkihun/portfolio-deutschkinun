import styled, { ThemeProps } from "styled-components";
import { Theme } from "../theme";

export const LoadingViewTitle = styled.h1<ThemeProps<Theme>>`
  font-family: ${(p): string => p.theme.fontFamily};
  color: ${(p): string => p.theme.primaryTextColor};
  font-size: 24px;
  font-weight: 200;
  margin: 16px 0px 4px;
`;

export const LoadingViewBody = styled.p<ThemeProps<Theme>>`
  font-family: ${(p): string => p.theme.fontFamily};
  color: ${(p): string => p.theme.primaryTextColor};
  font-size: 15px;
  font-weight: 400;
  margin: 8px 0px 8px 0px;
  white-space: pre-wrap;
`;
