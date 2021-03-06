(function () {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBDlgfXXlRKDHE-VCSyzlmNUGsi9gVnWeY",
    authDomain: "test-exe91.firebaseapp.com",
    databaseURL: "https://test-exe91.firebaseio.com",
    projectId: "test-exe91",
    storageBucket: "test-exe91.appspot.com",
    messagingSenderId: "215667265942",
    appId: "1:215667265942:web:85c02359fbf7658e13cdb7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get elements
  const btnTest = document.getElementById('btnTest');

  async function GatheringResult() {
      try {
          //const result = await fetch(`https://us-central1-mineko-1.cloudfunctions.net/SearchAndGatheringPsc3YrsLottoPrizeListByDate?sdate=${sdate}`,{mode: 'cors'});
          const response = await fetch(`https://us-central1-test-exe91.cloudfunctions.net/test`);
          // const url = `https://us-central1-test-exe91.cloudfunctions.net/test`; // site that doesn’t send Access-Control-*
          // fetch(url)
          //     .then(response => response.text())
          //     .then(contents => console.log(contents))
          //     .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
          const result = await response.json();
          console.log(result);
      } catch (error) {
          console.log(error);
      }
  }

  function onClick() {
      GatheringResult();
  }

  // Add gathering event
  btnTest.addEventListener('click', onClick);
}());