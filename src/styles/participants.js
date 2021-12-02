import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 700px;

  background: #dcddde;
  padding: 15px;
  border-radius: 5px;

  margin: 15px 0;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;

  background: #36393f;
`;

export const Item = styled.div`
  margin-left: 35px;
  font-size: 27px;
  color: #36393f;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 500px;
  height: 50px;

  margin: 15px 0;

  padding: 7px;

  font-size: 15px;
  color: #36393f;
  background: #dcddde;

  border-radius: 5px;
  border: none;
`;

export const ContainerResult = styled.div`
  margin: 15px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 700px;
  height: 500px;
  background: #dcddde;

  border: 7px dashed #000;

  > p {
    font-size: 35px;
    color: #36393f;
  }
`;
