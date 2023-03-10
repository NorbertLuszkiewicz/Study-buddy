import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  padding: 20px;
  border-radius: 0 0 25px 25px;
  background: ${({ theme }) => theme.colors.darkGrey};
  align-items: center;
  justify-content: center;
  max-width: 500px;

  @media (min-width: 768px) {
    justify-content: flex-start;
    margin-top: 85px;
    border-radius: 0 25px 25px 0;
    max-width: 240px;
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  margin: 0px 0;
`;

export const Option = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  width: 100%;
  align-items: center;
  cursor: pointer;
  padding: 4px;
  margin: 4px 0;

  & p,
  .icon {
    transition: color 0.2s ease-in-out;
  }

  &:hover p,
  &:hover .icon {
    color: ${({ theme }) => theme.colors.success};
  }

  &.option--red:hover p,
  &.option--red:hover .icon {
    color: ${({ theme }) => theme.colors.error};
  }

  .icon {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.white};
  }
`;
