
export default function Home({Component}: {Component: any}) {
  const components = require.context('../components/', true, /\.tsx$/i)

  console.log(components(components.keys()[0]))

  return <div>
    {components(components.keys()[0]).default()}
  </div>
}
