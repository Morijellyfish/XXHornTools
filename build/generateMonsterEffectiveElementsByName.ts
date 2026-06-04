import { createJiti } from 'jiti'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const HEADER =
  '// auto-generated — 手で編集しないでください\n' +
  '// build/generateMonsterEffectiveElementsByName.ts（Nuxt prepare / build / dev）が出力\n\n'

function writeGeneratedMap(
  rootDir: string,
  fileName: string,
  importType: string,
  constName: string,
  map: Record<string, string[]>
): void {
  const outPath = resolve(rootDir, `app/data/monsters/${fileName}`)
  const serialized = JSON.stringify(map, null, 2)
  const body =
    HEADER +
    `import type { ${importType} } from '~/types/attackType'\n\n` +
    `export const ${constName}: Readonly<Record<string, readonly ${importType}[]>> = ` +
    `Object.freeze(${serialized}) as Readonly<Record<string, readonly ${importType}[]>>\n`

  writeFileSync(outPath, body, 'utf8')
}

export async function runGenerate(rootDir: string): Promise<void> {
  const jiti = createJiti(resolve(rootDir, 'build/generateMonsterEffectiveElementsByName.ts'), {
    interopDefault: true,
    alias: {
      '~': resolve(rootDir, 'app'),
    },
  })

  const indexMod = (await jiti.import(resolve(rootDir, 'app/data/monsters/allMonsters.ts'))) as {
    allMonsters: { name: string }[]
  }

  const effectiveModule = (await jiti.import(
    resolve(rootDir, 'app/types/monster/monsterEffectiveElements.ts')
  )) as Record<string, unknown>
  const getMonsterEffectiveElements = effectiveModule.getMonsterEffectiveElements as (
    ...args: unknown[]
  ) => string[]

  const melleeWeaknessModule = (await jiti.import(
    resolve(rootDir, 'app/types/monster/monsterMelleeWeaknesses.ts')
  )) as Record<string, unknown>
  const getMonsterMissingMelleeWeaknesses =
    melleeWeaknessModule.getMonsterMissingMelleeWeaknesses as (...args: unknown[]) => string[]

  const { allMonsters } = indexMod
  if (!Array.isArray(allMonsters)) {
    throw new Error('[monster-effective-elements] allMonsters が取得できません')
  }

  const entries = allMonsters.map(m => [m.name, getMonsterEffectiveElements(m)] as const)
  entries.sort((a, b) => a[0].localeCompare(b[0], 'ja'))
  const map = Object.fromEntries(entries) as Record<string, string[]>

  writeGeneratedMap(
    rootDir,
    'monsterEffectiveElementsByName.generated.ts',
    'ElementType',
    'monsterEffectiveElementsByName',
    map
  )

  const missingMelleeEntries = allMonsters.map(
    m => [m.name, getMonsterMissingMelleeWeaknesses(m)] as const
  )
  missingMelleeEntries.sort((a, b) => a[0].localeCompare(b[0], 'ja'))
  const missingMelleeMap = Object.fromEntries(missingMelleeEntries) as Record<string, string[]>

  writeGeneratedMap(
    rootDir,
    'monsterMissingMelleeWeaknessesByName.generated.ts',
    'MelleeType',
    'monsterMissingMelleeWeaknessesByName',
    missingMelleeMap
  )
}
