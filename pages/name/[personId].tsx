import { IPerson } from "../../src/Interfaces/IPerson"
import { $person, getPersonAt, resetPerson, setPersonIdEv } from "../../src/models/person"
import Name from '../../src/components/Name/Name'
import TitleLayout from "../../src/layouts/TitleLayout"
import Page404 from "../../src/components/common/Page404"
type Props = {
    person: IPerson | null
}

const PersonId = ({ person }: Props) => {
    if (!person) {
        return <TitleLayout title="404 Страница не найдена">
            <Page404 />
        </TitleLayout>
    }
    return (
        <TitleLayout title={`Персона / ` + String(person?.nameRu) || String(person?.nameEn)}>
            <Name person={person} />
        </TitleLayout >

    )
}
export async function getServerSideProps({ query }: any) {

    if (query.personId) {

        try {
            setPersonIdEv(Number(query.personId))
            await getPersonAt('')
            return {
                props: {
                    person: $person.getState()
                }
            }
        } catch (error) {
            resetPerson()
            return {
                props: {
                    person: $person.getState()
                }
            }
        }

    }

}
export default PersonId