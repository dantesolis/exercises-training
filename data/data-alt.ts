// generated using http://json-schema-faker.js.org/#gist/288ab14be1966c88632961ec7deab230/0.4.2

export interface SXAccount {
	id: string;
	firstName: string;
	lastName: string;
	country: string;
	salary: number;
	phones: string[];
}

const accounts: SXAccount[] = [
	{
		"id": "adcf0e4a-b4dc-43fe-a6c4-f3f694fdd465",
		"firstName": "Eleanore",
		"lastName": "Koch",
		"country": "France",
		"salary": 1028.04,
		"phones": []
	},
	{
		"id": "472c7479-3dd6-49eb-8eb2-3b698795df85",
		"firstName": "Obie",
		"lastName": "Kiehn",
		"country": "United Kingdom",
		"salary": 3999.74,
		"phones": [
			"1-112-085-8637 x339",
			"812-881-7240 x39761",
			"(322) 277-5485"
		]
	},
	{
		"id": "a2d7afdc-9e1f-453f-81bd-75da7d83ddaa",
		"firstName": "Alysha",
		"lastName": "Okuneva",
		"country": "United Kingdom",
		"salary": 2114.03,
		"phones": []
	},
	{
		"id": "85bfc779-5887-4c8a-9784-6371659ef8d5",
		"firstName": "Adelle",
		"lastName": "Crist",
		"country": "United States",
		"salary": 3476.46,
		"phones": []
	},
	{
		"id": "895df141-04fd-4023-a5ba-b89e42f61de1",
		"firstName": "Wanda",
		"lastName": "Rowe",
		"country": "Germany",
		"salary": 6664.21,
		"phones": [
			"729.010.6314 x17437",
			"629-621-5333 x5929",
			"1-561-292-1573 x36712"
		]
	},
	{
		"id": "89b1c2cf-ab39-49ed-9883-250946dffad5",
		"firstName": "Burley",
		"lastName": "Koch",
		"country": "United States",
		"salary": 4396.15,
		"phones": [
			"998-803-4517",
			"1-037-312-3746 x934"
		]
	},
	{
		"id": "5c4fc119-a573-4b96-8c3b-4b0ffe3810e5",
		"firstName": "Lonie",
		"lastName": "Fay",
		"country": "United Kingdom",
		"salary": 1067.46,
		"phones": []
	},
	{
		"id": "c021adaa-713f-486e-a601-93c2c8cf00c7",
		"firstName": "Nelson",
		"lastName": "Marquardt",
		"country": "United States",
		"salary": 6840.15,
		"phones": [
			"(893) 775-6690 x4491",
			"(534) 886-5946",
			"940-635-5386 x8924"
		]
	},
	{
		"id": "2839573a-29d2-4d3f-8f3f-05047d9a0445",
		"firstName": "Jerrod",
		"lastName": "Beer",
		"country": "France",
		"salary": 8399.58,
		"phones": [
			"751.960.4754 x707",
			"823.969.4703 x99218",
			"(624) 905-7691 x3998"
		]
	},
	{
		"id": "a62f73c8-2542-4356-9bfc-89e25f20d678",
		"firstName": "Lucas",
		"lastName": "Luettgen",
		"country": "France",
		"salary": 5859.55,
		"phones": [
			"206-237-7979 x910",
			"394-929-2635 x10605",
			"500-166-8715"
		]
	},
	{
		"id": "ad7fea56-16a0-4915-b730-7d5e17e57873",
		"firstName": "Lia",
		"lastName": "Johnson",
		"country": "France",
		"salary": 4946.64,
		"phones": [
			"(123) 137-7143"
		]
	},
	{
		"id": "441ba1ea-9ca7-4438-a94c-4c0a0646efc2",
		"firstName": "Howell",
		"lastName": "Little",
		"country": "France",
		"salary": 8082.44,
		"phones": []
	}
];

const getAccountById: (id: string) => SXAccount
	= id => accounts.find(el => el.id === id);

const getAccounts: () => SXAccount[]
	= () => accounts;

const getAccountsByCountry: (country: string) => SXAccount[]
	= country => accounts.filter(el => el.country === country);

export default {
	getAccountById,
	getAccounts,
	getAccountsByCountry,
}
