# INSTRUCCIONES

## Con Docker
1. Clonar el proyecto en vuestro local.
2. En el directorio del proyecto, ejecutar `docker build -t monedero_app .` para crear la imagen del proyecto.
3. Una vez creada la imagen, ejecutar `docker run -it --rm -p 3000:3000 monedero_app` para crear el contenedor del proyecto y poder ejecutarlo en el puerto 3000.
4. El proyecto debería de estar corriendo ya en el puerto 3000 (http://localhost:3000).

## Sin Docker
1. Clonar el repo en vuestro local.
2. Ir al directorio del proyecto e instalar las dependencias con `npm install`.
3. Opcionalmente, antes de arrancar el proyecto podéis testearlo con 2 pruebas muy simples mediante el comando `npm test`.
4. Arrancar el proyecto con `npm start`.
5. El proyecto debería estar corriendo (http://localhost:3000).

### Notas
- El proyecto no tiene API, por lo que es una simple demo de entrada a la aplicación y de envío de dinero súper sencilla con react, hooks y redux.
- Es un diseño rápido y sencillo pero completamente responsive.
