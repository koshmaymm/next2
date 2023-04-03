import { useState } from 'react';
import { Heading, Input, Button, Text } from '@chakra-ui/react';
import styles from './index.module.css';
import {
    FormControl,
    FormLabel,
    FormHelperText,
} from '@chakra-ui/react';

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = async () => {
        setIsError("");
        setIsLoading(true);

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const jsonData = await response.json();
            if (jsonData.status === 200) {
                setIsLoading(false);
                setIsError(jsonData.message);
            } else {
                setIsError(jsonData.message);
                setIsLoading(false);
            }
        } catch (error) {
            console.log('Error:', error);
            setIsError("Something went wrong");
            setIsLoading(false);
        }
    };

    return <form className={styles.form}>
        <Heading className={styles.heading} as='h1' size='xl'>Sign Up</Heading>
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} disabled={isLoading} />
            <FormHelperText>We will never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} disabled={isLoading} />
            <FormHelperText>Password has no special requirements</FormHelperText>
            <Text className={styles.error}>{isError}</Text>
        </FormControl>
        <Button
            size='md'
            colorScheme='telegram'
            isLoading={isLoading}
            loadingText='Submitting'
            onClick={handleSignUp}
            disabled={isLoading}
        >
            Sign Up
        </Button>
    </form>
}

export default SignUpForm;