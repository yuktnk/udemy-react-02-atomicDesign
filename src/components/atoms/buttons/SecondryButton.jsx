import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
