<div align="center">
  <a href="https://ton.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://ipfs.moralis.io:2053/ipfs/QmVEBZfuopskn43N36jz4CdNEkvvorRmQp2B4cyjkpMPTj/the_open_pass_dune.svg">
      <img alt="TOP logo" src="https://ipfs.moralis.io:2053/ipfs/QmVEBZfuopskn43N36jz4CdNEkvvorRmQp2B4cyjkpMPTj/the_open_pass_dune.svg">
    </picture>
  </a>
  <h3>Redeemable NFT, Auto-upgraded NFT, Incentivized SBT</h3>
  <hr/>
</div>

# The One Pass - Optimized Utlilty NFT minting tool for [The Open Network](https://ton.org)

## Intro
Around half of the top 100 global brands have issued NFTs. Since brands and customers are familiar with NFTs, utility NFTs may be next. Since blockchain is the cheapest international payment system, issuing NFTs instead of other digital and physical tickets can save billions of dollars in payment processor fees.

Consequently, the ecosystem requires a utility NFT minting tool like The Open Pass. Our innovative utility NFT contracts and user interface make minting NFTs easy.

## Starter
- Check all functions, including compilation and deployment, in `contracts` folder
    ```{bash}
    cd contracts
    ```

## Contract Documentations
|     Contracts      | Feature Summary |
|:-----------------:|:------- |
|  [Redeemable NFT](https://github.com/moven0831/The-One-Pass-HackaTON/tree/main/documentation/redeemable-nft)   | Similar to royalty, our redeemable NFT allows issuers to predefine their utility NFT redemption rules in the contract. To redeem their NFT, holders must sign a message authorizing the redemption. |
| [Auto-upgraded NFT](https://github.com/moven0831/The-One-Pass-HackaTON/tree/main/documentation/autoUpgraded-nft) | The auto-upgrade NFT enables issuers to grant multiple contracts and wallet editorship. By issuing membership NFTs, the issuer can provide edit permissions to a smart contract that determines the membership level of NFT holders, allowing contracts to upgrade or downgrade membership levels. |
|       [iSBT](https://github.com/moven0831/The-One-Pass-HackaTON/tree/main/documentation/iSBT)        | The incentivized soul-bound token enables users to transfer their SBTs among their personal addresses. Based on the game theory framework, they have no motivations to sell, rent, or lend their SBT in a trustless manner. |

## Common Use Cases

The Australian Open(AO) is one of the world's most prestigious tennis tournaments, awarding over 500 million AUD to some of the best players and drawing tens of millions of live audiences.

AO NFT metadata will be linked to tennis court squares. If A winning shot land on the square with a specific NFT linked, the NFT will be updated with match data and exclusive utilities like free merchandise and tickets for the following year. In, addition.  AO currently prohibits ticket resale.

This case shows the need for an upgradable, redeemable, and soul-bound token that matches three of our innovative contracts:

1. Our upgradeable NFT solution upgrades token metadata automatically via smart contract or server. 
2. The ability to directly redeem rewards or use NFT as tickets is essential. Redeemable NFT contracts allow this. Since the code stated redemption rules and methods, allowing users to store the NFT in any wallet.
3. Non-resalable NFTs with ticket utility. Users can hold the NFT for decades, upgrading and changing addresses are expected. Our iSBT contract prevents reselling without restricting address changes.