import App, { Container } from 'next/app';
import * as React from 'react';
import { compose, setStatic } from 'recompose';

export default compose(
    setStatic('getInitialProps', async ({ Component, router, ctx }) => {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    })
)(({ Component, pageProps }) => (
    <Container>
        <Component {...pageProps} />
    </Container>
));
