import { useRouter } from 'next/router';
import { useGetCountryQuery } from '@/generated/graphql-types';
import styles from '@/styles/pages/CountryDetails.module.scss';
import Link from 'next/link';

export default function Country(){
    const router = useRouter();
    const { code } = router.query;
    const { data, error, loading } = useGetCountryQuery({ variables: { code: code as string } });

    return (
        <>
            <div className={styles.container}>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {data && (
                    <div className={styles.item}>
                        <h1 className={styles.emoji}>{data.country.emoji}</h1>
                        <p>Name : {data.country.name}</p>
                        <p>Continent : {data.country.continent ? data.country.continent.name : "Inconnu"}</p>
                    </div>
                )}
            </div>
            <Link href='/'>Retourner à l'accueil</Link>
        </>
    )
}