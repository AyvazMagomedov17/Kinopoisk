import { useStore } from 'effector-react'
import Router from 'next/router'
import React, { useEffect } from 'react'
import LoginRegistration from '../src/components/common/LoginRegistration'
import { IGenresCountriesList } from '../src/Interfaces/IGenresCountriesList'
import { $genresCountriesList, getGenresCountriesListEf } from '../src/models/genresCountriesList'
import { $isNeedToBack, $user, toggleIsNeedToBack, } from '../src/models/user'

type Props = {
    genresCountriesList: IGenresCountriesList
}

const registration = ({ genresCountriesList }: Props) => {
    const isNeedToBack = useStore($isNeedToBack)
    const user = useStore($user)
    useEffect(() => {
        if (user?.isAuth && isNeedToBack) {
            Router.back()
        }
        if (user?.isAuth && !isNeedToBack) {
            Router.push('/films/tops')
        }

    }, [user?.isAuth, isNeedToBack])


    return (
        <LoginRegistration genresCountriesList={genresCountriesList} isLogin={false} />
    )
}
export async function getServerSideProps({ query }: any) {
    await getGenresCountriesListEf()
    return {
        props: {
            genresCountriesList: $genresCountriesList.getState()
        }
    }
}
export default registration