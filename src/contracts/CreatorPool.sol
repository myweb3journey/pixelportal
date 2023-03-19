// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

import { IERC721PoolFactory } from "./Interfaces.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";

/**
 * @title CreatorPool
 * @dev join a pool using PooledNFT createPool method https://etherscan.io/address/0xb67dc4B5A296C3068E8eEc16f02CdaE4c9A255e5
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract CreatorPool{
    // IERC721PoolFactory pooledNFTFactory = IERC721PoolFactory(address(0xC924C92e49996066363292dB5B31A79a4f658753)); //goerli

    IERC721PoolFactory pooledNFTFactory; //goerli

    constructor(address factory) {
        pooledNFTFactory = IERC721PoolFactory(factory); // goerli 0xC924C92e49996066363292dB5B31A79a4f658753
    }



    mapping (address => address) poolAddresses;
    mapping (address => uint256) public poolMemberCount;
    mapping (address => address) poolMembers;


    function getPoolFromFactory(address erc721TokenAddress) public view returns (address) {
        // Mapping always returns a value.
        // If the value was never set, it will return the default value.
        return pooledNFTFactory.getPool(erc721TokenAddress);
    }

    function createPixelPool(address erc721TokenAddress) public{
        if (!IERC165(erc721TokenAddress).supportsInterface(type(IERC721Metadata).interfaceId)) {
            revert ("does not implement erc721 metadata");
        }
        if (poolAddresses[erc721TokenAddress] != address(0)) {
            revert ("pool already exists");
        }

        pooledNFTFactory.createPool(erc721TokenAddress);
    }


}
