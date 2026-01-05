'use client';

import { use } from 'react'
import { PageBuilder } from '@/components/page-builder/template';

export default function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = use(params)
    return (
        <PageBuilder  >
            <div>My Post is:5554545{slug}</div>
        </PageBuilder>
    )


}