PGDMP  #    -                }            finca_laguna    17.4    17.4 h    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    22092    finca_laguna    DATABASE     r   CREATE DATABASE finca_laguna WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'es-MX';
    DROP DATABASE finca_laguna;
                     postgres    false            �           1247    22200    bill_statu_enum    TYPE     I   CREATE TYPE public.bill_statu_enum AS ENUM (
    'paid',
    'unpaid'
);
 "   DROP TYPE public.bill_statu_enum;
       public               postgres    false            r           1247    22122    breed_bovine_enum    TYPE     }   CREATE TYPE public.breed_bovine_enum AS ENUM (
    'holstein',
    'jersey',
    'gyrolandas',
    'carora',
    'gyrhol'
);
 $   DROP TYPE public.breed_bovine_enum;
       public               postgres    false            u           1247    22134    cattle_color_enum    TYPE     y   CREATE TYPE public.cattle_color_enum AS ENUM (
    'black and white',
    'red and white',
    'dark brown and white'
);
 $   DROP TYPE public.cattle_color_enum;
       public               postgres    false            o           1247    22116    client_type_enum    TYPE     M   CREATE TYPE public.client_type_enum AS ENUM (
    'company',
    'person'
);
 #   DROP TYPE public.client_type_enum;
       public               postgres    false            i           1247    22094    employees_position_enum    TYPE     �   CREATE TYPE public.employees_position_enum AS ENUM (
    'manager',
    'dairy_manager',
    'veterinarian',
    'transportation_manager',
    'worker',
    'pasture_manager'
);
 *   DROP TYPE public.employees_position_enum;
       public               postgres    false            ~           1247    22160    input_category_enum    TYPE     P   CREATE TYPE public.input_category_enum AS ENUM (
    'food',
    'vaccinate'
);
 &   DROP TYPE public.input_category_enum;
       public               postgres    false            �           1247    22166    movement_category_enum    TYPE     P   CREATE TYPE public.movement_category_enum AS ENUM (
    'income',
    'exit'
);
 )   DROP TYPE public.movement_category_enum;
       public               postgres    false            l           1247    22108    name_rol_enum    TYPE     e   CREATE TYPE public.name_rol_enum AS ENUM (
    'manager',
    'dairy_manager',
    'veterinarian'
);
     DROP TYPE public.name_rol_enum;
       public               postgres    false            �           1247    22172    payment_type_enum    TYPE     `   CREATE TYPE public.payment_type_enum AS ENUM (
    'employees_payroll',
    'payment_inputs'
);
 $   DROP TYPE public.payment_type_enum;
       public               postgres    false            �           1247    22194    sale_type_enum    TYPE     H   CREATE TYPE public.sale_type_enum AS ENUM (
    'cattel',
    'milk'
);
 !   DROP TYPE public.sale_type_enum;
       public               postgres    false            x           1247    22142 
   stage_enum    TYPE     {   CREATE TYPE public.stage_enum AS ENUM (
    'suckling calf',
    'weaned calf',
    'calves',
    'heifers',
    'cows'
);
    DROP TYPE public.stage_enum;
       public               postgres    false            {           1247    22154    statu_cattle_enum    TYPE     Y   CREATE TYPE public.statu_cattle_enum AS ENUM (
    'in service',
    'not in service'
);
 $   DROP TYPE public.statu_cattle_enum;
       public               postgres    false            �           1247    22178    treatment_enum    TYPE     Z   CREATE TYPE public.treatment_enum AS ENUM (
    'pospartum',
    'check',
    'deworm'
);
 !   DROP TYPE public.treatment_enum;
       public               postgres    false            �           1247    24579    user_statu_enum    TYPE     M   CREATE TYPE public.user_statu_enum AS ENUM (
    'activo',
    'inactivo'
);
 "   DROP TYPE public.user_statu_enum;
       public               postgres    false            �           1247    22186    vaccinate_enum    TYPE     \   CREATE TYPE public.vaccinate_enum AS ENUM (
    'aftosa',
    'clostridium',
    'mixed'
);
 !   DROP TYPE public.vaccinate_enum;
       public               postgres    false            �            1259    22260 
   assistance    TABLE     �   CREATE TABLE public.assistance (
    id_assistance integer NOT NULL,
    id_employee integer NOT NULL,
    entry_time time without time zone,
    departure_time time without time zone,
    hour time without time zone,
    date date
);
    DROP TABLE public.assistance;
       public         heap r       postgres    false            �            1259    22259    assistance_id_assistance_seq    SEQUENCE     �   ALTER TABLE public.assistance ALTER COLUMN id_assistance ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.assistance_id_assistance_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    236            �            1259    22286    bill    TABLE     l  CREATE TABLE public.bill (
    id_bill integer NOT NULL,
    id_client integer NOT NULL,
    id_user integer NOT NULL,
    id_production integer NOT NULL,
    date timestamp without time zone,
    sale_type public.sale_type_enum NOT NULL,
    amount_milk integer,
    id_medical integer,
    bill_statu public.bill_statu_enum NOT NULL,
    amount numeric(10,2)
);
    DROP TABLE public.bill;
       public         heap r       postgres    false    912    909            �            1259    22285    bill_id_bill_seq    SEQUENCE     �   ALTER TABLE public.bill ALTER COLUMN id_bill ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.bill_id_bill_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    244            �            1259    22230    cattle    TABLE     D  CREATE TABLE public.cattle (
    id_cattle integer NOT NULL,
    cattle_number integer,
    breed_bovine public.breed_bovine_enum NOT NULL,
    date_birth date,
    color public.cattle_color_enum NOT NULL,
    weight numeric(10,2),
    stage public.stage_enum NOT NULL,
    statu_cattle public.statu_cattle_enum NOT NULL
);
    DROP TABLE public.cattle;
       public         heap r       postgres    false    891    885    882    888            �            1259    22229    cattle_id_cattle_seq    SEQUENCE     �   ALTER TABLE public.cattle ALTER COLUMN id_cattle ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.cattle_id_cattle_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    226            �            1259    22224    client    TABLE     �  CREATE TABLE public.client (
    id_client integer NOT NULL,
    client_type public.client_type_enum NOT NULL,
    company_name character varying(50),
    first_name character varying(50),
    first_lasname character varying(50),
    document_number character varying(10),
    rif character varying(15),
    phone character varying(15),
    address character varying(100),
    email character varying(50)
);
    DROP TABLE public.client;
       public         heap r       postgres    false    879            �            1259    22223    client_id_client_seq    SEQUENCE     �   ALTER TABLE public.client ALTER COLUMN id_client ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.client_id_client_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    224            �            1259    22212    employee    TABLE     K  CREATE TABLE public.employee (
    id_employee integer NOT NULL,
    first_name character varying(50),
    middle_name character varying(50),
    first_lasname character varying(50),
    second_lasname character varying(50),
    document_number character varying(10),
    date_birth date,
    phone character varying(15),
    address character varying(100),
    contact_person character varying(15),
    contract_date date,
    "position" public.employees_position_enum NOT NULL,
    created_at timestamp without time zone NOT NULL,
    update_at timestamp without time zone NOT NULL
);
    DROP TABLE public.employee;
       public         heap r       postgres    false    873            �            1259    22211    employee_id_employee_seq    SEQUENCE     �   ALTER TABLE public.employee ALTER COLUMN id_employee ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.employee_id_employee_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    220            �            1259    22254    employee_payroll    TABLE        CREATE TABLE public.employee_payroll (
    id_payroll integer NOT NULL,
    id_assist integer NOT NULL,
    total_hour integer,
    total_payment numeric(10,2),
    week_start date,
    week_end date,
    created_at timestamp without time zone NOT NULL
);
 $   DROP TABLE public.employee_payroll;
       public         heap r       postgres    false            �            1259    22253    employee_payroll_id_payroll_seq    SEQUENCE     �   ALTER TABLE public.employee_payroll ALTER COLUMN id_payroll ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.employee_payroll_id_payroll_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    234            �            1259    22266    expenses    TABLE     X  CREATE TABLE public.expenses (
    id_expenses integer NOT NULL,
    id_employee integer NOT NULL,
    payment_date date NOT NULL,
    payment_type public.payment_type_enum NOT NULL,
    id_payroll integer,
    id_payment_input integer,
    created_at timestamp without time zone NOT NULL,
    update_at timestamp without time zone NOT NULL
);
    DROP TABLE public.expenses;
       public         heap r       postgres    false    900            �            1259    22265    expenses_id_expenses_seq    SEQUENCE     �   ALTER TABLE public.expenses ALTER COLUMN id_expenses ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.expenses_id_expenses_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    238            �            1259    22236    input    TABLE     �   CREATE TABLE public.input (
    id_input integer NOT NULL,
    input_category public.input_category_enum NOT NULL,
    name character varying(50),
    amount integer,
    expiration_date date
);
    DROP TABLE public.input;
       public         heap r       postgres    false    894            �            1259    22235    input_id_input_seq    SEQUENCE     �   ALTER TABLE public.input ALTER COLUMN id_input ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.input_id_input_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    228            �            1259    22242    input_movement    TABLE     O  CREATE TABLE public.input_movement (
    id_input_movement integer NOT NULL,
    id_input integer NOT NULL,
    movement_category public.movement_category_enum NOT NULL,
    amount integer,
    date timestamp without time zone,
    created_at timestamp without time zone NOT NULL,
    update_at timestamp without time zone NOT NULL
);
 "   DROP TABLE public.input_movement;
       public         heap r       postgres    false    897            �            1259    22241 $   input_movement_id_input_movement_seq    SEQUENCE     �   ALTER TABLE public.input_movement ALTER COLUMN id_input_movement ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.input_movement_id_input_movement_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    230            �            1259    22272    medical_record    TABLE     H  CREATE TABLE public.medical_record (
    id_medical integer NOT NULL,
    id_cattle integer NOT NULL,
    id_employee integer NOT NULL,
    id_input_movement integer NOT NULL,
    diagnosis text,
    treatment public.treatment_enum NOT NULL,
    vaccinate public.vaccinate_enum NOT NULL,
    date timestamp without time zone
);
 "   DROP TABLE public.medical_record;
       public         heap r       postgres    false    903    906            �            1259    22271    medical_record_id_medical_seq    SEQUENCE     �   ALTER TABLE public.medical_record ALTER COLUMN id_medical ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.medical_record_id_medical_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    240            �            1259    22280    milk_production    TABLE     �   CREATE TABLE public.milk_production (
    id_production integer NOT NULL,
    id_cattle integer NOT NULL,
    date date,
    number_liter numeric(10,2)
);
 #   DROP TABLE public.milk_production;
       public         heap r       postgres    false            �            1259    22279 !   milk_production_id_production_seq    SEQUENCE     �   ALTER TABLE public.milk_production ALTER COLUMN id_production ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.milk_production_id_production_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    242            �            1259    22248    payment_input    TABLE       CREATE TABLE public.payment_input (
    id_payment_input integer NOT NULL,
    id_input integer NOT NULL,
    amount numeric(10,2),
    payment_date timestamp without time zone,
    created_at timestamp without time zone NOT NULL,
    update_at timestamp without time zone NOT NULL
);
 !   DROP TABLE public.payment_input;
       public         heap r       postgres    false            �            1259    22247 "   payment_input_id_payment_input_seq    SEQUENCE     �   ALTER TABLE public.payment_input ALTER COLUMN id_payment_input ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.payment_input_id_payment_input_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    232            �            1259    22218    rol    TABLE     e   CREATE TABLE public.rol (
    id_rol integer NOT NULL,
    name_rol public.name_rol_enum NOT NULL
);
    DROP TABLE public.rol;
       public         heap r       postgres    false    876            �            1259    22217    rol_id_rol_seq    SEQUENCE     �   ALTER TABLE public.rol ALTER COLUMN id_rol ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.rol_id_rol_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    222            �            1259    22206    user    TABLE     ~  CREATE TABLE public."user" (
    id_user integer NOT NULL,
    password character varying(20),
    first_name character varying(50),
    first_lasname character varying(50),
    email character varying(50) NOT NULL,
    phone character varying(15) NOT NULL,
    rol integer,
    created_at timestamp without time zone NOT NULL,
    update_at timestamp without time zone NOT NULL
);
    DROP TABLE public."user";
       public         heap r       postgres    false            �            1259    22205    user_id_user_seq    SEQUENCE     �   ALTER TABLE public."user" ALTER COLUMN id_user ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.user_id_user_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    218            �          0    22260 
   assistance 
   TABLE DATA           h   COPY public.assistance (id_assistance, id_employee, entry_time, departure_time, hour, date) FROM stdin;
    public               postgres    false    236   �       �          0    22286    bill 
   TABLE DATA           �   COPY public.bill (id_bill, id_client, id_user, id_production, date, sale_type, amount_milk, id_medical, bill_statu, amount) FROM stdin;
    public               postgres    false    244   k�       �          0    22230    cattle 
   TABLE DATA           x   COPY public.cattle (id_cattle, cattle_number, breed_bovine, date_birth, color, weight, stage, statu_cattle) FROM stdin;
    public               postgres    false    226   �       �          0    22224    client 
   TABLE DATA           �   COPY public.client (id_client, client_type, company_name, first_name, first_lasname, document_number, rif, phone, address, email) FROM stdin;
    public               postgres    false    224   �       �          0    22212    employee 
   TABLE DATA           �   COPY public.employee (id_employee, first_name, middle_name, first_lasname, second_lasname, document_number, date_birth, phone, address, contact_person, contract_date, "position", created_at, update_at) FROM stdin;
    public               postgres    false    220   X�       �          0    22254    employee_payroll 
   TABLE DATA           ~   COPY public.employee_payroll (id_payroll, id_assist, total_hour, total_payment, week_start, week_end, created_at) FROM stdin;
    public               postgres    false    234   �       �          0    22266    expenses 
   TABLE DATA           �   COPY public.expenses (id_expenses, id_employee, payment_date, payment_type, id_payroll, id_payment_input, created_at, update_at) FROM stdin;
    public               postgres    false    238   ��       �          0    22236    input 
   TABLE DATA           X   COPY public.input (id_input, input_category, name, amount, expiration_date) FROM stdin;
    public               postgres    false    228   k�       �          0    22242    input_movement 
   TABLE DATA           }   COPY public.input_movement (id_input_movement, id_input, movement_category, amount, date, created_at, update_at) FROM stdin;
    public               postgres    false    230   �       �          0    22272    medical_record 
   TABLE DATA           �   COPY public.medical_record (id_medical, id_cattle, id_employee, id_input_movement, diagnosis, treatment, vaccinate, date) FROM stdin;
    public               postgres    false    240   ��       �          0    22280    milk_production 
   TABLE DATA           W   COPY public.milk_production (id_production, id_cattle, date, number_liter) FROM stdin;
    public               postgres    false    242   Ȓ       �          0    22248    payment_input 
   TABLE DATA           p   COPY public.payment_input (id_payment_input, id_input, amount, payment_date, created_at, update_at) FROM stdin;
    public               postgres    false    232   Q�       �          0    22218    rol 
   TABLE DATA           /   COPY public.rol (id_rol, name_rol) FROM stdin;
    public               postgres    false    222   ړ       �          0    22206    user 
   TABLE DATA           x   COPY public."user" (id_user, password, first_name, first_lasname, email, phone, rol, created_at, update_at) FROM stdin;
    public               postgres    false    218   �       �           0    0    assistance_id_assistance_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.assistance_id_assistance_seq', 9, true);
          public               postgres    false    235            �           0    0    bill_id_bill_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.bill_id_bill_seq', 3, true);
          public               postgres    false    243            �           0    0    cattle_id_cattle_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.cattle_id_cattle_seq', 10, true);
          public               postgres    false    225            �           0    0    client_id_client_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.client_id_client_seq', 7, true);
          public               postgres    false    223            �           0    0    employee_id_employee_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.employee_id_employee_seq', 6, true);
          public               postgres    false    219            �           0    0    employee_payroll_id_payroll_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.employee_payroll_id_payroll_seq', 6, true);
          public               postgres    false    233            �           0    0    expenses_id_expenses_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.expenses_id_expenses_seq', 9, true);
          public               postgres    false    237            �           0    0    input_id_input_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.input_id_input_seq', 6, true);
          public               postgres    false    227            �           0    0 $   input_movement_id_input_movement_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('public.input_movement_id_input_movement_seq', 6, true);
          public               postgres    false    229            �           0    0    medical_record_id_medical_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.medical_record_id_medical_seq', 10, true);
          public               postgres    false    239            �           0    0 !   milk_production_id_production_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.milk_production_id_production_seq', 15, true);
          public               postgres    false    241            �           0    0 "   payment_input_id_payment_input_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.payment_input_id_payment_input_seq', 6, true);
          public               postgres    false    231            �           0    0    rol_id_rol_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.rol_id_rol_seq', 3, true);
          public               postgres    false    221            �           0    0    user_id_user_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.user_id_user_seq', 6, true);
          public               postgres    false    217            �           2606    22264    assistance assistance_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.assistance
    ADD CONSTRAINT assistance_pkey PRIMARY KEY (id_assistance);
 D   ALTER TABLE ONLY public.assistance DROP CONSTRAINT assistance_pkey;
       public                 postgres    false    236            �           2606    22290    bill bill_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.bill
    ADD CONSTRAINT bill_pkey PRIMARY KEY (id_bill);
 8   ALTER TABLE ONLY public.bill DROP CONSTRAINT bill_pkey;
       public                 postgres    false    244            �           2606    22234    cattle cattle_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.cattle
    ADD CONSTRAINT cattle_pkey PRIMARY KEY (id_cattle);
 <   ALTER TABLE ONLY public.cattle DROP CONSTRAINT cattle_pkey;
       public                 postgres    false    226            �           2606    22228    client client_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_pkey PRIMARY KEY (id_client);
 <   ALTER TABLE ONLY public.client DROP CONSTRAINT client_pkey;
       public                 postgres    false    224            �           2606    22258 &   employee_payroll employee_payroll_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.employee_payroll
    ADD CONSTRAINT employee_payroll_pkey PRIMARY KEY (id_payroll);
 P   ALTER TABLE ONLY public.employee_payroll DROP CONSTRAINT employee_payroll_pkey;
       public                 postgres    false    234            �           2606    22216    employee employee_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (id_employee);
 @   ALTER TABLE ONLY public.employee DROP CONSTRAINT employee_pkey;
       public                 postgres    false    220            �           2606    22270    expenses expenses_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.expenses
    ADD CONSTRAINT expenses_pkey PRIMARY KEY (id_expenses);
 @   ALTER TABLE ONLY public.expenses DROP CONSTRAINT expenses_pkey;
       public                 postgres    false    238            �           2606    22246 "   input_movement input_movement_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public.input_movement
    ADD CONSTRAINT input_movement_pkey PRIMARY KEY (id_input_movement);
 L   ALTER TABLE ONLY public.input_movement DROP CONSTRAINT input_movement_pkey;
       public                 postgres    false    230            �           2606    22240    input input_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.input
    ADD CONSTRAINT input_pkey PRIMARY KEY (id_input);
 :   ALTER TABLE ONLY public.input DROP CONSTRAINT input_pkey;
       public                 postgres    false    228            �           2606    22278 "   medical_record medical_record_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.medical_record
    ADD CONSTRAINT medical_record_pkey PRIMARY KEY (id_medical);
 L   ALTER TABLE ONLY public.medical_record DROP CONSTRAINT medical_record_pkey;
       public                 postgres    false    240            �           2606    22284 $   milk_production milk_production_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public.milk_production
    ADD CONSTRAINT milk_production_pkey PRIMARY KEY (id_production);
 N   ALTER TABLE ONLY public.milk_production DROP CONSTRAINT milk_production_pkey;
       public                 postgres    false    242            �           2606    22252     payment_input payment_input_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.payment_input
    ADD CONSTRAINT payment_input_pkey PRIMARY KEY (id_payment_input);
 J   ALTER TABLE ONLY public.payment_input DROP CONSTRAINT payment_input_pkey;
       public                 postgres    false    232            �           2606    22222    rol rol_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.rol
    ADD CONSTRAINT rol_pkey PRIMARY KEY (id_rol);
 6   ALTER TABLE ONLY public.rol DROP CONSTRAINT rol_pkey;
       public                 postgres    false    222            �           2606    22210    user user_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id_user);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public                 postgres    false    218            �           2606    22296 &   assistance assistance_id_employee_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.assistance
    ADD CONSTRAINT assistance_id_employee_fkey FOREIGN KEY (id_employee) REFERENCES public.employee(id_employee);
 P   ALTER TABLE ONLY public.assistance DROP CONSTRAINT assistance_id_employee_fkey;
       public               postgres    false    220    236    4808            �           2606    22321    bill bill_id_client_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bill
    ADD CONSTRAINT bill_id_client_fkey FOREIGN KEY (id_client) REFERENCES public.client(id_client);
 B   ALTER TABLE ONLY public.bill DROP CONSTRAINT bill_id_client_fkey;
       public               postgres    false    244    4812    224            �           2606    22341    bill bill_id_medical_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bill
    ADD CONSTRAINT bill_id_medical_fkey FOREIGN KEY (id_medical) REFERENCES public.medical_record(id_medical);
 C   ALTER TABLE ONLY public.bill DROP CONSTRAINT bill_id_medical_fkey;
       public               postgres    false    240    244    4828            �           2606    22331    bill bill_id_production_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bill
    ADD CONSTRAINT bill_id_production_fkey FOREIGN KEY (id_production) REFERENCES public.milk_production(id_production);
 F   ALTER TABLE ONLY public.bill DROP CONSTRAINT bill_id_production_fkey;
       public               postgres    false    242    244    4830            �           2606    22326    bill bill_id_user_fkey    FK CONSTRAINT     {   ALTER TABLE ONLY public.bill
    ADD CONSTRAINT bill_id_user_fkey FOREIGN KEY (id_user) REFERENCES public."user"(id_user);
 @   ALTER TABLE ONLY public.bill DROP CONSTRAINT bill_id_user_fkey;
       public               postgres    false    244    218    4806            �           2606    22311 0   employee_payroll employee_payroll_id_assist_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.employee_payroll
    ADD CONSTRAINT employee_payroll_id_assist_fkey FOREIGN KEY (id_assist) REFERENCES public.assistance(id_assistance);
 Z   ALTER TABLE ONLY public.employee_payroll DROP CONSTRAINT employee_payroll_id_assist_fkey;
       public               postgres    false    234    236    4824            �           2606    22306 '   expenses expenses_id_payment_input_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.expenses
    ADD CONSTRAINT expenses_id_payment_input_fkey FOREIGN KEY (id_payment_input) REFERENCES public.payment_input(id_payment_input);
 Q   ALTER TABLE ONLY public.expenses DROP CONSTRAINT expenses_id_payment_input_fkey;
       public               postgres    false    232    4820    238            �           2606    22301 !   expenses expenses_id_payroll_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.expenses
    ADD CONSTRAINT expenses_id_payroll_fkey FOREIGN KEY (id_payroll) REFERENCES public.employee_payroll(id_payroll);
 K   ALTER TABLE ONLY public.expenses DROP CONSTRAINT expenses_id_payroll_fkey;
       public               postgres    false    238    4822    234            �           2606    22361 +   input_movement input_movement_id_input_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.input_movement
    ADD CONSTRAINT input_movement_id_input_fkey FOREIGN KEY (id_input) REFERENCES public.input(id_input);
 U   ALTER TABLE ONLY public.input_movement DROP CONSTRAINT input_movement_id_input_fkey;
       public               postgres    false    230    228    4816            �           2606    22346 ,   medical_record medical_record_id_cattle_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.medical_record
    ADD CONSTRAINT medical_record_id_cattle_fkey FOREIGN KEY (id_cattle) REFERENCES public.cattle(id_cattle);
 V   ALTER TABLE ONLY public.medical_record DROP CONSTRAINT medical_record_id_cattle_fkey;
       public               postgres    false    226    4814    240            �           2606    22351 .   medical_record medical_record_id_employee_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.medical_record
    ADD CONSTRAINT medical_record_id_employee_fkey FOREIGN KEY (id_employee) REFERENCES public.employee(id_employee);
 X   ALTER TABLE ONLY public.medical_record DROP CONSTRAINT medical_record_id_employee_fkey;
       public               postgres    false    220    4808    240            �           2606    22356 4   medical_record medical_record_id_input_movement_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.medical_record
    ADD CONSTRAINT medical_record_id_input_movement_fkey FOREIGN KEY (id_input_movement) REFERENCES public.input_movement(id_input_movement);
 ^   ALTER TABLE ONLY public.medical_record DROP CONSTRAINT medical_record_id_input_movement_fkey;
       public               postgres    false    240    4818    230            �           2606    22336 .   milk_production milk_production_id_cattle_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.milk_production
    ADD CONSTRAINT milk_production_id_cattle_fkey FOREIGN KEY (id_cattle) REFERENCES public.cattle(id_cattle);
 X   ALTER TABLE ONLY public.milk_production DROP CONSTRAINT milk_production_id_cattle_fkey;
       public               postgres    false    226    242    4814            �           2606    22316 )   payment_input payment_input_id_input_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.payment_input
    ADD CONSTRAINT payment_input_id_input_fkey FOREIGN KEY (id_input) REFERENCES public.input(id_input);
 S   ALTER TABLE ONLY public.payment_input DROP CONSTRAINT payment_input_id_input_fkey;
       public               postgres    false    228    4816    232            �           2606    22291    user user_rol_fkey    FK CONSTRAINT     q   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_rol_fkey FOREIGN KEY (rol) REFERENCES public.rol(id_rol);
 >   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_rol_fkey;
       public               postgres    false    218    4810    222            �   t   x���Q�0�o�.���)��p�s�ي�6�~XՓ�r�rNgpzUs5����r�P?2���R`Cg��wYQ���3Ȁ����i�E��dN6��~��KgQ��O�r}��+,B�      �   f   x�Eͻ�0��ڞ"�m!C0A$�C4�����?���Sh�`�" C�܎�4S��^��z� +��g��.R��c�g70In&�&jd��.�      �     x�u�A��0E��\ ��]�ICZ2� �����vA#�,P���B$�q^�� Q�@��6j3��w�ڻ�B�X(3�38��6<����	?6����(P	�l��V
