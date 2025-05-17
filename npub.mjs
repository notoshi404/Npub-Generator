import { generateSecretKey, getPublicKey, nip19 } from 'nostr-tools';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Don't use capital letters, b, i, o, 1 in your prefix.");
rl.question('Enter desired prefix (after npub1): ', (inputPrefix) => {
  const desiredPrefix = "npub1" + inputPrefix.toLowerCase(); // ห้ามใช้ตัวพิมพ์ใหญ่,b,i,o,1
  let found = false;
  let nsec, npub, sk, publicKey;
  let count = 0;

  while (!found) {
    sk = generateSecretKey();
    nsec = nip19.nsecEncode(sk);
    publicKey = getPublicKey(sk);
    npub = nip19.npubEncode(publicKey);

    if (npub.startsWith(desiredPrefix)) {
      found = true;
    }

    count++;
    if (count % 10000 === 0) {
      console.log(`Tried ${count} keys...`);
    }
  }

  console.log("Secret Key (nsec):", nsec);
  console.log("Public Key (npub):", npub);
  console.log("Tried:", count, "keys");
  rl.close();
});