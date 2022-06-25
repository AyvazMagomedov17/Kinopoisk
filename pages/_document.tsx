import { withFork } from 'effector-next'
import { Html, Head, Main, NextScript } from 'next/document'
import Document from "next/document";

const enhance = withFork()


class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                    <style key='style'></style>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html >
        )
    }

}
export default enhance(MyDocument)