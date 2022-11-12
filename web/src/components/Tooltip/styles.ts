import { GlobalThemeProps } from './../../styles/global';
import styled from "styled-components";
import * as TooltipRadix from '@radix-ui/react-tooltip';

export const TooltipContentStyled = styled(TooltipRadix.Content)`
  background-color: ${({ theme }: GlobalThemeProps) => theme.colors.black};
  color: ${({ theme }: GlobalThemeProps) => theme.colors.white};
  border-radius: 4px;
  font-size: ${({ theme }: GlobalThemeProps) => theme.fontSize.sm};

  padding: 0.8rem 1.4rem;
`;

export const TooltipArrowStyled = styled(TooltipRadix.Arrow)`
  fill: ${({ theme }: GlobalThemeProps) => theme.colors.black};
`;