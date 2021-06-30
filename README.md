# Proyecto DashBoard

Este proyecto fue realizado con angular y esta publicado en https://jdelrio1980.github.io/dashboard/ de forma publica.

# Versiones Usadas
- Angular 9.1.15
- Firestore 6.1.15
- Angular/ Material 
- angular/cli                      9.1.15
- angular/fire                     6.1.5
- angular/material                 9.2.4
- ngtools/webpack                  9.1.15
- schematics/angular               9.1.15
- schematics/update                0.901.15
- rxjs                              6.5.5
- typescript                        3.8.3
- webpack                           4.42.0

# Configuracion del Proyecto Backed
- FrameWork: Laravel
- Lenguaje PHP
- Base de Datos: Mysql, Firestore
- Serrvidor de Desarrollo backend APACHE
# Configuración del Proyecto FrontEnd
- FrameWork: Angular 11
- Lenguaje: Typescript

# Componentes de Software (Backend)

## Validacionde Identidad con JWT 

- Se Desarrollo la API - RESTFULL desde cero. la cual me proporciona los servicio de validacion con JWT, Los usuarios estan registrados en una base de datos local en MYSQL, con encripcion de claves en md5
- Localmente se configuro un dominio virtual https://api-rest-laravel.com/
- Base de Datos: api-rest_laravel

##  Almacenamiwento en la Nube
La informacion acerca de las tareas esta localizada en los servicios en la nube Firestore, 

## Comoponentes de Software (FrontEnd)
- Signup: Se pueden crear usuarios que van para el sistema deidentidad con la clave correspondiente, el identidicador es el correo.
- Login: Usando el correo y la clave se puede accesar al sistema, asi como la funcionalidad de signoup, :a validacion del usuario en el sistema es atravez del token si esta presente en el local Storage.
- Creacion de Tareas: Formulario Reactivo que permite la captura de tareas haciendo la validacion de datos y enviando a la Basede datos firestore
- Dashboard: Visualizacionde un tablero con columnas verticales por estado de tarea, Uso de tecnologia Drag and Drop para arrastrar las tareas y cambiarles los estados



