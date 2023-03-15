find build/ -name "*.cell" -type f | xargs rm -f
npx func-js sources/nft-collection.fc --boc build/nft-collection.cell
npx func-js sources/nft-item.fc --boc build/nft-item.cell
npx func-js sources/nft-single.fc --boc build/nft-single.cell
npx func-js sources/sbt-single.fc --boc build/sbt-single.cell
npx func-js sources/upgradable-nft-collection.fc --boc build/upgradable-nft-collection.cell
npx func-js sources/upgradable-nft-item.fc --boc build/upgradable-nft-item.cell
npx func-js sources/upgradable-nft-single.fc --boc build/upgradable-nft-single.cell
