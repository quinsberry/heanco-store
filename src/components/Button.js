import styled from 'styled-components';

export const ButtonNavContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: .05rem solid var(--lightBlue);
  border-color: var(--lightBlue);
  color: var(--lightBlue);
  /* font-weight: 700; */
  width: 180px;
  border-radius: .5rem;
  padding: .2rem .5rem;
  cursor: pointer;
  margin: .2rem .5rem .2rem 0;
  transition: all .4s ease-in-out;
  &:hover {
  background: var(--lightBlue);
  color: var(--mainBlue);
}
  &:focus {
  outline: none;
}

`;
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: .05rem solid var(--lightBlue);
  border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlueProd)"};
  color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlueProd)"};
  border-radius: .5rem;
  padding: .2rem .5rem;
  cursor: pointer;
  margin: .2rem .5rem .2rem 0;
  transition: all .5s ease-in-out;
  &:hover {
  background: ${props => props.cart ? "var(--mainYellowProd)" : "var(--lightBlue)"};
  border-color: ${props => props.cart ? "var(--mainYellowProd)" : "var(--lightBlue)"};
  color: var(--mainBlue);
}
  &:focus {
  outline: none;
}
`;