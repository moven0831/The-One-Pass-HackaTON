# Smart Contracts for The One Pass Hackathon

### Run unit test of the contracts
```
npx jest <FILENAME>
```

### Compile FunC contracts to Cell file
```bash
# Do this first
cd contracts

# Then execute the bash script
bash contracts/utils/compile.sh <FILENAME>
```

### Deploy Contract (cd to the target directory)
```
npx ts-node deploy.ts
```
