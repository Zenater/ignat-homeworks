import React from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './Header'
import ComponentsRoutes from './ComponentsRoutes'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <ComponentsRoutes/>
            </HashRouter>
        </div>
    )
}

export default HW5
