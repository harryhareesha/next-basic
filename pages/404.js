import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
export default function NotFound() {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            console.log('use effect ran..');
            router.push('/')
        }, 1000)
    }, [])

    return (
        <div className="not-found">
            <h1>oops...</h1>
            <h2>that page cannot be found</h2>
            <p>go back to the
                <Link href="/"><a> homepage, in a sec!!</a></Link>
            </p>
        </div>
    )
}
