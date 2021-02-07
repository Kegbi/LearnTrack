import React from "react";

import styled from "styled-components";
import { Search } from "styled-icons/boxicons-regular";

const Input = styled.input`
  outline: 0;
  height: 40px;
  width: 100%;
  border: 0;
  border-radius: ${(p) => p.theme.radius.md};
  padding-left: ${(p) =>
    p.hideIcon ? p.theme.spacing.xs : p.theme.spacing.lg};
  padding-right: ${(p) => p.theme.spacing.lg};
  color: ${(p) => p.theme.colors.text.main};
  font-size: ${(p) => p.theme.font.size.xs};
  background-color: ${(p) =>
    p.backgroundColor
      ? p.theme.colors[p.backgroundColor]
      : p.theme.colors.grey[200]};
  transition: border-color 0.1s;

  &:focus {
    &::placeholder {
      color: ${(p) => p.theme.colors.grey[500]};
    }
  }
`;

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 12px;
  left: 10px;
`;

const SearchIcon = styled(Search)`
  height: ${(p) => p.theme.font.size.xs};
`;

// Rendering search input
const SearchField = ({
  onChange,
  onFocus,
  value,
  inputRef,
  backgroundColor,
  placeholder,
  hideIcon,
  children,
  autoFocus,
}) => {
  return (
    <Container>
      {!hideIcon && (
        <IconContainer>
          <SearchIcon />
        </IconContainer>
      )}

      <Input
        onChange={onChange}
        onFocus={onFocus}
        value={value}
        ref={inputRef}
        backgroundColor={backgroundColor}
        type="text"
        placeholder={placeholder}
        hideIcon={hideIcon}
        autoFocus={autoFocus}
      />

      {children}
    </Container>
  );
};

export default SearchField;
