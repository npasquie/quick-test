import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
});

client
  .getBalance({ address: "0x48878d24757E2f7cF9f692536a17C2870821663f" })
  .then((balance) => {
    console.log(balance);
  });
