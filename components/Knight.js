import Image from "next/image";
import styled from "styled-components";

import src from "../assets/knight.png";

export default function Knight() {
  return <Icon src={src} layout="responsive" objectFit="cover" alt="" />;
}

const Icon = styled(Image)`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 1;
  vertical-align: top;
`;
