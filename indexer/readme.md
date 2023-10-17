```
curl -sL https://install.apibara.com | bash

apibara plugins install sink-console

apibara plugins install sink-mongo

apibara run --allow-env=env-goerli src/test.ts -A dna_jX3t04zs9zywBnHWVmUq --status-server-address 0.0.0.0:1002 --persist-to-fs=.apibara --sink-id=test
```