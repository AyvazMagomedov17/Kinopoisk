import Page404 from "../src/components/common/Page404"
import TitleLayout from "../src/layouts/TitleLayout"

type Props = {}

const index = (props: Props) => {
    return (
        <TitleLayout title="404 Страница не найдена">
            <Page404 />
        </TitleLayout>

    )
}

export default index