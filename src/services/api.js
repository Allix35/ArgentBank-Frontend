// ✅ Connexion utilisateur - récupère le token JWT si les identifiants sont corrects
export async function loginUser(email, password) {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST', // On envoie une requête POST pour se connecter
      headers: {
        'Content-Type': 'application/json', // Le corps de la requête est au format JSON
      },
      body: JSON.stringify({ email, password }), // On envoie l'email et le mot de passe
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Erreur lors de la connexion')
    }

    return data.body.token // ✅ Si la connexion est réussie, on récupère le token JWT
  } catch (error) {
    console.error('Erreur login :', error)
    throw error
  }
}

// ✅ Récupération du profil utilisateur avec le token JWT
export async function getUserProfile(token) {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'GET', // Requête GET pour obtenir le profil
      headers: {
        Authorization: `Bearer ${token}`, // ✅ Le token JWT est envoyé dans l'en-tête Authorization
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Erreur lors de la récupération du profil')
    }

    return data.body // ✅ On récupère les données utilisateur : { firstName, lastName, email, userName }
  } catch (error) {
    console.error('Erreur récupération profil :', error)
    throw error
  }
}

// ✅ Mise à jour du nom d'utilisateur (userName) via une requête PUT
export async function updateUsername(token, newUserName) {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT', // Requête PUT pour modifier des données
      headers: {
        Authorization: `Bearer ${token}`, // ✅ On sécurise la requête avec le token JWT
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName: newUserName }), // On envoie le nouveau userName
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Erreur lors de la mise à jour du username')
    }

    return data.body // ✅ Renvoie le nouvel userName modifié
  } catch (error) {
    console.error('Erreur updateUsername :', error)
    throw error
  }
}

// ✅ Récupération des transactions d’un compte spécifique (mocké)
export async function getTransactions(token, accountId) {
  // Token et ID du compte seraient utilisés dans un vrai back-end
  void token
  void accountId
  await new Promise((resolve) => setTimeout(resolve, 300)) // ⏱️ Simule un délai

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
  ] // ✅ Donnée fictive retournée
}

// ✅ Récupération des comptes bancaires de l’utilisateur connecté (mocké)
export async function getAccounts(token) {
  void token // Le token serait utilisé dans un vrai appel sécurisé
  await new Promise((resolve) => setTimeout(resolve, 300)) // ⏱️ Délai simulé

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
  } // ✅ Liste fictive de comptes retournée
}
