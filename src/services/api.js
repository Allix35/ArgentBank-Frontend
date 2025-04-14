// User connexion - Get token JWT if correct ID
export async function loginUser(email, password) {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', // Json format request
      },
      body: JSON.stringify({ email, password }), // Sending email & password
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Erreur lors de la connexion')
    }

    return data.body.token // Get token if connexion succeed
  } catch (error) {
    console.error('Erreur login :', error)
    throw error
  }
}

// Get user profil with token
export async function getUserProfile(token) {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'GET', // Obtain profil
      headers: {
        Authorization: `Bearer ${token}`, // Token JWT is send to Authorization header
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Erreur lors de la récupération du profil')
    }

    return data.body // Get user data
  } catch (error) {
    console.error('Erreur récupération profil :', error)
    throw error
  }
}

// Update user name via PUT request
export async function updateUsername(token, newUserName) {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT', // To modify data
      headers: {
        Authorization: `Bearer ${token}`, 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName: newUserName }), // Get new user name
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Erreur lors de la mise à jour du username')
    }

    return data.body // Send new user name
  } catch (error) {
    console.error('Erreur updateUsername :', error)
    throw error
  }
}

// Get account transactions from specific account
export async function getTransactions(token, accountId) {
  
  void token
  void accountId
  await new Promise((resolve) => setTimeout(resolve, 300)) 

  return [
    {
      id: "tx1",
      date: "27/02/20",
      description: "Golden Sun Bakery",
      amount: 8.0,
      balance: 298.0,
      category: "Food",
      note: "lorem ipsum",
      type: "Electronic"
    }
  ] // Data return
}

// Get bank account when user connected
export async function getAccounts(token) {
  void token 
  await new Promise((resolve) => setTimeout(resolve, 300)) 

  return {
    body: [
      {
        id: "1",
        title: "Argent Bank Checking (x3448)",
        amount: 48098.43,
        description: "Available balance"
      },
      {
        id: "2",
        title: "Argent Bank Checking (x6712)",
        amount: 10928.42,
        description: "Available balance"
      },
      {
        id: "3",
        title: "Argent Bank Credit Card (x8349)",
        amount: 184.30,
        description: "Current balance"
      }
    ]
  } // Account list return
}
