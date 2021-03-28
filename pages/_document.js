import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';
import {ServerStyleSheets} from '@material-ui/styles';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(sheets.collect(<App {...props} />)),
        });

      const initialProps = await Document.getInitialProps(ctx);
      const styles = {
        ...initialProps.styles,
        ...sheets.getStyleElement(),
        ...sheet.getStyleElement(),
      };
      return {
        ...initialProps,
        styles,
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="es-AR">
        <Head>
          {this.props.styles}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
