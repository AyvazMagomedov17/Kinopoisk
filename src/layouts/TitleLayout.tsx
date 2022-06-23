import Head from 'next/head'
import React from 'react'

type Props = {
    title: string
    children: any
}

const TitleLayout = ({ title, children }: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </>
    )
}

export default TitleLayout