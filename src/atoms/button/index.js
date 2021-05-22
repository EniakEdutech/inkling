import styled, { css } from 'styled-components'

const StyledButton = styled.button`
background: white;
box-shadow: 3px 3px 9px 0px var(--primary-light-variant);
color: var(--primary-light-text);
border-radius: 30px;
border: transparent;
font-family: 'Montserrat', san-serif;
text-transform: ${props => props.capital && 'uppercase'};

:hover {
  box-shadow: 2px 2px 4px var(--primary-light-variant);
}

:active {
  box-shadow: 3px 3px 9px 0px var(--primary-light-variant) inset;
}

${props => props.primary && css`
background: var(--primary-dark-variant);
color: var(--primary-text);
`};
${props => props.showmore && css`
box-shadow: var(--primary-light-variant) 0px 5px 15px;
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