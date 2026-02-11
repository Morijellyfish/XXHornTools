import type { HitZoneVariant } from './hitZone'
import type { PartDurability } from './partDurability'

/**
 * モンスターのデータ
 * 名称、肉質、耐久値を統合したデータ構造
 */
export interface Monster {
  // モンスター名
  name: string
  // 肉質バリアント（通常/怒り/獰猛 等）
  hitZoneVariants: HitZoneVariant[]
  // 部位耐久データの配列
  partDurabilities: PartDurability[]
}
