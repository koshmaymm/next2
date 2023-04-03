export interface User {
    id: number;
    firstName: string;
    lastName: string;
    job: string;
    birthday: string;
    sex: string;
    age: number;
    email: string;
    password: string;
}

export const availableUsers: User[] = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        job: "Software Engineer",
        birthday: "1990-01-01",
        sex: "male",
        age: 31,
        email: "johndoe@gmail.com",
        password: "password123"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        job: "Product Manager",
        birthday: "1985-03-15",
        sex: "female",
        age: 36,
        email: "janedoe@yahoo.com",
        password: "password123"
    },
    {
        id: 3,
        firstName: "Bob",
        lastName: "Smith",
        job: "Data Analyst",
        birthday: "1995-07-20",
        sex: "male",
        age: 26,
        email: "bobsmith@hotmail.com",
        password: "password123"
    },
    {
        id: 4,
        firstName: "Alice",
        lastName: "Johnson",
        job: "Graphic Designer",
        birthday: "1993-04-10",
        sex: "female",
        age: 28,
        email: "alicej@gmail.com",
        password: "password123"
    },
    {
        id: 5,
        firstName: "Mark",
        lastName: "Williams",
        job: "Marketing Manager",
        birthday: "1988-11-25",
        sex: "male",
        age: 33,
        email: "markw@hotmail.com",
        password: "password123"
    },
    {
        id: 6,
        firstName: "Sarah",
        lastName: "Jones",
        job: "HR Manager",
        birthday: "1992-02-05",
        sex: "female",
        age: 29,
        email: "sjones@gmail.com",
        password: "12345678"
    },
    {
        id: 7,
        firstName: "Tom",
        lastName: "Brown",
        job: "Sales Representative",
        birthday: "1987-09-12",
        sex: "male",
        age: 34,
        email: "tbrown@yahoo.com",
        password: "12345678"
    },
    {
        id: 8,
        firstName: "Emily",
        lastName: "Davis",
        job: "Web Developer",
        birthday: "1991-06-30",
        sex: "female",
        age: 30,
        email: "emilydavis@hotmail.com",
        password: "12345678"
    },
    {
        id: 9,
        firstName: "David",
        lastName: "Garcia",
        job: "Business Analyst",
        birthday: "1989-08-18",
        sex: "male",
        age: 32,
        email: "dgarcia@gmail.com",
        password: "12345678"
    },
    {
        id: 10,
        firstName: "Olivia",
        lastName: "Taylor",
        job: "Content Writer",
        birthday: "1994-12-05",
        sex: "female",
        age: 27,
        email: "olivia@gmail.com",
        password: "12345678"
    }
];





