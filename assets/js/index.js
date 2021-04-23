
//--------------general settings--------------

//contractAddress
//const ContractAddress = "0x09F06a6964A1bcee82BE6C2B00B1f7eDb4D3DcC4";

//mainnet
const ContractAddress = "0x3239DED3bc0e04EA110120449e7F134b050C5d5f";

//matic matic testnet(0) or matic network(1)
const network = 1;

//---------------------------------------------


//testnet or mainnet 
//rpclist = [ "" , "" ];
explorerlist = [ "https://explorer-mumbai.maticvigil.com/tokens/" , "https://explorer-mainnet.maticvigil.com/tokens/" ];
mintnandemotokenapilist = [ "https://mint.nandemotoken.com/api/v1/testnet/" , "https://mint.nandemotoken.com/api/v1/" ];
opensealist = [ "https://testnets.opensea.io/account/" , "https://opensea.io/account/"];


let replica_contract;

window.onload = async function() {
//    ethereum.on('chainChanged', (_chainId) => window.location.reload());
}

function walletmodal(){
    $('#wallet-popup').modal('show');
}


// async function loadmm_gasfree(){
//     $('#wallet-popup').modal('hide');
//     if (typeof web3 == 'undefined'){
//         ans = window.confirm("metamaskをインストールしてください\nmetamaskのインストール方法を確認しますか？\n\n参考：https://note.com/ocurima/n/n29e1fd7ecbdd");
//         if (ans){
//             window.open("https://note.com/ocurima/n/n29e1fd7ecbdd");
//         }
//         return;
//     }
    
//     ans = window.confirm("OKを押すとNFTがMetaMaskに送信されます")
//     if ( !ans ){
//         return;
//     }
    
    
//     await window.ethereum.enable();
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const add = await signer.getAddress();

//     ans2 = await signer.signMessage( "NFTを受け取ります" );
//     if ( ans2[1] != "x" ){
//         return;
//     }
    
    
    
//     let result = await $.getJSON( mintnandemotokenapilist[network] + ContractAddress + "/"+ add + "/" )
//     console.log(result);
//     $('#myinfo').modal('show')
    
// }


async function loadtorus_gasfree(){
    $('#wallet-popup').modal('hide');
    
    await newTorus();
    
    ans = window.confirm("OKを押すとNFTを取得します")
    if ( !ans ){
        return;
    }
    
    
//    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(torus.provider);
    const signer = provider.getSigner();
    const add = await signer.getAddress();

    // ans2 = await signer.signMessage( "NFTを受け取ります" );
    // if ( ans2[1] != "x" ){
    //     return;
    // }
    
    
    
    let result = await $.getJSON( mintnandemotokenapilist[network] + ContractAddress + "/"+ add + "/" )
    console.log(result);
    $('#myinfo').modal('show')
    
}



function explorer(){
    //window.alert("matic")
    ans = window.confirm("ブロックチェーンエクスプローラーを開く\n\n" + explorerlist[network] + ContractAddress + "/inventory\n\nNFTの発行状況を確認しますか？(通常は1分以内に発行されます)");
        if(ans){ window.open( explorerlist[network] +ContractAddress + "/inventory"); }
}

function opensea(){
    //window.alert("opensea")
    ans = window.confirm("OpenSeaでNFTを確認する\n\n"+ opensealist[network] + "\n\nOpenSeaを開き、ウォレットを接続しますか？\n(反映には数分時間がかかります。NFTの画像は処理が終わると表示されます)");
        if(ans){ window.open( opensealist[network] ); }
}
