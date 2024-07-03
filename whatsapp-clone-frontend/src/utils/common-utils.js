


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

export const downloadMedia = (e,originalImage) =>{
  e.preventDefault();

  try {
    console.log(originalImage);
    fetch(originalImage)
    .then(resp => resp.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;

      const nameSplit = originalImage.split("/");
      const duplicateName = nameSplit.pop();
      a.download = "" + duplicateName + "";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);

    }).catch(error => console.log("Error while downloading the file",error));
  } catch (error) {
    console.log("Error while downloading the file",error);
  }
}




  