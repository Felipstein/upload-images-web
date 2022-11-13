import { Tooltip } from '../Tooltip';
import * as S from './styles';

type IconButtonProps = {
  tooltipText?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  children: React.ReactNode,
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function IconButton({ tooltipText, onClick, children, ...props }: IconButtonProps) {
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