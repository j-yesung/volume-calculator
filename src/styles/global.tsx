import { Global, css } from '@emotion/react';

const baseStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-color: #fafafa;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
  }

  input,
  textarea {
    font-family: inherit;
    outline: none;
  }

  ul,
  ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    line-height: 1.2;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }
`;

const GlobalStyle = () => <Global styles={baseStyle} />;

export default GlobalStyle;
