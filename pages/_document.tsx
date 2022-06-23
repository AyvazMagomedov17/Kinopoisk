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