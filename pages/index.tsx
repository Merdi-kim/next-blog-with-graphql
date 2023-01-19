import type { NextPage, GetStaticProps, InferGetStaticPropsType  } from 'next'
import Head from 'next/head'
import { PostCard, PostWidget, Categories } from '../components'
import { getPosts } from '../services'
import {IPostNode } from '../types/post'


const Home: NextPage = ({posts}:InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>merkim blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post:IPostNode) => <PostCard key={post.node.title} post={post.node}/>)}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget/>
            <Categories/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export const getStaticProps:GetStaticProps = async() => {
  const posts: IPostNode[] = await getPosts()
  return {
    props: {
      posts
    }
  }
}

export default Home
