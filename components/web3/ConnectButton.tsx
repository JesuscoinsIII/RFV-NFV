"use client";

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { SUPPORTED_CHAINS } from '@/lib/contracts/config';

export function ConnectButton() {
  const [connecting, setConnecting] = useState(false);
  const { toast } = useToast();

  const connect = useCallback(async () => {
    if (!window.ethereum) {
      toast({
        title: "Error",
        description: "Please install MetaMask to continue",
        variant: "destructive"
      });
      return;
    }

    try {
      setConnecting(true);
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      
      if (!SUPPORTED_CHAINS.includes(parseInt(chainId, 16))) {
        toast({
          title: "Wrong Network",
          description: "Please connect to Ethereum Mainnet or Goerli",
          variant: "destructive"
        });
        return;
      }

      await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });

      toast({
        title: "Connected",
        description: "Successfully connected to wallet"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to connect wallet",
        variant: "destructive"
      });
    } finally {
      setConnecting(false);
    }
  }, [toast]);

  return (
    <Button 
      onClick={connect} 
      disabled={connecting}
    >
      {connecting ? "Connecting..." : "Connect Wallet"}
    </Button>
  );
}