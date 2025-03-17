// Define the config type
export type LiquityFrontendConfig = {
  frontendTag: string;
  infuraApiKey?: string;
  alchemyApiKey?: string;
  testnetOnly?: boolean;
  walletConnectProjectId: string;
};

// ✅ Hardcoded config object
const hardcodedConfig: LiquityFrontendConfig = {
  frontendTag: "0x9AbDe3E91a0eF641D6FFAe82223F108902c1ffdA", // Replace with your frontend tag
  infuraApiKey: "d05461c2925243cbb985977850e31435", // Replace with your Infura API key
  alchemyApiKey: "", // Optional: add Alchemy API key if needed
  testnetOnly: false, // Set to true if applicable
  walletConnectProjectId: "b16efb4fd41473c0f45dbad8efa15a00" // Your WalletConnect project ID
};

// ✅ Simple getConfig function returns the hardcoded config
export const getConfig = async (): Promise<LiquityFrontendConfig> => {
  return hardcodedConfig;
};

// ✅ Synchronous version (optional)
// export const getConfig = (): LiquityFrontendConfig => {
//   return hardcodedConfig;
// };
