import { ethers } from 'ethers'

const abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'uri',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
]
const networks = {
  bsc: {
    name: 'Binance',
    rpc: 'https://bsc-dataseed.binance.org/'
  },
  matic: { name: 'Matic', rpc: 'https://polygon-rpc.com/' }
}
export const getUrl = async (address, tokenId, network) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(networks[network].rpc)
    const contractInstance = new ethers.Contract(address, abi, provider)
    return await contractInstance.tokenURI(tokenId)
  } catch (e) {
    throw e
  }
}

export const getData = url =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  )
