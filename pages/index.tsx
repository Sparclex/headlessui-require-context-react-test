
export default function Home({Component}: {Component: any}) {
  const components = require.context('../components/', true, /\.tsx$/i)

  return <div>
    {components(components.keys()[0]).default()}
  </div>
}
