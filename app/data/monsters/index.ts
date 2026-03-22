import type { Monster } from '~/types/monster/monster'

// モンスターの統合データをここにインポート
import { arzuros } from './arzuros'
import { astalos } from './astalos'
import { brachydios } from './brachydios'
import { chameleos } from './chameleos'
import { glavenus } from './glavenus'
import { gammoth } from './gammoth'
import { kushala } from './kushala'
import { mizutsune } from './mizutsune'
import { rathian } from './rathian'
import { redhelmArzuros } from './redhelmArzuros'
import { teostra } from './teostra'
import { valstrax } from './valstrax'

// すべてのモンスターの統合データを統合
export const allMonsters: Monster[] = [
  arzuros,
  astalos,
  brachydios,
  chameleos,
  glavenus,
  gammoth,
  kushala,
  mizutsune,
  rathian,
  redhelmArzuros,
  teostra,
  valstrax,
]

// モンスター名で統合データを検索するヘルパー関数
export const getMonster = (monsterName: string): Monster | undefined => {
  return allMonsters.find(monster => monster.name === monsterName)
}
