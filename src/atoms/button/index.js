import styled, { css } from 'styled-components'

const StyledButton = styled.button`
background: white;
box-shadow: 3px 3px 9px 0px var(--primary-variant);
color: black;                                                                                                                       
padding: 15px 30px;
border-radius: 15px;
border: transparent;

:hover {
  box-shadow: 2px 2px 4px var(--primary-variant);
  ${props => props.secondary && css`
  box-shadow: 2px 2px 4px var(--secondary-variant);
  `}
}

:active {
  box-shadow: none;
}

${props => props.primary && css`
background: var(--primary);
color: var(--primary-text);
`};
${props => props.secondary && css`
background: var(--secondary);
color: var(--secondary-text);
box-shadow: 3px 3px 9px 0px var(--secondary-variant);
`}
${props => props.info && css`
color: var(--info);
`}
${props => props.helper && css`
color: var(--helper);
`}
${props => props.error && css`
color: var(--error);
`}
${props => props.disabled && css`
background-color: var(--disabled);
color: var(--disabled-text);
cursor: not-allowed;
`}
`

export const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}