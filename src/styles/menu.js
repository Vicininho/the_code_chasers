import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;

  width: 300px;
  height: 100vh;

  background-color: #dcddde;

  > ul {
    margin: 0;
    padding: 0;

    padding: 0 15px;

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ButtonOpen = styled.button`
  position: absolute;
  top: 25px;
  left: 25px;

  background: transparent;
  border: none;

  > img {
    width: 50px;
    height: 50px;

    cursor: pointer;
  }
`;

export const ButtonClose = styled.button`
  background: transparent;
  border: none;

  > img {
    width: 50px;
    height: 50px;

    cursor: pointer;
  }
`;

export const Item = styled.li`
  font-size: 20px;

  margin: 15px 0;

  list-style: none;

  display: flex;

  > img {
    margin-right: 15px;
  }

  > a {
    text-decoration: none;
    color: #36393f;

    transition: 0.2s;

    :hover {
      color: #fff;
    }
  }
`;
