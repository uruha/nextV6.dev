import * as React from 'react';
import { compose, pure, setStatic } from 'recompose';

const Index = () => <div>Hello next</div>;

export default compose(
    pure,
    setStatic('getInitialProps', async ({ ctx }) => {
        console.log(ctx);
        console.log('index page');
    })
)(Index);
