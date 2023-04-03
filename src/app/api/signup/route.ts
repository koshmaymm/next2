import { availableUsers } from "@/data/mockUserList";
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
    if (userFound) {
        const data = { message: 'User already exists', status: 409 };
        const body = getStringifyData(data);
        return new Response(body, { headers });
    }

    const data = {
        message: 'Unfortunately, registration of new users is disabled at the moment',
        status: 200,
    };

    const body = getStringifyData(data);
    return new Response(body, { headers });
}
