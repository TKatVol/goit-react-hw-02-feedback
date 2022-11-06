import styled from "styled-components";

export const List = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    list-style: none;
`;

export const Item = styled.li`
    
    &:not(:last-child) {
        margin-right: 10px;
      }
`;

export const StyledButton = styled.button`
    width: 60px;
    padding: 6px;
    cursor: pointer;
    background-color: #2196f3;
  }
`;