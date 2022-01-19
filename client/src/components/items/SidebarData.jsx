const sidebarData = [
    {
        path: '/admin',
        exact: true,
        sidebar: () => { <div>home</div> },
        main: () => { <h2>Home</h2> }
    },
    {
        path: '/admin/contact',
        exact: true,
        sidebar: () => { <div>contact</div> },
        main: () => { <h2>contact</h2> }
    },
    {
        path: '/admin/about',
        exact: true,
        sidebar: () => { <div>about</div> },
        main: () => { <h2>about</h2> }
    }
]
export default sidebarData;