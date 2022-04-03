// Automatically generated with Reach 0.1.9 (d3fd55fe)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (d3fd55fe)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc1],
      5: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc1, ctc2, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Player1(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player1 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player1 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc2 = stdlib.T_Tuple([ctc1]);
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v265 = stdlib.protect(ctc0, interact.deadline, 'for Player1\'s interact field deadline');
  const v266 = stdlib.protect(ctc0, interact.wager, 'for Player1\'s interact field wager');
  const v267 = stdlib.protect(ctc1, interact.word, 'for Player1\'s interact field word');
  
  const txn1 = await (ctc.sendrecv({
    args: [v266, v265, v267],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:62:13:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc1],
    pay: [v266, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v272, v273, v274], secs: v276, time: v275, didSend: v51, from: v271 } = txn1;
      
      sim_r.txns.push({
        amt: v272,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v285 = stdlib.add(v275, v273);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v272, v273, v274], secs: v276, time: v275, didSend: v51, from: v271 } = txn1;
  ;
  const v285 = stdlib.add(v275, v273);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: ['time', v285],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v271, v272, v273, v274, v285],
      evt_cnt: 0,
      funcNum: 2,
      lct: v275,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v428, time: v427, didSend: v231, from: v426 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v272,
          kind: 'from',
          to: v271,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc1, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v428, time: v427, didSend: v231, from: v426 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:51:35:application',
      fs: ['at ./index.rsh:50:13:application call to [unknown function] (defined at: ./index.rsh:50:37:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:49:30:function exp)', 'at ./index.rsh:71:90:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Player1'
      });
    
    return;
    
    }
  else {
    const {data: [v290], secs: v292, time: v291, didSend: v61, from: v289 } = txn2;
    const v294 = stdlib.add(v272, v272);
    ;
    let v295 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
    let v296 = v291;
    let v303 = v294;
    
    while (await (async () => {
      const v311 = stdlib.eq(v295, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      
      return v311;})()) {
      const v318 = stdlib.add(v296, v273);
      const v322 = stdlib.protect(ctc1, await interact.getGuess(), {
        at: './index.rsh:83:62:application',
        fs: ['at ./index.rsh:82:21:application call to [unknown function] (defined at: ./index.rsh:82:25:function exp)'],
        msg: 'getGuess',
        who: 'Player1'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v271, v272, v273, v274, v289, v290, v303, v318, v322],
        evt_cnt: 1,
        funcNum: 4,
        lct: v296,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:85:17:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v324], secs: v326, time: v325, didSend: v83, from: v323 } = txn3;
          
          ;
          const v327 = stdlib.addressEq(v271, v323);
          ;
          const v334 = stdlib.add(v325, v273);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v318],
        tys: [ctc4, ctc0, ctc0, ctc1, ctc4, ctc1, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v271, v272, v273, v274, v289, v290, v303, v318],
          evt_cnt: 0,
          funcNum: 5,
          lct: v296,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v380, time: v379, didSend: v170, from: v378 } = txn4;
            
            ;
            const v381 = stdlib.addressEq(v271, v378);
            const v382 = stdlib.addressEq(v289, v378);
            const v383 = v381 ? true : v382;
            ;
            sim_r.txns.push({
              amt: v303,
              kind: 'from',
              to: v289,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc1, ctc4, ctc1, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v380, time: v379, didSend: v170, from: v378 } = txn4;
        ;
        const v381 = stdlib.addressEq(v271, v378);
        const v382 = stdlib.addressEq(v289, v378);
        const v383 = v381 ? true : v382;
        stdlib.assert(v383, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:85:84:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Player1'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:51:35:application',
          fs: ['at ./index.rsh:50:13:application call to [unknown function] (defined at: ./index.rsh:50:37:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:49:30:function exp)', 'at ./index.rsh:85:84:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Player1'
          });
        
        return;
        
        }
      else {
        const {data: [v324], secs: v326, time: v325, didSend: v83, from: v323 } = txn3;
        ;
        const v327 = stdlib.addressEq(v271, v323);
        stdlib.assert(v327, {
          at: './index.rsh:85:17:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Player1'
          });
        const v334 = stdlib.add(v325, v273);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc1],
          timeoutAt: ['time', v334],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v271, v272, v273, v274, v289, v290, v303, v324, v334],
            evt_cnt: 0,
            funcNum: 7,
            lct: v325,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v362, time: v361, didSend: v136, from: v360 } = txn5;
              
              ;
              const v363 = stdlib.addressEq(v271, v360);
              const v364 = stdlib.addressEq(v289, v360);
              const v365 = v363 ? true : v364;
              ;
              sim_r.txns.push({
                amt: v303,
                kind: 'from',
                to: v271,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc1, ctc4, ctc1, ctc0, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v362, time: v361, didSend: v136, from: v360 } = txn5;
          ;
          const v363 = stdlib.addressEq(v271, v360);
          const v364 = stdlib.addressEq(v289, v360);
          const v365 = v363 ? true : v364;
          stdlib.assert(v365, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:92:84:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Player1'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:51:35:application',
            fs: ['at ./index.rsh:50:13:application call to [unknown function] (defined at: ./index.rsh:50:37:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:49:30:function exp)', 'at ./index.rsh:92:84:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Player1'
            });
          
          return;
          
          }
        else {
          const {data: [v340], secs: v342, time: v341, didSend: v93, from: v339 } = txn4;
          ;
          const v343 = stdlib.addressEq(v289, v339);
          stdlib.assert(v343, {
            at: './index.rsh:92:17:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Player1'
            });
          const v344 = stdlib.digest(ctc2, [v324]);
          const v345 = stdlib.digest(ctc2, [v290]);
          const v346 = stdlib.digestEq(v344, v345);
          const v347 = stdlib.digest(ctc2, [v340]);
          const v348 = stdlib.digest(ctc2, [v274]);
          const v349 = stdlib.digestEq(v347, v348);
          const v351 = v349 ? false : true;
          const v352 = v346 ? false : v351;
          const v354 = v346 ? v351 : false;
          const v356 = v346 ? false : v349;
          const v357 = v356 ? stdlib.checkedBigNumberify('./index.rsh:14:184:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:14:188:decimal', stdlib.UInt_max, 3);
          const v358 = v354 ? stdlib.checkedBigNumberify('./index.rsh:14:144:decimal', stdlib.UInt_max, 1) : v357;
          const v359 = v352 ? stdlib.checkedBigNumberify('./index.rsh:14:104:decimal', stdlib.UInt_max, 0) : v358;
          const cv295 = v359;
          const cv296 = v341;
          const cv303 = v303;
          
          v295 = cv295;
          v296 = cv296;
          v303 = cv303;
          
          continue;}
        
        }
      
      }
    const v396 = stdlib.eq(v295, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v397 = stdlib.eq(v295, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v403 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
    const v404 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
    const v405 = v397 ? v403 : v404;
    const v406 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
    const v407 = v396 ? v406 : v405;
    const v408 = v407[stdlib.checkedBigNumberify('./index.rsh:107:11:array', stdlib.UInt_max, 0)];
    const v409 = v407[stdlib.checkedBigNumberify('./index.rsh:107:11:array', stdlib.UInt_max, 1)];
    const v410 = stdlib.mul(v408, v272);
    ;
    const v415 = stdlib.mul(v409, v272);
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v295), {
      at: './index.rsh:115:28:application',
      fs: ['at ./index.rsh:114:9:application call to [unknown function] (defined at: ./index.rsh:114:33:function exp)'],
      msg: 'seeOutcome',
      who: 'Player1'
      });
    
    return;
    }
  
  
  
  };
