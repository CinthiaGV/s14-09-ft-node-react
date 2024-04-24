import { Send } from 'react-feather';
import { sendMessage } from '../../../api/actions/messages';
import { useSession } from 'next-auth/react';
import { IChatFooter } from '../interfaces';
import { useState } from 'react';

export default function ChatAreaFooter({ conversation }: IChatFooter) {
  const { data: session, status } = useSession();
  const [messageText, setMessageText] = useState(''); // Estado para almacenar el texto del mensaje
  const handleSendMessage = async () => {
    try {
      // Llamar a la función sendMessage con la sesión y el texto del mensaje
      await sendMessage(session, messageText, conversation.id);
      console.log('Mensaje enviado');
      setMessageText(''); // Limpiar el texto del textarea después de enviar el mensaje
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  return (
    <div className="chat-area-footer flex items-center justify-between bg-white border-t border-gray-300 p-2">
      <textarea
        placeholder="Type something here..."
        className="flex-1 mr-2 border rounded-lg px-1 bg-gray text-white"
        rows={3}
        value={messageText} // Valor del textarea vinculado al estado
        onChange={(e) => setMessageText(e.target.value)} // Actualizar el estado con el valor del textarea
      />
      <button
        className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
        onClick={handleSendMessage} // Llamar a handleSendMessage cuando se hace clic en el botón
      >
        <Send size={20} />
      </button>
    </div>
  );
}
