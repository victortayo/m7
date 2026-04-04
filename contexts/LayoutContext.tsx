import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// You might want to define a more specific type for LayoutProps
interface LayoutProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  showBack?: boolean;
  showBottomNav?: boolean;
  
  sidebarContent?: {
    topicName: string;
    meta?: string[];
    sections: any[]; // Adjust this type based on your actual data structure
  };
  activeSection?: string;

  topicsList?: { id: string; title: string }[];
  currentSpecialtyId?: string;
}

const LayoutContext = createContext<{
    layoutProps: LayoutProps;
    setLayout: (props: LayoutProps) => void;
    clearLayout: () => void;
} | null>(null);

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [layoutProps, setLayoutProps] = useState<LayoutProps>({});
  const location = useLocation();

  const setLayout = useCallback((props: LayoutProps) => {
    setLayoutProps(props);
  }, []);

  const clearLayout = useCallback(() => {
    setLayoutProps({});
  }, []);
  
  useEffect(() => {
    // Clear layout props if we're not on a note page
    if (!location.pathname.startsWith('/note/')) {
      clearLayout();
    }
  }, [location.pathname, clearLayout]);

  return (
    <LayoutContext.Provider value={{ layoutProps, setLayout, clearLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error('useLayout must be used within a LayoutProvider');
    }
    return context;
};