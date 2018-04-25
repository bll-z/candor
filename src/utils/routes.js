const routes = [
	{ path: '/home', title: 'Home', order: 1 },
	{ path: '/company-profile', title: 'Company Profile', order: 2 },
	{ path: '/warehousing-and-distribution', title: 'Warehousing', order: 3, group: 'Services' },
	{ path: '/ltl-shipments', title: 'LTL Shipments', order: 3, group: 'Services' },
	{ path: '/rigging', title: 'Rigging', order: 3, group: 'Services' },
	{ path: '/container-services', title: 'Container Services', order: 3, group: 'Services' },
	{ path: '/carrier-services', title: 'Carrier Services', order: 3, group: 'Services' },
	{ path: '/transportation-services', title: 'Transportation Services', order: 3, group: 'Services' },
	{ path: '/contact-us', title: 'Contact Us', order: 4 },
	{ path: '/login', title: 'Login', order: 5 },
];

export default routes;
