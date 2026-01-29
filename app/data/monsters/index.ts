import type { Monster } from '~/types/monster/monster'

// モンスターの統合データをここにインポート
import { rathian } from './rathian'
import { valstrax } from './valstrax'

// すべてのモンスターの統合データを統合
export const allMonsters: Monster[] = [
  rathian,
  valstrax,
]

// モンスター名で統合データを検索するヘルパー関数
export const getMonster = (monsterName: string): Monster | undefined => {
  return allMonsters.find(monster => monster.name === monsterName)
}
