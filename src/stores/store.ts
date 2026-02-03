import { reactive, readonly } from 'vue'

// 1. Definimos la interfaz para el estado
interface EstadoGlobal {
  contador: number;
  usuario: string | null;
}

// 2. Creamos el estado reactivo (Privado en este archivo)
const estado = reactive<EstadoGlobal>({
  contador: 0,
  usuario: 'Invitado'
})

// 3. Creamos las funciones (Acciones) para modificar el estado
const incrementar = () => {
  estado.contador++
}

const login = (nombre: string) => {
  estado.usuario = nombre
}

// 4. Exportamos una función para usar el store
export const useStore = () => {
  return {
    // Exportamos el estado como readonly para que nadie haga: estado.contador = 99
    estado: readonly(estado), 
    incrementar,
    login
  }
}