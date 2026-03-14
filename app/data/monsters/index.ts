import type { Monster } from '~/types/monster/monster'

// モンスターの統合データをここにインポート
import { arzuros } from './arzuros'
import { astalos } from './astalos'
import { chameleos } from './chameleos'
import { glavenus } from './glavenus'
import { gammoth } from './gammoth'
import { kushala } from './kushala'
import { mizutsune } from './mizutsune'
import { rathian } from './rathian'
import { teostra } from './teostra'
import { valstrax } from './valstrax'

// すべてのモンスターの統合データを統合
export const allMonsters: Monster[] = [
  arzuros,
  astalos,
  chameleos,
  glavenus,
  gammoth,
  kushala,
  mizutsune,
  rathian,
  teostra,
  valstrax,
]

// モンスター名で統合データを検索するヘルパー関数
export const getMonster = (monsterName: string): Monster | undefined => {
  return allMonsters.find(monster => monster.name === monsterName)
}
