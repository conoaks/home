set ansi_warnings on;
go

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

if object_id(N'dbo.patient', N'U') is not null
drop table dbo.patient;

create table dbo.patient
(
    pat_id smallint not null identity(1,1),
    pat_ssn int not null check(pat_ssn >= 100000000 and pat_ssn <= 999999999),
    pat_fname varchar(15) not null,
    pat_lname varchar(30) not null,
    pat_street varchar(30) not null,
    pat_city varchar(30) not null,
    pat_state char(2) not null default 'FL',
    pat_zip char(9) not null check(pat_zip like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
    pat_phone char(12) not null check(pat_phone like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
    pat_email varchar(100) not null,
    pat_dob date not null,
    pat_gender char(1) not null check (pat_gender in ('m', 'f')),
    pat_notes varchar(1000) null,
    primary key(pat_id),
    constraint ux_pat_ssn unique nonclustered(pat_ssn asc)
);

if object_id(N'dbo.medication', N'U') is not null
drop table dbo.medication;

create table dbo.medication
(
    med_id smallint not null identity(1,1),
    med_name varchar(30) not null,
    med_price decimal(8,2) not null,
    med_shelf_life date not null,
    med_notes varchar(255) null,
    primary key(med_id)
);

if object_id(N'dbo.prescription', N'U') is not null
drop table dbo.prescription;

create table dbo.prescription
(
    pre_id smallint not null identity(1,1),
    pat_id smallint not null,
    med_id smallint not null,
    pre_date date not null,
    pre_dosage varchar(255) not null,
    pre_num_refills varchar(255) not null,
    pre_notes varchar(255) null,
    primary key(pre_id),
    constraint ux_pat_id_med_id_pre_date unique nonclustered(pat_id asc, med_id asc, pre_date asc),
    constraint fk_prescription_patient 
        foreign key(pat_id) 
        references dbo.patient(pat_id)
        on delete no action
        on update cascade,
    constraint fk_prescription_medication
        foreign key(med_id)
        references dbo.medication(med_id)
        on delete no action
        on update cascade
);

if object_id(N'dbo.treatment', N'U') is not null
drop table dbo.treatment;

create table dbo.treatment
(
    trt_id smallint not null identity(1,1),
    trt_name varchar(30) not null,
    trt_price decimal(8,2) not null,
    trt_notes varchar(255) null,
    primary key(trt_id)
);

if object_id(N'dbo.physician', N'U') is not null
drop table dbo.physician;

create table dbo.physician
(
    phy_id smallint not null identity(1,1),
    phy_specialty varchar(25) not null,
    phy_fname varchar(15) not null,
    phy_lname varchar(30) not null,
    phy_street varchar(30) not null,
    phy_city varchar(30) not null,
    phy_state char(2) not null default 'FL',
    phy_zip char(9) not null check(phy_zip like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
    phy_phone char(10) not null check(phy_phone like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
    phy_fax char(10) not null check(phy_fax like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
    phy_email varchar(100) not null,
    phy_url varchar(100) null,
    phy_notes varchar(255) null,
    primary key(phy_id)
);

create table dbo.patient_treatment
(
    ptr_id smallint not null identity(1,1),
    pat_id smallint not null,
    phy_id smallint not null,
    trt_id smallint not null,
    ptr_date date not null,
    ptr_start time not null,
    ptr_end time not null,
    ptr_results varchar(255) not null,
    ptr_notes varchar(255) null,
    primary key(ptr_id),
    constraint ux_pat_id_phy_id_trt_id_ptr_date unique nonclustered(pat_id asc, phy_id asc, trt_id asc, ptr_date asc),
    constraint fk_patient_treatment_patient
        foreign key(pat_id)
        references dbo.patient(pat_id)
        on delete no action
        on update cascade,
    constraint fk_patient_treatment_physician
        foreign key(phy_id)
        references dbo.physician(phy_id)
        on delete no action
        on update cascade,
    constraint fk_patient_treatment_treatment
        foreign key(trt_id)
        references dbo.treatment(trt_id)
        on delete no action
        on update cascade
);

if object_id(N'dbo.administration_lu', N'U') is not null
drop table dbo.administration_lu;
go

create table dbo.administration_lu
(
    pre_id smallint not null,
    ptr_id smallint not null,
    primary key(pre_id, ptr_id),
    constraint fk_administration_lu_prescription
        foreign key(pre_id)
        references dbo.prescription(pre_id)
        on delete no action
        on update cascade,
    constraint fk_administration_lu_prescription_treatment
        foreign key(ptr_id)
        references dbo.patient_treatment(ptr_id)
        on delete no action
        on update no action
);

select * from information_schema.tables;

exec sp_msforeachtable "alter table ? nocheck constraint all";

insert into dbo.patient
(pat_ssn, pat_fname, pat_lname, pat_street, pat_city, pat_state, pat_zip, pat_phone, pat_email, pat_dob, pat_gender, pat_notes)
values
('123456789', 'Carla', 'Vanderbilt', '5133 3rd Road', 'Lake Worth', 'FL', '334908789', 5678901234,'csweeney@yahoo.com', '11-26-1961', 'F', NULL),
('789123488', 'Amanda', 'Lindell', '2241 W. Pensacola Street', 'Tallahassee', 'FL', '777678543', 6784929431, 'amc10c@my.fsu.edu', '04-04-1981', 'F', NULL),
('987456321', 'David', 'Stephens', '1293 Banana Code Drive', 'Panama City', 'FL', '323091234', 7705551234, 'mjowett@comcast.net', '1965-05-15', 'M', NULL),
('365214986', 'Chris', 'Thrombough', '987 Learning Drive', 'Tallahassee', 'FL', '323011234', 4408905678, 'landbeck@fsu.edu', '1969-08-09', 'M', NULL),
('326598236', 'Spencer', 'Moore', '787 Tharpe Road', 'Taliahassee', 'FL', '323061234', 7814929431, 'spencer@my.fsu.edu','1990-08-14','M', NULL);

insert into dbo.medication
(med_name, med_price, med_shelf_life, med_notes)
values
('Abilify',200.00,'09-23-2014',NULL),
('Aciphex',125.00,'06-24-2015',NULL),
('Actonel',250.00,'06-25-2016',NULL),
('Actoplus MET',412.00,'06-26-2017',NULL),
('Actos',89.00,'06-27-2018',NULL);

insert into dbo.prescription
(pat_id, med_id, pre_date, pre_dosage, pre_num_refills, pre_notes)
values
(1, 1, '2011-12-01', 'take one per day', '1',NULL),
(1, 2, '2004-12-31', 'take as needed', '2', NULL),
(2, 3, '1999-12-31', 'take two before and after dinner', '1', NULL),
(2, 4, '1999-07-31', 'take one per day', '2', NULL),
(3, 5, '2011-01-01', 'take as needed', '1', NULL);

insert into dbo.physician
(phy_specialty, phy_fname, phy_lname, phy_street, phy_city, phy_state, phy_zip, phy_phone, phy_fax, phy_email, phy_url, phy_notes)
values
('family medicine', 'tom', 'smith', '987 peach st', 'tampa', 'FL', '336101234', '9876543210', '7814909810', 'tsmith@gmail.com', 'tsmithfamilymed.com', NULL),
('internal medicine', 'steve', 'williams', '963 plum st', 'miami', 'FL', '435311234', '9657841234', '4049329189', 'swilliams@gmail.com', 'swiliamsmedicine.com', NULL), 
('pediatrician', 'ronald', 'burns', '645 wave circle', 'orlando', 'FL', '332149089', '7709871234', '5674329087', 'rburns@gmail.com', 'rburnspediactrics.com', NULL),
('psychiatrist', 'pete', 'roger', '1233 stadium circle', 'orlando', 'FL', '332147867', '5674321234', '9087651234', 'peteroger@gmail.com', 'progerpysch.com', NULL),
('dermatology', 'dave', 'roger', '645 hard drive', 'miami', 'FL', '545129089', '6785499012', '7818920980', 'droger@gmail.com', 'drogerderma.com', NULL);

insert into dbo.treatment
(trt_name, trt_price, trt_notes)
values
('knee replacement',2000.00,NULL),
('heart transplant',130000.00,NULL),
('hip replacement',40000.00, NULL),
('tonsils removed',5000.00,NULL),
('skin graft',2000.00,NULL);

insert into patient_treatment
(pat_id, phy_id, trt_id, ptr_date, ptr_start, ptr_end, ptr_results, ptr_notes)
values
(1,1,1,'2011-12-23','07:09:09','10:12:15','success patient is fine',NULL),
(1,2,2,'2011-12-24','08:08:09','11:12:13','complications patient will repeat procedure at a later time',NULL),
(2,3,3,'2011-12-25','09:08:09','12:12:15','died during surgery',NULL),
(2,4,4,'2011-12-26','10:09:10','13:12:15','success patient is fine',NULL),
(2,5,5,'2011-12-27','11:08:09','14:12:15','complications patient will repeat procedure at a later time', NULL);

insert into dbo.administration_lu
(pre_id, ptr_id)
values (1,1),(2,2),(3,3),(4,4),(5,5);

exec sp_msforeachtable "ALTER TABLE ? WITH CHECK CHECK CONSTRAINT all"
select * from dbo.patient;
select * from dbo.medication;
select * from dbo.prescription;
select * from dbo.physician;
select * from dbo.treatment;
select * from dbo.patient_treatment;
select * from dbo.administration_lu;

go


/* extra credit portion */

DELIMITER $$

create trigger trgAfterInsertEmp
after insert on employee
for each row
begin
    insert into employee_hist (
        emp_id, 
        eht_date, 
        eht_salary, 
        eht_action, 
        eht_notes
    )
    values (
        new.emp_id,
        curdate(),
        new.emp_salary,
        'INSERT',
        new.emp_notes
    );
end;
