import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Button = styled.button`
  width: 400px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 17px;
  border: none;
  border-radius: 5px;

  color: #fff;
  background: hsl(235, calc(1 * 85.6%), 64.7%);

  transition: 0.2s;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;