�F�K�.��
�/���RB�Ð�´�]Pu�z��%�i�wy�U`t���L�y2�Ģ<N��^1OT�a��J��b����F����:K$b�
a!�('4;����Ŝki������Y�Ds\T˚S�6���~���D���h=>�#v#�Ǘߚ_��Pj#��0:�8}-�,�w��C      �   9  x��лn�0��y
?@�|���Ԋ�2UL,�*����	Ry��$m3tF�r|�?��H����4g,8�@w>b:�����Y�jQ#�*ʄTh�Ls��η�v>ǯ�O6 ��M4��|o��"yCi+�v��E+A�y_W���3z;"��i�.��o�Y���S���"\o#�)˓�%��ogb�̼�Ԩ&�F%�RV�M��?L;$t�4k#fm��m���=%T�?UF�$!��/X�S��q����"f��/�Fу���\8�	�&�b�s����<B�u���Gp����3�����`�,˾�3�E      �   �  x����J1��s��<@#��f��N�hE��"
e<lڳ���m�O�ID������&3���T'bu��?(�\�e�c�WW��{m:��0�2� ����3��.ؾW�>�4ӻ�g�|OLmՠ�u
���w៑�W۠_<��!c�����
Ne;/��>є*�E�k�� ��������z��j�7۲>ɛ4��D�6�ɨ�ʑ��6Q��7�v�����Ug�35��e����Ri�	���~>+y,�xQ����Z����9e�D���NHk9�/q��{z���g�L��?@pͱh��Vd����3�y�"�l#�m��Ol��9��o�$�xS��pC,�-M�@ %-�O�j�,�6Y'
jfʻ��3ͩ�=� ~��S'�B<�+���k�1�\��r�"ׇCc���"�#Z[傓 Hݞr��V���B��      �   r   x���Q
�@D�gO��8��M�����BZZ؏��1����0�!4��BƁ!�b�A��s7����f hH=���h^X����
�{�(�'����\ف ��[v����n+��[koA�      �   �   x����
�@E�3_��$���[
��,
��v�ߛj�`����9�sC�#[ r*�]Վ1�ew�mUI<?p�8\����C�`�D�����V&m��Ĳ�?@{�4�]�!$t%�:6C�h��п]$r���:`��~]���E�\ �=�$+��~ϵ[g����\ŏ���u�S>��'_�-�ZO����      �   �   x�M�1
�0Eg������iג�c���R��SC(�����U����u!v^s����H"��&>bR�ؕXH,��=��$b�Ǟq����>�Nc$��ƴ�V����Y�Gel�I���d�Ҧ�H��낈_�k5�      �   �   x���1�0��9E/���;&U�:t �OԦ�,A�d[O_���}�0C�m&��O߹�L`�K��a@��D�������bTu�C�]�j�V��vT.�nHiq�-j��5��"�#���uN)} ��f[      �     x��S�n�0<�_�? ��-��s�=���͢������$��mZ�!�&gv6ʨ^>����`�3��i�; s�ם�'�'j� �8��݉��G
�[%ǆ�j�dU��McL�{���Z�^u�+�_pH��9�[��0x��SO��o�uw��A�	b]�u�Ha�0{�cс��F`K!���c��'Z���_����%��4e��Ѧ1=}0}�ۨM�c���'~�8�$���e� ���>�2"���DQ��-a�N�1a��/�⌢��E�FN�%�S���sH��it	G����Ç�7�u���w�MQ�Uۂ��b�$WE^��:p�I��sb
V����Ef��	�W�Bi�� U�N�
�'zN�o��<���]�^<��w6��U����sj��j_�e`�9t�)z��j.!����c��.I�y%�HK��d%������܇�❺+��^zG!r\J	^$�7�.�����|^����]ο+R�V����H\�_s�*�RI���UB+
��g��Lw��k�Z�~c�@J      �   y   x�U���@���KL��%������`�|�}��c��a���hpYn;�SN��?W���*J��*
���[E�;s<����I����� Z���
��Ѳ����u��������5\      �   y   x���K1C��s"�	C�����h�QWݤ�=�Fc�&�;�����]8�+7j��j���C*2YƜ.&��W���˨\mڭ'Tq;MǾ
���qѹ��~���1�k)���]�      �   /   x�3��M�KLO-�2�LI�,����9�RKR�2��2�b���� f�      �     x���;k�@��կH-bq���*�!`���a��C��"��9IqCT�p��{3B�1������݆!�+��tL'�����9X�|� L�Ц����Hnߐ~B��5�!j�bU��C�/.G����Ƌ��n���n���������c/�����̓��ğb���Iak��k�!���rI܇�e8�.eӬ�,�O�$�4�=̓���K��>Aps�e^T�G$�Lk��CꎋUӖ_�*�_ȒCNQ�J��TMUU���N     