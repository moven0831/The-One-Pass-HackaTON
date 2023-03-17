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

## The Role of The Open Pass
> This tool aims to pave the way for cost-effective alternatives to traditional digital and physical ticketing systems.

The Open Pass minting tool project is motivated by the increasing demand for utility NFTs as more global brands embrace NFT technology. By offering unique features such as transferable soul-bound tokens, auto-upgraded NFTs, and redeemable NFTs.

Around half of the top 100 global brands have issued NFTs. Since brands and customers are familiar with NFTs, utility NFTs may be next. Since blockchain is the cheapest international payment system, issuing NFTs instead of other digital and physical tickets can save billions of dollars in payment processor fees.

Consequently, the ecosystem requires a utility NFT minting tool like The Open Pass. Our innovative utility NFT contracts and user interface make minting NFTs easy.

## Installation
Use Github to clone the repository using HTTPS, SSH, or GitHub CLI. Check the standalone FunC contracts for The Open Pass features.

```{bash}
# install requied packages
yarn install

cd contracts

# Utilized MAKEFILE to achieve the following features

# Compile all Func files in source directory
make compileAll

# Compile a single Func files in source directory
# For example, make comileSinge iSBT-single
make comileSinge FILENAME_YOU_WANT_TO_COMPILE

# Clean all of the cell files in build directory
make clean
```

#### Available NFT libraries

- [`redeemable-nft-collection.fc`](https://github.com/moven0831/The-One-Pass-HackaTON/blob/main/contracts/sources/redeemable-nft-collection.fc)
- [`redeemable-nft-item.fc`](https://github.com/moven0831/The-One-Pass-HackaTON/blob/main/contracts/sources/redeemable-nft-item.fc)
- [`redeemable-nft-single.fc`](https://github.com/moven0831/The-One-Pass-HackaTON/blob/main/contracts/sources/redeemable-nft-single.fc)
- [`autoUpgrade-nft-collection.fc`](https://github.com/moven0831/The-One-Pass-HackaTON/blob/main/contracts/sources/autoUpgrade-nft-collection.fc)
- [`autoUpgrade-nft-item.fc`](https://github.com/moven0831/The-One-Pass-HackaTON/blob/main/contracts/sources/autoUpgrade-nft-item.fc)
- [`autoUpgrade-nft-single.fc`](https://github.com/moven0831/The-One-Pass-HackaTON/blob/main/contracts/sources/autoUpgrade-nft-single.fc)
- [`iSBT-single.fc`](https://github.com/moven0831/The-One-Pass-HackaTON/blob/main/contracts/sources/iSBT-single.fc)

#### For auxiliary features of NFT
Import `uploadToIPFS.ts` and leverage `uploadMetadata()` function.

```{bash}
cd metadata
yarn install

# For demo usage only
npx ts-node uploadToIPFS.ts
```

## Contract Documentations
|     Contracts      | Feature Summary |
|:-----------------:|:------- |
|  [Redeemable NFT](https://github.com/moven0831/The-One-Pass-HackaTON/tree/main/documentation/redeemable-nft)   | Similar to royalty, our redeemable NFT allows issuers to predefine their utility NFT redemption rules in the contract. To redeem their NFT, holders must sign a message authorizing the redemption. |
| [Auto-upgraded NFT](https://github.com/moven0831/The-One-Pass-HackaTON/tree/main/documentation/autoUpgraded-nft) | The auto-upgraded NFT enables issuers to grant multiple contracts and wallet editorship. By issuing membership NFTs, the issuer can provide edit permissions to a smart contract that determines the membership level of NFT holders, allowing contracts to upgrade or downgrade membership levels. |
|       [iSBT](https://github.com/moven0831/The-One-Pass-HackaTON/tree/main/documentation/iSBT)        | The incentivized soul-bound token enables users to transfer their SBTs among their personal addresses. Based on the game theory framework, they have no motivations to sell, rent, or lend their SBT in a trustless manner. |

## Expected Use Cases

#### 1️⃣ ***Revolutionizing Fan Experience*** - Take the Australian Open as example
The Australian Open (AO) is one of the world's most prestigious tennis tournaments, awarding over 500 million AUD to some of the best players and drawing tens of millions of live audiences.

AO NFT metadata will be linked to tennis court squares. If A winning shot land on the square with a specific NFT linked, the NFT will be updated with match data and exclusive utilities like free merchandise and tickets for the following year. In, addition.  AO currently prohibits ticket resale.

This case shows the need for an upgradable, redeemable, and soul-bound token that matches three of our innovative contracts:

1. Our upgradeable NFT solution upgrades token metadata automatically via smart contract or server. 
2. The ability to directly redeem rewards or use NFT as tickets is essential. Redeemable NFT contracts allow this. Since the code stated redemption rules and methods, allowing users to store the NFT in any wallet.
3. Non-resalable NFTs with ticket utility. Users can hold the NFT for decades, upgrading and changing addresses are expected. Our iSBT contract prevents reselling without restricting address changes.

#### 2️⃣ ***Platform Subscription*** (e.g. Online Learning Platform)
An online learning platform could use The Open Pass to create a subscription-based utility NFT system, providing access to premium content and courses. The NFTs could feature:

1. Soul-bound tokens to ensure each subscription is tied to a specific user, preventing unauthorized sharing.
2. Upgradable NFTs to enable users to upgrade their subscription level (e.g., basic, premium, lifetime) and grant access to additional courses or features.
3. Redeemable NFTs to offer course discounts, exclusive content, or access to webinars and workshops for a limited time or to a limited number of users.

#### 3️⃣ ***Exclusive Club Memberships*** - (e.g. Art Gallery)
Art galleries and museums could leverage The Open Pass to issue utility NFTs as memberships, providing unique benefits and experiences for their members. These NFTs could offer:

1. Soul-bound tokens to ensure that memberships are non-transferable, keeping the benefits exclusive to the original member.
2. Auto-upgraged NFTs to grant members access to higher-tier benefits, such as private exhibition previews, artist meet-and-greets, or special events.
3. Redeemable NFTs to enable members to redeem discounts on gallery merchandise or bring a guest to the gallery for free on specified dates.