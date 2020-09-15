import { Server } from './server'
describe('Server', () => {
  test('should be return 1', () => {
    const server = new Server()
    const result = server.getResult()
    expect(result).toBe(1)
  })
})
