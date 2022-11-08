import { GlobalThemeProps } from './../../styles/global';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.6rem 2.4rem;
  border-radius: 4px;
  width: 48rem;

  background-color: ${({ theme }: GlobalThemeProps) => theme.colors.white};
  box-shadow: ${({ theme }: GlobalThemeProps) => theme.shadow};
`;