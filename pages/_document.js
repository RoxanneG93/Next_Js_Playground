import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <title>Next Js awesome kit</title>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

/* naming your file with "_"(underscore) nextjs knows to inclue the file.
    This file sets the title of the site.

    getting warning, fix with this in _app.js

    ==== REF LINK =======
    https://github.com/zeit/next.js/blob/master/errors/no-document-title.md

*/