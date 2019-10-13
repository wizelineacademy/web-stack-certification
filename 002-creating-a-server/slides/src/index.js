import welcome from '~/slides/welcome.mdx'
import intro from '~/slides/intro.mdx'
import tools from '~/slides/tools.mdx'
import install from '~/slides/install.mdx'
import workshop from '~/slides/workshop.mdx'
import final from '~/slides/final.mdx'

export { default as theme } from './wizeline-theme'
export default [
  ...welcome,
  ...intro,
  ...tools,
  ...install,
  ...workshop,
  ...final
]
