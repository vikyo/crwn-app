// import styled, { css } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";

// L157 flexibiliy to use same styles for two different types of components using css
// anathor good way is to write the same styles and use 'as' keyword to reduce the code, check header component
// const OptionContainerStyles = css`
//   padding: 10px 15px;
//   cursor: pointer;
// `;

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// use as in header component so this is not required now
// const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `;

export {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  //   OptionDiv,
};
