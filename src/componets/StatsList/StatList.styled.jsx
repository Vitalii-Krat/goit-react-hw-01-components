import styled from '@emotion/styled';

const Stats = styled.ul`
  display: flex;
  margin: 15px 0;
  margin: 0;
  padding: 0;
  border-top: 1px solid grey;
  background-color: whitesmoke;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 3);
  color: grey;
  text-transform: capitalize;
  :not(:last-child) {
    border-right: 1px solid grey;
  }
`;

export { Stats, Item };
