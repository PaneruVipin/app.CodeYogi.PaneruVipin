export const saveData=(key, data)=>{
 const saveStorage= localStorage.setItem(key, JSON.stringify(data));
  return saveStorage;
}
export const useSaveData = (key) =>{
  const useStorage = JSON.parse(localStorage.getItem(key));
  return useStorage;
}

/*localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");*/