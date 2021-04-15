import Link from "next/link"
import {useEffect} from "react"
import {useRouter} from "next/router"

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(1) // Back to the last page
            router.push('/');
        }, 1000)
    }, [])

    return ( 
        <div className="notFound">
            <h1>Oooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a className="link">Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound