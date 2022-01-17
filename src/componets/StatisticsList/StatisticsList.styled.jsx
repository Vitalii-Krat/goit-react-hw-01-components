import styled from '@emotion/styled';

const StatList = styled.ul`
  display: flex;
  padding-left: 0;
  margin: 0;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  background-color: grey;
  border: 1px solid green;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 5);
  padding: 15px;
  color: white;
`;

const Label = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
`;

const Percentage = styled.span`
  font-weight: 700;
`;

export { StatList, Item, Label, Percentage };
