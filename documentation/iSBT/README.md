# Incentivized Soul-bound Token (iSBT)


## Related libraries
- [`iSBT-single.fc`](https://github.com/moven0831/The-One-Pass-HackaTON/blob/main/contracts/sources/iSBT-single.fc)


## Introduction
This smart contract is an incentivized soul-bound token (SBT) for the Open Pass project implemented on the TON blockchain. The token allows users to transfer their SBTs among their personal addresses without the motivation to sell, rent, or lend their SBTs in a trustless manner.

## Function Specs
In the storage section, the smart contract keeps track of the following variables:

- `storage::owner_address`: The current owner of the token.
- `storage::content`: The content associated with the token.
- `storage::authority_address`: The address of the authority allowed to reclaim the token.
- `storage::authority_public_key`: The public key of the authority. To verify that the authority signature is valid without requiring the sender must be authority.
- `storage::editor_addresses`: A tuple containing the addresses of the editors.
- `storage::prev_owner_address`: A tuple containing the addresses of the previous owners.
- `storage::reclaim_at`: The UNIX timestamp after which the token can be reclaimed by the previous owners or the authority.
- 
The smart contract includes several utility libraries and defines a set of functions to interact with the storage, send messages, update previous owners, and transfer ownership of the token.

- `transfer()`: Transfer the ownership of the token to a new owner.
- `request_owner()`: Request the owner's information.
- `prove_ownership()`: Prove the ownership of the token.
- `get_static_data()`: Get the static data of the token.
- `edit_content()`: Edit the content associated with the token (restricted to editors).
- `reclaim()`: Reclaim the token by a previous owner or the authority.
- `take_excess()`: Withdraw excess funds from the token's balance.

There are also some get methods defined in the smart contract for off-chain access to token data:

- `get_nft_content()`: Get the content associated with the token.
- `get_editors()`: Get the editor addresses.
- `get_authority_address()`: Get the authority address.
- `get_reclaim_time()`: Get the reclaim timestamp.