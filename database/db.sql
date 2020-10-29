-- Creando la base de datos
CREATE DATABASE crudnodejsmysql;

-- Utilizando la base de datos
USE crudnodejsmysql;

-- Creando una tabla
CREATE TABLE reg_Clientes(
    Documento INT(8) UNSIGNED PRIMARY KEY,
    Nombres VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Celular VARCHAR(50)
);
-- Creando tabla recarga billetera
CREATE TABLE rec_Billet(
    Documento INT(8) UNSIGNED PRIMARY KEY,
    Num_Celular VARCHAR(50),
    Valor FLOAT(10, 2) NOT NULL
);

-- Mostrar las tablas
SHOW TABLES;

-- Describir las tablas
DESCRIBE reg_Clientes;
DESCRIBE rec_Billet;
