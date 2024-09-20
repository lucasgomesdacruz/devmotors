"use client"

import Link from 'next/link'
import styles from './error.module.scss'

export default function Error() {
    return(
        <div className={styles.erro}>
            <h1>Ops essa página não existe!</h1>
            <Link href="/">
                Voltar para home
            </Link>
        </div>
    )
}