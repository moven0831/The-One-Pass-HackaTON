# Auto-upgraded NFT


The auto-upgraded NFT feature in the Open Pass minting tool enables issuers to grant editorship to multiple contracts/wallets. This upgradable NFT allows for automated changes in membership levels and makes membership NFTs more versatile. By granting edit permissions to a smart contract, the membership level of NFT holders can be determined, allowing for automatic upgrades or downgrades in membership levels and leveraging other programs logic.

## Related libraries
- [`autoUpgrade-nft-collection.fc`](https://github.com/moven0831/The-One-Pass-HackaTON/blob/main/contracts/sources/autoUpgrade-nft-collection.fc)
- [`autoUpgrade-nft-item.fc`](https://github.com/moven0831/The-One-Pass-HackaTON/blob/main/contracts/sources/autoUpgrade-nft-item.fc)
- [`autoUpgrade-nft-single.fc`](https://github.com/moven0831/The-One-Pass-HackaTON/blob/main/contracts/sources/autoUpgrade-nft-single.fc)


## Function Specs
In the storage section, the auto-upgradable and redeemable features keep track of the following variables in smart contract:

- `storage::owner_address`: The current owner of the token.
- `storage::owner_public_key`: The public key of the owner. To verify that the owner signature is valid in the redeem process without requiring the sender must be authority.
- `storage::editor_addresses`: A tuple containing the addresses of the editors.
- `storage::remained_redeemable_index`: A unsigned integer to keep track of remained amount of valid redemption.

The smart contract includes several utility libraries and defines a set of functions to interact with the storage, send messages, transfer ownership, and redeem feature of the token.

- `edit_content()`: Edit the content associated with the token (restricted to editors).
- `redeem()`: Redeem the token with predefined utility. Allows users to redeem an NFT when there are still redeemable NFTs available. The process involves verifying the owner's public key to ensure authenticity.

There are also some get methods defined in the smart contract for off-chain access to token data:

- `get_nft_content()`: Get the content associated with the token. This method retrieves the content of a specific NFT by its index. It takes two arguments - an integer index and a cell individual_nft_content.
- `get_editors()`: Get the editor addresses.
- `redeemable_index`: This method returns the redeemable index for an NFT.
