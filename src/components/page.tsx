export default function Page({ children }) {
    return (
        <main style={{fontFamily: "sans-serif", height: "100vh", width: "100vw"}}>
            { children }
        </main>
    )
}