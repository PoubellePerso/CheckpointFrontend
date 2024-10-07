import styles from "@/styles/components/AddCountries.module.scss";
import { useState } from "react";
import { useAddCountryMutation } from "@/generated/graphql-types";

export const AddCountries = ({ refetch }: { refetch: () => void }) => {
    const [name, setName] = useState("");
    const [emoji, setEmoji] = useState("");
    const [code, setCode] = useState("");
    const [addCountry] = useAddCountryMutation();

    const clearHandler = () => {
        setName("");
        setEmoji("");
        setCode("");
    };

    const addHandler = () => {
        if (!name || !emoji || !code) {
            alert(`Remplissez tout les champs`);
            return;
        }
        addCountry({
            variables: {
                data: {
                    name,
                    emoji,
                    code
                }
            }
        }).then(() => {
            clearHandler();
            refetch();
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <p>
                    Name
                </p>
                <input 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                />
            </div>
            <div className={styles.item}>
                <p>
                    Emoji
                </p>
                <input
                    type="text" 
                    value={emoji} 
                    onChange={e => setEmoji(e.target.value)} 
                />
            </div>
            <div className={styles.item}>
                <p>
                    Code
                </p>
                <input
                    type="text" 
                    value={code} 
                    onChange={e => setCode(e.target.value)} 
                />
            </div>
            <div className={styles.item}>
                <button className={styles.addButton} onClick={addHandler}>
                    Add
                </button>
            </div>
        </div>
    )
}