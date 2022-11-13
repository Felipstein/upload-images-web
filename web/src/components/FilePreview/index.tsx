import * as S from './styles';

type FilePreviewProps = {
  src: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function FilePreview({ src, href, target = "_blank", ...props }: FilePreviewProps) {
  return (
    <S.AnchorStyled href={href} target={target} {...props}>
      <S.FilePreview src={src} />
    </S.AnchorStyled>
  );
}