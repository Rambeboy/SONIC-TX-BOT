function _0x42f7(){const _0x101b8a=['/testnet-v1/user/transactions/state/daily','getBalance','ring','delay','wallet','checkBalance','base64','sendSolToAddress','finalized','code','secretKey','getRewardInfo','Confirming\x20Transaction...','Check-in\x20Transaction\x20Executed\x20Successfully,\x20continue\x20with\x20post\x20check\x20in\x20process','10383740JZOpJK','1471419QJKUgb','address','token','dailyTx','doRawTx','Sending\x20','connect','sendRawTransaction','fetch','draw','Confirming\x20Transaction,\x20Estimated\x20take\x2030\x20Seconds..','length','data','Transaction\x20not\x20confirmed\x20and\x20max\x20retry\x20reached','/testnet-v1/user/rewards/mystery-box/build-tx','Connecting\x20to\x20Sonic\x20Odyssey','message','Execute\x20post\x20check\x20in\x20process','total_transactions','connectWallet','2128398TzgigZ','Claiming\x20Tx\x20Milestone\x20Stage\x20','Tx\x20Url:\x20https://explorer.sonic.game/tx/','/user/rewards/mystery-box/open','Build\x20Tx\x20for\x20Claiming\x20Mystery\x20BOX','7bgEmqX','Opening\x20Mystery\x20Box','Try\x20to\x20Check-in','sign','Checked\x20in\x20Successfully','toBase58','openMysteryBox','/testnet-v1/user/transactions/milestone/claim/','destAddress','balance','/testnet-v1/user/check-in/transaction','currentError','error','8514822aNmpMg','publicKey','serialize','then','transfer','encode','from','16veVhzD','add','info','doTx','Transaction\x20Not\x20Confirmed\x20after\x2030\x20Second,\x20Retrying...','/testnet-v1/user/check-in','confirmTx','4hYnTgK','hash','Getting\x20Daily\x20Tx\x20Info','catch','omit','Successfully\x20Get\x20Daily\x20Tx\x20Information','Successfully\x20open\x20mystery\x20box\x20got\x20','stringify','postCheckIn','Getting\x20Reward\x20Information','connection','reward','amount','5203917kniOGW','claimTxMilestone','2526565wFInDL','3640422ExVDLL','Transaction\x20Confirmed','\x20to\x20','GET','Transaction\x20failed:\x20','checkIn','fromSecretKey','toString','Connected\x20to\x20Sonic\x20Odyssey','Claimed\x20Successfully','ring_monitor','POST','/testnet-v1/auth/sonic/authorize','confirmed','https://api.testnet.sonic.game','confirmTransaction','toBytes'];_0x42f7=function(){return _0x101b8a;};return _0x42f7();}const _0x2d7f44=_0x58a9;function _0x58a9(_0xa4f009,_0x2a8391){const _0x42f702=_0x42f7();return _0x58a9=function(_0x58a9b4,_0x4b0d2e){_0x58a9b4=_0x58a9b4-0x17e;let _0x2cfe52=_0x42f702[_0x58a9b4];return _0x2cfe52;},_0x58a9(_0xa4f009,_0x2a8391);}(function(_0x48e65c,_0xae1c7a){const _0xd8558c=_0x58a9,_0x765cd8=_0x48e65c();while(!![]){try{const _0x261307=parseInt(_0xd8558c(0x1a6))/0x1+-parseInt(_0xd8558c(0x1ba))/0x2+parseInt(_0xd8558c(0x186))/0x3*(parseInt(_0xd8558c(0x1da))/0x4)+parseInt(_0xd8558c(0x185))/0x5+parseInt(_0xd8558c(0x1cc))/0x6*(-parseInt(_0xd8558c(0x1bf))/0x7)+parseInt(_0xd8558c(0x1d3))/0x8*(parseInt(_0xd8558c(0x183))/0x9)+-parseInt(_0xd8558c(0x1a5))/0xa;if(_0x261307===_0xae1c7a)break;else _0x765cd8['push'](_0x765cd8['shift']());}catch(_0xecb00f){_0x765cd8['push'](_0x765cd8['shift']());}}}(_0x42f7,0xc965a));import{Connection,Keypair,PublicKey,LAMPORTS_PER_SOL,Transaction,SystemProgram,sendAndConfirmTransaction}from'@solana/web3.js';import{Helper}from'../utils/helper.js';import{Config}from'../config/config.js';import _0xeccbff from'tweetnacl';import{API}from'../api/api.js';import _0xb08d14 from'../utils/logger.js';export class Solana extends API{constructor(_0x54455e,_0x21f3d2){const _0x33daf9=_0x58a9,_0x4d33e9='https://odyssey-api-beta.sonic.game';super(_0x4d33e9,_0x21f3d2),this['pk']=_0x54455e,this[_0x33daf9(0x1af)]=0x0,this['lottery']=0x0,this[_0x33daf9(0x1ca)]=0x0,this[_0x33daf9(0x180)]=new Connection(_0x33daf9(0x194),_0x33daf9(0x193));}async[_0x2d7f44(0x1b9)](){const _0x132f4a=_0x2d7f44;try{const _0x411312=Helper['base58decoder'](this['pk']);this[_0x132f4a(0x19b)]=Keypair[_0x132f4a(0x18c)](_0x411312),this[_0x132f4a(0x1a7)]=new PublicKey(this['wallet'][_0x132f4a(0x1cd)]['toBase58']());}catch(_0x5b2e53){throw _0x5b2e53;}}async[_0x2d7f44(0x1ac)](){const _0xc8c0ad=_0x2d7f44;_0xb08d14['info'](_0xc8c0ad(0x1b5)),await this[_0xc8c0ad(0x1ae)]('/testnet-v1/auth/sonic/challenge?wallet='+this[_0xc8c0ad(0x1a7)],_0xc8c0ad(0x189),undefined,null,_0xc8c0ad(0x1de))[_0xc8c0ad(0x1cf)](async _0x1d7161=>{const _0x1fe490=_0xc8c0ad,_0x199789=_0x1d7161['data'],_0x9ad65e=new TextEncoder()[_0x1fe490(0x1d1)](_0x199789),_0x5020ca=_0xeccbff[_0x1fe490(0x1c2)]['detached'](_0x9ad65e,this[_0x1fe490(0x19b)][_0x1fe490(0x1a1)]),_0x2fb9f6=Buffer[_0x1fe490(0x1d2)](_0x5020ca)[_0x1fe490(0x18d)]('base64'),_0x57724e=Buffer[_0x1fe490(0x1d2)](this[_0x1fe490(0x19b)][_0x1fe490(0x1cd)][_0x1fe490(0x196)]())['toString'](_0x1fe490(0x19d)),_0x2e1efd={'address':this['address'][_0x1fe490(0x1c4)](),'address_encoded':_0x57724e,'signature':_0x2fb9f6};await this[_0x1fe490(0x1ae)](_0x1fe490(0x192),_0x1fe490(0x191),undefined,_0x2e1efd,_0x1fe490(0x1de))[_0x1fe490(0x1cf)](async _0x2b2713=>{const _0x47d419=_0x1fe490;if(_0x2b2713[_0x47d419(0x1a0)]==0x0)this[_0x47d419(0x1a8)]=_0x2b2713[_0x47d419(0x1b2)][_0x47d419(0x1a8)],_0xb08d14[_0x47d419(0x1d5)](_0x47d419(0x18e)),await Helper[_0x47d419(0x19a)](0x3e8,this['pk'],_0x47d419(0x18e),this);else throw new Error(_0x2b2713[_0x47d419(0x1b6)]);})[_0x1fe490(0x1dd)](_0xa1dbe7=>{throw _0xa1dbe7;});})[_0xc8c0ad(0x1dd)](_0xf8fbaf=>{throw _0xf8fbaf;});}async[_0x2d7f44(0x19c)](){const _0x3f6aab=_0x2d7f44;try{this[_0x3f6aab(0x1c8)]=await this[_0x3f6aab(0x180)][_0x3f6aab(0x198)](this[_0x3f6aab(0x1a7)])/LAMPORTS_PER_SOL;}catch(_0x238fd3){throw _0x238fd3;}}async[_0x2d7f44(0x1d6)](_0x453129){const _0x2190d6=_0x2d7f44;try{_0xb08d14[_0x2190d6(0x1d5)]('Execute\x20Transaction\x20'+JSON[_0x2190d6(0x1e1)](_0x453129));const _0x19619d=await sendAndConfirmTransaction(this[_0x2190d6(0x180)],_0x453129,[this['wallet']]);return _0xb08d14['info']('Tx\x20Url:\x20https://explorer.sonic.game/tx/'+_0x19619d),await Helper[_0x2190d6(0x19a)](0x3e8,this['pk'],'Tx\x20Url:\x20https://explorer.sonic.game/tx/'+_0x19619d,this),_0x19619d;}catch(_0x59c2f6){_0xb08d14[_0x2190d6(0x1cb)](_0x2190d6(0x18a)+_0x59c2f6[_0x2190d6(0x1b6)],_0x59c2f6);throw _0x59c2f6;}}async[_0x2d7f44(0x1aa)](_0x194a9f){const _0x433617=_0x2d7f44;try{_0xb08d14[_0x433617(0x1d5)]('Execute\x20Raw\x20Transaction\x20'+JSON[_0x433617(0x1e1)](_0x194a9f));const _0x8b95d5=_0x194a9f[_0x433617(0x1ce)](),_0x47609a=await this[_0x433617(0x180)][_0x433617(0x1ad)](_0x8b95d5);return await this[_0x433617(0x1d9)](_0x47609a),_0xb08d14[_0x433617(0x1d5)]('Tx\x20Url:\x20https://explorer.sonic.game/tx/'+_0x47609a),await Helper['delay'](0x3e8,this['pk'],_0x433617(0x1bc)+_0x47609a,this),_0x47609a;}catch(_0x4a84ca){_0xb08d14['error'](_0x433617(0x18a)+_0x4a84ca[_0x433617(0x1b6)],_0x4a84ca);throw _0x4a84ca;}}async['confirmTx'](_0x26177f){const _0x41affa=_0x2d7f44;try{_0xb08d14['info'](_0x41affa(0x1a3)),await Helper['delay'](0x7d0,this['pk'],_0x41affa(0x1b0),this),await this[_0x41affa(0x180)][_0x41affa(0x195)](_0x26177f,_0x41affa(0x19f)),_0xb08d14[_0x41affa(0x1d5)]('Transaction\x20Confirmed'),await Helper[_0x41affa(0x19a)](0x7d0,this['pk'],_0x41affa(0x187),this);}catch(_0x5d089c){_0xb08d14['error'](_0x41affa(0x18a)+_0x5d089c[_0x41affa(0x1b6)],_0x5d089c);if(this['currentError']<Config['maxRetry'])this[_0x41affa(0x1ca)]+=0x1,await Helper[_0x41affa(0x19a)](0x7d0,this['pk'],_0x41affa(0x1d7),this),await this['confirmTx'](_0x26177f);else{this['currentError']=0x0,await Helper['delay'](0x7d0,this['pk'],_0x41affa(0x1b3),this);throw Error(_0x41affa(0x1b3));}}}async[_0x2d7f44(0x19e)](){const _0x48037d=_0x2d7f44;try{const _0x44d974=Config[_0x48037d(0x1c7)][Helper['random'](0x0,Config[_0x48037d(0x1c7)][_0x48037d(0x1b1)]-0x1)]??this[_0x48037d(0x1a7)],_0x12e29d=Config['sendAmount'];_0xb08d14[_0x48037d(0x1d5)]('Sending\x20'+_0x12e29d+_0x48037d(0x188)+_0x44d974),await Helper[_0x48037d(0x19a)](0x3e8,this['pk'],_0x48037d(0x1ab)+_0x12e29d+_0x48037d(0x188)+_0x44d974,this);const _0x543dca=SystemProgram[_0x48037d(0x1d0)]({'fromPubkey':this[_0x48037d(0x1a7)],'toPubkey':_0x44d974,'lamports':_0x12e29d*LAMPORTS_PER_SOL}),_0x50f8f3=new Transaction()[_0x48037d(0x1d4)](_0x543dca);await this[_0x48037d(0x1d6)](_0x50f8f3)[_0x48037d(0x1cf)](async()=>{const _0xafaa65=_0x48037d;await this[_0xafaa65(0x19c)]();})[_0x48037d(0x1dd)](_0x28d75e=>{throw _0x28d75e;}),this[_0x48037d(0x1a9)][_0x48037d(0x1b8)]+=0x1;}catch(_0x30001d){throw _0x30001d;}}async[_0x2d7f44(0x18b)](){const _0x436fda=_0x2d7f44;_0xb08d14[_0x436fda(0x1d5)](_0x436fda(0x1c1)),await Helper[_0x436fda(0x19a)](0x3e8,this['pk'],_0x436fda(0x1c1),this),await this['fetch'](_0x436fda(0x1c9),'GET',this['token'],null)[_0x436fda(0x1cf)](async _0x3262d3=>{const _0x300a53=_0x436fda;if(_0x3262d3['code']==0x0){const _0x5ddc06=Buffer[_0x300a53(0x1d2)](_0x3262d3[_0x300a53(0x1b2)]['hash'],_0x300a53(0x19d)),_0x587be4=Transaction[_0x300a53(0x1d2)](_0x5ddc06),_0x50ecb4=await this['doTx'](_0x587be4);_0xb08d14['info'](_0x300a53(0x1a4)),await Helper[_0x300a53(0x19a)](0x3e8,this['pk'],_0x300a53(0x1a4),this),this[_0x300a53(0x1a9)][_0x300a53(0x1b8)]+=0x1,await this[_0x300a53(0x17e)](_0x50ecb4);}else await Helper[_0x300a53(0x19a)](0x3e8,this['pk'],_0x3262d3[_0x300a53(0x1b6)],this);})[_0x436fda(0x1dd)](_0x45ada0=>{throw _0x45ada0;});}async[_0x2d7f44(0x17e)](_0xb8d151){const _0x1b81e9=_0x2d7f44;await Helper[_0x1b81e9(0x19a)](0x3e8,this['pk'],_0x1b81e9(0x1b7),this),await this[_0x1b81e9(0x1ae)](_0x1b81e9(0x1d8),_0x1b81e9(0x191),this[_0x1b81e9(0x1a8)],{'hash':_0xb8d151})[_0x1b81e9(0x1cf)](async _0x3cba7f=>{const _0x1bae0d=_0x1b81e9;if(_0x3cba7f[_0x1bae0d(0x1a0)]!=0x0)throw new Error(_0x3cba7f[_0x1bae0d(0x1b6)]);else await Helper[_0x1bae0d(0x19a)](0x3e8,this['pk'],_0x1bae0d(0x1c3),this);})[_0x1b81e9(0x1dd)](_0x187b75=>{throw _0x187b75;});}async[_0x2d7f44(0x1a2)](){const _0x195e23=_0x2d7f44;try{await Helper[_0x195e23(0x19a)](0x3e8,this['pk'],_0x195e23(0x17f),this),await this['fetch']('/testnet-v1/user/rewards/info','GET',this[_0x195e23(0x1a8)])['then'](async _0x292d1c=>{const _0x467fb0=_0x195e23;if(_0x292d1c[_0x467fb0(0x1a0)]==0x0)this[_0x467fb0(0x181)]=_0x292d1c[_0x467fb0(0x1b2)],await Helper[_0x467fb0(0x19a)](0x3e8,this['pk'],'Successfully\x20Get\x20User\x20Reward\x20Information',this);else throw new Error('Unable\x20to\x20get\x20user\x20reward\x20info');})[_0x195e23(0x1dd)](_0x2e5adc=>{throw _0x2e5adc;});}catch(_0x2c24e2){throw _0x2c24e2;}}async['getDailyTx'](){const _0x4d3aed=_0x2d7f44;try{await Helper[_0x4d3aed(0x19a)](0x3e8,this['pk'],_0x4d3aed(0x1dc),this),await this[_0x4d3aed(0x1ae)](_0x4d3aed(0x197),_0x4d3aed(0x189),this[_0x4d3aed(0x1a8)],null)[_0x4d3aed(0x1cf)](async _0x4aff25=>{const _0x1b9daf=_0x4d3aed;if(_0x4aff25['code']!=0x0)throw new Error(_0x4aff25[_0x1b9daf(0x1b6)]);else this[_0x1b9daf(0x1a9)]=_0x4aff25[_0x1b9daf(0x1b2)],await Helper[_0x1b9daf(0x19a)](0x3e8,this['pk'],_0x1b9daf(0x1df),this);})[_0x4d3aed(0x1dd)](_0xf497dd=>{throw _0xf497dd;});}catch(_0xf590f9){throw _0xf590f9;}}async[_0x2d7f44(0x184)](_0x15f089){const _0x5d8789=_0x2d7f44;_0xb08d14[_0x5d8789(0x1d5)](_0x5d8789(0x1bb)+_0x15f089),await Helper[_0x5d8789(0x19a)](0x3e8,this['pk'],_0x5d8789(0x1bb)+_0x15f089,this),await this[_0x5d8789(0x1ae)](_0x5d8789(0x1c6)+_0x15f089,_0x5d8789(0x189),this[_0x5d8789(0x1a8)],null)['then'](async _0x37b01c=>{const _0x48b246=_0x5d8789;_0x37b01c[_0x48b246(0x1a0)]==0x0?await Helper[_0x48b246(0x19a)](0x3e8,this['pk'],_0x48b246(0x18f),this):await Helper[_0x48b246(0x19a)](0x3e8,this['pk'],_0x37b01c['message'],this);})[_0x5d8789(0x1dd)](_0x31cea0=>{throw _0x31cea0;});}async['claimMysteryBox'](){const _0x538070=_0x2d7f44;await Helper[_0x538070(0x19a)](0x3e8,this['pk'],'Build\x20Tx\x20for\x20Claiming\x20Mystery\x20BOX',this),_0xb08d14[_0x538070(0x1d5)](_0x538070(0x1be)),await this[_0x538070(0x1ae)](_0x538070(0x1b4),_0x538070(0x189),this[_0x538070(0x1a8)],undefined)[_0x538070(0x1cf)](async _0x314306=>{const _0x1ebf8b=_0x538070;if(_0x314306[_0x1ebf8b(0x1a0)]==0x0){const _0x496e59=Buffer[_0x1ebf8b(0x1d2)](_0x314306[_0x1ebf8b(0x1b2)][_0x1ebf8b(0x1db)],_0x1ebf8b(0x19d)),_0xb252ab=Transaction[_0x1ebf8b(0x1d2)](_0x496e59);_0xb252ab['partialSign'](this[_0x1ebf8b(0x19b)]);const _0x412be0=await this[_0x1ebf8b(0x1aa)](_0xb252ab);await this[_0x1ebf8b(0x1c5)](_0x412be0);}else await Helper[_0x1ebf8b(0x19a)](0x3e8,this['pk'],_0x314306[_0x1ebf8b(0x1b6)],this),_0xb08d14[_0x1ebf8b(0x1cb)](_0x314306[_0x1ebf8b(0x1b6)]);})[_0x538070(0x1dd)](_0x2fbefd=>{throw _0x2fbefd;});}async['openMysteryBox'](_0x1cc479){const _0x4152ea=_0x2d7f44;await Helper[_0x4152ea(0x19a)](0x3e8,this['pk'],_0x4152ea(0x1c0),this),_0xb08d14[_0x4152ea(0x1d5)](_0x4152ea(0x1c0)),await this['fetch'](_0x4152ea(0x1bd),_0x4152ea(0x191),this['token'],{'hash':_0x1cc479})[_0x4152ea(0x1cf)](async _0x15f391=>{const _0x410c3d=_0x4152ea;_0x15f391[_0x410c3d(0x1a0)]==0x0?(await Helper['delay'](0x3e8,this['pk'],_0x410c3d(0x1e0)+_0x15f391['data']['amount']+'\x20RING',this),this[_0x410c3d(0x181)][_0x410c3d(0x190)]-=0x1,this['reward'][_0x410c3d(0x199)]+=_0x15f391[_0x410c3d(0x1b2)][_0x410c3d(0x182)],await Helper[_0x410c3d(0x19a)](0x1388)):(await Helper[_0x410c3d(0x19a)](0x3e8,this['pk'],_0x15f391[_0x410c3d(0x1b6)],this),_0xb08d14['error'](_0x15f391['message']));})[_0x4152ea(0x1dd)](_0x232b04=>{throw _0x232b04;});}}