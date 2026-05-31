import type { Monster } from '~/types/monster/monster'
import { agnaktor } from './agnaktor'
import { akantor } from './akantor'
import { alatreon } from './alatreon'
import { amatsu } from './amatsu'
import { arzuros } from './arzuros'
import { barroth } from './barroth'
import { barioth } from './barioth'
import { basarios } from './basarios'
import { atlalKa } from './atlalKa'
import { atlalThrone } from './atlalThrone'
import { astalos } from './astalos'
import { bloodlustDiablos } from './bloodlustDiablos'
import { blangonga } from './blangonga'
import { azureboltAstalos } from './azureboltAstalos'
import { brachydios } from './brachydios'
import { bulldrome } from './bulldrome'
import { cephadrome } from './cephadrome'
import { chameleos } from './chameleos'
import { chaoticGoreMagala } from './chaoticGoreMagala'
import { congalala } from './congalala'
import { crystalbeardUragaan } from './crystalbeardUragaan'
import { deviljho } from './deviljho'
import { divinesightMizutsune } from './divinesightMizutsune'
import { daimyoHermitaur } from './daimyoHermitaur'
import { duramboros } from './duramboros'
import { gendrome } from './gendrome'
import { giadrome } from './giadrome'
import { glavenus } from './glavenus'
import { goldRathian } from './goldRathian'
import { goreMagala } from './goreMagala'
import { gravios } from './gravios'
import { greatMaccao } from './greatMaccao'
import { grimclawTigrex } from './grimclawTigrex'
import { gypceros } from './gypceros'
import { hellbladeGlavenus } from './hellbladeGlavenus'
import { iodrome } from './iodrome'
import { gammoth } from './gammoth'
import { frostpeakGammoth } from './frostpeakGammoth'
import { furiousRajang } from './furiousRajang'
import { hazewingMalfestio } from './hazewingMalfestio'
import { snowbaronLagombi } from './snowbaronLagombi'
import { drilltuskTetsucabra } from './drilltuskTetsucabra'
import { deadeyeYianGaruga } from './deadeyeYianGaruga'
import { dreadkingRathalos } from './dreadkingRathalos'
import { dreadqueenRathian } from './dreadqueenRathian'
import { kechaWacha } from './kechaWacha'
import { khezu } from './khezu'
import { kirin } from './kirin'
import { kushala } from './kushala'
import { lagiacrus } from './lagiacrus'
import { lavasioth } from './lavasioth'
import { laoShanLung } from './laoShanLung'
import { malfestio } from './malfestio'
import { mizutsune } from './mizutsune'
import { najarala } from './najarala'
import { nargacuga } from './nargacuga'
import { nibelsnarf } from './nibelsnarf'
import { nerscylla } from './nerscylla'
import { plesioth } from './plesioth'
import { ragingBrachydios } from './ragingBrachydios'
import { rajang } from './rajang'
import { rathalos } from './rathalos'
import { rathian } from './rathian'
import { redhelmArzuros } from './redhelmArzuros'
import { royalLudroth } from './royalLudroth'
import { rustrazorHermitaur } from './rustrazorHermitaur'
import { seltas } from './seltas'
import { seltasQueen } from './seltasQueen'
import { savageDeviljho } from './savageDeviljho'
import { seregios } from './seregios'
import { shagaruMagala } from './shagaruMagala'
import { shogunCeanataur } from './shogunCeanataur'
import { shredclawCeanataur } from './shredclawCeanataur'
import { silverRathalos } from './silverRathalos'
import { silverwindNargacuga } from './silverwindNargacuga'
import { tetsucabra } from './tetsucabra'
import { tigrex } from './tigrex'
import { teostra } from './teostra'
import { zinogre } from './zinogre'
import { thunderlordZinogre } from './thunderlordZinogre'
import { ukanlos } from './ukanlos'
import { uragaan } from './uragaan'
import { valstrax } from './valstrax'
import { velocidrome } from './velocidrome'
import { volvidon } from './volvidon'
import { yianGaruga } from './yianGaruga'
import { yianKutKu } from './yianKutKu'
import { zamtrios } from './zamtrios'

/** 統合配列（有効属性のビルド時生成はこのファイルのみを読み込む） */
export const allMonsters: Monster[] = [
  agnaktor,
  akantor,
  alatreon,
  amatsu,
  arzuros,
  barroth,
  barioth,
  basarios,
  atlalKa,
  atlalThrone,
  astalos,
  bloodlustDiablos,
  blangonga,
  azureboltAstalos,
  brachydios,
  bulldrome,
  cephadrome,
  chameleos,
  chaoticGoreMagala,
  congalala,
  crystalbeardUragaan,
  gendrome,
  giadrome,
  glavenus,
  goldRathian,
  goreMagala,
  gravios,
  greatMaccao,
  grimclawTigrex,
  gypceros,
  hellbladeGlavenus,
  iodrome,
  gammoth,
  frostpeakGammoth,
  furiousRajang,
  hazewingMalfestio,
  snowbaronLagombi,
  drilltuskTetsucabra,
  deadeyeYianGaruga,
  dreadkingRathalos,
  dreadqueenRathian,
  kechaWacha,
  khezu,
  kirin,
  kushala,
  lagiacrus,
  lavasioth,
  laoShanLung,
  malfestio,
  mizutsune,
  najarala,
  nargacuga,
  nibelsnarf,
  nerscylla,
  plesioth,
  deviljho,
  divinesightMizutsune,
  daimyoHermitaur,
  duramboros,
  ragingBrachydios,
  rajang,
  rathalos,
  rathian,
  redhelmArzuros,
  royalLudroth,
  rustrazorHermitaur,
  seltas,
  seltasQueen,
  savageDeviljho,
  seregios,
  shagaruMagala,
  shogunCeanataur,
  shredclawCeanataur,
  silverRathalos,
  silverwindNargacuga,
  tetsucabra,
  tigrex,
  teostra,
  zinogre,
  thunderlordZinogre,
  ukanlos,
  uragaan,
  valstrax,
  velocidrome,
  volvidon,
  yianGaruga,
  yianKutKu,
  zamtrios,
]
