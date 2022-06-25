import { useRouter } from "next/router"
import Persons from "../../src/components/Persons/Persons"
import { IGenresCountriesList } from "../../src/Interfaces/IGenresCountriesList"
import { IPersons } from "../../src/Interfaces/IPersons"
import TitleLayout from "../../src/layouts/TitleLayout"
import { $genresCountriesList, getGenresCountriesListEf } from "../../src/models/genresCountriesList"
import { $persons, findPersonsAt, setPersonsName, setPersonsPage } from "../../src/models/person"

type Props = {
    persons: IPersons | null
    genresCountriesList: IGenresCountriesList
}

const Index = ({ persons, genresCountriesList }: Props) => {
    const router = useRouter()
    const name = router.query.name ? ` / ${router.query.name}` : ''
    return (
        <TitleLayout title={'Персоны' + name}>
            <Persons genresCountriesList={genresCountriesList} persons={persons} />
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
    await getGenresCountriesListEf()
    return {
        props: {
            persons: $persons.getState(),
            genresCountriesList: $genresCountriesList.getState()
        }
    }
}

export default Index