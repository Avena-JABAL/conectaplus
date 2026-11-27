import test from 'node:test'
import assert from 'node:assert/strict'
import { dadosDaConta, atualizarDadosDaConta } from '../src/context/dadosDaConta.js'
import { trilhas } from '../src/data/trilhas.js'

test('cada conta começa com progresso e interesses vazios', () => {
  assert.deepEqual(dadosDaConta({}, 'a@example.com'), { interesses: [], modulosConcluidos: {} })
})
test('progresso e interesses ficam isolados entre contas e retornam no novo login', () => {
  const a = 'a@example.com', b = 'b@example.com'
  let dados = atualizarDadosDaConta({}, a, 'interesses', atual => [...atual, 'curso'])
  dados = atualizarDadosDaConta(dados, a, 'modulosConcluidos', atual => ({ ...atual, curriculo: [0] }))
  assert.deepEqual(dadosDaConta(dados, b), { interesses: [], modulosConcluidos: {} })
  dados = atualizarDadosDaConta(dados, b, 'interesses', ['evento'])
  assert.deepEqual(dadosDaConta(dados, a), { interesses: ['curso'], modulosConcluidos: { curriculo: [0] } })
  assert.deepEqual(dadosDaConta(dados, b).interesses, ['evento'])
  assert.deepEqual(dadosDaConta(dados, null), { interesses: [], modulosConcluidos: {} })
})
test('atualização não altera os dados anteriores', () => {
  const antes = atualizarDadosDaConta({}, 'a@example.com', 'interesses', ['curso'])
  const depois = atualizarDadosDaConta(antes, 'a@example.com', 'interesses', atual => atual.filter(id => id !== 'curso'))
  assert.deepEqual(dadosDaConta(antes, 'a@example.com').interesses, ['curso'])
  assert.deepEqual(dadosDaConta(depois, 'a@example.com').interesses, [])
})
test('trilhas têm identificadores únicos e módulos disponíveis', () => {
  assert.equal(new Set(trilhas.map(t => t.id)).size, trilhas.length)
  assert.ok(trilhas.every(t => t.id && t.modulos.length > 0))
})
