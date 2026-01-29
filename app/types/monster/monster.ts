import type { HitZone } from './hitZone'
import type { PartDurability } from './partDurability'

/**
 * モンスターのデータ
 * 名称、肉質、耐久値を統合したデータ構造
 */
export interface Monster {
  // モンスター名
  name: string
  // 肉質データの配列
  hitZones: HitZone[]
  // 部位耐久データの配列
  partDurabilities: PartDurability[]
}
