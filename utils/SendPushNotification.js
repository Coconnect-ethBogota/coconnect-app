import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const PK = '410f0303402e5311f3a6f5d7859222ebe7c94e3e8b1afe981ede1e75a02e8bfb'; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

export const SendPushNotification = (title, body) => {
    console.log('push: ', title, body);
    
}
