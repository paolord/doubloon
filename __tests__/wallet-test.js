/** @flow */

import { randomBytes } from 'crypto';
import secp256k1 from 'secp256k1';

// import wallet from '../src/lib/wallet/';
import { generatePrivKey, generatePubKey } from '../src/lib/wallet/utils';

describe('Wallet', () => {
  describe('can create a wallet', () => {
    it('generates a valid ECDSA Key Pair', () => {
      const privKey = generatePrivKey();
      const pubKey = generatePubKey(privKey);

      const msg = randomBytes(32);

      const signObj = secp256k1.sign(msg, privKey);

      expect(secp256k1.verify(msg, signObj.signature, pubKey)).toBe(true);
    });
  });
});
