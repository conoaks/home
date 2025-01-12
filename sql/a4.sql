use master;
go

if exists (select name from master.dbo.sysdatabases where name =N'cso22b')
drop database cso22b;
go

if not exists (select name from master.dbo.sysdatabases where name =N'cso22b')
create database cso22b;
go

use cso22b;
go

if object_id (N'dbo.petstore', N'u') is not null
drop table dbo.petstore;
go


create table dbo.petstore
(
	pst_id tinyint not null identity(1,1),
	pst_name varchar(30) not null,
	pst_street varchar(30) not null,
	pst_city varchar(30) not null,
	pst_state char(2) not null default 'AZ',
	pst_zip int not null check(pst_zip >=0 and pst_zip<=999999999),
	pst_phone bigint not null,
	pst_email varchar(100) not null,
	pst_url varchar(100) not null,
	pst_ytd_sales decimal(10,2) not null check (pst_ytd_sales >0),
	pst_notes varchar(255) null,
	primary key(pst_id)
);

INSERT INTO dbo.petstore 
(pst_name, pst_street, pst_city, pst_state, pst_zip, pst_phone, pst_email, pst_url, pst_ytd_sales, pst_notes)
VALUES
('Happy Paws', '123 Dogwood Lane', 'Orlando', 'FL', 32801, 4075551234, 'contact@happypaws.com', 'http://happypaws.com', 25000.50, 'Specializes in grooming and pet supplies'),
('Pet Palace', '456 Pet St', 'Miami', 'FL', 33101, 3055559876, 'info@petpalace.com', 'http://petpalace.com', 40000.75, 'Large store with variety of pet products'),
('Furry Friends', '789 Whiskers Ave', 'Tampa', 'FL', 33601, 8135554321, 'sales@furryfriends.com', 'http://furryfriends.com', 32000.90, 'Known for excellent pettomer service'),
('Pet Central', '101 Pet Plaza', 'Jacksonville', 'FL', 32201, 9045556543, 'contact@petcentral.com', 'http://petcentral.com', 27500.00, NULL),
('All Pets Supply', '202 Animal Blvd', 'Fort Lauderdale', 'FL', 33301, 9545553210, 'support@allpetsupply.com', 'http://allpetsupply.com', 36000.25, 'Provides pet food and accessories');


select * from dbo.petstore;

if object_id (N'dbo.pet',N'U') is not null
drop table dbo.pet;
go
create table dbo.pet
(
	pet_id smallint not null identity(1,1),
	pst_id tinyint not null,
	pet_type varchar(45) not null,
	pet_sex char(1) not null check(pet_sex in ('m','f')),
	pet_cost decimal(6,2) not null check(pet_cost >0),
	pet_price decimal(6,2) not null check(pet_price >0),
	pet_age smallint not null check(pet_age>0 and pet_age<=10500),
	pet_color varchar(30) not null,
	pet_sale_date date null,
	pet_vaccine char(1) not null check(pet_vaccine in ('y','n')),
	pet_neuter char(1) not null check(pet_neuter in ('y','n')),
	pet_notes varchar(255) null,
	primary key(pet_id),
	constraint fk_pet_petstore
	foreign key (pst_id)
	references dbo.petstore (pst_id)
	on delete cascade
	on update cascade
);

INSERT INTO dbo.pet 
(pst_id, pet_type, pet_sex, pet_cost, pet_price, pet_age, pet_color, pet_sale_date, pet_vaccine, pet_neuter, pet_notes)
VALUES
(1, 'Dog', 'm', 150.00, 300.00, 24, 'Brown', '2023-06-15', 'y', 'y', 'Friendly and playful'),
(2, 'Cat', 'f', 75.00, 150.00, 12, 'White', '2023-07-10', 'y', 'n', 'Loves to cuddle'),
(3, 'Parrot', 'm', 50.00, 100.00, 36, 'Green', NULL, 'y', 'n', 'Talkative and social'),
(4, 'Rabbit', 'f', 30.00, 60.00, 18, 'Gray', NULL, 'n', 'y', 'Good with kids'),
(5, 'Hamster', 'm', 10.00, 20.00, 6, 'Golden', '2023-08-20', 'n', 'n', 'Energetic and curious');

select * from dbo.pet;

select * from INFORMATION_SCHEMA.tables

exec sp_help 'dbo.pet';
