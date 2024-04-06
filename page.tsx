 import Link from "next/link";

export default function Page() {
    return (
        <div>
            You can see the Latest-Products here.
            {/* Create a Link component for navigation to the Shop */}
            <Link href="/Shop">
                Go to Shop
            </Link>
        </div>
    )
}

