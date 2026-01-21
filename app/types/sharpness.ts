// 切れ味の色
export enum SharpnessColor {
  Red = 'red',
  Orange = 'orange',
  Yellow = 'yellow',
  Green = 'green',
  Blue = 'blue',
  White = 'white',
  Purple = 'purple',
}

// 切れ味倍率（物理/属性）
export interface SharpnessMultiplier {
  physical: number
  elemental: number
}

// 切れ味倍率マッピング
export const SHARPNESS_MULTIPLIERS: Record<SharpnessColor, SharpnessMultiplier> = {
  [SharpnessColor.Red]: { physical: 0.5, elemental: 0.25 },
  [SharpnessColor.Orange]: { physical: 0.75, elemental: 0.5 },
  [SharpnessColor.Yellow]: { physical: 1.0, elemental: 0.75 },
  [SharpnessColor.Green]: { physical: 1.125, elemental: 1.0 },
  [SharpnessColor.Blue]: { physical: 1.25, elemental: 1.0625 },
  [SharpnessColor.White]: { physical: 1.32, elemental: 1.125 },
  [SharpnessColor.Purple]: { physical: 1.39, elemental: 1.2 },
}

// 切れ味の色マッピング
export const SHARPNESS_COLORS: Record<SharpnessColor, string> = {
  [SharpnessColor.Red]: '#E0002A',
  [SharpnessColor.Orange]: '#FF8800',
  [SharpnessColor.Yellow]: '#FFD700',
  [SharpnessColor.Green]: '#00CC00',
  [SharpnessColor.Blue]: '#0066FF',
  [SharpnessColor.White]: '#FFFFFF',
  [SharpnessColor.Purple]: '#8000FF',
}

// 切れ味（色と長さ）
export interface Sharpness {
  color: SharpnessColor
  length: number
}

// 切れ味セット（通常、匠1、匠2）
export interface SharpnessSet {
  normal: Sharpness // 通常切れ味
  plus1?: Sharpness // 匠1切れ味
  plus2?: Sharpness // 匠2切れ味
}

// 斬れ味の色コードを取得
export const getSharpnessColor = (color: SharpnessColor): string => {
  return SHARPNESS_COLORS[color]
}
