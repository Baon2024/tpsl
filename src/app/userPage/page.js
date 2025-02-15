'use client'
import { useRouter } from "next/navigation";


export default function SubscribeToTPSL() {

    const router = useRouter();

    function handleLogOut() {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('jwtTPSL');
          localStorage.removeItem('userTPSL');
          //setUser(null); - might need to use this if you filter this down as a prop thrhough oayout
          router.push("/");
        }
      }

    return (
        <>
        <p>This is the userPage</p>
        <button onClick={handleLogOut}>log out</button>
        </>
    )
}