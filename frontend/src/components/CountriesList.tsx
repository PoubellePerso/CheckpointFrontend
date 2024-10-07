import styles from '@/styles/components/CountriesList.module.scss';
import { Country } from '@/generated/graphql-types';
import Link from 'next/link';

interface ItemProps {
    CountyName: string;
    CountryEmoji: string;
    CountryCode: string;
}

const Item = ({ CountyName, CountryEmoji, CountryCode }: ItemProps) => {
    return (
        <Link className={styles.item} href={`/country/${CountryCode}`}>
            <p className={styles.name}>
                {CountyName}
            </p>
            <p className={styles.emoji}>
                {CountryEmoji}
            </p>
        </Link>
    )
}

interface CountriesListProps {
    Countries: Country[];
}

export const CountriesList = ({ Countries }: CountriesListProps) => {
    return (
        <div className={styles.container}>
            {
                Countries && Countries.map((country, index) => (
                    <Item key={index} CountyName={country.name} CountryEmoji={country.emoji} CountryCode={country.code} />
                ))
            }
        </div>
    )
};