export async function Player2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const v268 = stdlib.protect(ctc0, interact.word, 'for Player2\'s interact field word');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc1, ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v272, v273, v274], secs: v276, time: v275, didSend: v51, from: v271 } = txn1;
  ;
  const v285 = stdlib.add(v275, v273);
  stdlib.protect(ctc2, await interact.acceptWager(v272), {
    at: './index.rsh:67:29:application',
    fs: ['at ./index.rsh:66:17:application call to [unknown function] (defined at: ./index.rsh:66:21:function exp)'],
    msg: 'acceptWager',
    who: 'Player2'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v271, v272, v273, v274, v285, v268],
    evt_cnt: 1,
    funcNum: 1,
    lct: v275,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v272, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v290], secs: v292, time: v291, didSend: v61, from: v289 } = txn2;
      
      const v294 = stdlib.add(v272, v272);
      sim_r.txns.push({
        amt: v272,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v295 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
      const v296 = v291;
      const v303 = v294;
      
      if (await (async () => {
        const v311 = stdlib.eq(v295, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        
        return v311;})()) {
        const v318 = stdlib.add(v296, v273);
        sim_r.isHalt = false;
        }
      else {
        const v396 = stdlib.eq(v295, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        const v397 = stdlib.eq(v295, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
        const v403 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
        const v404 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
        const v405 = v397 ? v403 : v404;
        const v406 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
        const v407 = v396 ? v406 : v405;
        const v408 = v407[stdlib.checkedBigNumberify('./index.rsh:107:11:array', stdlib.UInt_max, 0)];
        const v409 = v407[stdlib.checkedBigNumberify('./index.rsh:107:11:array', stdlib.UInt_max, 1)];
        const v410 = stdlib.mul(v408, v272);
        sim_r.txns.push({
          amt: v410,
          kind: 'from',
          to: v271,
          tok: undefined /* Nothing */
          });
        const v415 = stdlib.mul(v409, v272);
        sim_r.txns.push({
          amt: v415,
          kind: 'from',
          to: v289,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v285],
    tys: [ctc4, ctc1, ctc1, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v271, v272, v273, v274, v285],
      evt_cnt: 0,
      funcNum: 2,
      lct: v275,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v428, time: v427, didSend: v231, from: v426 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v272,
          kind: 'from',
          to: v271,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc1, ctc1, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v428, time: v427, didSend: v231, from: v426 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:51:35:application',
      fs: ['at ./index.rsh:50:13:application call to [unknown function] (defined at: ./index.rsh:50:37:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:49:30:function exp)', 'at ./index.rsh:71:90:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Player2'
      });
    
    return;
    
    }
  else {
    const {data: [v290], secs: v292, time: v291, didSend: v61, from: v289 } = txn2;
    const v294 = stdlib.add(v272, v272);
    ;
    let v295 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
    let v296 = v291;
    let v303 = v294;
    
    while (await (async () => {
      const v311 = stdlib.eq(v295, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      
      return v311;})()) {
      const v318 = stdlib.add(v296, v273);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc0],
        timeoutAt: ['time', v318],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v271, v272, v273, v274, v289, v290, v303, v318],
          evt_cnt: 0,
          funcNum: 5,
          lct: v296,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v380, time: v379, didSend: v170, from: v378 } = txn4;
            
            ;
            const v381 = stdlib.addressEq(v271, v378);
            const v382 = stdlib.addressEq(v289, v378);
            const v383 = v381 ? true : v382;
            ;
            sim_r.txns.push({
              amt: v303,
              kind: 'from',
              to: v289,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc1, ctc1, ctc0, ctc4, ctc0, ctc1, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v380, time: v379, didSend: v170, from: v378 } = txn4;
        ;
        const v381 = stdlib.addressEq(v271, v378);
        const v382 = stdlib.addressEq(v289, v378);
        const v383 = v381 ? true : v382;
        stdlib.assert(v383, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:85:84:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Player2'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:51:35:application',
          fs: ['at ./index.rsh:50:13:application call to [unknown function] (defined at: ./index.rsh:50:37:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:49:30:function exp)', 'at ./index.rsh:85:84:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Player2'
          });
        
        return;
        
        }
      else {
        const {data: [v324], secs: v326, time: v325, didSend: v83, from: v323 } = txn3;
        ;
        const v327 = stdlib.addressEq(v271, v323);
        stdlib.assert(v327, {
          at: './index.rsh:85:17:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Player2'
          });
        const v334 = stdlib.add(v325, v273);
        const v338 = stdlib.protect(ctc0, await interact.getGuess(), {
          at: './index.rsh:90:62:application',
          fs: ['at ./index.rsh:89:21:application call to [unknown function] (defined at: ./index.rsh:89:25:function exp)'],
          msg: 'getGuess',
          who: 'Player2'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v271, v272, v273, v274, v289, v290, v303, v324, v334, v338],
          evt_cnt: 1,
          funcNum: 6,
          lct: v325,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:92:17:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v340], secs: v342, time: v341, didSend: v93, from: v339 } = txn4;
            
            ;
            const v343 = stdlib.addressEq(v289, v339);
            ;
            const v344 = stdlib.digest(ctc3, [v324]);
            const v345 = stdlib.digest(ctc3, [v290]);
            const v346 = stdlib.digestEq(v344, v345);
            const v347 = stdlib.digest(ctc3, [v340]);
            const v348 = stdlib.digest(ctc3, [v274]);
            const v349 = stdlib.digestEq(v347, v348);
            const v351 = v349 ? false : true;
            const v352 = v346 ? false : v351;
            const v354 = v346 ? v351 : false;
            const v356 = v346 ? false : v349;
            const v357 = v356 ? stdlib.checkedBigNumberify('./index.rsh:14:184:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:14:188:decimal', stdlib.UInt_max, 3);
            const v358 = v354 ? stdlib.checkedBigNumberify('./index.rsh:14:144:decimal', stdlib.UInt_max, 1) : v357;
            const v359 = v352 ? stdlib.checkedBigNumberify('./index.rsh:14:104:decimal', stdlib.UInt_max, 0) : v358;
            const cv295 = v359;
            const cv296 = v341;
            const cv303 = v303;
            
            await (async () => {
              const v295 = cv295;
              const v296 = cv296;
              const v303 = cv303;
              
              if (await (async () => {
                const v311 = stdlib.eq(v295, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
                
                return v311;})()) {
                const v318 = stdlib.add(v296, v273);
                sim_r.isHalt = false;
                }
              else {
                const v396 = stdlib.eq(v295, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v397 = stdlib.eq(v295, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                const v403 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
                const v404 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
                const v405 = v397 ? v403 : v404;
                const v406 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
                const v407 = v396 ? v406 : v405;
                const v408 = v407[stdlib.checkedBigNumberify('./index.rsh:107:11:array', stdlib.UInt_max, 0)];
                const v409 = v407[stdlib.checkedBigNumberify('./index.rsh:107:11:array', stdlib.UInt_max, 1)];
                const v410 = stdlib.mul(v408, v272);
                sim_r.txns.push({
                  amt: v410,
                  kind: 'from',
                  to: v271,
                  tok: undefined /* Nothing */
                  });
                const v415 = stdlib.mul(v409, v272);
                sim_r.txns.push({
                  amt: v415,
                  kind: 'from',
                  to: v289,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v334],
          tys: [ctc4, ctc1, ctc1, ctc0, ctc4, ctc0, ctc1, ctc0, ctc1, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v271, v272, v273, v274, v289, v290, v303, v324, v334],
            evt_cnt: 0,
            funcNum: 7,
            lct: v325,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v362, time: v361, didSend: v136, from: v360 } = txn5;
              
              ;
              const v363 = stdlib.addressEq(v271, v360);
              const v364 = stdlib.addressEq(v289, v360);
              const v365 = v363 ? true : v364;
              ;
              sim_r.txns.push({
                amt: v303,
                kind: 'from',
                to: v271,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc1, ctc1, ctc0, ctc4, ctc0, ctc1, ctc0, ctc1],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v362, time: v361, didSend: v136, from: v360 } = txn5;
          ;
          const v363 = stdlib.addressEq(v271, v360);
          const v364 = stdlib.addressEq(v289, v360);
          const v365 = v363 ? true : v364;
          stdlib.assert(v365, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:92:84:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Player2'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:51:35:application',
            fs: ['at ./index.rsh:50:13:application call to [unknown function] (defined at: ./index.rsh:50:37:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:49:30:function exp)', 'at ./index.rsh:92:84:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Player2'
            });
          
          return;
          
          }
        else {
          const {data: [v340], secs: v342, time: v341, didSend: v93, from: v339 } = txn4;
          ;
          const v343 = stdlib.addressEq(v289, v339);
          stdlib.assert(v343, {
            at: './index.rsh:92:17:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Player2'
            });
          const v344 = stdlib.digest(ctc3, [v324]);
          const v345 = stdlib.digest(ctc3, [v290]);
          const v346 = stdlib.digestEq(v344, v345);
          const v347 = stdlib.digest(ctc3, [v340]);
          const v348 = stdlib.digest(ctc3, [v274]);
          const v349 = stdlib.digestEq(v347, v348);
          const v351 = v349 ? false : true;
          const v352 = v346 ? false : v351;
          const v354 = v346 ? v351 : false;
          const v356 = v346 ? false : v349;
          const v357 = v356 ? stdlib.checkedBigNumberify('./index.rsh:14:184:decimal', stdlib.UInt_max, 2) : stdlib.checkedBigNumberify('./index.rsh:14:188:decimal', stdlib.UInt_max, 3);
          const v358 = v354 ? stdlib.checkedBigNumberify('./index.rsh:14:144:decimal', stdlib.UInt_max, 1) : v357;
          const v359 = v352 ? stdlib.checkedBigNumberify('./index.rsh:14:104:decimal', stdlib.UInt_max, 0) : v358;
          const cv295 = v359;
          const cv296 = v341;
          const cv303 = v303;
          
          v295 = cv295;
          v296 = cv296;
          v303 = cv303;
          
          continue;}
        
        }
      
      }
    const v396 = stdlib.eq(v295, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v397 = stdlib.eq(v295, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v403 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
    const v404 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
    const v405 = v397 ? v403 : v404;
    const v406 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
    const v407 = v396 ? v406 : v405;
    const v408 = v407[stdlib.checkedBigNumberify('./index.rsh:107:11:array', stdlib.UInt_max, 0)];
    const v409 = v407[stdlib.checkedBigNumberify('./index.rsh:107:11:array', stdlib.UInt_max, 1)];
    const v410 = stdlib.mul(v408, v272);
    ;
    const v415 = stdlib.mul(v409, v272);
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v295), {
      at: './index.rsh:115:28:application',
      fs: ['at ./index.rsh:114:9:application call to [unknown function] (defined at: ./index.rsh:114:33:function exp)'],
      msg: 'seeOutcome',
      who: 'Player2'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAMAAEHBVogAggoZ2I1JgIBAAAiNQAxGEEEKylkSSJbNQEhB1s1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQQMQAHeSYEGDEAA70kkDEAAUiQSRCQ0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gATiG7OpsDIGNAMhCVsPRDT/MQASNANXNSAxABIRRLEisgE0AyEEW7III7IQNP+yB7NCA05IJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXMAU1/1c1IDX+V1UFNf1JNQU1/IAE6wYlVzT8ULAyBjQDIQlbDEQ0/jEAEkQ0A1diBQE0/QESNfs0/AE0/wESSTX6FDX5NANXACA0AyEFWzQDIQhbNP80/jT9gQMhBjT7FDT6EE0jNPs0+RBNIjT7FDT5EE0yBjQDIQRbQgH5SSUMQABQSCU0ARJENARJIhJMNAISEUQoZEk1A1c1IDX/gATMmZJcsDIGNAMhClsPRDQDVwAgMQASNP8xABIRRLEisgE0AyEEW7III7IQNP+yB7NCAmFIJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSVcAIDX/IQVbNf4hCFs1/VcwBTX8VzUgNftXVQU1+iEEWzX5STUFNfiABBaYTx00+FCwMgY0AyEKWwxENP8xABJEMgY0/Qg19zT/NP4WUDT9FlA0/FA0+1A0+lA0+RZQNPhQNPcWUChLAVcAb2dIJDUBMgY1AkIB6kkjDEAAn0khBgxAAEEhBhJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyELWw9EsSKyATQDIQVbsggjshA0A1cAILIHs0IBgUgjNAESRDQESSISTDQCEhFEKGRJNQMhBVs1/0k1BTX+gASsmjeNNP5QsDIGNAMhC1sMRDT/iAGhNANXACA0/zQDIQhbNANXMAUxADT+IjIGNP9JCEIAbEgiNAESRDQESSISTDQCEhFESTUFSUkiWzX/IQdbNf5XEAU1/YAEkRtFGDT/FlA0/hZQNP1QsIGgjQaIAUU0/4gBQDIGNP4INfwxADT/FlA0/hZQNP1QNPwWUChLAVcAPWdIIzUBMgY1AkIA2TX/Nf41/TX8Nfs1+jX5Nfg19zT9IhJBADQ0/jT5CDX2NPc0+BZQNPkWUDT6UDT7UDT8UDT/FlA09hZQKEsBVwBqZ0glNQEyBjUCQgCMgBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNP0hBhJNgBAAAAAAAAAAAgAAAAAAAAAANP0jEk019rEisgE09iJbNPgLsggjshA097IHs7EisgE09iEHWzT4C7III7IQNPuyB7NCAAAxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 111,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v272",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v273",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes5",
                    "name": "elem0",
                    "type": "bytes5"
                  }
                ],
                "internalType": "struct T0",
                "name": "v274",
                "type": "tuple"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v272",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v273",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes5",
                    "name": "elem0",
                    "type": "bytes5"
                  }
                ],
                "internalType": "struct T0",
                "name": "v274",
                "type": "tuple"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes5",
                    "name": "elem0",
                    "type": "bytes5"
                  }
                ],
                "internalType": "struct T0",
                "name": "v290",
                "type": "tuple"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes5",
                    "name": "elem0",
                    "type": "bytes5"
                  }
                ],
                "internalType": "struct T0",
                "name": "v324",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes5",
                    "name": "elem0",
                    "type": "bytes5"
                  }
                ],
                "internalType": "struct T0",
                "name": "v340",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes5",
                    "name": "elem0",
                    "type": "bytes5"
                  }
                ],
                "internalType": "struct T0",
                "name": "v290",
                "type": "tuple"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes5",
                    "name": "elem0",
                    "type": "bytes5"
                  }
                ],
                "internalType": "struct T0",
                "name": "v324",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes5",
                    "name": "elem0",
                    "type": "bytes5"
                  }
                ],
                "internalType": "struct T0",
                "name": "v340",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001cdf38038062001cdf83398101604081905262000026916200030b565b60008080554360035560408051602081019091529081526040805183518152602080850151805182840152908101518284015290910151516001600160d81b03191660608201527feab2a42d28e1d957c5b7ae9f3f974868130877a5d38a0f8aa7d3fa4bb81a8a889060800160405180910390a1602082015151620000af9034146007620001a2565b6020808301510151620000c39043620003ae565b8152620001036040805160a08101825260008082526020808301829052828401829052835190810190935282529060608201908152602001600081525090565b338082526020848101805151828501908152815183015160408087019182529251830151606080880191825288516080808a019182526001600081905543905586518089019990995294518887015292519087015251516001600160d81b031916918501919091525160a0808501919091528151808503909101815260c09093019052815162000198926002920190620001cc565b5050505062000412565b81620001c85760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001da90620003d5565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b600081830360808112156200031f57600080fd5b6200032962000272565b835181526060601f19830112156200034057600080fd5b6200034a620002a9565b6020858101518252604086015182820152605f19840112156200036c57600080fd5b62000376620002da565b60608601519093506001600160d81b0319811681146200039557600080fd5b8352604081019290925260208101919091529392505050565b60008219821115620003d057634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620003ea57607f821691505b602082108114156200040c57634e487b7160e01b600052602260045260246000fd5b50919050565b6118bd80620004226000396000f3fe6080604052600436106100845760003560e01c80638e314769116100565780638e314769146100ec578063ab53f2c6146100ff578063bf2c5b2414610122578063c31f10d114610135578063e20210e71461014857005b80631e93b0f11461008d5780632c3e8bc7146100b15780637eea518c146100c457806383230757146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf36600461134d565b61015b565b61008b6100d236600461134d565b610480565b3480156100e357600080fd5b5060015461009e565b61008b6100fa36600461134d565b6105fc565b34801561010b57600080fd5b50610114610795565b6040516100a8929190611370565b61008b61013036600461134d565b610832565b61008b61014336600461134d565b6109c8565b61008b61015636600461134d565b610be7565b61016b600760005414601c610da1565b6101858135158061017e57506001548235145b601d610da1565b600080805560028054610197906113cd565b80601f01602080910402602001604051908101604052809291908181526020018280546101c3906113cd565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b505050505080602001905181019061022891906114ca565b604080516060810182526000808252602082018190529181019190915290915061025a8261010001514310601e610da1565b7f873b1f35cdba12d7e6ee9d552a46a89f36723f9a18af357ad5c3e56a44586947836040516102899190611590565b60405180910390a161029d3415601a610da1565b60808201516102b8906001600160a01b03163314601b610da1565b60a08201516040805191516001600160d81b03191660208301520160408051808303601f19018152828252805160209182012060e0860151516001600160d81b03191691840191909152910160408051601f1981840301815291815281516020928301209290921483526060840151915161034392910190516001600160d81b031916815260200190565b60408051601f198184030181529082905280516020918201209161036b9186810191016115a4565b60408051601f1981840301815291905280516020918201209190911490820181905261039857600161039b565b60005b151560408201526103aa611028565b825181516001600160a01b0391821690526020808501518351909101526040808501518351909101526060808501518351909101526080808501518351921691015260a080840151825190910152815161040857816040015161040b565b60005b61045257815161041c576000610422565b81604001515b61044b578151610436578160200151610439565b60005b610444576003610455565b6002610455565b6001610455565b60005b602080830180519290925281514391015260c084015190516040015261047a81610dc6565b50505050565b610490600160005414600d610da1565b6104aa813515806104a357506001548235145b600e610da1565b6000808055600280546104bc906113cd565b80601f01602080910402602001604051908101604052809291908181526020018280546104e8906113cd565b80156105355780601f1061050a57610100808354040283529160200191610535565b820191906000526020600020905b81548152906001019060200180831161051857829003601f168201915b505050505080602001905181019061054d91906115c5565b90506105618160800151431015600f610da1565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e1826040516105909190611650565b60405180910390a16105a43415600c610da1565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156105e1573d6000803e3d6000fd5b50600080805560018190556105f890600290611069565b5050565b61060c6005600054146017610da1565b6106268135158061061f57506001548235145b6018610da1565b600080805560028054610638906113cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610664906113cd565b80156106b15780601f10610686576101008083540402835291602001916106b1565b820191906000526020600020905b81548152906001019060200180831161069457829003601f168201915b50505050508060200190518101906106c9919061167a565b90506106dd8160e001514310156019610da1565b7f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de88260405161070c9190611650565b60405180910390a161072034156015610da1565b8051610754906001600160a01b0316331461074a5760808201516001600160a01b0316331461074d565b60015b6016610da1565b80608001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f193505050501580156105e1573d6000803e3d6000fd5b6000606060005460028080546107aa906113cd565b80601f01602080910402602001604051908101604052809291908181526020018280546107d6906113cd565b80156108235780601f106107f857610100808354040283529160200191610823565b820191906000526020600020905b81548152906001019060200180831161080657829003601f168201915b50505050509050915091509091565b6108426007600054146021610da1565b61085c8135158061085557506001548235145b6022610da1565b60008080556002805461086e906113cd565b80601f016020809104026020016040519081016040528092919081815260200182805461089a906113cd565b80156108e75780601f106108bc576101008083540402835291602001916108e7565b820191906000526020600020905b8154815290600101906020018083116108ca57829003601f168201915b50505050508060200190518101906108ff91906114ca565b90506109148161010001514310156023610da1565b7fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e0826040516109439190611650565b60405180910390a16109573415601f610da1565b805161098b906001600160a01b031633146109815760808201516001600160a01b03163314610984565b60015b6020610da1565b805160c08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156105e1573d6000803e3d6000fd5b6109d86005600054146012610da1565b6109f2813515806109eb57506001548235145b6013610da1565b600080805560028054610a04906113cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610a30906113cd565b8015610a7d5780601f10610a5257610100808354040283529160200191610a7d565b820191906000526020600020905b815481529060010190602001808311610a6057829003601f168201915b5050505050806020019051810190610a95919061167a565b9050610aad6040518060200160405280600081525090565b610abe8260e0015143106014610da1565b7fb25bf060159eda8ac3b729c83dd4d8f4a587789e5805c69afaf759822b2fafb583604051610aed9190611590565b60405180910390a1610b0134156010610da1565b8151610b19906001600160a01b031633146011610da1565b6040820151610b28904361174c565b8152610b326110a6565b82516001600160a01b0390811682526020808501518184015260408086015190840152606080860151908401526080808601519092169183019190915260a0808501519083015260c08085015190830152610b9590368690038601908601611764565b60e08201528151610100820152600760005543600155604051610bbc9082906020016117be565b60405160208183030381529060405260029080519060200190610be0929190611134565b5050505050565b610bf76001600054146009610da1565b610c1181351580610c0a57506001548235145b600a610da1565b600080805560028054610c23906113cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610c4f906113cd565b8015610c9c5780601f10610c7157610100808354040283529160200191610c9c565b820191906000526020600020905b815481529060010190602001808311610c7f57829003601f168201915b5050505050806020019051810190610cb491906115c5565b9050610cc781608001514310600b610da1565b7f27532daa7aa96b4e097ba879464e6f55efb6c72b81081f1d8c0b2fbada2d3f0b82604051610cf69190611590565b60405180910390a1610d0f816020015134146008610da1565b610d17611028565b815181516001600160a01b0390911690526020808301518251820152604080840151835190910152606080840151835190910152815133608090910152610d6690368590038501908501611764565b815160a001526020808201805160009052514390820152820151610d8a908061174c565b602082015160400152610d9c81610dc6565b505050565b816105f85760405163100960cb60e01b81526004810182905260240160405180910390fd5b610dce6111b8565b602082015151610f0c578151604001516020808401510151610df0919061174c565b8152610dfa61124d565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190850152855160809081015190931692840192909252845160a090810151908401528085015182015160c0840152835160e08401526005600055436001559051610ee89183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152606084015164ffffffffff60d81b8082511660608601528260808701511660808601528060a0870151511660a086015250505060c083015160c083015260e083015160e083015292915050565b6040516020818303038152906040526002908051906020019061047a929190611134565b602080820180516000908190529051600290830181905260408401805160019081905290518401819052606085018051929092529051830191909152908301515114610f7357602082015151600214610f69578060400151610f79565b8060200151610f79565b80606001515b608082018190528251805160209091015191516001600160a01b03909116916108fc91610fa69190611868565b6040518115909202916000818181858888f19350505050158015610fce573d6000803e3d6000fd5b508160000151608001516001600160a01b03166108fc8360000151602001518360800151602001516110009190611868565b6040518115909202916000818181858888f193505050501580156105e1573d6000803e3d6000fd5b604051806040016040528061103b6112c1565b815260200161106460405180606001604052806000815260200160008152602001600081525090565b905290565b508054611075906113cd565b6000825580601f10611085575050565b601f0160209004906000526020600020908101906110a39190611320565b50565b60405180610120016040528060006001600160a01b0316815260200160008152602001600081526020016110e560408051602081019091526000815290565b81526000602082015260400161110660408051602081019091526000815290565b81526020016000815260200161112760408051602081019091526000815290565b8152602001600081525090565b828054611140906113cd565b90600052602060002090601f01602090048101928261116257600085556111a8565b82601f1061117b57805160ff19168380011785556111a8565b828001600101855582156111a8579182015b828111156111a857825182559160200191906001019061118d565b506111b4929150611320565b5090565b6040518060a00160405280600081526020016111e7604051806040016040528060008152602001600081525090565b8152602001611209604051806040016040528060008152602001600081525090565b815260200161122b604051806040016040528060008152602001600081525090565b8152602001611064604051806040016040528060008152602001600081525090565b60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200161128c60408051602081019091526000815290565b8152600060208201526040016112ad60408051602081019091526000815290565b815260200160008152602001600081525090565b6040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016112ff60408051602081019091526000815290565b81526000602082015260400161106460408051602081019091526000815290565b5b808211156111b45760008155600101611321565b60006040828403121561134757600080fd5b50919050565b60006040828403121561135f57600080fd5b6113698383611335565b9392505050565b82815260006020604081840152835180604085015260005b818110156113a457858101830151858201606001528201611388565b818111156113b6576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806113e157607f821691505b6020821081141561134757634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff8111828210171561143457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461145157600080fd5b919050565b6001600160d81b0319811681146110a357600080fd5b60006020828403121561147e57600080fd5b6040516020810181811067ffffffffffffffff821117156114af57634e487b7160e01b600052604160045260246000fd5b806040525080915082516114c281611456565b905292915050565b600061012082840312156114dd57600080fd5b6114e5611402565b6114ee8361143a565b81526020830151602082015260408301516040820152611511846060850161146c565b60608201526115226080840161143a565b60808201526115348460a0850161146c565b60a082015260c083015160c08201526115508460e0850161146c565b60e0820152610100928301519281019290925250919050565b80358252602081013561157b81611456565b64ffffffffff60d81b81166020840152505050565b6040810161159e8284611569565b92915050565b6020810182356115b381611456565b6001600160d81b031916909152919050565b600060a082840312156115d757600080fd5b60405160a0810181811067ffffffffffffffff8211171561160857634e487b7160e01b600052604160045260246000fd5b6040526116148361143a565b81526020830151602082015260408301516040820152611637846060850161146c565b6060820152608083015160808201528091505092915050565b8135815260408101602083013580151580821461166c57600080fd5b806020850152505092915050565b600061010080838503121561168e57600080fd5b6040519081019067ffffffffffffffff821181831017156116bf57634e487b7160e01b600052604160045260246000fd5b816040526116cc8461143a565b815260208401516020820152604084015160408201526116ef856060860161146c565b60608201526117006080850161143a565b60808201526117128560a0860161146c565b60a082015260c084015160c082015260e084015160e0820152809250505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561175f5761175f611736565b500190565b60006020828403121561177657600080fd5b6040516020810181811067ffffffffffffffff821117156117a757634e487b7160e01b600052604160045260246000fd5b60405282356117b581611456565b81529392505050565b81516001600160a01b031681526020808301519082015260408083015190820152606080830151516001600160d81b03191690820152608080830151610120830191611814908401826001600160a01b03169052565b5060a083015161183160a0840182516001600160d81b0319169052565b5060c083015160c083015260e083015161185860e0840182516001600160d81b0319169052565b5061010092830151919092015290565b600081600019048311821515161561188257611882611736565b50029056fea264697066735822122077182ec954f909f4c6390f527dde190d5678782c83b5e817865fc8047d6e1a1964736f6c634300080c0033`,
  BytecodeLen: 7391,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:63:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:71:90:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:112:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:79:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:85:84:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:86:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:92:84:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Player1": Player1,
  "Player2": Player2
  };
export const _APIs = {
  };
