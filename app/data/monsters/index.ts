import type { Monster } from '~/types/monster/monster'
import { allMonsters } from './allMonsters'

export { allMonsters } from './allMonsters'
export { monsterEffectiveElementsByName } from './monsterEffectiveElementsByName.generated'

export const getMonster = (monsterName: string): Monster | undefined => {
  return allMonsters.find(monster => monster.name === monsterName)
}
