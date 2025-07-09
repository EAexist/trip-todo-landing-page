import localFont from 'next/font/local'
import Provider from "./provider"
// import { Archivo } from 'next/font/google'

const pretendardVariable = localFont({
    src: './font/PretendardVariable.woff2',
    variable: "--font-pretendard-variable"
})


// const geist = Archivo({
//   subsets: ['latin'],
// })
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className={pretendardVariable.className} suppressHydrationWarning>
            <head />
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    )
}
