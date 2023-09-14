import { NextApiRequest, NextApiResponse } from "next";
import { ItemData } from "@components/home/item";
import { fetcher } from "@utils/use-data-fetch";
import { URIData } from "../../../types";

export default async function handler( req: NextApiRequest,
                                       res: NextApiResponse)
{
  const url = `https://rpc.helius.xyz/?api-key=${process.env.HELIUS_API_KEY}`
  const { address } = req.query;

  const searchAssets = async () => {
    if (address && address.length > 0) {
      const response = await fetcher<URIData>(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "jsonrpc": '2.0',
          "id": 'my-id',
          "method": 'getAssetsByOwner',
          "params": {
            "ownerAddress": "CvLEECEjauyR4Hat4WkKtLFXh9e2vxnSxm5wfrXp5Vu ",
            "page": 1,
            "limit": 1000
          },
        }),
      });
      res.status(200).json(response)
    }
    res.status(400)
  };

  searchAssets();
}