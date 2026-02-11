import type { Monster } from './monster'

/**
 * モンスターデータからUI表示用のリスト（label/value）を生成するユーティリティ
 * - `OptionMonitor` のようなUIコンポーネントにドメイン分岐（破壊前など）を持ち込まないための集約先
 */
export type LabeledValue<T extends string = string> = {
  label: string
  value: T
}

/**
 * 耐久部位の選択キー
 * - `::normal`: 通常
 * - `::prebreak`: 破壊前
 */
export type DurabilityPartKey = `${string}::normal` | `${string}::prebreak`

/**
 * モンスター選択用リストを作成（名前でソート）
 */
export function getMonsterList(monsters: Monster[]): LabeledValue[] {
  return monsters
    .map(m => m.name)
    .sort()
    .map(name => ({ label: name, value: name }))
}

/**
 * 肉質ヴァリアント選択用リストを作成
 */
export function getHitZoneVariantList(monster?: Monster): LabeledValue[] {
  const variants = monster?.hitZoneVariants ?? []
  return variants.map(v => ({ label: v.name, value: v.name }))
}

/**
 * デフォルトで選ぶ肉質ヴァリアント名を返す
 * - `通常時` があればそれを優先
 * - なければ先頭
 */
export function getDefaultVariantName(monster?: Monster): string {
  const variants = monster?.hitZoneVariants ?? []
  return variants.find(v => v.name === '通常時')?.name ?? variants[0]?.name ?? ''
}

/**
 * 指定ヴァリアントの肉質部位（部位名）選択用リストを作成
 */
export function getHitZonePartList(monster?: Monster, variantName?: string): LabeledValue[] {
  const variant = monster?.hitZoneVariants.find(v => v.name === variantName)
  const hitZones = variant?.hitZones ?? []
  return hitZones.map(hz => ({ label: hz.name, value: hz.name }))
}

/**
 * 指定ヴァリアントの肉質部位（部位名）選択用リストを作成（値付き）
 * - `hitzoneType` で指定された物理属性（切/打/弾）の値をラベルに併記する
 */
export function getHitZonePartListWithValue(
  monster: Monster | undefined,
  variantName: string | undefined,
  hitzoneType: 'slash' | 'impact' | 'shot'
): LabeledValue[] {
  const variant = monster?.hitZoneVariants.find(v => v.name === variantName)
  const hitZones = variant?.hitZones ?? []
  const typeLabel = hitzoneType === 'slash' ? '切' : hitzoneType === 'impact' ? '打' : '弾'

  return hitZones.map(hz => {
    const v = hz.mellee[hitzoneType]
    return { label: `${hz.name} (${typeLabel}${v})`, value: hz.name }
  })
}

/**
 * 指定ヴァリアントでデフォルト選択する肉質部位名を返す（先頭）
 */
export function getDefaultHitZonePartName(monster?: Monster, variantName?: string): string {
  const variant = monster?.hitZoneVariants.find(v => v.name === variantName)
  return variant?.hitZones?.[0]?.name ?? ''
}

/**
 * 耐久部位（怯み）選択用リストを作成
 * - `durabilityPreBreak` がある部位は `(破壊前)` を別項目として追加
 */
export function getDurabilityList(monster?: Monster): LabeledValue<DurabilityPartKey>[] {
  const parts = monster?.partDurabilities ?? []
  const options: LabeledValue<DurabilityPartKey>[] = []
  for (const part of parts) {
    options.push({ label: part.name, value: `${part.name}::normal` })
    if (part.durabilityPreBreak !== undefined) {
      options.push({ label: `${part.name}(破壊前)`, value: `${part.name}::prebreak` })
    }
  }
  return options
}

/**
 * 耐久部位（怯み）選択用リストを作成（値付き）
 * - `isFrenzied` が true の場合は獰猛耐久を参照する（なければフォールバック）
 * - prebreak項目は `getDurability(isFrenzied, true)` の値をラベルに併記する
 */
export function getDurabilityListWithValue(
  monster: Monster | undefined,
  isFrenzied: boolean
): LabeledValue<DurabilityPartKey>[] {
  const parts = monster?.partDurabilities ?? []
  const options: LabeledValue<DurabilityPartKey>[] = []

  for (const part of parts) {
    const normal = part.getDurability(isFrenzied, false)
    options.push({ label: `${part.name} (${normal})`, value: `${part.name}::normal` })

    if (part.durabilityPreBreak !== undefined) {
      const prebreak = part.getDurability(isFrenzied, true)
      options.push({
        label: `${part.name}(破壊前) (${prebreak})`,
        value: `${part.name}::prebreak`,
      })
    }
  }

  return options
}

/**
 * デフォルトで選ぶ耐久部位キーを返す（先頭の通常）
 */
export function getDefaultDurabilityPartKey(monster?: Monster): DurabilityPartKey | '' {
  const first = monster?.partDurabilities?.[0]?.name
  return first ? `${first}::normal` : ''
}
