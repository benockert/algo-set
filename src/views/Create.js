import React, { useState, useEffect, useRef } from 'react';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Create.css';

const reach = loadStdlib("ALGO")

reach.setWalletFallback(reach.walletFallback({
    providerEnv: 'TestNet', MyAlgoConnect
}));

function Create() {
    const account = useRef()
    const balance = useRef()

    const [accountBal, setAccountBal] = useState(0);
    const [accountAddress, setAccountAddress] = useState('');

    const connectWallet = async () => {
        try {
            await getAccount()
            await getWalletBalance()
        } catch (err) {
            console.log(err)
        }
    }

    const getAccount = async () => {
        try {
            account.current = await reach.getDefaultAccount();
            setAccountAddress(account.current.networkAccount.addr);
            console.log("Account: " + account.current.networkAccount.addr);
        } catch (err) {
            console.log(err);
        }
    }

    const getWalletBalance = async () => {
        try {
            const rawBalance = await reach.balanceOf(account.current.networkAccount.addr);
            balance.current = reach.formatCurrency(rawBalance, 4);
            setAccountBal(balance.current);
            console.log("Balance: " + balance.current);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="Create">
            <h2>Create an Algo Set Index</h2>
            <Button className="link-wallet-button" onClick={() => connectWallet()}>Link Wallet</Button>
        </div>
    )
}

export default Create;