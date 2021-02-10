export const ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'fas fa-border-all fa-lg', children: null },

    { path: '#catalogo', id: 'catalogo', title: 'Ficha', icon: 'fas fa-clipboard fa-lg', children: [
      {path: 'catalogo/catalogo-link', title: 'Catálogo Link', icon: 'CL'},
      {path: 'catalogo/catalogo-nivel', title: 'Catálogo Nível', icon: 'CN'},
    ]},

    { path: '#lavanderias', id: 'lavanderias', title: 'Lavanderias', icon: 'fad fa-industry-alt fa-lg',  children: [
        { path: 'lavanderias', title: 'Lavanderias', icon: 'L' },
        { path: 'lavagens', title: 'Processos de lavagem', icon: 'PL'},
    ]},

   

    { path: '#roupas', id:'roupas', title: 'Roupa', icon: 'fas fa-tshirt fa-lg', children: [
        { path: 'roupas', title: 'Roupa', icon: 'R' },
        { path: 'tipos-roupa', title: 'Tipo de Roupa', icon: 'TR' },
        { path: 'grupos', title: 'Grupo de Roupa', icon: 'GR' },
    ] },

    
    { path: 'tecidos', title: 'Tecido', icon: 'fas fa-scarf fa-lg', children: null },
    { path: 'settings', title: 'Settings', icon: 'fas fa-cogs  fa-lg', children: null },
    //{ path: 'grade', title: 'Grades', icon: '<i class="fas fa-clipboard"></i>', children: null },
];
