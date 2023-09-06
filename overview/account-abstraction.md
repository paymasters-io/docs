# 😎 Account Abstraction

To understand account abstraction , we have to first go over the two fundamental accounts used in blockchain.

They are :

* Externally Owned Accounts (EOAs) and&#x20;
* Contract accounts

**EOAs**

* This type of account is controlled  by private keys. That is to say the owner of the private key completely controls the account
* It is associated with human users. When you create a wallet to store tokens, you are mostly creating an EOA. Transactions initiated from an externally owned account requires a private key for the digital signature.
* Execute transactions. E.g transfer tokens

**Contract Accounts**

* Also known as smart contract accounts. They do not have private keys associated with them but are controlled by code of a smart contract. They execute code automatically when triggered by transactions or external events.
* Storing and processing code of smart contract.
* It is immutable once deployed on the blockchain
* Receive and send tokens.

**Problems With EOAs**

* Risk of losing your private key. Single point of failure. Once your private key is lost, your money is gone.
* To initiate multi-step transaction, a user may need to initiate multiple transactions which can be costly in terms of gas and time
* Not user friendly when interacting with complex dapps or other blockchain services

## What is Account Abstraction ?

Account abstraction seeks to address the limitations of the EOAs. It does this by abstracting the Logic used by EOA in signing transactions. As we know, EOA requires you to sign a transaction using your private keys. Account abstractions abstracts that logic out. This then makes the account programmable. It means that you can now exclusively store assets with contract accounts  which then makes it your primary account. &#x20;

### How does AA help ?

* You can implement logic in your smart contract that can handle 2fa authentication and withdrawal limits.
* With AA you can allow for a substitute key in your smart contract code should the original one be misplaced.
* Optionally code your smart contract to authenticate users through a different method without using a key.
* Improved user experience.
* Makes it so developers can be flexible and innovative when they code.
* You can pay for transaction fees using choice token.

Want to read more ? Here are more articles on account abstraction. [https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md)

{% embed url="https://ethereum.org/en/roadmap/account-abstraction/" %}

{% embed url="https://hackernoon.com/what-is-account-abstraction-and-why-is-everyone-talking-about-it" %}

