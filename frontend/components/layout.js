import React from 'react';
import Header from './headermenu';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';

export default props =>{
    return(
        //<div>
        <Container>
            <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            </Head>
            <Header />
            {props.children}
        </Container>
        //</div>
    );
};