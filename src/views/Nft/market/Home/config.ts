import { ContextApi } from 'contexts/Localization/types'

const config = (t: ContextApi['t']) => {
  return [
    {
      title: t('I sold an NFT, where’s my ETH?'),
      description: [
        t(
          'Trades are settled in WBNB, which is a wrapped version of ETH used on Arbitrum One. That means that when you sell an item, WBNB is sent to your wallet instead of ETH.',
        ),
        t('You can instantly swap your WBNB for ETH with no trading fees on SPARCO.'),
      ],
    },
    {
      title: t('When can I trade other NFT Collections?'),
      description: [
        t(
          'Soon! The current NFT Market is a basic version (phase 1), with early access to trading Space AI Finance NFTs only.',
        ),
        t('Other collections will be coming soon. We’ll make an announcement soon about the launch of the V2 Market.'),
      ],
    },
    {
      title: t('How can I list my NFT collection on the Market?'),
      description: [
        t('In Phase 2 of the NFT Marketplace, collections must be whitelisted before they may be listed.'),
        t(
          'We are now accepting applications from NFT collection owners seeking to list their collections. Please apply here: https://docs.spaceaifinance.exchange/contact-us/nft-market-applications',
        ),
      ],
    },
    {
      title: t('What are the fees?'),
      description: [
        t(
          '100% of all platform fees taken by Space AI Finance from sales are used to buy back and BURN CAKE tokens in our weekly CAKE burns.',
        ),
        t(
          'Platform fees: 2% is subtracted from NFT sales on the market. Subject to change.Collection fees: Additional fees may be taken by collection creators, once those collections are live. These will not contribute to the CAKE burns.',
        ),
      ],
    },
  ]
}

export default config
