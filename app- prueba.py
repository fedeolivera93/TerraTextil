import mysql.connector

class Catalogo:

    def __init__(self, host, user, password, database):
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
    )
        
        self.cursor = self.conn.cursor(dictionary=True)
        self.cursor.execute('''CREATE TABLE IF NOT EXISTS productos (
            codigo INT AUTO_INCREMENT PRIMARY KEY,
            descripcion VARCHAR(255) NOT NULL,
            cantidad INT NOT NULL,
            precio DECIMAL(10, 2) NOT NULL,
            imagen_url VARCHAR(255),
            proveedor INT(4))''')
        self.conn.commit()

    def agregar_producto(self, descripcion, cantidad, precio, imagen, proveedor):
        sql = "INSERT INTO productos (descripcion, cantidad, precio, imagen_url, proveedor) VALUES (%s, %s, %s, %s, %s)"
        valores = (descripcion, cantidad, precio, imagen, proveedor)
        
        self.cursor.execute(sql, valores)
        self.conn.commit()
        return self.cursor.lastrowid
    
    def consultar_producto(self, codigo):
        # Consultamos un producto a partir de su código
        self.cursor.execute(f"SELECT * FROM productos WHERE codigo = {codigo}")
        return self.cursor.fetchone()
    
    def mostrar_producto(self, codigo):
    # Mostramos los datos de un producto a partir de su código
        producto = self.consultar_producto(codigo)
        if producto:
            print("-" * 40)
            print(f"Código.....: {producto['codigo']}")
            print(f"Descripción: {producto['descripcion']}")
            print(f"Cantidad...: {producto['cantidad']}")
            print(f"Precio.....: {producto['precio']}")
            print(f"Imagen.....: {producto['imagen_url']}")
            print(f"Proveedor..: {producto['proveedor']}")
            print("-" * 40)
        else:
            print("Producto no encontrado.")

    def modificar_producto(self, codigo, nueva_descripcion, nueva_cantidad, nuevo_precio, nueva_imagen, nuevo_proveedor):
        sql = "UPDATE productos SET descripcion = %s, cantidad = %s, precio = %s, imagen_url = %s, proveedor = %s WHERE codigo = %s"
        valores = (nueva_descripcion, nueva_cantidad, nuevo_precio, nueva_imagen, nuevo_proveedor, codigo)
        self.cursor.execute(sql, valores)
        self.conn.commit()
        return self.cursor.rowcount > 0
    
    def listar_productos(self):
        self.cursor.execute("SELECT * FROM productos")
        productos = self.cursor.fetchall()
        return productos
    
    def eliminar_producto(self, codigo):
        # Eliminamos un producto de la tabla a partir de su código
        self.cursor.execute(f"DELETE FROM productos WHERE codigo = {codigo}")
        self.conn.commit()
        return self.cursor.rowcount > 0


#Programa principal

catalogo = Catalogo(host='localhost', user='root', password='',database='miapp')
# # # Agregamos productos a la tabla
# # # catalogo.agregar_producto('Camiseta de algodón orgánico', 20, 1500, 'camiseta_algodon.jpg', 201)
# # # catalogo.agregar_producto('Pantalones reciclados', 15, 3000, 'pantalones_reciclados.jpg', 202)
# # # catalogo.agregar_producto('Sudadera de material reciclado', 10, 3500, 'sudadera_reciclada.jpg', 203)
# # # catalogo.agregar_producto('Vestido de algodón orgánico', 8, 4000, 'vestido_algodon.jpg', 204)
# # catalogo.agregar_producto('Chaqueta de lana reciclada', 5, 5000, 'chaqueta_lana.jpg', 205)
# # catalogo.agregar_producto('Calcetines de bambú', 25, 800, 'calcetines_bambu.jpg', 206)
# catalogo.agregar_producto('Sombrero de algodón orgánico', 12, 1200, 'sombrero_algodon.jpg', 207)


# Consultamos un producto y lo mostramos

# cod_prod = int(input("Ingrese el código del producto: "))
# producto = catalogo.consultar_producto(cod_prod)
# if producto:
#         print(f"Producto encontrado: {producto['codigo']} - {producto['descripcion']}")
# else:
#         print(f'Producto {cod_prod} no encontrado.')


# productos = catalogo.listar_productos()
# for producto in productos:
#     print(producto)


# # Eliminamos un producto
# catalogo.eliminar_producto(6)
# productos = catalogo.listar_productos()
# for producto in productos:
#     print(producto)


