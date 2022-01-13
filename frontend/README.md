# Frontend
Para llevar acabo el despliegue del forntend, tendremos que seguir ciertos pasos.

Instalamos las dependencias del proyecto
```
npm install
```
Una vez instaladas, podremos ejecutar el frontend en modo desarrollo, mediante el siguiente comando
```
npm run serve
```
Este comando puede cambiar, ya que si no se le especifica la URL del backend, tomara por defecto la del `localhost`, para indicarle la URL, seria de al siguiente forma.
```
export VUE_APP_APIURL=http://example.com:4000 && npm run serve
```
Lo mismo sucede cuando quieres generar la build del proyecto.
```
npm run build

export VUE_APP_APIURL=http://example.com:4000 && npm run build
```

Si queremos ejecutar los tests, hay que tener en cuenta que es necesario tener ejecutado en segundo plano el backend (En modo test) y el frontend. El comando para los tests son dos, uno con interfaz gráfica y otro en consola.
```
npm run cypress:gui

npm run cypress:console
```