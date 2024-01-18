# pruebaTecnicaBlumonPay


# comandos basicos para el back end

```bash
# activar entorno virtual y crearlo

python -m venv entorno

# instalar django

pip install django

# crear nuevo proyecto de django

django-admin startproject nombre

# crear una nueva aplicación

python manage.py startapp nombre

# hacer las migraciones de una app en específico

python manage.py makemigrations app

# aplicar la migración

python manage.py migrate app
```

# comandos basicos para el front end (cliente)

```bash

# instalar las dependencias de la app

npm install

# ejecutar el proyecto de lado del cliente

npm start

# ejecutar el projecto en modo desarrollo

npm run dev

```


# correr el proyecto

```bash

# iniciar el back end

python manage.py runserver

# el back end estara por defecto en el puerto http://127.0.0.1:8000/

# para entrar como administrador del lado del back es necesario crear un superusuario con
# el siguiente comando e introduce los datos que piden, nombre, correo y contraseña

python manage.py createsuperuser

# para entrar a administrar entrar a la siguiente url http://127.0.0.1:8000/admin/
# aqui se puede agregar usuarios para la propia administracion

#para debuguear en el CRUD de tareas se puede acceder desde la url http://127.0.0.1:8000/tareas/api/v1/tareas/

#NOTA DOCUMENTACIÓN

#toda la documentación del back end se hizo con la libreria {django restframeword documentation}
#esto permite hacer la generación automática de toda la documentacion en la url http://127.0.0.1:8000/tareas/docs/

# ir al directorio cliente y escribir los siguientes comandos:

# instalar las dependencias que se necesitan para levantar el servidor
nmp install

# inciar el servidor
npm start

# el front estar por defecto en el puerto  http://localhost:5173/
```


