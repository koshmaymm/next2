
import Link from "next/link";

const MainNavigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Main</Link>
                </li>
                <li>
                    <Link href="/statistics">Statistics</Link>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavigation;