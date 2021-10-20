import styles from '../styles/components/InfoBox.module.css';

interface InfoBoxProps{
    title: string;
    amount: string;
}

export function InfoBox(props : InfoBoxProps) {

    return (
        <div className={styles.container}>
            <strong>{props.title}</strong>
            <p>
                {props.amount}
            </p>
        </div>
    )
}