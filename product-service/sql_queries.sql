--create extension if not exists "uuid-ossp";

--create table products (
--	id uuid primary key default uuid_generate_v4(),
--	title text not null,
--	description text,
--	price integer
--)
--
--create table stocks (
--	product_id uuid primary key default uuid_generate_v4(),
--	count integer,
--	foreign key ("product_id") references "products" ("id")
--)

--insert into products (title, description, price) values 
--	('ProductOne','Short Product Description1',2.5),
--	('ProductTwo','Short Product Description2',3.5),
--	('ProductThree','Short Product Description3',4.5),
--	('ProductFour','Short Product Description4',5.5),
--	('ProductFive','Short Product Description5',6.5),
--	('ProductSix','Short Product Description6',7.5),
--	('ProductSeven','Short Product Description7',8.5)

insert into stocks (product_id, count) values
	('3b15e5e2-0969-487f-9175-48f96f056095', 2),
	('db806fe1-2e51-4830-98fb-3c4054bd56e7', 3),
	('984f503d-5145-4f68-9205-20a7a4be2503', 4),
	('59a580cb-5c34-4f2a-833a-b477d6024522', 5),
	('b24b20d8-b53d-49e9-9807-dc7a70af02dd', 6),
	('7f48120e-14d1-4d61-a1ef-f71fa117a9cb', 7),
	('059da058-eef8-473c-94dc-a8a630a1fda9', 8)