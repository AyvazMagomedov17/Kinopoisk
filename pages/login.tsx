import { useStore } from 'effector-react'
import Router from 'next/router'
import React, { useEffect, useRef } from 'react'
import LoginRegistration from '../src/components/common/LoginRegistration'
import { IGenresCountriesList } from '../src/Interfaces/IGenresCountriesList'
import { $genresCountriesList, getGenresCountriesListEf } from '../src/models/genresCountriesList'
import { $isNeedToBack, $user, resetUserEv, toggleIsNeedToBack } from '../src/models/user'

type Props = {
    genresCountriesList: IGenresCountriesList

}

const login = ({ genresCountriesList }: Props) => {
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
        <LoginRegistration isLogin genresCountriesList={genresCountriesList} />
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

export default login