import type { Monster } from '~/types/monster/monster'
import { arzuros } from './arzuros'
import { astalos } from './astalos'
import { azureboltAstalos } from './azureboltAstalos'
import { brachydios } from './brachydios'
import { chameleos } from './chameleos'
import { divinesightMizutsune } from './divinesightMizutsune'
import { glavenus } from './glavenus'
import { hellbladeGlavenus } from './hellbladeGlavenus'
import { gammoth } from './gammoth'
import { frostpeakGammoth } from './frostpeakGammoth'
import { kushala } from './kushala'
import { mizutsune } from './mizutsune'
import { rathian } from './rathian'
import { redhelmArzuros } from './redhelmArzuros'
import { teostra } from './teostra'
import { valstrax } from './valstrax'

/** 統合配列（有効属性のビルド時生成はこのファイルのみを読み込む） */
export const allMonsters: Monster[] = [
  arzuros,
  astalos,
  azureboltAstalos,
  brachydios,
  chameleos,
  glavenus,
  hellbladeGlavenus,
  gammoth,
  frostpeakGammoth,
  kushala,
  mizutsune,
  divinesightMizutsune,
  rathian,
  redhelmArzuros,
  teostra,
  valstrax,
]
