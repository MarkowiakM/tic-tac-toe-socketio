import { createContext, useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

const SOCKET_SERVICE_URL = import.meta.env.VITE_SOCKET_SERVICE_URL;

interface SocketContextValue {
  socket?: Socket;
}

const SocketContext = createContext<SocketContextValue | undefined>({});

interface SocketProviderProps {
  children: React.ReactNode;
}

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const newSocket = io(SOCKET_SERVICE_URL as string);
    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.close();
      }
    };
  }, []);

  return socket ? ( <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>) : <></>
};

