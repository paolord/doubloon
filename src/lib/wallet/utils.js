/** @flow */

import { randomBytes } from 'crypto';
import secp256k1 from 'secp256k1';

export function generatePrivKey(): Buffer {
  let privKey;
  do {
    privKey = randomBytes(32);
  } while (!secp256k1.privateKeyVerify(privKey));
  return privKey;
}

export function generatePubKey(privKey: Buffer): Buffer {
  const pubKey = secp256k1.publicKeyCreate(privKey);

  return pubKey;
}
