import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import MainNavigation from "@/app/components/MainNavigation";
import PublicNavigation from "@/app/components/PublicNavigation";
import { getToken, removeToken, jwtFakeToken } from "../../../utils/localStorage";
import styles from './index.module.css';
import logo from '../.././../../public/logo.jpg';


const Layout = (props: any) => {
    const router = useRouter();

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const token = getToken();

        if (router.pathname === "/_error") return;

        if (router.pathname !== "/login" && router.pathname !== "/signup") {
            if (!token || token !== jwtFakeToken) {
                removeToken();
                setIsAuth(false);
                router.push('/login');
            }
        }
        if (token && token === jwtFakeToken) {
            if (router.pathname === "/login" || router.pathname === "/signup") {
                setIsAuth(true);
                router.push('/');
            }
        }
    }, [router])

    useEffect(() => {
        setIsAuth(getToken() === jwtFakeToken);
    }, [])

    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <Image
                    src={logo}
                    alt="Logo"
                    width={30}
                    height={30}
                    className={styles.img}
                />
                {!isAuth && <PublicNavigation path={router.pathname} />}
                {isAuth && <MainNavigation />}
            </header>
            <main className={styles.main}>{props.children}</main>
        </div>
    );
}

export default Layout;

