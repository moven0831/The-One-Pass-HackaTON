compileSingle:
	npx func-js sources/$1.fc --boc build/$1.cell

compileAll:
	find build/ -name "*.cell" -type f | xargs rm -f
	# find sources/ -name "*.fc" -type f | xargs -I % sh -c 'npx func-js % --boc %.cell'

	npx func-js sources/redeemable-nft-collection.fc --boc build/redeemable-nft-collection.cell
	npx func-js sources/redeemable-nft-item.fc --boc build/redeemable-nft-item.cell
	npx func-js sources/redeemable-nft-single.fc --boc build/redeemable-nft-single.cell
	npx func-js sources/autoUpgrade-nft-collection.fc --boc build/autoUpgrade-nft-collection.cell
	npx func-js sources/autoUpgrade-nft-item.fc --boc build/autoUpgrade-nft-item.cell
	npx func-js sources/autoUpgrade-nft-single.fc --boc build/autoUpgrade-nft-single.cell
	npx func-js sources/iSBT-single.fc --boc build/iSBT-single.cell