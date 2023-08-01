// next
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <div className="text-center">
                <h1 className="font-bold text-5xl md:text-6xl">404</h1>
                <h1 className="font-semibold text-4xl md:text-5xl mb-4">
                    page not found
                </h1>
                <Link
                    className="hover:underline border py-2 px-4 rounded-full"
                    href="/"
                >
                    Go back
                </Link>
            </div>
        </div>
    );
}
