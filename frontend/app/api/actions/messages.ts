import { endpoint } from "./endpoint";


export const getConversations = async (session: any) => {
  try {
    const response = await fetch(
      `${endpoint}/matches/myMatchesAccepted`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.user?.meta?.token}`, // Cambio en la clave 'authorization' a 'Authorization'
        }
      }
    );
    const info = await response.json(); // Agregué el await para esperar la respuesta JSON
    const conversations = await info.data
    console.log('Conversations from api: ', conversations);
    return conversations;
  } catch (error) {
    console.error('Error fetching conversations:', error); // Agregué la impresión del error para fines de depuración
    throw error; // Puedes manejar el error aquí o propagarlo hacia arriba
  }
};



/*const user = await res.json();
console.log('match', user);
if (user.error) {
  alert(user.error.message);
  setInputValue('');
} else {
  alert('Esperando que el usuario reciba su mensaje...');
  setInputValue('');
}*/