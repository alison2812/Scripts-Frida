# Scripts-Frida
Aqui estão alguns scripts Frida que desenvolvi para auxiliar na análise e segurança de aplicativos. Embora não sejam profissionais, são ferramentas úteis para quem busca aprender e explorar.

# Scripts
**equals:**
Este script Frida permite interceptar e monitorar o método equals da classe java/lang/String.

**getFields:**
Inspecione os campos de uma classe específica em aplicativos Android. Ele lista os campos da classe, exibindo detalhes como nome do campo, tipo, modificadores, se é primitivo e acessibilidade.

**getMethods:**
Listar todos os métodos declarados de uma classe específica em um aplicativo Android. Ao utilizar este script, você pode identificar os métodos, seus modificadores, tipos de retorno, e outras informações importantes.

**libc:**
Este script Frida intercepta e monitora chamadas de sistema nativas da libc.so em Android, incluindo open, fopen, access, sys_openat, strstr, lstat, strcmp e snprintf.
