import { useRouter } from "next/router"
import Persons from "../../src/components/Persons/Persons"
import { IPersons } from "../../src/Interfaces/IPersons"
import TitleLayout from "../../src/layouts/TitleLayout"
import { $persons, findPersonsAt, setPersonsName, setPersonsPage } from "../../src/models/person"

type Props = {
    persons: IPersons | null
}

const Index = ({ persons }: Props) => {
    const router = useRouter()
    const name = router.query.name ? ` / ${router.query.name}` : ''
    return (
        <TitleLayout title={'Персоны' + name}>
            <Persons persons={persons} />
        </TitleLayout>

    )
}
export async function getServerSideProps({ query }: any) {
    const name = query.name
    const page = query.page
    if (name) {
        setPersonsName(String(name))
    }
    if (page) {
        setPersonsPage(Number(page))
    }
    await findPersonsAt('')
    return {
        props: {
            persons: $persons.getState()
        }
    }
}

export default Index