# Backend
Para llevar acabo el despliegue del backend, tendremos que seguir ciertos pasos.

Instalamos las dependencias del proyecto
```
npm install
```

Para ejecutarlo en modo desarrollo
```
npm run dev
```

Para generar una build
```
npm run build
```

Para iniciar el backend, hay que tener en cuenta que tiene dos modos, el modo normal, y el modo test, el cual es usado para hacer los tests del frontend.
```
npm run start

npm run start:test
```

Para ejecutar los tests del backend
```
npm run alltest
```
Para este punto no es necesario tener el backend en segundo plano, ya que daría problemas porque el puerto `4000` estaría ya en uso.