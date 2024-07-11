Temas de hoy:
Websockets - Limitaciones del protocolo HTTP req,res (No funciona para mantener en tiempo real un intercambio de informacion, el cliente para mantenerse actualizado tiene que volver a enviar un req, para obtener el res desde el servidor y esto es muy limitante)

Los websockets utilizan protocolo de comunicacion TCP, el cual pertenece a la capa 4 del modelo OSI.
El Modelo OSI (Interconexión de Sistemas Abiertos) es un marco de referencia utilizado en redes informáticas para estandarizar y comprender cómo funcionan las comunicaciones entre diferentes sistemas. Fue creado por la Organización Internacional de Normalización (ISO) en la década de 1980.

Este modelo se divide en siete capas, cada una con funciones específicas. Estas capas permiten descomponer y gestionar el complicado proceso de comunicación digital de manera óptima. A continuación, te presento las siete capas del Modelo OSI:

Capa física (Physical Layer):
Se encarga de la transmisión física de los datos a través del medio de comunicación (cables, fibra óptica, ondas de radio, etc.).
Define aspectos como la topología, la señalización y la velocidad de transmisión.
Capa de enlace de datos (Data Link Layer):
Proporciona la detección y corrección de errores en la transmisión de datos.
Organiza los datos en tramas y controla el acceso al medio compartido.
Capa de red (Network Layer):
Se encarga del enrutamiento de los datos a través de la red.
Determina la mejor ruta para enviar los paquetes de datos.
Capa de transporte (Transport Layer):
Ofrece servicios de extremo a extremo para la comunicación entre aplicaciones.
Controla la segmentación, el flujo y la confiabilidad de los datos.
Capa de sesión (Session Layer):
Establece, mantiene y finaliza las conexiones entre aplicaciones.
Controla el diálogo y la sincronización entre los dispositivos.
Capa de presentación (Presentation Layer):
Se encarga de la representación y el formato de los datos.
Realiza la traducción, compresión y cifrado de la información.
Capa de aplicación (Application Layer):
Proporciona servicios directamente a las aplicaciones y usuarios finales.
Incluye protocolos como HTTP, FTP, SMTP y DNS.
En resumen, el Modelo OSI permite que las redes y sistemas se comuniquen eficientemente al dividir el proceso en estas siete capas. Aunque es un constructo teórico, su uso es fundamental para comprender las comunicaciones en el mundo de las telecomunicaciones.

En websockets la comunicacion entre emisor y receptor se mantiene siempre abierta hasta que alguno de estos explicitamente rompa la conexion. Es una comunicacion abierta bidireccional.
La ventaja que tiene websockets es que el servidor puede enviarle informacion al cliente sin que este se la solicite.
Se utiliza mas que nada en chats, servicios de delivery, paginas de remate,etc.

Que es TCP:
El Protocolo de Control de Transmisión (TCP) es un estándar fundamental en redes informáticas. Aquí tienes una descripción detallada:

Definición:
TCP es un protocolo de comunicación que garantiza la transmisión confiable de datos entre dispositivos a través de una red.
Funciona en la capa de transporte del modelo TCP/IP y se utiliza para establecer y mantener conexiones entre emisores y receptores durante la transferencia de datos.
Funcionamiento:
TCP descompone los datos en paquetes antes de enviarlos al destino.
Asegura que los paquetes lleguen correctamente y en el mismo orden.
Utiliza mecanismos de retransmisión y acuses de recibo para garantizar la fiabilidad.
Organiza el sistema de numeración de segmentos, gestiona paquetes perdidos y controla el flujo.
Importancia:
Es esencial para el funcionamiento de Internet y la comunicación entre programas y dispositivos.
Protocolos como HTTP, HTTPS, SSH y FTP se basan en conexiones TCP.
En resumen, TCP ofrece una transmisión fluida y confiable de datos a través de redes, asegurando que la información llegue correctamente a su destino

Permíteme aclarar la relación entre el Modelo OSI y el Modelo TCP/IP:

Modelo OSI:
El Modelo de Interconexión de Sistemas Abiertos (OSI) es un marco de referencia teórico que consta de siete capas. Cada capa tiene funciones específicas y se utiliza para comprender cómo funcionan las comunicaciones entre diferentes sistemas en una red.
Aunque el modelo OSI no se implementa directamente en la práctica, es útil para comprender los conceptos y las relaciones entre las capas.
Modelo TCP/IP:
El Modelo TCP/IP es un conjunto de protocolos prácticos que se utilizan ampliamente en Internet y en redes empresariales. A diferencia del modelo OSI, el modelo TCP/IP tiene cuatro capas principales:
Capa de aplicación
Capa de transporte
Capa de Internet (también conocida como capa de red)
Capa de acceso a la red (también conocida como capa de enlace de datos)
El modelo TCP/IP se basa en protocolos reales, como TCP, IP, UDP, HTTP, SMTP, etc.
Relación entre ambos modelos:
El modelo TCP/IP no se ajusta perfectamente al modelo OSI. Sin embargo, podemos relacionar las capas de ambos modelos de la siguiente manera:
La capa de aplicación del modelo TCP/IP abarca funciones de las capas de aplicación, presentación y sesión del modelo OSI.
La capa de transporte del modelo TCP/IP corresponde a la capa de transporte del modelo OSI.
La capa de Internet (o capa de red) del modelo TCP/IP se relaciona con la capa de red del modelo OSI.
La capa de acceso a la red (o capa de enlace de datos) del modelo TCP/IP se superpone a la capa de enlace de datos del modelo OSI.
En resumen, aunque el modelo TCP/IP no sigue exactamente las siete capas del modelo OSI, ambos modelos se utilizan para comprender y describir cómo se transmiten los datos en una red. El modelo OSI es más teórico, mientras que el modelo TCP/IP es más práctico y se utiliza ampliamente en la implementación real de redes y protocolos

Mas alla del protocolo de comunicacion que se utiliza por lo general se produce en primer momento un "handshake (apreton de manos)" para dejar en claro la vinculacion entre los dispocitivos (cliente/servidor por ejemplo o servidor/servidor)
