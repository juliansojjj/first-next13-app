

export default async function Layout({children}: {
    children: React.ReactNode
  }) {

    return (<div>
        <h2>BANNER</h2>
            {children}
        </div>
    )
  }