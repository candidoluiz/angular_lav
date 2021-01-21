export const ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', children: null },

    { path: '#catalogo', id: 'catalogo', title: 'Ficha', icon: 'menu_book', children: [
      {path: 'catalogo/catalogo-link', title: 'Catálogo Link', icon: 'CL'},
      {path: 'catalogo/catalogo-nivel', title: 'Catálogo Nível', icon: 'CN'},
    ]},

    // { path: '#tipos_roupa', id: 'tipos_roupa', title: 'Tipo de Roupa', icon: 'menu_book', children: [    
    //   {path: 'tipos_roupa/tipo-roupa-detalhe', title: 'Consultar tipo de roupa', icon: 'CN'},
    // ]},

    // { path: '#tecidos', id: 'tecidos', title: 'Tecido', icon: 'point_of_sale', children: [
    //   {path: 'tecidos/tecido-detalhe', title: 'Consultar Tecido', icon: 'VD'}
    // ]},

    // { path: '#roupas', id: 'roupas', title: 'Roupa', icon: 'point_of_sale', children: [
    //   {path: 'roupas/roupa-detalhe', title: 'Consultar Roupa', icon: 'VD'}
    // ]},


    // { path: 'clientes', title: 'Tecido', icon: 'people_alt', children: null },
    // { path: 'outros', title: 'Lavanderia', icon: 'more', children: null },
    // { path: 'outros', title: 'Lavagens', icon: 'more', children: null },
    // { path: 'outros', title: 'Cidade', icon: 'more', children: null },
    // { path: 'utilitarios', title: 'Empresa', icon: 'apps', children: null },

    // { path: '#component', id: 'component', title: 'Componentes', icon: 'apps', children: [
    //   {path: 'components/price-table', title: 'Price Table', icon: 'PT'},
    //   {path: 'components/panels', title: 'Panels', icon: 'P'},
    //   {path: 'components/wizard', title: 'Wizard', icon: 'W'},
    // ]},
    // { path: 'table', title: 'Table List', icon: 'content_paste', children: null },
    // { path: 'notification', title: 'Notification', icon: 'notifications', children: null },
    // { path: 'alert', title: 'Sweet Alert', icon: 'warning', children: null },
    { path: 'teste', title: 'Teste', icon: 'article', children: null },
    { path: 'tipos_roupa/tipo-roupa-detalhe', title: 'Tipo de Roupa', icon: 'article', children: null },
    { path: 'tecidos', title: 'Tecido', icon: 'article', children: null },
    { path: 'roupas', title: 'Roupa', icon: 'article', children: null },
    { path: 'settings', title: 'Settings', icon: 'settings', children: null },
    //{ path: 'grade', title: 'Grades', icon: 'settings', children: null },
];
