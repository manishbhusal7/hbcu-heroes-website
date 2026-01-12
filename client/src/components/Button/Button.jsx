import React from 'react'
import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledButton = styled(MuiButton)(({ variant }) => ({
  padding: '16px 36px',
  borderRadius: '999px',
  fontWeight: 700,
  fontSize: '17px',
  letterSpacing: '0.3px',
  textTransform: 'none',
  whiteSpace: 'nowrap',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
  },
  ...(variant === 'primary' && {
    background: 'linear-gradient(135deg, #FFD700 0%, #F4C430 100%)',
    color: '#000000',
    border: 'none',
    fontWeight: 700,
    boxShadow: '0 8px 24px rgba(255, 215, 0, 0.6)',
    '&:hover': {
      background: 'linear-gradient(135deg, #FFED4E 0%, #FFD700 100%)',
      boxShadow: '0 12px 36px rgba(255, 215, 0, 0.9)',
      transform: 'translateY(-3px) scale(1.02)',
    },
  }),
  ...(variant === 'secondary' && {
    background: 'rgba(255, 255, 255, 0.08)',
    color: '#ffffff',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    fontWeight: 600,
    '&:hover': {
      background: 'rgba(255, 215, 0, 0.12)',
      borderColor: '#FFD700',
      boxShadow: '0 8px 24px rgba(255, 215, 0, 0.3)',
    },
  }),
  ...(variant === 'tertiary' && {
    background: 'transparent',
    color: 'rgba(255, 255, 255, 0.9)',
    border: '2px solid rgba(255, 215, 0, 0.4)',
    fontWeight: 600,
    '&:hover': {
      borderColor: '#FFD700',
      background: 'rgba(255, 215, 0, 0.1)',
      color: '#FFD700',
      boxShadow: '0 8px 24px rgba(255, 215, 0, 0.2)',
    },
  }),
}))

const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '',
  style = {},
  startIcon,
  endIcon,
  fullWidth = false
}) => {
  const buttonProps = {
    variant: 'contained',
    className,
    style,
    onClick,
    startIcon,
    endIcon,
    fullWidth,
  }

  if (href) {
    return (
      <StyledButton
        {...buttonProps}
        component="a"
        href={href}
        variant={variant}
      >
        {children}
      </StyledButton>
    )
  }

  return (
    <StyledButton {...buttonProps} variant={variant}>
      {children}
    </StyledButton>
  )
}

export default Button
