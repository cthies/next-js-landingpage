import Link from 'next/link';
import styles from './index.module.css';

const Button = (props: any) => {
    let button = <button type={props.type} className={`${styles[props.theme]} ${styles.btn}`}>{props.buttonLabel}</button>;

    if (props.href != undefined) {
        button = <Link href={props.href} className={`${styles[props.theme]} ${styles.btn}`}>{props.buttonLabel}</Link>;
    }
    return button;
}
export default Button;