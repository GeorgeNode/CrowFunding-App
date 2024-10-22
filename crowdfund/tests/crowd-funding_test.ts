// Commit 1: Basic test setup with campaign creation
import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v0.14.0/index.ts';
import { assertEquals } from 'https://deno.land/std@0.90.0/testing/asserts.ts';

Clarinet.test({
    name: "Ensure that users can create a campaign",
    async fn(chain: Chain, accounts: Map<string, Account>)
    {
        const deployer = accounts.get("deployer")!;
        const user1 = accounts.get("wallet_1")!;

        let block = chain.mineBlock([
            Tx.contractCall("crowdfunding", "create-campaign",
                [types.uint(1000000), types.uint(100)], // 1M STX goal, 100 blocks deadline
                user1.address
            )
        ]);

        assertEquals(block.receipts.length, 1);
        assertEquals(block.height, 2);
        assertEquals(block.receipts[0].result, '(ok u0)'); // First campaign should have ID 0
    },
});

Clarinet.test({
    name: "Ensure that campaign details can be retrieved",
    async fn(chain: Chain, accounts: Map<string, Account>)
    {
        const user1 = accounts.get("wallet_1")!;

        let block = chain.mineBlock([
            Tx.contractCall("crowdfunding", "create-campaign",
                [types.uint(1000000), types.uint(100)],
                user1.address
            )
        ]);

        block = chain.mineBlock([
            Tx.contractCall("crowdfunding", "get-campaign-details",
                [types.uint(0)],
                user1.address
            )
        ]);

        assertEquals(block.receipts.length, 1);
    },
});