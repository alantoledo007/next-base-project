import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
    :hover {
        cursor: pointer;
    }
  }

  * {
    box-sizing: border-box;
  }
`;
