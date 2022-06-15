import Link from "next/link"
import { MainLayout } from "../src/layouts/Main.layout"
import axios from "axios";
import { useEffect } from "react";
type Props = {}


const index = ({ }: Props) => {

    return (
        <MainLayout title="index">
            <Link href='/app'>app</Link>
            <div>index</div>

        </MainLayout>

    )
}

export default index