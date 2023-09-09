# 💡 EIP-4337 Paymasters

{% hint style="info" %}
Let's start by first defining a paymaster. This will help us understand the EIP-4337 paymaster.&#x20;
{% endhint %}

## What is a Paymaster?

A paymaster is simply a person or an organization in charge of distributing payments on behalf of a company or government agency. They typically have access to sensitive financial information and must maintain a high level of accuracy and confidentiality in their work.

## EIP-4337 Paymasters

_In the blockchain network, The term "paymaster" refers to a **smart contract** that is responsible for managing gas fees between different parties within a decentralized application (dApp) or blockchain network._

Paymasters typically act as intermediaries between users and the blockchain network, helping to facilitate transactions and ensure that all parties involved are properly compensated.

**EIP-4337 paymaster** is an improvement to the transaction types on the Ethereum blockchain.&#x20;

" It is a_n account abstraction proposal that completely avoids the need for consensus-layer protocol changes. Instead of adding new protocol features and changing the bottom-layer transaction type, this proposal instead introduces a higher-layer pseudo-transaction object called a <mark style="background-color:yellow;">`UserOperation`</mark>. Users send `UserOperation` objects into a separate mempool. A special class of actor called bundlers package up a set of these objects into a transaction making a `handleOps` call to a special contract, and that transaction then gets included in a block_ "&#x20;

### Goals Of EIP-4337

* **Account Abstraction**: Allow users to use smart contract wallets containing arbitrary verification logic instead of EOAs(externally owned accounts) as their primary account. Completely remove any need at all for users also to have EOAs&#x20;
*   **Decentralization:**&#x20;

    Allow any bundler (think: block builder) to participate in the process of including account-abstracted user operations.
* **Does not require any Ethereum consensus change and more**

To better under the reason for the change and what exactly the `UserOperation` object does, please read the proposal. [https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md)



## Modular Paymaster

"Modular Paymaster" is a type of paymaster that opens the doors to innovation. The smart contract empowers users to define custom modules for our verifying paymaster validation. You can now focus solely on your business logic, while we handle the intricate gas abstraction layer for your users.

## ERC20 Paymasters (Multi-Standard token)

Our ERC20 Paymaster sets the **gold standard** for gas abstraction. You may ask what do we mean by **gold standard** for gas abstraction.  This means that with our smart contract, users can pay for transactions using a wide array of ERC20 tokens. The flexibility of our paymaster enables transactions to be settled using any accepted ERC20 token.

<figure><img src="../.gitbook/assets/paymasterslist.png" alt="A List of paymasters contracts displayed on the dashboard" width="563"><figcaption><p>A List of paymasters on the dashboard</p></figcaption></figure>
