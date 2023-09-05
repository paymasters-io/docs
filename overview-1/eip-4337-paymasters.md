# EIP-4337 Paymasters

Let's start by first defining a paymaster. This will help us understand the EIP-4337 paymaster.&#x20;

## What is a Paymaster?

A paymaster is simply a person or an organization in charge of distributing payments on behalf of a company or government agency. Paymasters may also be responsible for managing other financial transactions, such as the disbursement of funds to contractors or suppliers. They typically have access to sensitive financial information and must maintain a high level of accuracy and confidentiality in their work.

In the blockchain network, The term "paymaster" refers to a **smart contract** that is responsible for managing transactions between different parties within a decentralized application (dApp) or blockchain network.

Paymasters in Web3 typically act as intermediaries between users and the blockchain network, helping to facilitate transactions and ensure that all parties involved are properly compensated. For example, a paymaster might be used to facilitate micropayments between users of a social media platform or to manage payments between buyers and sellers on an e-commerce site.

## EIP-4337 Paymasters

EIP-4337 is an improvement to the transaction types on the Ethereum blockchain.&#x20;

" _An account abstraction proposal that completely avoids the need for consensus-layer protocol changes. Instead of adding new protocol features and changing the bottom-layer transaction type, this proposal instead introduces a higher-layer pseudo-transaction object called a <mark style="background-color:yellow;">`UserOperation`</mark>. Users send `UserOperation` objects into a separate mempool. A special class of actor called bundlers package up a set of these objects into a transaction making a `handleOps` call to a special contract, and that transaction then gets included in a block_ " - EIP-4337.md.

### Goals Of EIP-4337

* **Account Abstraction**: Allow users to use smart contract wallets containing arbitrary verification logic instead of EOAs(externally owned accounts) as their primary account. Completely remove any need at all for users also to have EOAs&#x20;
*   **Decentralization:**&#x20;

    Allow any bundler (think: block builder) to participate in the process of including account-abstracted user operations.
* **Does not require any Ethereum consensus change**



To better under the reason for the change and what exactly does the `UserOperation` object does, please read the proposal.

[https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md)
