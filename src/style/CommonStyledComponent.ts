import styled from 'styled-components';

interface FlexBoxProps {
  $gap?: number;
  center?: boolean;
  wrap?: 'wrap' | 'nowrap';
  width?: string;
}

export const FlexBox = styled.div<FlexBoxProps>`
  position: relative;

  display: flex;
  flex-wrap: ${({ wrap }) => (wrap ? wrap : 'nowrap')};
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : '0')};
  align-items: center;
  justify-content: ${({ center }) => (center ? `center` : 'flex-start')};

  width: ${({ width }) => width || '100%'};
`;

export const SpaceBetweenBox = styled(FlexBox)`
  justify-content: space-between;
`;

export const FlexColumnBox = styled.div<{ $gap?: number; isCenter?: boolean }>`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : '0')};
`;

export const Spacer = styled.div<{ h?: number }>`
  height: ${({ h }) => (h ? `${h}px` : '0')};
`;
