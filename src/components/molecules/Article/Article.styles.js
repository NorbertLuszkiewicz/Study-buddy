import styled from 'styled-components';
import { ViewWrapper } from '../ViewWrapper/ViewWrapper.js';

export const Wrapper = styled(ViewWrapper)`
  margin: 20px 0;
  padding: 15px 40px;
  width: 100%;
  max-width: unset;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.darkGrey};

  p {
    line-height: 1.6;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  overflow: 'hidden';
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 20px;
`;

export const Author = styled.p`
  margin: -20px 0 0 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const Description = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const Image = styled.img`
  margin-left: 5%;
  border-radius: 20px;
  max-width: 250px;
  width: 50%;
  max-height: 150px;
  object-fit: cover;
  display: ${({ img }) => (img ? 'block' : 'none')};
`;
