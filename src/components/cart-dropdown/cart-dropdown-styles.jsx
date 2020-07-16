import styled from "styled-components";
import { CustomButtonContainer } from "../custom-button/custom-button-styles";

const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

const CartItemContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const ErrorMessageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// extending styles
const CartButtonContainer = styled(CustomButtonContainer)`
  margin-top: auto;
`;

export {
  CartDropDownContainer,
  CartItemContainer,
  ErrorMessageContainer,
  CartButtonContainer,
};
