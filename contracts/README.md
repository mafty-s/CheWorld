Install
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
curl --proto '=https' --tlsv1.2 -sSf https://docs.swmansion.com/scarb/install.sh | sh
curl https://get.starkli.sh | sh
starkliup
```

```bash
export STARKNET_KEYSTORE="/root/key.json"
export STARKNET_ACCOUNT="/root/account-goerli.json"
```

```bash
starkli declare ./target/dev/game_Game.sierra.json
```

WARNING: no valid provider option found. Falling back to using the sequencer gateway for the goerli-1 network. Doing this is discouraged. See https://book.starkli.rs/providers for more details.
Enter keystore password:
Not declaring class as it's already declared. Class hash:
0x04421b3816360a8d1618221eea415c100498c498dbdb94d504715d807536395d

```bash
export LORDS_ADDRESS=0;
export DAO_ADDRESS=0;
export CLASS_HASH=0x01142a22b2af5bb003fe8acebc0af5318d2ad7a7d4ae4b392d909068e6dbc1a6;
starkli deploy $CLASS_HASH   

```