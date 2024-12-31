export const CONTRACT_ADDRESSES = {
  RFVToken: process.env.NEXT_PUBLIC_RFV_TOKEN_ADDRESS || '',
  VehicleNFT: process.env.NEXT_PUBLIC_VEHICLE_NFT_ADDRESS || '',
  RFVPlatform: process.env.NEXT_PUBLIC_RFV_PLATFORM_ADDRESS || ''
} as const;

export const SUPPORTED_CHAINS = [1, 5] as const; // Mainnet and Goerli