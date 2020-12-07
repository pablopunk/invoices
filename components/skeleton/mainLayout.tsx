import React from 'react'
import nativeFonts from 'native-fonts'

export const withMainLayout = (PageComponent) =>
  function MainLayout() {
    return (
      <main>
        <PageComponent />
        <style jsx global>{`
          html {
            --color-bg: white;
            --color-fg: #343434;
            --color-1: darkblue;
            --color-2: limegreen;
            --font-main: ${nativeFonts};
          }
          body {
            background-color: var(--color-bg);
            color: var(--color-fg);
            font-family: var(--font-main);
          }
          body.dark {
            --color-bg: #343434;
            --color-fg: #efefef;
            --color-1: powderblue;
            --color-2: darkviolet;
          }
        `}</style>
      </main>
    )
  }
