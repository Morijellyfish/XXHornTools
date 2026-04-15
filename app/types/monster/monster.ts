import type { HitZoneVariant } from './hitZone'
import type { MonsterTaxonomy } from './monsterTaxonomy'
import type { PartDurability } from './partDurability'
import type { Quest } from '../quest/quest'

// 咆哮・風圧・振動（有無・強度）
export interface MonsterEffectIntensity {
  // あり／なし（未設定は未定義扱い）
  has?: boolean
  // 強度（小 / 大 など）
  strength?: string
}

// モンスターデータ
export interface Monster {
  // モンスター名
  name: string
  // 種族
  species: MonsterTaxonomy
  // 咆哮
  roar?: MonsterEffectIntensity
  // 風圧
  windPressure?: MonsterEffectIntensity
  // 振動
  tremor?: MonsterEffectIntensity
  // 肉質バリアント（通常/怒り/獰猛 等）
  hitZoneVariants: HitZoneVariant[]
  // 部位耐久データの配列
  partDurabilities: PartDurability[]
  // クエスト一覧
  quests: Quest[]
}
