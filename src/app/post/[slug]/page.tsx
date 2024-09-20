import { Suspense } from 'react'

import { PostProps } from '@/utils/post.type'
import { getItemBySlug } from '@/utils/actions/get-data'
import { Metadata } from 'next' 
import { Content } from './components/content'
import { LoadingPost } from './components/loading'



export async function generateMetadata({ params: { slug } }: {
    params: { slug: string }
}): Promise<Metadata>{

    try{
        const { objects }: PostProps = await getItemBySlug(slug);

        return {
            title: `DevMotors - ${objects[0].title}`,
            description: `${objects[0].metadata.description.text}`,
            keywords: ["devmotors", "troca de oleo", "devmotors troca de oleo"],
            openGraph: {
                title: `DevMotors - ${objects[0].title}`,
                images: [objects[0].metadata.banner.url]
            }, 
            robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: true,
                }
            }
        }

    } catch(err) {
        return {
            title: "DevMotors - sua ofina especializada!",
            description: "Oficina de carros em São Paulo",
        }
    }
}


export default async function Page({ params: { slug } }: {
    params: { slug: string }
}) {
    

    return(
        <>
        <Suspense fallback={ <LoadingPost/> }>
            <Content slug={slug} />
        </Suspense>
            
        </>
    )
}

