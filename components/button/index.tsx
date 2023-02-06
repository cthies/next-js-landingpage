import Link from 'next/link';
import styles from './index.module.css';

const Button = (props: any) => {
    return (
        <Link href={props.href} className={`${styles[props.theme]} ${styles.btn}`}>
            {props.buttonLabel}
        </Link>
        
    )
}
export default Button;