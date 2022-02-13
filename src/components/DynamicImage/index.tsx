import React, { CSSProperties } from "react";
import * as S from "./styles";

interface DynamicImageProps {
  srcPath: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  styleProps?: CSSProperties;
}

export default function DynamicImage({
  srcPath,
  alt,
  width,
  height,
  styleProps,
}: DynamicImageProps) {
  return (
    <S.Container
      style={{
        width: width || "100%",
        height: height || "100%",
        ...styleProps,
      }}
    >
      <img src={srcPath} alt={alt} />
    </S.Container>
  );
}
