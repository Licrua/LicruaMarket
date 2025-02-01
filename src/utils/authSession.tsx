
export const startsession = (user: any) => {
	sessionStorage.setItem("email", user.email);
	sessionStorage.setItem("accessToken", user.accessToken);
  }
  
  export const getsession = () => {
	return {
	  email: sessionStorage.getItem("email"),
	  accessToken: sessionStorage.getItem("accessToken"),
	}
  }
  
  export const endsession = () => {
	sessionStorage.clear();
  }

  export const isLoggedIn = () => {
	return getsession().accessToken;
  }