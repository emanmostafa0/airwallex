class Api {
  static async requestInviteApi (data = {}) {
    const response = await fetch("https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }
}
export default Api;