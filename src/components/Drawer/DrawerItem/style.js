import styled from 'styled-components';

const StyledDrawerItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 10rem;
  background-color: white;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem 0;
`;

StyledDrawerItem.Title = styled.span`
  display: flex;
  font-size: 0.85rem;
`;

StyledDrawerItem.Image = styled.span`
  display: flex;
  flex-direction: row-reverse;

  img {
    width: 3rem;
    height: auto;
  }
`;

StyledDrawerItem.Footer = styled.div`
  display: flex;
  align-items: center;
`

export default StyledDrawerItem;
