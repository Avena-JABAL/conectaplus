export function dadosDaConta(dados, email) {
  return (email && Object.hasOwn(dados, email) && dados[email]) || {
    interesses: [],
    modulosConcluidos: {},
  }
}

export function atualizarDadosDaConta(dados, email, campo, valor) {
  if (!email) return dados
  const atual = dadosDaConta(dados, email)
  return {
    ...dados,
    [email]: {
      ...atual,
      [campo]: typeof valor === 'function' ? valor(atual[campo]) : valor,
    },
  }
}
