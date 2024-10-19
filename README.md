# Decentralized Crowdfunding Platform

This repository contains a smart contract for a decentralized crowdfunding platform implemented in Clarity, designed to run on the Stacks blockchain.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Smart Contract Details](#smart-contract-details)
4. [Functions](#functions)
5. [Error Codes](#error-codes)
6. [Usage](#usage)
7. [Security Considerations](#security-considerations)
8. [Development and Testing](#development-and-testing)
9. [Contributing](#contributing)
10. [License](#license)

## Overview

This decentralized crowdfunding platform allows users to create fundraising campaigns, contribute to existing campaigns, and manage the distribution of funds based on whether campaign goals are met.

## Features

- Create fundraising campaigns with specific goals and deadlines
- Contribute STX (Stacks tokens) to campaigns
- Automatic fund distribution to campaign owners upon successful completion
- Refund mechanism for contributors if campaign goals are not met
- Read-only functions to query campaign and contribution details

## Smart Contract Details

The smart contract is written in Clarity and includes the following main components:

- Data structures for storing campaign and contribution information
- Public functions for interacting with the platform
- Private helper functions
- Read-only functions for querying data

## Functions

### Public Functions

1. `create-campaign`: Create a new fundraising campaign
2. `contribute`: Contribute STX to an existing campaign
3. `claim-funds`: Allow campaign owners to claim funds for successful campaigns
4. `refund`: Allow contributors to claim refunds for unsuccessful campaigns

### Read-only Functions

1. `get-campaign-details`: Retrieve details of a specific campaign
2. `get-contribution`: Get contribution details for a specific user and campaign

## Error Codes

- `err-owner-only (u100)`: Only the contract owner can perform this action
- `err-not-found (u101)`: The requested item was not found
- `err-already-exists (u102)`: The item already exists
- `err-invalid-amount (u103)`: The provided amount is invalid
- `err-deadline-passed (u104)`: The campaign deadline has passed
- `err-goal-not-reached (u105)`: The campaign goal was not reached
- `err-already-claimed (u106)`: The funds have already been claimed
- `err-transfer-failed (u107)`: The STX transfer operation failed

## Usage

To interact with this smart contract, you'll need to use a Stacks wallet or a development environment that supports Clarity and the Stacks blockchain. Here are some basic usage examples:

1. Creating a campaign:
   ```clarity
   (contract-call? .decentralized-crowdfunding create-campaign u1000000000 u1672531200)
   ```

2. Contributing to a campaign:
   ```clarity
   (contract-call? .decentralized-crowdfunding contribute u1 u50000000)
   ```

3. Claiming funds (for campaign owners):
   ```clarity
   (contract-call? .decentralized-crowdfunding claim-funds u1)
   ```

4. Requesting a refund (for contributors to unsuccessful campaigns):
   ```clarity
   (contract-call? .decentralized-crowdfunding refund u1)
   ```

## Security Considerations

- Ensure that only authorized users can create campaigns and claim funds
- Implement proper access controls and input validation
- Consider potential issues with block timestamps and frontrunning
- Conduct thorough testing and potentially a security audit before deploying to mainnet

## Development and Testing

To develop and test this smart contract:

1. Set up a Clarity development environment (e.g., Clarinet)
2. Write unit tests for all functions
3. Deploy to testnet for integration testing
4. Use Clarity REPL for interactive testing and debugging

## Contributing

Contributions to improve the smart contract are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Push to your branch
5. Create a pull request


This README provides an overview of the decentralized crowdfunding platform smart contract. For more detailed information about Clarity and Stacks development, please refer to the official Stacks documentation.