import '@/styles/index.scss'

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {I18nProviderClient} from "@/locales/client";
import {ToastsManager} from "@/common";
import type {ReactNode} from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
   children,
   params,
}: {
    children: ReactNode
    params: { locale: string }
}) {
    return (
        <html lang={params.locale}>
            <body className={inter.className}>
                <I18nProviderClient locale={params.locale} fallback={<div />}>
                    {children}
                    <ToastsManager/>
                </I18nProviderClient>
            </body>
        </html>
    )
}
