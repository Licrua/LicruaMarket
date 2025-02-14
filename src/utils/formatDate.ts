const formatDate = (isoString: string): string => {
	const date = new Date(isoString);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяц с leading 0
	const day = String(date.getDate()).padStart(2, '0'); // День с leading 0
	const hours = String(date.getHours()).padStart(2, '0'); // Часы с leading 0
	const minutes = String(date.getMinutes()).padStart(2, '0'); // Минуты с leading 0
	const seconds = String(date.getSeconds()).padStart(2, '0'); // Секунды с leading 0
  
	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };
  
export default formatDate
  