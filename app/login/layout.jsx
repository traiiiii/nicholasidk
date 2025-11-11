
export const metadata = {
    title: "Login"
}

export default function LoginLayout({ children }) {
    return (
        <div className={`min-h-screen flex flex-col flex-1 items-center justify-center`}>
            {children}
        </div>
    );
}