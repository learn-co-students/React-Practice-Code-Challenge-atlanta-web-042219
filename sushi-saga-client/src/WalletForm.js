import React from 'react'

const WalletForm = (props) => {
	return (
		<form id="WalletForm" onSubmit={(e)=>{e.preventDefault(); props.addFunds(e.target.funds.value);e.target.reset()}}>
			<h2>Wallet: ${props.wallet}</h2>
			Add funds to your wallet<br/>
			<input required name="funds" type="number" />
			<input type="submit" value="Add" />
		</form>
	)
}

export default WalletForm