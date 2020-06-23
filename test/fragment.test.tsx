import Nano, { Component, Fragment } from '../lib/index.js'
import { wait } from './helpers.js'

const spy = jest.spyOn(global.console, 'error')

test('should render without errors', async (done) => {
  const Test = () => <Fragment>test</Fragment>
  const Root = () => (
    <div>
      <Test />
    </div>
  )
  const res = Nano.render(<Root />)

  await wait()
  expect(res.outerHTML).toBe('<div>test</div>')
  expect(spy).not.toHaveBeenCalled()
  done()
})
