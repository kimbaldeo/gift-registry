module.exports = {
    getUser: async function() {
      const user = sessionStorage.getItem('user');

      if (user === 'undefined' || !user) {
        return null;
      } 
      else {
        return JSON.parse(user);
      }
    },
  
    getToken: async function() {
      return sessionStorage.getItem('token');
    },
  
    setUserSession: async function(user, token) {
      sessionStorage.setItem('user', JSON.stringify(user));
      sessionStorage.setItem('token', token);
    },
  
    resetUserSession: async function() {
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('token');
    }
}