import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <NextSeo title="NFT" />
      <main className="container m-auto my-10">
        <h1 className="text-2xl">Explore your NFT</h1>
        <p className="text-sm">
          You can find the meta data of nft here with bsc and matic
        </p>

        <h3 className="mt-10">Pattern</h3>
        <p className="text-sm">
          /nft/[matic/bsc]/[contract-address]/[token-id]
        </p>

        <h3 className="mt-10 text-lg">Sample NFT</h3>
        <Link href="/nft/matic/0xbdc91993cc370eed38e59cd1c68b6d2f88508ce2/31607">
          <a className="text-sm block">FFWG nft on matic</a>
        </Link>
        <Link href="/nft/matic/0xE6965B4F189DBDB2BD65e60aBAeb531B6fE9580B/222550">
          <a className="text-sm block">Card nft on bsc</a>
        </Link>
      </main>
    </>
  )
}
