# SwimmingShop | Proyecto Final TUDAI 2026

Proyecto de e-commerce especializado en insumos de natación, desarrollado para la cátedra de Seminario de la carrera TUDAI (UNICEN).

## Descripción del Proyecto
Aplicación web desarrollada en Angular enfocada en la gestión de catálogo y ventas. Permite a los usuarios visualizar productos, gestionar su carrito de compras y realizar transacciones que actualizan el inventario en tiempo real.

## Características Técnicas
* **Arquitectura:** Basada en componentes y servicios compartidos.
* **Reactividad:** Gestión de estado global mediante `BehaviorSubject` (RxJS).
* **Persistencia:** Consumo de API externa (MockAPI) mediante métodos HTTP (GET para listado, PUT para actualización de stock).
* **Manejo de Errores:** Implementación de bloques `catchError` y estados de carga (UX) para garantizar la robustez.
* **Limpieza:** Gestión manual de suscripciones (`ngOnDestroy`) para evitar fugas de memoria.

## Integrante
* **Nombre:** D'Annunzio Julieta
* **DNI:** 39550725

## Instrucciones para el Docente
Para visualizar el proyecto:
1. **Acceso rápido:** [Click aquí para abrir en StackBlitz](https://stackblitz.com/~/github.com/julidann/Seminario_Angular_2026)
2. **Ejecución local:**
   - Clonar el repositorio: `git clone https://github.com/julidann/Seminario_Angular_2026.git`
   - Instalar dependencias: `npm install`
   - Iniciar servidor: `ng serve`
   - Acceder en: `http://localhost:4200`
