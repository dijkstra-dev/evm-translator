const OpenSea = {
    contract_address: '0x7f268357a8c2552623316e2562d90e642bb538e5',
    methods: {
        // from 4byte.directory
        0x02c8986f: ['atomicMatch_', 'pay(uint256,address,string,bool)'],
    },
    contract_official_name: 'Wyvern Exchange Contract',
    contractName: 'OpenSea',
    atomicMatch_: {
        action: 'bought',
        NFT: {
            key: 'contract',
            filters: {
                event: 'Transfer',
                to: '{userAddress}',
            },
            defaultValue: 'an unknown NFT',
        },
        tokenId: {
            key: 'tokenId',
            filters: {
                event: 'Transfer',
                to: '{userAddress}',
            },
            prefix: '#',
            defaultValue: '???',
        },
        exampleDescriptionTemplate: `{userName} {action} {NFT} {tokenId} on {contractName} for {nativeTokenValueSent} ETH`,
        // exampleDescription: 'brenner.eth bought Blitmap #1115 on OpenSea for 0.01 ETH',
    },
}

export default OpenSea