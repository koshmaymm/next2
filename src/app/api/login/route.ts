import { availableUsers } from "@/data/mockUserList";
import { jwtFakeToken } from "@/utils/localStorage";
import { getStringifyData } from "@/utils";

export async function POST(request: Request) {
    const requestBody = await request.json();
    const { email, password } = requestBody;
    const headers = { 'Content-Type': 'application/json' };

    if (email.trim() === "" || password.trim() === "") {
        const data = { message: 'Empty email or password', status: 401 };
        const body = getStringifyData(data);
        return new Response(body, { headers });
    }

    const userFound = availableUsers.find(user => user.email === email);
    if (!userFound) {
        const data = { message: 'User with such email not found', status: 404 };
        const body = getStringifyData(data);
        return new Response(body, { headers });
    }
    if (userFound.password !== password) {
        const data = { message: 'Invalid password', status: 401 };
        const body = getStringifyData(data);
        return new Response(body, { headers });
    }

    const data = {
        user: {
            id: userFound.id,
            firstName: userFound.firstName,
            lastName: userFound.lastName,
            job: userFound.job,
            birthday: userFound.birthday,
            sex: userFound.sex,
            age: userFound.age,
        },
        status: 200,
        token: jwtFakeToken
    };

    const body = getStringifyData(data);
    return new Response(body, { headers });
}
