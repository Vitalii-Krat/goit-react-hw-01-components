import styled from '@emotion/styled';

const ProfileBlock = styled.div`
  max-width: 250px;
  background-color: #fff;
  border: 1px solid grey;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Avatar = styled.img`
  width: 50%;
  border-radius: 50%;
  border: 1px solid grey;
  background-color: whitesmoke;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 7px;
`;

const Paragraph = styled.p(props => ({
  color: 'grey',
  marginTop: 0,
  marginBottom: '7px',
  fontWeight: props.weight && 700,
}));

export { ProfileBlock, Description, Thumb, Avatar, Name, Paragraph };
