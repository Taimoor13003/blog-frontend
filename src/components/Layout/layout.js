import React from "react"
import ScrollToTop from "./ScrollToTop"

const Layout = ({ children }) => {
    return (
        <>
            {children}

            <ScrollToTop />
        </>
    )
}
export default Layout