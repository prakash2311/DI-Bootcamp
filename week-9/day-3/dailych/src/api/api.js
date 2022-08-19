
export const apiCall = (data) => 
fetch(data).then(res => res.json())