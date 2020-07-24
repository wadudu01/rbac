// component's config object.
const components = {
	admin: {
		component: 'AdminOnly',
		url: '/admin',
		title: 'Admin Only',
		icon: 'menu',
		module: 1
	},
	create: {
		component: 'Create',
		url: '/create',
		title: 'Add Product',
		icon: 'menu',
		module: 1
	},
	users: {
		component: 'Users',
		url: '/users',
		title: 'Users',
		icon: 'menu',
		module: 1
	},
	manager: {
		component: 'Managerx',
		url: '/manager',
		title: 'Manager',
		icon: 'menu',
		module: 1
	}
};

// modules for grouping.
const modules = {
	0: {
		title: 'Dashboard',
		icon: 'home',
		isExpendable: true
	}
};

// component's access to roles.
const rolesConfig = {
	1: {
		routes: [components.admin,components.users,components.create]
	},
	2: {
		routes: [
			components.manager
		]
	},
	3: {
		routes: [components.service1, components.service2]
	},
	4: {
		routes: [components.service1]
	},
	common: {
		routes: [
			{
				component: 'Home',
				url: '/',
				title: 'Home',
				icon: 'menu',
				module: 1
			},
			{
				component: 'Profile',
				url: '/profile',
				title: 'Profile',
				icon: 'menu',
				module: 1
			}
		]
	}
};

export { modules, rolesConfig };
