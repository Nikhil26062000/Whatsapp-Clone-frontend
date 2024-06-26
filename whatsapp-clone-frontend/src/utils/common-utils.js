


// export const formatDate = (isoDateString) => {
//     const date = new Date(isoDateString); // Parse the ISO date string
//     let hours = date.getUTCHours(); // Get hours in UTC
//     let minutes = date.getUTCMinutes(); // Get minutes in UTC
    
//     // Pad single digits with a leading zero
//     hours = hours < 10 ? `0${hours}` : hours;
//     minutes = minutes < 10 ? `0${minutes}` : minutes;
    
//     return `${hours}:${minutes}`;
//   };

export const formatDate = (isoDateString) => {
    const date = new Date(isoDateString); // Parse the ISO date string
    
    // Convert to Indian Standard Time (IST)
    const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' };
    const formattedTime = date.toLocaleTimeString('en-IN', options);
    
    return formattedTime;
  };
  