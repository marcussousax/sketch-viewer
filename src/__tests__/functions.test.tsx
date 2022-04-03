import { createUrl, useSearchParams } from '../hooks'

describe('functions', () => {
  it('it should generate the URL', () => {
    const url = createUrl('name', 'value', 'pathName')

    expect(url.searchParams.get('name')).toEqual('value')
    expect(url.pathname).toEqual('//pathName')
  })
})
