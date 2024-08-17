'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined' | 'text';
  state?: 'enabled' | 'disabled';
  size?: 'small' | 'medium';
}

interface IProps extends IButton {
  iconSrc?: string;
  iconAlt?: string;
  text: string;
}

const Button = ({
  variant = 'filled',
  state = 'enabled',
  size = 'medium',
  iconSrc = '',
  iconAlt = '',
  text,
  ...rest
}: IProps) => {
  return (
    <ButtonContainer variant={variant} state={state} size={size} {...rest}>
      {iconSrc ? (
        <Image src={iconSrc} alt={iconAlt} width={24} height={24} />
      ) : null}
      <span>{text}</span>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button<IButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: ${({ size }) => (size === 'medium' ? '20px 24px' : '10px 20px')};
  height: ${({ size }) => (size === 'medium' ? 70 : 49)}px;
  background: ${({ variant, state, theme }) =>
    variant === 'filled'
      ? state === 'enabled'
        ? theme.colors.main1
        : theme.colors.gray6
      : 'none'};
  border: ${({ variant, state, theme }) =>
    variant === 'outlined'
      ? `1px solid ${state === 'enabled' ? theme.colors.main1 : theme.colors.gray6}`
      : 'none'};
  border-radius: 999px;
  span {
    font-size: ${({ size }) => (size === 'medium' ? 20 : 24)}px;
    font-weight: ${({ size }) => (size === 'medium' ? 700 : 500)};
    color: ${({ variant, state, theme }) =>
      state === 'enabled'
        ? variant === 'filled'
          ? theme.colors.gray8
          : theme.colors.main1
        : theme.colors.gray3};
  }
`;
