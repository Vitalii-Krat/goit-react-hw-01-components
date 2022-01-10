import styled from '@emotion/styled';

const TransactionTable = styled.table`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px;
  width: 50%;
  min-width: 300px;
  border: 1px solid black;
`;

const TransactionRow = styled.tr`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 40px;
  :nth-of-type(even) {
    background-color: whitesmoke;
  }
`;

const TransactionName = styled.thead`
  background-color: blue;
  color: whitesmoke;
`;

const TransactonNameItem = styled.th`
  grid-template-columns: repeat(3, 1fr);
  padding: 10px;
  border-color: grey;
  :not(:last-of-type) {
    border-right: 1px solid white;
  }
`;

const TransactionsList = styled.tbody`
  display: grid;
  grid-auto-rows: auto;
  background-color: white;
`;

export {
  TransactionTable,
  TransactionName,
  TransactionRow,
  TransactonNameItem,
  TransactionsList,
};
