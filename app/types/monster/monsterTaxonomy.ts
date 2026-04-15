// MHXX に登場するモンスター種族（この一覧以外は取りうけない）
export const MONSTER_TAXONOMIES = [
  '草食種',
  '獣人種',
  '甲虫種',
  '甲殻種',
  '牙獣種',
  '鳥竜種',
  '魚竜種',
  '飛竜種',
  '海竜種',
  '獣竜種',
  '牙竜種',
  '両生種',
  '鋏角種',
  '蛇竜種',
  '亜龍種',
  '古龍種',
  '不明',
] as const

export type MonsterTaxonomy = (typeof MONSTER_TAXONOMIES)[number]
