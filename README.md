### Historical Solana NFT Projects 

This is a [Next.js](https://nextjs.org/) website designed to show the <ins>most important</ins> Solana NFT projects.

- This is **minimum viable product (MVP)**
- There can be some errors in the data as it is gathered from API.

## Getting Started

The website is currently hosted in Vercel, to which you can find the link in the about section.

## Data

The data is visible in the `src/data/collection.json`, and is formatted in the following style:
```
{
  "days": Days from 25.03.2021,
    "data": [
      {
        "name": Name of the collection,
        "collectionSymbol": Collection symbol in marketplaces,
        "description": Description,
        "image": Collection Image,
        "totalSupply": Total supply,
        "twitter": Twitter account (if given),
        "oneTokenFromCollection": One NFT from collection,
        "date": Mint date
      }
    ]
}
```
The data was gathered using **Magiceden's** publicly available API.

For a collection to be included here it was required for it to have:
1. More than 50 holders
2. Total volume greater than 11000 SOL
   - Some collections that did not fulfill this were added as they were declared important.

## Current progress and follow-up work

- [x] Gather data from Solana collections
- [x] Create initial MVP for website
- [ ] Make a proper website with good UX and UI
- [ ] Add further analysis to website 
- [ ] Fix all issues in the data
- [ ] Add option to paste a wallet address and highlight collections owned by the wallet at some point


## Local development 
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start doing changes.
