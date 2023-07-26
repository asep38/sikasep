// api.js
// export function fetchGameData() {
//   return fetch("game.json")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       return []; // Return a default value or an empty array in case of an error
//     });
// }

// getDataGame
export const getGame = async () => {
  try {
    const response = await fetch("/data/game.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch game data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

// getDataGameId
export const getDetailGame = async (id) => {
  try {
    const response = await fetch("/data/game.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch game data");
    }

    const data = await response.json();
    const gameDetail = data.find((game) => game.id === id);
    return gameDetail || null;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

// get data landing page
export const getLandingPage = async () => {
  try {
    const response = await fetch("/data/landingpage.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch landing page data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

// get landing page detail
export const getDetailLandingPage = async (id) => {
  try {
    const response = await fetch("/data/landingpage.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch landing page data");
    }

    const data = await response.json();
    const lpDetail = data.find((lp) => lp.id === id);
    return lpDetail || null;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
