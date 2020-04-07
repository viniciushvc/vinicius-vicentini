export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    'Nova atualização encontrada. Deseja atualizar para a ultima versão?'
  )

  if (answer) {
    window.location.reload()
  }
}
