import styles from './index.module.css';

const languageSwitcher = (props: any) => {
    const { content, setContent } = props;

    const handleLang = (event: { target: { value: any; }; }) => {
        let name = event.target.value;
        localStorage.setItem('nextjs-bmi', name);
        setContent(name);
    }

    return (
        <div className={styles.languageSwitcher}>
            <input className={styles.radio} type="radio" name="lang" value="de" id="de" checked={content === 'de' ? true : false} onChange={handleLang} />
            <label htmlFor="de">DE</label>

            <input className={styles.radio} type="radio" name="lang" value="en" id="en" checked={content === 'en' ? true : false} onChange={handleLang} />
            <label htmlFor="en">EN</label>
        </div>
    )
}
export default languageSwitcher;
