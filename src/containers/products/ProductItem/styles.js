import styled from 'styled-components'

const StyledProductItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 17rem;
  flex: 0 0 25%;
  margin: 2rem;
`;

StyledProductItem.Img = styled.img`
  height: 10rem;
  width: auto;
  object-fit: contain;
`;

StyledProductItem.Title = styled.h6`
  display: flex;
  font-size: 0.9rem;
`

export default StyledProductItem;
