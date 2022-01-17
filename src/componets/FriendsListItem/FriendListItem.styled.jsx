import styled from '@emotion/styled';

const ListItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 12px;
  background-color: #fff;
  border: 2px solid grey;
  transition: transform 300ms linear;
  :not(:last-child) {
    margin-bottom: 12px;
  }
  :hover {
    background-color: grey;
  }
`;

const Status = styled.span`
  width: 16px;
  height: 16px;
  margin-right: 15px;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
  border-radius: 50%;
`;

const Avatar = styled.img`
  display: block;
  margin-right: 15px;
`;

const Name = styled.p`
  margin: 0;
  font-size: 24px;
`;
export { ListItem, Status, Avatar, Name };
