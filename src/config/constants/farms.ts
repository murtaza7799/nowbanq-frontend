import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'NWB',
    lpAddresses: {
      97: '',
      56: '0x5b7fFe8BAFB420e413fd928CDc22AD3554f14c67',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BNB-NWB LP',
    lpAddresses: {
      97: '',
      56: '0x89363F9Ecf37a95913D0DC90D4eDE7389Be138e7',
    },
    token: serializedTokens.nwb,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x938fBFE48E5CaF73C342105522fE6c96630294c2',
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.usdt,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
 
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
