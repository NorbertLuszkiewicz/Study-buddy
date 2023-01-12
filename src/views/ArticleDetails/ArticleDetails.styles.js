import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 25px auto;
  background-color: ${({ theme }) => theme.colors.white};
  width: 90%;
  max-width: 1200px;
  padding: 40px 50px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  height: min-content;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  white-space: pre-line;
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Image = styled.img`
  border-radius: 40px 0;
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  display: 'block';
`;
