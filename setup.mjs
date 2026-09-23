import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'

const dependencies = [
  'typescript',
  '@tsconfig/node24',
  '@types/node',
  '@vitest/coverage-v8',
  'vitest',
  '@biomejs/biome',
]

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'
execFileSync(npm, ['install', '--save-dev', ...dependencies], {
  stdio: 'inherit',
})

const workflowPath = '.github/workflows/ci.yml'
if (existsSync(workflowPath)) {
  const workflow = readFileSync(workflowPath, 'utf8')
  const updatedWorkflow = workflow.replace(
    'run: node setup.mjs # change this to: npm install',
    'run: npm install',
  )

  if (updatedWorkflow !== workflow) {
    writeFileSync(workflowPath, updatedWorkflow)
  }
}
