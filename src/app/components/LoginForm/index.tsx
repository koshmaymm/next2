import { useState } from 'react';
import { useRouter } from 'next/router';
import { Heading, Input, Button, Text } from '@chakra-ui/react';
import { setToken } from "@/utils/localStorage";
import styles from './index.module.css';
import {
    FormControl,
    FormLabel,
    FormHelperText,
} from '@chakra-ui/react';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();


    const handleLogin = async () => {
        setIsError("");
        setIsLoading(true);

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const jsonData = await response.json();
            if (jsonData.status === 200) {
                setIsLoading(false);
                setToken(jsonData.token);
                router.push('/');
            } else {
                setIsError(jsonData.message);
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error:', error);
            setIsError(error as string);
            setIsLoading(false);
        }
    };



    return <form className={styles.form}>
        <Heading className={styles.heading} as='h1' size='xl'>Login</Heading>
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} disabled={isLoading} />
            <FormHelperText>We will never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} disabled={isLoading} />
            <Text className={styles.error}>{isError}</Text>
        </FormControl>
        <Button
            size='md'
            colorScheme='telegram'
            isLoading={isLoading}
            loadingText='Submitting'
            onClick={handleLogin}
            disabled={isLoading}
        >
            Login
        </Button>
    </form>
}

export default LoginForm;