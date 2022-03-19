import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getUrl, getData, formatIpfs } from '../../../../utils'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

const NFT = props => {
  const router = useRouter()
  const { network, address, id } = router.query
  const [nft, setNft] = useState(null)
  const [nftAttributes, setNftAttributes] = useState(null)

  useEffect(() => {
    if (address && id && network) {
      getUrl(address, id, network)
        .then(res =>
          getData(res)
            .then(result => {
              result = result.data
              setNftAttributes(result.attributes)
              delete result.attributes
              setNft(result)
            })
            .catch(err => console.log(err))
        )
        .catch(e => console.log(e))
    }
  }, [address, id, network])

  if (nft === null) {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
        <h2 className="text-center text-white text-xl font-semibold">
          Loading...
        </h2>
        <p className="w-1/3 text-center text-white">
          This may take a few seconds.
        </p>
      </div>
    )
  }

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <>
      <NextSeo title={nft?.name || 'Nft'} />
      <main className="container m-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
          <div className="nft-image">
            {nft?.image && (
              <Image
                loader={myLoader}
                src={formatIpfs(nft.image)}
                alt={nft?.name}
                width={500}
                height={500}
              />
            )}
          </div>
          <div className="nft-details col-span-2">
            {Object.keys(nft).map(item => (
              <div className="mb-5" key={item}>
                <div className="text-lg capitalize font-semibold">{item}</div>
                <div className="text-sm">{nft[item]}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default NFT
