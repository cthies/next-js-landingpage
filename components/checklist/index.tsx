import styles from './index.module.css';

const Checklist = (props: any) => {
    return (
        <ul className={`${props.className} ${styles[props.theme]} ${styles[props.align]} ${styles.checklist}`}>
            {props.slide.features.map((name: any, index: any) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    )
}
export default Checklist;