export default function Page({ children }) {
  return (
    <main
      style={{
        fontFamily: "sans-serif",
        backgroundColor: "#0f0e17",
        color: "#fffffe",
        height: "100vh",
        width: "100vw",
      }}
    >
      {children}
    </main>
  );
}
