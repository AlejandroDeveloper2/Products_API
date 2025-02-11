# Comandos para crear un proyecto de Node JS, Express, Prisma y Typescript

## Inicialización del Proyecto

1. **Comando para inicializar proyecto de Node (crea el `package.json`):**
   ```bash
   npm -y init
   ```

2. **Comando para instalar Node JS en el proyecto:**
   ```bash
   npm install
   ```

3. **Comando para instalar TypeScript:**
   ```bash
   npm i typescript --save-dev
   ```
   O
   ```bash
   npm i -D typescript
   ```

4. **Comando para crear archivo de configuración de TypeScript (`tsconfig.json`):**
   ```bash
   tsc --init
   ```

## Dependencias de Desarrollo

5. **Comando para instalar dependencias de desarrollo necesarias:**
   ```bash
   npm i -D nodemon ts-node
   ```

## Dependencias Necesarias

6. **Comando para instalar dependencias necesarias:**
   ```bash
   npm i express cors @prisma/client prisma tsconfig-paths dotenv
   ```

7. **Comando para instalar tipos de cada dependencia:**
   ```bash
   npm i -D @types/express @types/cors @types/dotenv @types/node
   ```

---

# Comandos para Prisma
1. **Comando para inicializar Prisma en el proyecto:**
   ```bash
   npx prisma init
   ```
   
2. **Comando para ejecutar migraciones:**
**Nota:** Después de crear la base de datos y de haber definido el modelo en el archivo de schema.prisma
   ```bash
   npx prisma migrate dev --name init
   ```

4. **Comando para generar el cliente de Prisma:**
   ```bash
   npx prisma generate
   ```

5. **Comando para ejecutar la herramienta Prisma Studio:**
   ```bash
   npx prisma studio
   ```
   ---

# Configuraciones  adicionales
1. **Configuración del archivo tsconfig.json:**
	**Nota:** para los paths tienes que haber creado la estructura de carpetas del proyecto.
	
	**Imagen de estructura:**
	![enter image description here](https://res.cloudinary.com/dym53oxov/image/upload/v1739067721/a8caxkhajwy1mnmq7kcf.png)
   ```bash
   {
	   "compilerOptions":  {
		   "module":  "commonjs",
		   "rootDir":  "./",
		   "baseUrl":  "./",
		   "paths":  {
				"@config/*":["src/config/*"],
				"@controllers/*":["src/controllers/*"],
				"@interfaces/*":["src/types/*"],
				"@routes/*":["src/routes/*"],
				"@utils/*":["src/utils/*"],
				"@services/*":["src/services/*"],
				"@middleware/*":["src/middleware/*"],
				"@models/*":["src/models/*"],
			},
			"esModuleInterop":  true,
			"forceConsistentCasingInFileNames":  true,
			"strict":  true,
			"skipLibCheck":  true,
			"resolveJsonModule":  true,
	   },
      "ts-node": {
         "require": ["tsconfig-paths/register"]
      }
   }
   ```
3. **Configuración del script para ejecutar el proyecto en modo desarrollo en el archivo package.json :**
```bash
	{
		"scripts":  {
			"dev":  "nodemon src/index.ts"
		}
	}
```
