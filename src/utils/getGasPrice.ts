import { ChainId } from '@pancakeswap/sdk'
import store from 'state'
import { GAS_PRICE_GWEI } from 'state/user/hooks/helpers'

/**
 * Function to return gasPrice outwith a react component
 */
const getGasPrice = (): string => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  const state = store.getState()
  const userGas = GAS_PRICE_GWEI.testnet
  return chainId === ChainId.MAINNET.toString() ? userGas : GAS_PRICE_GWEI.testnet
}

export default getGasPrice
