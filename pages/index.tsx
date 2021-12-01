import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Henry Adagala</title>
        <meta
          name="description"
          content="Portfolio, Henry Adagala Asiligwa, Henry Adagala, Henry Asiligwa, Adagala Asiligwa"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex justify-center items-center bg-gray-100">
        <div className="flex flex-col justify-center items-center">
          <div className="text-5xl font-bold">
            Henry Adagala
          </div>
          <div className="text-3xl font-medium m-3">
            Software Developer
          </div>
          <div className="m-5 flex space-x-4">
            <div>
              <a href="https://linkedin.com/in/adagalahenry" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin.svg" alt="Twitter" width={32} height={32} />
              </a>
            </div>
            <div>
              <a className="" href="https://twitter.com/adagalahenry" target="_blank" rel="noopener noreferrer">
                <Image src="/twitter.svg" alt="Twitter" width={32} height={32} />
              </a>
            </div>
            <div >
              <a href="https://github.com/adagala" target="_blank" rel="noopener noreferrer">
                <Image src="/github.svg" alt="Twitter" width={32} height={32} />
              </a>
            </div>
            <div >
              <a href="mailto:adagalahenry@gmail.com" target="_blank" rel="noopener noreferrer">
                <Image src="/email.svg" alt="Mail" width={32} height={32} />
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer >
      </footer>
    </div>
  )
}
