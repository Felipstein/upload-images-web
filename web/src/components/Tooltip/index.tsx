import * as TooltipRadix from '@radix-ui/react-tooltip';

import * as S from './styles';

interface TooltipProps {
  text: string;
  children: React.ReactNode,
}

export function Tooltip({ text, children }: TooltipProps) {
  return (
    <TooltipRadix.Provider delayDuration={200} >
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>
          {children}
        </TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <S.TooltipContentStyled>
            {text}
            <S.TooltipArrowStyled />
          </S.TooltipContentStyled>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
}