'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react'; // Agregué useState para manejar el estado de las conversaciones
import { getConversations } from '../api/actions/messages';
import UserConversations from '../components/userMessages/UserConversations';
// import * as data from './../components/userMessages/user_1.json';

export default function Page() {
  const { data: session, status } = useSession();
  const [conversations, setConversations] = useState([]); // Agregué estado para almacenar las conversaciones
  useEffect(() => {
    const fetchConversations = async () => {
      if (session) {
        try {
          const convos = await getConversations(session);
          setConversations(convos);
          if (convos.length > 0)
            console.log('Conversations from page: ', convos);
        } catch (error) {
          console.error('Error fetching conversations:', error);
        }
      }
    };

    fetchConversations();
  }, [session]); // Modifiqué la dependencia del efecto para que se ejecute cuando 'session' cambie

  return (
    <div className="mt-[5.5rem]">
      <div className="h-screen w-screen bg-black flex">
        <div className="w-2/3 h-full bg-red-500 flex items-center justify-center">
          <h1 className="text-white">sector Matias</h1>
        </div>
        {session && session.user && (
          <UserConversations
            user={session.user}
            conversations={conversations}
          />
        )}
        {/* Pasé las conversaciones como props */}
      </div>
    </div>
  );
}
