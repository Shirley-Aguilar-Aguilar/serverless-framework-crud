###   🔧 **Ejemplo de serverless framework**
Pasos:
* Instalamos serverless de manera global: npm install -g serverless
* Creamos un nuevo proyecto con template --template igual a aws-nodejs es decir basado en nodejs y le damos un nombre luego de --path. El comando entonces a usar seria: serverless create --template aws-nodejs --path aws-lambda-api
* El archivo .yml nos ayuda a definir como será desplegada nuestras funciones en aws lambda.
* Para probar localmente usamos el comando: serverless invoke local -f <<nombre de funcion>> por ejemplo: serverless invoke local -f hello
* Agregamos este comando a nuestro package.json. Para esto creamos el archivo package.json con el comando: npm init -y 
* De esta manera podemos desplegar nuestros cambios locales a aws lambda con el comando: npm run deploy