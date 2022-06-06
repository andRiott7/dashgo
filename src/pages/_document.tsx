import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}