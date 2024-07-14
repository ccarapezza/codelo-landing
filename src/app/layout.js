import { bebas_Neue } from './fonts'
import './globals.css'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css'
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false


export const metadata = {
    title: 'Cogollos del Oeste - Sitio Oficial',
    description: 'Sitio oficial de la asociación civil Cogollos del Oeste',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={bebas_Neue.className}>{children}</body>
        </html>
    )
}
