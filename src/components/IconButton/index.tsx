import styled, { css } from 'styled-components';

export const buttonStyle = css`
  box-sizing: content-box;
  border: 0;
  display: flex;
  margin: 4px;
  padding: 6px;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: var(--gray-color);
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 3px;
  background-color: transparent;
  &:hover {
    color: var(--gray-color-hover);
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const IconButton = styled.button`
  ${buttonStyle}
`;

export default IconButton;
