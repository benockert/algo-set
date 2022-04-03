import React, { useState, useEffect, useRef } from 'react';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Connect.css';

const reach = loadStdlib("ALGO")

reach.setWalletFallback(reach.walletFallback({
    providerEnv: 'TestNet', MyAlgoConnect
}));

function Board() {
    const account = useRef()
    const balance = useRef()

    const [accountBal, setAccountBal] = useState(0);
    const [accountAddress, setAccountAddress] = useState('');

    return (
        <div >

        </div>
    )
}

export default Board;