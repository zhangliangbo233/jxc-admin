/*路由表：库存管理*/

const router = {
    path: '/stock',
    component: 'Layout',
    meta: {title: '库存管理', icon: 'svg-stock', alwaysShow: true},
    children: [
        {
            path: 'current',
            name: 'currentStock',
            component: 'stock/current/',
            meta: {title: '当前库存'}
        }
    ]
}

export default router
