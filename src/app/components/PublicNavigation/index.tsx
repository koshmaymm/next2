
import Link from "next/link";
import styles from './index.module.css';

type PublicNavigationProps = {
    path: string;
}

const PublicNavigation = ({ path }: PublicNavigationProps) => {
    return (
        <nav className={styles.nav}>
            <ul>
                {path === "/signup" && <li>
                    <Link href="/login">Login</Link>
                </li>}
                {path === "/login" && <li>
                    <Link href="/signup">SignUp</Link>
                </li>}
            </ul>
        </nav>
    );
}

export default PublicNavigation;