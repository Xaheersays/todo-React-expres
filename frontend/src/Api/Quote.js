export const getQuote = async () => {
  console.log('getQuote')

    const url = 'https://type.fit/api/quotes';
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        return [];
      }
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      return [];
    }
  };
  