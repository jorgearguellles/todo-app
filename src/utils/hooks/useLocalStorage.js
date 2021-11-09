import { useState, useEffect } from "react";

function useLocalStorage( itemName, initialValue ){
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(
    () => {
      setTimeout( () => {
        try {
          // Persistencia de datos usando el LocalStorage. JSON.parse & JSON.stringify
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          };

          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      },2000);
    }
  );

  // Persistencia de datos vinculando la funcionalidad de marcar como hecho y eliminat todo
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error
  };
};

export { useLocalStorage }; 