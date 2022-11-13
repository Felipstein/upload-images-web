import { Oval } from 'react-loading-icons';
import { useTheme } from 'styled-components';

import { Tooltip } from '../Tooltip';

import * as S from './styles';

type IconButtonProps = {
  tooltipText?: string,
  isLoading?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  children: React.ReactNode,
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function IconButton({ tooltipText, isLoading = false, onClick, children, ...props }: IconButtonProps) {
  const theme: any = useTheme();

  if (isLoading) {
    return (
      <Oval height={"2rem"} stroke={theme.colors.purple[500]} />
    );
  }

  const comp = (
    <S.ButtonStyled type="button" onClick={onClick} {...props}>
      {children}
    </S.ButtonStyled>
  );

  if (tooltipText) {
    return (
      <Tooltip text={tooltipText}>
        {comp}
      </Tooltip>
    );
  }

  return comp;
}