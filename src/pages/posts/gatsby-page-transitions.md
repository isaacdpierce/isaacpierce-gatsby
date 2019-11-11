---
title: 'How to install create simple page transitions'
date: '2019-08-24'
---


1. Install the file from npm or yarn

    `npm install --save gatsby-plugin-page-transitions`

2. Add the resolve to the gatsby-config.js file

    ```js  
    {
      resolve: "gatsby-plugin-page-transitions",
      options: {
        transitionTime: 1000,
      },
    },
    ```

3. Adjust transitionTime in gatsby-config.js to preferred speed (Defaults to 250ms).

4. Add `import PageTransition from "gatsby-plugin-page-transitions` to the layout.js 

5. Wrap `<PageTransition/>` component around the component that takes the children.

    ```js
        const Layout = ({ children }) => {
            return (
                <Wrapper>
                <Nav />
                <PageTransition>
                    <MainGrid>{children}</MainGrid>
                </PageTransition>
                <Footer>
                    <p>
                    © {new Date().getFullYear()}, Built by &nbsp;{" "}
                    <Link to="https://www.isaacpierce.io">
                        {" "}
                        Isaac Pierce
                    </Link>
                    </p>
                </Footer>
                </Wrapper>
            )
        }

        Layout.propTypes = {
        children: PropTypes.node.isRequired,
        }

        export default Layout
    ```

Now all pages wrapped in the layout will animate transition.

DONE.