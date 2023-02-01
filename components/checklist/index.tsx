import styles from './index.module.css';

const Checklist = (slide: any) => {
    return (
        <ul className={`margin-l-bottom ${styles.checklist}`}>
            {slide.features.map((name: any, index: any) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    )
}
export default Checklist;