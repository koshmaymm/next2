
import Link from "next/link";
import { Button } from '@chakra-ui/react';
import styles from './index.module.css';

type PublicNavigationProps = {
    path: string;
}

const PublicNavigation = ({ path }: PublicNavigationProps) => {
    return (
        <nav className={styles.nav}>
            <ul>
                {path === "/signup" && <li>
                    <Link href="/login">
                        <Button
                            size='md'
                            colorScheme='whatsapp'
                        >
                            Login
                        </Button>
                    </Link>

                </li>}
                {path === "/login" && <li>
                    <Link href="/signup">
                        <Button
                            size='md'
                            colorScheme='whatsapp'
                        >
                            SignUp
                        </Button>
                    </Link>
                </li>}
            </ul>
        </nav>
    );
}

export default PublicNavigation;