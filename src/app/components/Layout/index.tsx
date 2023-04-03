import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from 'next/image';
import { Avatar, AvatarBadge, WrapItem, Button } from '@chakra-ui/react'
import MainNavigation from "@/app/components/MainNavigation";
import PublicNavigation from "@/app/components/PublicNavigation";
import { getToken, removeToken, jwtFakeToken, removeId } from "@/utils/localStorage";
import styles from './index.module.css';
import logo from '../.././../../public/logo.jpg';


const Layout = (props: any) => {
    const router = useRouter();

    const [isAuth, setIsAuth] = useState(false);

    const handleLogout = () => {
        removeToken();
        removeId();
        setIsAuth(false);
        router.push('/login');
    }

    useEffect(() => {
        const token = getToken();

        //for 404 page
        if (router.pathname === "/_error") return;

        if (router.pathname !== "/login" && router.pathname !== "/signup") {
            if (!token || token !== jwtFakeToken) {
                removeToken();
                removeId();
                setIsAuth(false);
                router.push('/login');
            }
        }
        if (token && token === jwtFakeToken) {
            if (router.pathname === "/login" || router.pathname === "/signup") {
                router.push('/');
            }
            setIsAuth(true);
        }
    }, [router])

    useEffect(() => {
        setIsAuth(getToken() === jwtFakeToken);
    }, []);

    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <Link href={isAuth ? "/" : "/login"}>
                    <Image
                        src={logo}
                        alt="Logo"
                        width={30}
                        height={30}
                        className={styles.img}
                    />
                </Link>
                {!isAuth && <PublicNavigation path={router.pathname} />}
                {isAuth && <>
                    <MainNavigation />
                    <WrapItem className={styles.avatar}>
                        <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds'>
                            <AvatarBadge borderColor='green.500' bg='tomato' boxSize='1.25em' />
                        </Avatar>
                    </WrapItem>
                    <Button
                        size='md'
                        colorScheme='telegram'
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </>}
            </header>
            <main className={styles.main}>{props.children}</main>
        </div>
    );
}

export default Layout;

