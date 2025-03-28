### **Step-by-Step Guide to Deploy Contracts on Sepolia using Hardhat (Node v18)**

#### **Prerequisites**

1. Ensure you have **Node.js v18** installed.
2. Install **Yarn** globally (if not installed):
   ```bash
   npm install -g yarn
   ```
3. Have at least **0.01 ETH** in your Sepolia testnet wallet.

---

### **Step 1: Clone and Setup the Repository**

```bash
git clone https://github.com/liquity/beta.git
cd beta
```

---

### **Step 2: Install Dependencies**

```bash
yarn
```

---

### **Step 3: Set Up Environment Variables**

1. Navigate to the `packages/lib-ethers` directory:
   ```bash
   cd packages/lib-ethers
   ```
2. Create a `.env` file:
   ```bash
   touch .env
   ```
3. Open `.env` and add the following:
   ```env
   DEPLOYER_PRIVATE_KEY=0x{your_metamask_private_key}
   INFURA_API_KEY={your_infura_api_key}
   ```

---

### **Step 4: Update Hardhat Configuration**

1. Open `hardhat.config.ts` in a text editor.
2. Locate the `infuraApiKey` variable and update it with your **Infura API Key**:
   ```ts
   const infuraApiKey = "{your_infura_api_key}";
   ```
3. Save the file.

---

### **Step 5: Check Your Balance**

1. Run the following command to verify your Sepolia account balance:
   ```bash
   npx hardhat balance --account 0x{your_wallet_address} --network sepolia
   ```
   - If balance is **less than 0.01 ETH**, get test ETH from a **Sepolia faucet**.

---

### **Step 6: Deploy the Contracts**

1. Run the deployment command:
   ```bash
   yarn deploy --network sepolia
   ```
2. Wait for the contracts to deploy. Once completed, it will display contract addresses.

---

### **Step 7: Verify Deployment**

- Check deployed contract addresses and transactions on **Etherscan Sepolia**:  
  [https://sepolia.etherscan.io](https://sepolia.etherscan.io)

---

#### **Troubleshooting**

1. **"Out of gas" error** → Increase the gas limit in `hardhat.config.ts`.
2. **"Invalid API key" error** → Ensure your **Infura API key** is correct.
3. **"Insufficient funds" error** → Check your Sepolia ETH balance.

---

This setup ensures your contracts are deployed properly on the **Sepolia Testnet** using **Hardhat** and **Infura**. 🚀
