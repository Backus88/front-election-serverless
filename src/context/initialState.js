export const initialState = {
  ufs: {
    allUfs: ['br', 'rj'],
    byUf: {
      br: { name: 'Brasil', uf: 'BR', current: {}, history: [] },
      rj: { name: 'Rio de Janeiro', uf: 'RJ', current: {}, history: [] },
    },
  },
}
